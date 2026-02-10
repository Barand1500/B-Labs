# B-Labs ile Katkıda Bulunun

B-Labs'e katkıda bulunmayı düşündüğünüz için teşekkürler! 🎉

## 🚀 Başlangıç

### Fork ve Clone

```bash
# Repository'yi fork edin
# Sonra clone edin
git clone https://github.com/YOUR-USERNAME/b-labs.git
cd b-labs

# Bağımlılıkları yükleyin
npm install
```

### Development

```bash
# CLI'ı lokal olarak test edin
npm link

# Artık blabs komutunu kullanabilirsiniz
blabs init
```

## 📝 Katkı Süreci

### 1. Branch Oluşturun

```bash
git checkout -b feature/amazing-feature
```

### 2. Değişikliklerinizi Yapın

- Temiz ve okunabilir kod yazın
- Yorumları güncelleyin
- Örnekler ekleyin

### 3. Test Edin

```bash
# CLI'ı test edin
blabs init

# Farklı seçenekleri deneyin
# - HTML ve React projeleri
# - Utility ve Classic CSS
# - Assets ile/siz
```

### 4. Commit Edin

```bash
git add .
git commit -m "feat: amazing feature eklendi"
```

**Commit Mesaj Formatı:**
- `feat:` Yeni özellik
- `fix:` Bug düzeltmesi
- `docs:` Dokümantasyon
- `style:` Kod formatı
- `refactor:` Kod iyileştirme
- `test:` Test ekleme
- `chore:` Yapılandırma

### 5. Push ve PR

```bash
git push origin feature/amazing-feature
```

GitHub'da Pull Request açın.

## 🎯 Katkı Alanları

### 1. Yeni CSS Utilities

`src/generators/css-generator.js` dosyasına yeni utility'ler ekleyin:

```javascript
// Örnek: Yeni opacity utilities
for (const value of [0, 25, 50, 75, 100]) {
  css += `.b-opacity-${value} { opacity: ${value / 100}; }\n`;
}
```

### 2. Yeni JS Helpers

`templates/blabs.js` dosyasına yeni fonksiyonlar ekleyin:

```javascript
// Örnek: Clipboard kopyalama
copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}
```

### 3. Yeni Özellikler

- TypeScript desteği
- Vue.js desteği
- Component library
- Build optimizasyonları

### 4. Dokümantasyon

- README iyileştirmeleri
- Yeni örnekler
- Video tutoriallar
- Blog yazıları

### 5. Bug Fixes

Issues'da bulunan bug'ları düzeltin.

## 📋 Code Style

### JavaScript

```javascript
// ✅ İyi
function generateCSS(config) {
  const colors = config.colors || {};
  return Object.entries(colors).map(([name, value]) => {
    return `.b-bg-${name} { background: ${value}; }`;
  }).join('\n');
}

// ❌ Kötü
function generateCSS(config){
    let colors=config.colors||{}
    return Object.entries(colors).map(([name,value])=>{
        return `.b-bg-${name} { background: ${value}; }`
    }).join('\n')
}
```

### Commit Messages

```bash
# ✅ İyi
git commit -m "feat: lazy loading için intersection observer desteği"
git commit -m "fix: toggle fonksiyonunda multiple element bug'ı"

# ❌ Kötü
git commit -m "update"
git commit -m "fixes"
```

## 🧪 Test Checklist

Değişikliklerinizi göndermeden önce:

- [ ] CLI çalışıyor mu?
- [ ] HTML projesi oluşturuluyor mu?
- [ ] React projesi oluşturuluyor mu?
- [ ] CSS utilities doğru üretiliyor mu?
- [ ] JS helper'lar çalışıyor mu?
- [ ] Dokümantasyon güncel mi?
- [ ] Örnekler çalışıyor mu?

## 💡 Öneriler

### Öneri Formatı

GitHub Issues'da öneri açarken:

**Başlık:** `[Feature Request] Yeni özellik adı`

**İçerik:**
```markdown
## Sorun
Şu anda X yapamıyoruz...

## Önerilen Çözüm
Y özelliği eklenirse...

## Alternatifler
Z şeklinde de yapılabilir...

## Örnek Kullanım
\```javascript
B.newFeature(...)
\```
```

## 🐛 Bug Raporlama

### Bug Report Formatı

**Başlık:** `[Bug] Kısa açıklama`

**İçerik:**
```markdown
## Açıklama
Bug'ın kısa açıklaması

## Adımlar
1. X yap
2. Y'ye tıkla
3. Z oluyor

## Beklenen Davranış
Olması gereken...

## Gerçek Davranış
Olan...

## Ortam
- OS: Windows 10
- Node: v18.0.0
- B-Labs: v1.0.0

## Ekran Görüntüsü
(Varsa)
```

## 🎓 Kaynaklar

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Semantic Versioning](https://semver.org/)

## 📞 İletişim

- GitHub Issues kullanın
- Discussions'da tartışın
- Email: [email gerekirse eklenecek]

## 📜 Lisans

Katkıda bulunarak, kodunuzun MIT lisansı altında paylaşılmasını kabul ediyorsunuz.

---

**Teşekkürler! Her katkı B-Labs'i daha iyi yapar! 🚀**
