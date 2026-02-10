#!/usr/bin/env node

/**
 * B-Labs Simple Dev Server
 * Basit bir HTTP sunucusu ile live reload desteği
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

// Live reload script
const LIVE_RELOAD_SCRIPT = `
<script>
(function() {
  let lastCheck = Date.now();
  setInterval(() => {
    fetch('/__livereload')
      .then(res => res.json())
      .then(data => {
        if (data.reload && Date.now() - lastCheck > 1000) {
          location.reload();
          lastCheck = Date.now();
        }
      })
      .catch(() => {});
  }, 1000);
})();
</script>
`;

let lastModified = Date.now();

// Dosya değişikliklerini takip et
function watchFiles() {
  const watchDirs = ['css', 'js', '.'];
  watchDirs.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
      fs.watch(fullPath, { recursive: true }, (eventType, filename) => {
        if (filename && (filename.endsWith('.html') || filename.endsWith('.css') || filename.endsWith('.js'))) {
          console.log(`📝 ${filename} değişti, sayfa yenileniyor...`);
          lastModified = Date.now();
        }
      });
    }
  });
}

const server = http.createServer((req, res) => {
  // Live reload endpoint
  if (req.url === '/__livereload') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ reload: true, timestamp: lastModified }));
    return;
  }

  // Dosya yolu
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>404 - Bulunamadı</title>
            <style>
              body { font-family: system-ui; text-align: center; padding: 50px; }
              h1 { color: #666; }
            </style>
          </head>
          <body>
            <h1>404 - Sayfa Bulunamadı</h1>
            <p>Aradığınız dosya bulunamadı: ${req.url}</p>
          </body>
          </html>
        `);
      } else {
        res.writeHead(500);
        res.end('Sunucu hatası: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      
      // HTML dosyalarına live reload script ekle
      if (extname === '.html') {
        content = content.toString().replace('</body>', `${LIVE_RELOAD_SCRIPT}</body>`);
      }
      
      res.end(content, 'utf-8');
    }
  });
});

// Server'ı başlat
server.listen(PORT, () => {
  console.log('\n🚀 B-Labs Dev Server başlatıldı!\n');
  console.log(`   📍 URL: http://localhost:${PORT}`);
  console.log(`   📁 Dizin: ${process.cwd()}`);
  console.log(`   🔄 Live Reload: Aktif\n`);
  console.log('   Durdurmak için: Ctrl+C\n');
  
  watchFiles();
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n👋 Server kapatılıyor...\n');
  server.close(() => {
    process.exit(0);
  });
});
