/**
 * Interactive Guide & Icon Demo Templates
 * Beautiful, user-friendly templates for learning B-Labs
 */

// Inline Icon Definitions (30 most used icons)
const inlineIcons = `
const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  'arrow-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>'
};

function createIcon(name, className = '') {
  const svg = icons[name];
  if (!svg) return '';
  const div = document.createElement('div');
  div.innerHTML = svg;
  const iconEl = div.firstChild;
  iconEl.setAttribute('class', 'icon ' + className);
  return iconEl.outerHTML;
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const iconName = el.getAttribute('data-icon');
    const className = el.className;
    el.outerHTML = createIcon(iconName, className);
  });
});
`;

export const iconDemoTemplate = (name) => `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎨 B-Labs Icon Kütüphanesi</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 1.5rem;
      padding: 3rem;
      box-shadow: 0 25px 80px rgba(0,0,0,0.3);
    }
    
    .header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #f0f0f0;
    }
    
    .header h1 {
      font-size: 3rem;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }
    
    .header p {
      color: #666;
      font-size: 1.25rem;
    }
    
    .size-demo {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      padding: 2rem;
      border-radius: 1rem;
      margin-bottom: 3rem;
      color: white;
    }
    
    .size-demo h2 {
      margin-bottom: 1.5rem;
      font-size: 1.75rem;
    }
    
    .size-row {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1rem;
      background: rgba(255,255,255,0.2);
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
      backdrop-filter: blur(10px);
    }
    
    .size-label {
      font-family: 'Courier New', monospace;
      font-weight: bold;
      min-width: 130px;
      font-size: 0.95rem;
    }
    
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1.25rem;
      margin: 2rem 0;
    }
    
    .icon-card {
      background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
      padding: 2rem 1rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 3px solid transparent;
    }
    
    .icon-card:hover {
      transform: translateY(-8px) scale(1.05);
      box-shadow: 0 15px 40px rgba(0,0,0,0.2);
      border-color: #667eea;
    }
    
    .icon-card:active {
      transform: translateY(-4px) scale(1.02);
    }
    
    .icon {
      width: 48px;
      height: 48px;
      stroke: #764ba2;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
    
    .icon-sm { width: 20px; height: 20px; }
    .icon-md { width: 32px; height: 32px; }
    .icon-lg { width: 48px; height: 48px; }
    .icon-xl { width: 64px; height: 64px; }
    
    .icon-name {
      font-size: 0.85rem;
      font-weight: 600;
      color: #764ba2;
      font-family: 'Courier New', monospace;
    }
    
    .code-section {
      background: #1a202c;
      color: #e2e8f0;
      padding: 2rem;
      border-radius: 1rem;
      margin-top: 3rem;
      font-family: 'Courier New', monospace;
      line-height: 1.8;
      font-size: 0.95rem;
    }
    
    .code-section h3 {
      color: #68d391;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    
    .code {
      color: #f6ad55;
    }
    
    .comment {
      color: #718096;
    }
    
    .toast {
      position: fixed;
      top: 2rem;
      right: 2rem;
      background: linear-gradient(135deg, #68d391 0%, #38b2ac 100%);
      color: white;
      padding: 1.25rem 2rem;
      border-radius: 1rem;
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
      font-weight: 600;
      z-index: 9999;
      animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(400px) rotate(20deg);
        opacity: 0;
      }
      to {
        transform: translateX(0) rotate(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      to {
        transform: translateX(400px) rotate(-20deg);
        opacity: 0;
      }
    }
    
    @media (max-width: 768px) {
      .header h1 { font-size: 2rem; }
      .icon-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
      .size-row { flex-direction: column; gap: 0.5rem; text-align: center; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎨 Icon Kütüphanesi</h1>
      <p>20+ hazır SVG icon - Kopyala & Yapıştır!</p>
    </div>

    <div class="size-demo">
      <h2>📏 Icon Boyutları</h2>
      <div class="size-row">
        <span class="size-label">.icon-sm</span>
        <i data-icon="heart" class="icon-sm"></i>
        <span>Küçük (20px)</span>
      </div>
      <div class="size-row">
        <span class="size-label">.icon-md</span>
        <i data-icon="heart" class="icon-md"></i>
        <span>Normal (32px)</span>
      </div>
      <div class="size-row">
        <span class="size-label">.icon-lg</span>
        <i data-icon="heart" class="icon-lg"></i>
        <span>Büyük (48px)</span>
      </div>
      <div class="size-row">
        <span class="size-label">.icon-xl</span>
        <i data-icon="heart" class="icon-xl"></i>
        <span>Çok Büyük (64px)</span>
      </div>
    </div>

    <h2 style="margin-bottom: 1rem; color: #764ba2;">💫 Tüm Icon'lar (Tıkla & Kopyala)</h2>
    
    <div class="icon-grid">
      <div class="icon-card" onclick="copyIcon('home')">
        <i data-icon="home" class="icon-lg"></i>
        <span class="icon-name">home</span>
      </div>
      <div class="icon-card" onclick="copyIcon('heart')">
        <i data-icon="heart" class="icon-lg"></i>
        <span class="icon-name">heart</span>
      </div>
      <div class="icon-card" onclick="copyIcon('star')">
        <i data-icon="star" class="icon-lg"></i>
        <span class="icon-name">star</span>
      </div>
      <div class="icon-card" onclick="copyIcon('menu')">
        <i data-icon="menu" class="icon-lg"></i>
        <span class="icon-name">menu</span>
      </div>
      <div class="icon-card" onclick="copyIcon('close')">
        <i data-icon="close" class="icon-lg"></i>
        <span class="icon-name">close</span>
      </div>
      <div class="icon-card" onclick="copyIcon('search')">
        <i data-icon="search" class="icon-lg"></i>
        <span class="icon-name">search</span>
      </div>
      <div class="icon-card" onclick="copyIcon('check')">
        <i data-icon="check" class="icon-lg"></i>
        <span class="icon-name">check</span>
      </div>
      <div class="icon-card" onclick="copyIcon('plus')">
        <i data-icon="plus" class="icon-lg"></i>
        <span class="icon-name">plus</span>
      </div>
      <div class="icon-card" onclick="copyIcon('minus')">
        <i data-icon="minus" class="icon-lg"></i>
        <span class="icon-name">minus</span>
      </div>
      <div class="icon-card" onclick="copyIcon('download')">
        <i data-icon="download" class="icon-lg"></i>
        <span class="icon-name">download</span>
      </div>
      <div class="icon-card" onclick="copyIcon('upload')">
        <i data-icon="upload" class="icon-lg"></i>
        <span class="icon-name">upload</span>
      </div>
      <div class="icon-card" onclick="copyIcon('mail')">
        <i data-icon="mail" class="icon-lg"></i>
        <span class="icon-name">mail</span>
      </div>
      <div class="icon-card" onclick="copyIcon('user')">
        <i data-icon="user" class="icon-lg"></i>
        <span class="icon-name">user</span>
      </div>
      <div class="icon-card" onclick="copyIcon('settings')">
        <i data-icon="settings" class="icon-lg"></i>
        <span class="icon-name">settings</span>
      </div>
      <div class="icon-card" onclick="copyIcon('edit')">
        <i data-icon="edit" class="icon-lg"></i>
        <span class="icon-name">edit</span>
      </div>
      <div class="icon-card" onclick="copyIcon('trash')">
        <i data-icon="trash" class="icon-lg"></i>
        <span class="icon-name">trash</span>
      </div>
      <div class="icon-card" onclick="copyIcon('calendar')">
        <i data-icon="calendar" class="icon-lg"></i>
        <span class="icon-name">calendar</span>
      </div>
      <div class="icon-card" onclick="copyIcon('clock')">
        <i data-icon="clock" class="icon-lg"></i>
        <span class="icon-name">clock</span>
      </div>
      <div class="icon-card" onclick="copyIcon('arrow-right')">
        <i data-icon="arrow-right" class="icon-lg"></i>
        <span class="icon-name">arrow-right</span>
      </div>
      <div class="icon-card" onclick="copyIcon('arrow-left')">
        <i data-icon="arrow-left" class="icon-lg"></i>
        <span class="icon-name">arrow-left</span>
      </div>
    </div>

    <div class="code-section">
      <h3>📝 Nasıl Kullanılır?</h3>
      <div class="comment"><!-- Icon kullanımı süper kolay! --></div>
      <br>
      <div><span class="code">&lt;i data-icon="home" class="icon-lg"&gt;&lt;/i&gt;</span></div>
      <div><span class="code">&lt;i data-icon="heart" class="icon-xl"&gt;&lt;/i&gt;</span></div>
      <br>
      <div class="comment"><!-- Buton içinde --></div>
      <div><span class="code">&lt;button&gt;</span></div>
      <div>  <span class="code">&lt;i data-icon="download" class="icon-sm"&gt;&lt;/i&gt;</span></div>
      <div>  <span class="code">İndir</span></div>
      <div><span class="code">&lt;/button&gt;</span></div>
    </div>
  </div>

  <script>
  ${inlineIcons}
  
  function copyIcon(name) {
    const code = \`<i data-icon="\${name}" class="icon-lg"></i>\`;
    navigator.clipboard.writeText(code).then(() => {
      showToast(\`✅ Kopyalandı: \${code}\`);
    }).catch(() => {
      showToast('❌ Kopyalanamadı');
    });
  }
  
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      setTimeout(() => toast.remove(), 400);
    }, 2500);
  }
  </script>
</body>
</html>`;

