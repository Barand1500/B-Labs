# ⚡ B-Labs Quick Start

5 dakikada B-Labs ile başlayın!

## 1️⃣ Proje Oluştur (30 saniye)

```bash
npx blabs init
```

**Sorular:**
- Proje adı: `my-awesome-project`
- Proje türü: `html` (veya `react`)
- CSS: `utility` (önerilen)
- Assets: `Yes`

## 2️⃣ Projeyi Aç (5 saniye)

```bash
cd my-awesome-project
```

## 3️⃣ Geliştirmeye Başla

### HTML Projesi için:

VS Code'da `index.html` dosyasını Live Server ile açın veya:

```bash
npx serve .
```

Tarayıcıda: `http://localhost:3000`

### React Projesi için:

```bash
blabs run
```

Tarayıcıda: `http://localhost:5173`

## 4️⃣ İlk Değişiklik

### HTML'i Düzenle

[index.html](index.html) açın ve değiştirin:

```html
<h1 class="b-text-4xl b-font-bold b-text-primary b-mb-4">
  🚀 Merhaba B-Labs!
</h1>
```

### JavaScript Ekle

[js/main.js](js/main.js) açın:

```javascript
B.ready(() => {
  console.log('B-Labs hazır! 🚀');
  
  // Toggle örneği
  B.toggle('.menu-btn', '.menu');
});
```

## 5️⃣ Utility Class'ları Kullan

### Buton Oluştur

```html
<button class="b-bg-primary b-text-white b-px-6 b-py-3 b-rounded-lg b-transition b-hover-opacity">
  Click Me
</button>
```

### Card Oluştur

```html
<div class="b-bg-white b-rounded-lg b-shadow-md b-p-6">
  <h3 class="b-text-xl b-font-bold b-mb-2">Card Title</h3>
  <p class="b-text-dark">Card content here...</p>
</div>
```

### Flexbox Layout

```html
<div class="b-flex b-items-center b-justify-between b-gap-4">
  <div>Left</div>
  <div>Right</div>
</div>
```

## 6️⃣ JavaScript Helper'ları Kullan

### Toggle Menu

```javascript
B.toggle('.menu-btn', '.menu');
```

```html
<button class="menu-btn">Menu</button>
<nav class="menu b-hidden">...</nav>
```

### Lazy Load Images

```javascript
B.lazyImages();
```

```html
<img data-src="image.jpg" alt="Image">
```

### Form Validation

```javascript
B.formValidation('#myForm', {
  onSuccess: (data) => console.log('Valid!', data),
  onError: (errors) => console.log('Errors:', errors)
});
```

```html
<form id="myForm">
  <input type="email" name="email" required>
  <button type="submit">Send</button>
</form>
```

## 7️⃣ Renkleri Özelleştir

[blabs.config.js](blabs.config.js) açın:

```javascript
export default {
  colors: {
    primary: '#4f46e5',  // Değiştir
    brand: '#ff6b6b',    // Yeni ekle
  }
}
```

CSS'i yeniden oluştur:

```bash
blabs init  # Mevcut klasörde
```

Artık kullanabilirsiniz:

```html
<div class="b-bg-brand b-text-white">
  Custom color!
</div>
```

## 8️⃣ Production'a Hazırla

### HTML Projesi

Dosyaları doğrudan upload edin:
- `index.html`
- `css/`
- `js/`
- `images/`

### React Projesi

```bash
blabs build
```

`dist/` klasörünü deploy edin.

---

## 📚 Sonraki Adımlar

- ✅ [README.md](README.md) - Tam dokümantasyon
- ✅ [EXAMPLES.md](EXAMPLES.md) - Daha fazla örnek
- ✅ CSS utilities listesi
- ✅ JavaScript API referansı

---

## 🎯 Hızlı Referans

### En Çok Kullanılan Classes

```css
/* Colors */
b-bg-primary, b-text-white, b-border-primary

/* Spacing */
b-p-4, b-m-4, b-px-6, b-py-3, b-mb-4

/* Typography */
b-text-xl, b-font-bold, b-text-center

/* Layout */
b-flex, b-grid, b-items-center, b-justify-between

/* Visual */
b-rounded-lg, b-shadow-md, b-border
```

### En Çok Kullanılan JS Functions

```javascript
B.ready(() => ...)
B.toggle(trigger, target)
B.lazyImages()
B.smoothScroll()
B.$(selector)
B.debounce(fn, 300)
```

---

## 💡 Pro Tips

1. **Responsive:** Inline style kullanarak responsive grid:
   ```html
   <div class="b-grid b-gap-4" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))">
   ```

2. **Dark Mode:** Config'e dark mode renkleri ekleyin

3. **Custom Spacing:** Config'de yeni spacing değerleri tanımlayın

4. **Performance:** `B.debounce()` kullanarak API çağrılarını optimize edin

---

**Başarılar! 🚀**

Sorularınız için: [GitHub Issues](https://github.com/yourusername/b-labs/issues)
