# 🚀 denemeee

B-Labs ile oluşturulmuş modern frontend projesi.

## 📦 Başlangıç

### HTML Projesi

1. Tarayıcıda açın: `index.html`
2. Veya live server kullanın

VS Code'da:
- Live Server extension yükleyin
- `index.html`'e sağ tıklayın
- "Open with Live Server" seçin

Terminal'de:
```bash
npx serve .
```

### Geliştirme

Dosyaları düzenleyin ve tarayıcıda görün:
- `index.html` - HTML yapısı
- `css/main.css` - Özel stiller
- `css/blabs.css` - Utility classes (otomatik üretilir)
- `js/main.js` - JavaScript kodları
- `js/blabs.js` - B-Labs helper'ları

## 🎨 CSS Utilities

B-Labs utility class'ları kullanın:

```html
<div class="b-bg-primary b-text-white b-p-4 b-rounded-lg">
  Merhaba B-Labs!
</div>
```

Daha fazlası için: [B-Labs Documentation](https://github.com/yourusername/b-labs)

## ⚡ JavaScript Helpers

```javascript
B.ready(() => {
  // Menu toggle
  B.toggle('.menu-btn', '.menu');
  
  // Lazy load
  B.lazyImages();
  
  // Smooth scroll
  B.smoothScroll();
});
```

## 🔧 Özelleştirme

`blabs.config.js` dosyasını düzenleyerek renkleri, spacing'i ve typography'yi özelleştirin.

Değişiklikten sonra CSS'i yeniden oluşturmak için:
```bash
blabs init  # Mevcut ayarlarla
```

## 📖 Kaynaklar

- [B-Labs GitHub](https://github.com/yourusername/b-labs)
- [B-Labs Examples](https://github.com/yourusername/b-labs/blob/main/EXAMPLES.md)

---

**B-Labs ile oluşturuldu** 💙