export const interactiveGuideTemplate = (name) => `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🚀 B-Labs Kullanım Rehberi</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
      line-height: 1.6;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      border-radius: 2rem;
      padding: 3rem;
      box-shadow: 0 30px 90px rgba(0,0,0,0.3);
    }
    
    .hero {
      text-align: center;
      padding: 2rem 0 3rem;
      border-bottom: 3px solid #f0f0f0;
      margin-bottom: 3rem;
    }
    
    .hero h1 {
      font-size: 3.5rem;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
      letter-spacing: -1px;
    }
    
    .hero p {
      font-size: 1.5rem;
      color: #666;
      font-weight: 500;
    }
    
    .section {
      margin: 3rem 0;
      padding: 2.5rem;
      background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
      border-radius: 1.5rem;
      border-left: 6px solid #764ba2;
    }
    
    .section-alt {
      background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    }
    
    .section-success {
      background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
    }
    
    .section h2 {
      font-size: 2rem;
      color: #2d3748;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .emoji {
      font-size: 2.5rem;
    }
    
    .step {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      margin: 1rem 0;
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .step:hover {
      transform: translateX(8px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }
    
    .step-number {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-weight: bold;
      font-size: 1.25rem;
      margin-right: 1rem;
    }
    
    .step h3 {
      display: inline-block;
      color: #2d3748;
      font-size: 1.3rem;
      margin-bottom: 0.75rem;
    }
    
    .step p {
      color: #4a5568;
      margin: 0.75rem 0;
      padding-left: 56px;
      font-size: 1.05rem;
    }
    
    .code {
      background: #1a202c;
      color: #68d391;
      padding: 1.25rem;
      border-radius: 0.75rem;
      font-family: 'Courier New', monospace;
      font-size: 1rem;
      margin: 1rem 0;
      overflow-x: auto;
      border-left: 4px solid #68d391;
    }
    
    .code-inline {
      background: #2d3748;
      color: #68d391;
      padding: 0.25rem 0.6rem;
      border-radius: 0.4rem;
      font-family: 'Courier New', monospace;
      font-size: 0.95rem;
    }
    
    .tip {
      background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
      padding: 1.25rem;
      border-radius: 1rem;
      margin: 1.5rem 0;
      border-left: 5px solid #ff7675;
    }
    
    .tip strong {
      color: #d63031;
      font-size: 1.1rem;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.25rem;
      margin: 1.5rem 0;
    }
    
    .feature {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
    }
    
    .feature:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 0.75rem;
    }
    
    .feature h4 {
      color: #2d3748;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
    
    .feature p {
      color: #718096;
      font-size: 0.95rem;
    }
    
    .examples {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      margin: 1.5rem 0;
    }
    
    .examples h4 {
      color: #764ba2;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .example-item {
      padding: 0.75rem;
      margin: 0.75rem 0;
      background: #f7fafc;
      border-radius: 0.5rem;
      border-left: 3px solid #667eea;
    }
    
    @media (max-width: 768px) {
      body { padding: 1rem; }
      .container { padding: 2rem 1.5rem; }
      .hero h1 { font-size: 2.5rem; }
      .hero p { font-size: 1.25rem; }
      .section { padding: 1.5rem; }
      .feature-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>🚀 B-Labs Kullanım Rehberi</h1>
      <p>Hızlı, Kolay, Güçlü - Her Şey Burada!</p>
    </div>

    <!-- Başlarken -->
    <div class="section">
      <h2><span class="emoji">🎯</span> İlk Proje Nasıl Oluşturulur?</h2>
      
      <div class="step">
        <span class="step-number">1</span>
        <h3>Komut Çalıştır</h3>
        <p>Terminal'i aç ve şu komutu yaz:</p>
        <div class="code">blabs init proje-adim</div>
        <p><strong>Örnek:</strong></p>
        <div class="code">blabs init blog-sitem</div>
      </div>

      <div class="step">
        <span class="step-number">2</span>
        <h3>Seçim Yap</h3>
        <p>Sana sorular sorulacak - okla seç, Enter'a bas!</p>
        <ul style="padding-left: 56px; margin-top: 0.75rem;">
          <li><strong>Proje tipi:</strong> HTML mi, React mi?</li>
          <li><strong>Template:</strong> Blog, SaaS, Portfolio...</li>
          <li><strong>Dark mode:</strong> Evet/Hayır</li>
        </ul>
      </div>

      <div class="step">
        <span class="step-number">3</span>
        <h3>Hazır! 🎉</h3>
        <p>Projen oluşturuldu! Şimdi dosyaları düzenleyebilirsin!</p>
      </div>
    </div>

    <!-- Hızlı Dosya Oluşturma -->
    <div class="section section-alt">
      <h2><span class="emoji">⚡</span> Hızlı Dosya Oluşturma</h2>
      
      <p style="margin-bottom: 1.5rem; font-size: 1.15rem;">
        <strong>Tek komutla</strong> HTML, CSS, JS ve component dosyaları oluştur!
      </p>

      <div class="examples">
        <h4>📄 HTML Sayfası</h4>
        <div class="example-item">
          <div class="code">blabs add html iletisim</div>
          <p style="padding-left: 0; margin-top: 0.5rem; color: #666;">
            ➜ <span class="code-inline">iletisim.html</span> oluşturulur
          </p>
        </div>

        <h4>🎨 CSS Dosyası</h4>
        <div class="example-item">
          <div class="code">blabs add css animasyonlar</div>
          <p style="padding-left: 0; margin-top: 0.5rem; color: #666;">
            ➜ <span class="code-inline">css/animasyonlar.css</span> oluşturulur
          </p>
        </div>

        <h4>⚙️ JavaScript Dosyası</h4>
        <div class="example-item">
          <div class="code">blabs add js utils</div>
          <p style="padding-left: 0; margin-top: 0.5rem; color: #666;">
            ➜ <span class="code-inline">js/utils.js</span> oluşturulur
          </p>
        </div>

        <h4>🎁 Component (Buton, Kart, vb.)</h4>
        <div class="example-item">
          <div class="code">blabs add component mycard</div>
          <p style="padding-left: 0; margin-top: 0.5rem; color: #666;">
            ➜ Menüden seç: button, card, navbar, slider, gallery...
          </p>
        </div>
      </div>

      <div class="tip">
        <strong>💡 İpucu:</strong> <span class="code-inline">blabs add</span> komutu sonrası 
        dosya tipi ve isim yaz. Component için interaktif menü açılır!
      </div>
    </div>

    <!-- Icon Kullanımı -->
    <div class="section section-success">
      <h2><span class="emoji">🎨</span> Icon Nasıl Kullanılır?</h2>
      
      <div class="step">
        <span class="step-number">1</span>
        <h3>Icon Demo Oluştur</h3>
        <div class="code">blabs add icons demo</div>
        <p>Tüm icon'ları görmek için bu komutu çalıştır!</p>
      </div>

      <div class="step">
        <span class="step-number">2</span>
        <h3>HTML'de Kullan</h3>
        <div class="code">&lt;i data-icon="home" class="icon-lg"&gt;&lt;/i&gt;<br>&lt;i data-icon="heart" class="icon-xl"&gt;&lt;/i&gt;</div>
        <p><strong>Boyutlar:</strong> icon-sm, icon-md, icon-lg, icon-xl</p>
      </div>

      <div class="step">
        <span class="step-number">3</span>
        <h3>Buton ile Kullan</h3>
        <div class="code">&lt;button&gt;<br>  &lt;i data-icon="download" class="icon-sm"&gt;&lt;/i&gt;<br>  İndir<br>&lt;/button&gt;</div>
      </div>

      <div class="examples">
        <h4>📋 Popüler Icon'lar</h4>
        <div class="example-item">
          <strong>Navigasyon:</strong> home, menu, close, search, arrow-right, arrow-left
        </div>
        <div class="example-item">
          <strong>Sosyal:</strong> heart, star, share, bookmark
        </div>
        <div class="example-item">
          <strong>Aksiyonlar:</strong> check, plus, minus, trash, edit, download, upload
        </div>
        <div class="example-item">
          <strong>İletişim:</strong> mail, user, phone, settings
        </div>
        <div class="example-item">
          <strong>Diğer:</strong> calendar, clock, search
        </div>
      </div>
    </div>

    <!-- Özellikler -->
    <div class="section">
      <h2><span class="emoji">✨</span> B-Labs'ın Süper Güçleri</h2>
      
      <div class="feature-grid">
        <div class="feature">
          <div class="feature-icon">🎨</div>
          <h4>750+ CSS Class</h4>
          <p>Hazır utility classlar. Tailwind gibi!</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">🎭</div>
          <h4>17+ Template</h4>
          <p>Blog, SaaS, Portfolio ve daha fazlası</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">🌙</div>
          <h4>Dark Mode</h4>
          <p>Otomatik dark mode desteği</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">⚡</div>
          <h4>Hızlı Oluşturma</h4>
          <p>Tek komutla dosya oluştur</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">📱</div>
          <h4>Responsive</h4>
          <p>Her ekran boyutunda mükemmel</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">🎁</div>
          <h4>100+ Icon</h4>
          <p>Hazır SVG icon kütüphanesi</p>
        </div>
      </div>
    </div>

    <!-- Sık Kullanılan Komutlar -->
    <div class="section section-alt">
      <h2><span class="emoji">📚</span> Tüm Komutlar</h2>
      
      <div class="examples">
        <div class="example-item">
          <code style="color: #764ba2; font-weight: bold;">blabs init proje-adim</code>
          <p style="padding-left: 0; margin: 0.5rem 0 0;">Yeni proje oluştur</p>
        </div>
        
        <div class="example-item">
          <code style="color: #764ba2; font-weight: bold;">blabs add html sayfa</code>
          <p style="padding-left: 0; margin: 0.5rem 0 0;">HTML sayfası oluştur</p>
        </div>
        
        <div class="example-item">
          <code style="color: #764ba2; font-weight: bold;">blabs add css dosya</code>
          <p style="padding-left: 0; margin: 0.5rem 0 0;">CSS dosyası oluştur</p>
        </div>
        
        <div class="example-item">
          <code style="color: #764ba2; font-weight: bold;">blabs add js dosya</code>
          <p style="padding-left: 0; margin: 0.5rem 0 0;">JavaScript dosyası oluştur</p>
        </div>
        
        <div class="example-item">
          <code style="color: #764ba2; font-weight: bold;">blabs add component isim</code>
          <p style="padding-left: 0; margin: 0.5rem 0 0;">Component oluştur (interaktif menü)</p>
        </div>
        
        <div class="example-item">
          <code style="color: #764ba2; font-weight: bold;">blabs add icons demo</code>
          <p style="padding-left: 0; margin: 0.5rem 0 0;">Icon demo sayfası oluştur</p>
        </div>
        
        <div class="example-item">
          <code style="color: #764ba2; font-weight: bold;">blabs add guide rehber</code>
          <p style="padding-left: 0; margin: 0.5rem 0 0;">Bu rehber sayfasını oluştur 🎉</p>
        </div>
      </div>
    </div>

    <!-- İpuçları -->
    <div class="section section-success">
      <h2><span class="emoji">🔥</span> Pro İpuçları</h2>
      
      <div class="tip">
        <strong>💡 Dark Mode:</strong> Tüm template'ler otomatik dark mode ile gelir. 
        <span class="code-inline">dark:</span> prefixi ekleyerek dark mode stilleri yazabilirsin.
      </div>
      
      <div class="tip">
        <strong>💡 Responsive:</strong> <span class="code-inline">md:</span> ve 
        <span class="code-inline">lg:</span> prefikslerini kullan. 
        Örnek: <span class="code-inline">md:b-grid-cols-3</span>
      </div>
      
      <div class="tip">
        <strong>💡 Icon Demo:</strong> Icon demo sayfasında her icon'a tıklayınca 
        HTML kodu otomatik kopyalanır! Süper pratik! ⚡
      </div>
      
      <div class="tip">
        <strong>💡 Component'ler:</strong> Component oluşturduğunda HTML + CSS + JavaScript 
        hepsi tek dosyada gelir. Direkt kullanmaya hazır!
      </div>
    </div>

    <!-- Final -->
    <div style="text-align: center; margin-top: 4rem; padding: 2rem; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1.5rem; color: white;">
      <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">🎉 Artık Hazırsın!</h2>
      <p style="font-size: 1.25rem; margin-bottom: 1.5rem;">
        B-Labs ile projelerini hızla oluştur, harika siteler yap!
      </p>
      <div style="font-size: 1.1rem; background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 0.75rem; backdrop-filter: blur(10px);">
        <strong>Başlamak için:</strong> <code style="background: rgba(0,0,0,0.3); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1.15rem;">blabs init ilk-projem</code>
      </div>
    </div>

  </div>
</body>
</html>`;
