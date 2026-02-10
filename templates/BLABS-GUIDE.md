# 🎨 B-Labs Hızlı Başlangıç Rehberi

Bu dosya, projenizde B-Labs'ın tüm özelliklerini gösterir. İstemezseniz silebilirsiniz!

---

## 📦 Proje Yapısı

```
{{PROJECT_NAME}}/
├── index.html          # Ana HTML dosyanız
├── css/
│   ├── blabs.css      # B-Labs CSS framework (640+ utility class)
│   └── main.css       # Özel stil dosyanız
├── js/
│   ├── blabs.js       # B-Labs JavaScript library
│   └── main.js        # Özel JavaScript dosyanız
└── BLABS-GUIDE.md     # Bu dosya (silebilirsiniz)
```

---

## 🚀 Hızlı Kısayollar

### Renk Sınıfları
```html
<!-- Metin Renkleri -->
<div class="b-text-primary">Primary renk</div>
<div class="b-text-dark dark:b-text-light">Otomatik dark mode</div>
<div class="b-text-gray-600">Gri tonları (100-900)</div>

<!-- Arka Plan Renkleri -->
<div class="b-bg-primary">Primary arka plan</div>
<div class="b-bg-white dark:b-bg-dark">Dark mode uyumlu</div>
<div class="b-bg-gradient-to-r">Gradient (to-r, to-l, to-t, to-b)</div>
```

### Spacing (Boşluklar)
```html
<!-- Padding -->
<div class="b-p-4">Tüm yönlere padding</div>
<div class="b-px-6 b-py-3">Yatay ve dikey</div>
<div class="b-pt-8 b-pb-4">Üst ve alt</div>

<!-- Margin -->
<div class="b-m-4">Tüm yönlere margin</div>
<div class="b-mx-auto">Ortala</div>
<div class="b-my-8">Dikey margin</div>

<!-- Boyutlar: 1=4px, 2=8px, 3=12px, 4=16px, 6=24px, 8=32px, 12=48px, 16=64px, 20=80px -->
```

### Tipografi
```html
<!-- Font Boyutları -->
<h1 class="b-text-6xl b-font-bold">6xl başlık</h1>
<h2 class="b-text-4xl b-font-semibold">4xl başlık</h2>
<p class="b-text-lg b-font-medium">Büyük paragraf</p>
<p class="b-text-base">Normal paragraf</p>
<p class="b-text-sm b-text-gray-600">Küçük açıklama</p>

<!-- Hizalama -->
<div class="b-text-center">Ortala</div>
<div class="b-text-left">Sola</div>
<div class="b-text-right">Sağa</div>
```

### Layout & Flexbox
```html
<!-- Flex Container -->
<div class="b-flex b-items-center b-justify-between b-gap-4">
  <div>Sol</div>
  <div>Sağ</div>
</div>

<!-- Flex Direction -->
<div class="b-flex b-flex-col">Dikey</div>
<div class="b-flex b-flex-row">Yatay</div>

<!-- Flex Wrap -->
<div class="b-flex b-flex-wrap b-gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Justify Content -->
<div class="b-flex b-justify-center">Ortala</div>
<div class="b-flex b-justify-between">Aralarında boşluk</div>
<div class="b-flex b-justify-around">Etrafında boşluk</div>

<!-- Align Items -->
<div class="b-flex b-items-start">Üstte</div>
<div class="b-flex b-items-center">Ortada</div>
<div class="b-flex b-items-end">Altta</div>
```

### Grid Layout
```html
<!-- Temel Grid -->
<div class="b-grid b-grid-cols-3 b-gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Responsive Grid -->
<div class="b-grid b-grid-cols-1 md:b-grid-cols-2 lg:b-grid-cols-4 b-gap-6">
  <!-- Mobilde 1, tablette 2, desktop'ta 4 kolon -->
</div>

<!-- Auto-fit Grid -->
<div class="b-grid b-grid-cols-auto-fit b-gap-4">
  <!-- Otomatik sığdır -->
</div>
```

### Border & Radius
```html
<!-- Kenarlıklar -->
<div class="b-border b-border-gray-300">İnce kenarlık</div>
<div class="b-border-2 b-border-primary">Kalın renkli kenarlık</div>
<div class="b-border-t-2">Sadece üst kenarlık</div>

<!-- Border Radius -->
<div class="b-rounded">8px border radius</div>
<div class="b-rounded-lg">12px border radius</div>
<div class="b-rounded-xl">16px border radius</div>
<div class="b-rounded-2xl">24px border radius</div>
<div class="b-rounded-full">Tam yuvarlak</div>
```

### Shadow & Effects
```html
<!-- Gölgeler -->
<div class="b-shadow">Normal gölge</div>
<div class="b-shadow-lg">Büyük gölge</div>
<div class="b-shadow-xl">Çok büyük gölge</div>
<div class="b-shadow-2xl">Dev gölge</div>

<!-- Hover Gölge -->
<div class="b-shadow hover:b-shadow-xl b-transition">
  Üzerine gel!
</div>
```

### Responsive Breakpoints
```html
<!-- Mobil First Yaklaşım -->
<div class="b-text-sm md:b-text-base lg:b-text-lg">
  Mobilde küçük, tablette normal, desktop'ta büyük
</div>

<div class="b-hidden md:b-block">
  Mobilde gizli, tablette görünür
</div>

<div class="b-block md:b-hidden">
  Mobilde görünür, tablette gizli
</div>

<!-- Breakpoints:
     sm: 640px
     md: 768px
     lg: 1024px
     xl: 1280px
-->
```

---

## 🎭 Dark Mode Kullanımı

### Otomatik Dark Mode
```html
<!-- Her elemana dark: öneki ile alternatif stil -->
<div class="b-bg-white dark:b-bg-gray-800">
  <h1 class="b-text-dark dark:b-text-light">Başlık</h1>
  <p class="b-text-gray-600 dark:b-text-gray-400">Açıklama</p>
</div>
```

### Dark Mode Toggle Butonu
```html
<!-- Dark mode toggle butonu ekle -->
<button onclick="B.darkMode.toggle()" 
        class="b-fixed b-top-4 b-right-4 b-bg-white dark:b-bg-gray-800 b-p-3 b-rounded-full b-shadow-lg b-cursor-pointer b-z-50 b-border-0">
  <span class="dark-mode-icon">🌙</span>
</button>

<!-- Icon'u güncelleyen script -->
<script>
  B.darkMode.init();
  const updateIcon = () => {
    const icon = document.querySelector('.dark-mode-icon');
    icon.textContent = B.darkMode.isEnabled() ? '☀️' : '🌙';
  };
  updateIcon();
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('[onclick*="darkMode.toggle"]')) {
      setTimeout(updateIcon, 100);
    }
  });
</script>
```

### JavaScript ile Dark Mode
```javascript
// Dark mode'u aç
B.darkMode.enable();

// Dark mode'u kapat
B.darkMode.disable();

// Toggle (değiştir)
B.darkMode.toggle();

// Durumu kontrol et
if (B.darkMode.isEnabled()) {
  console.log('Dark mode aktif!');
}
```

---

## 🪄 JavaScript Helper'lar

### Smooth Scroll (Yumuşak Kaydırma)
```javascript
// Tüm # linklere otomatik ekle
B.smoothScroll('a[href^="#"]');

// Belirli bir elemente scroll et
B.smoothScroll('#section-id');
```

### Scroll Reveal (Görünme Animasyonu)
```javascript
// Elementler scroll ile göründükçe animasyon
B.scrollReveal('.card');
B.scrollReveal('.featured-item');
B.scrollReveal('.testimonial');

// Otomatik olarak fade-in + translateY animasyonu yapar
```

### Animasyonlar
```javascript
// 10 hazır animasyon:
B.animate('.box', 'fadeIn');       // Belir
B.animate('.card', 'fadeInUp');    // Aşağıdan belir
B.animate('.hero', 'fadeInDown');  // Yukarıdan belir
B.animate('.item', 'slideInLeft'); // Soldan kayarak
B.animate('.alert', 'bounce');     // Zıpla
B.animate('.icon', 'pulse');       // Nabız at
B.animate('.badge', 'shake');      // Titreşim
B.animate('.img', 'zoomIn');       // Yakınlaş
B.animate('.modal', 'rotateIn');   // Dönerek gir
B.animate('.toast', 'flipInX');    // X ekseninde çevir
```

### Debounce (Performans)
```javascript
// Fonksiyonu 300ms beklet (scroll, resize için ideal)
const handleScroll = B.debounce(() => {
  console.log('Scroll işlemi');
}, 300);

window.addEventListener('scroll', handleScroll);
```

### Throttle (Performans)
```javascript
// Fonksiyonu 200ms'de bir çalıştır
const handleResize = B.throttle(() => {
  console.log('Resize işlemi');
}, 200);

window.addEventListener('resize', handleResize);
```

---

## 🧩 Hazır Component'ler

### Modal (Popup)
```javascript
// Modal oluştur
const modal = B.components.modal({
  title: 'Başlık',
  content: '<p>Modal içeriği buraya gelir</p>',
  onClose: () => console.log('Modal kapatıldı')
});

// Modal'ı aç
document.querySelector('#open-modal').onclick = () => modal.show();
```

### Toast (Bildirim)
```javascript
// Başarı mesajı
B.components.toast('İşlem başarılı!', 'success');

// Hata mesajı
B.components.toast('Bir hata oluştu!', 'error');

// Bilgi mesajı
B.components.toast('Bilgilendirme mesajı', 'info');

// Uyarı mesajı
B.components.toast('Dikkat!', 'warning');
```

### Dropdown
```javascript
// Dropdown menü
const dropdown = B.components.dropdown({
  trigger: '#dropdown-button',
  items: [
    { label: 'Profil', onClick: () => console.log('Profil') },
    { label: 'Ayarlar', onClick: () => console.log('Ayarlar') },
    { label: 'Çıkış', onClick: () => console.log('Çıkış') }
  ]
});
```

### Tabs (Sekmeler)
```javascript
// Sekme sistemi
B.components.tabs({
  container: '#tabs-container',
  tabs: [
    { id: 'tab1', label: 'Sekme 1', content: '<p>İçerik 1</p>' },
    { id: 'tab2', label: 'Sekme 2', content: '<p>İçerik 2</p>' },
    { id: 'tab3', label: 'Sekme 3', content: '<p>İçerik 3</p>' }
  ]
});
```

### Accordion (Genişletilebilir)
```javascript
// Accordion menü
B.components.accordion({
  container: '#accordion-container',
  items: [
    { title: 'Başlık 1', content: '<p>İçerik 1</p>' },
    { title: 'Başlık 2', content: '<p>İçerik 2</p>' },
    { title: 'Başlık 3', content: '<p>İçerik 3</p>' }
  ]
});
```

---

## 🎯 Pratik Örnekler

### Kart (Card) Component
```html
<div class="b-bg-white dark:b-bg-gray-800 b-rounded-xl b-shadow-lg b-p-6 b-transition hover:b-shadow-2xl hover:b-transform hover:-b-translate-y-2">
  <h3 class="b-text-2xl b-font-bold b-mb-3 b-text-dark dark:b-text-light">Başlık</h3>
  <p class="b-text-gray-600 dark:b-text-gray-400 b-mb-4">Açıklama metni buraya gelir.</p>
  <button class="b-bg-primary b-text-white b-px-6 b-py-3 b-rounded-full b-border-0 b-cursor-pointer b-transition hover:b-opacity-80">
    Buton
  </button>
</div>
```

### Hero Section
```html
<section class="b-min-h-screen b-flex b-items-center b-justify-center b-bg-gradient-to-r b-from-purple-500 b-to-pink-500 b-text-white b-text-center">
  <div class="b-max-w-4xl b-px-4">
    <h1 class="b-text-6xl b-font-bold b-mb-6">Harika Bir Başlık</h1>
    <p class="b-text-2xl b-mb-8 b-opacity-90">Alt başlık veya açıklama</p>
    <div class="b-flex b-gap-4 b-justify-center">
      <a href="#" class="b-bg-white b-text-primary b-px-8 b-py-4 b-rounded-full b-no-underline b-font-semibold">
        Başla
      </a>
      <a href="#" class="b-border-2 b-border-white b-text-white b-px-8 b-py-4 b-rounded-full b-no-underline b-font-semibold">
        Daha Fazla
      </a>
    </div>
  </div>
</section>
```

### Navigation Bar
```html
<nav class="b-bg-white dark:b-bg-gray-800 b-shadow-md b-fixed b-w-full b-z-50">
  <div class="b-max-w-6xl b-mx-auto b-px-4 b-py-4 b-flex b-items-center b-justify-between">
    <div class="b-text-2xl b-font-bold b-text-primary">Logo</div>
    <div class="b-flex b-gap-6">
      <a href="#" class="b-text-dark dark:b-text-light b-no-underline hover:b-text-primary">Ana Sayfa</a>
      <a href="#" class="b-text-dark dark:b-text-light b-no-underline hover:b-text-primary">Hakkında</a>
      <a href="#" class="b-text-dark dark:b-text-light b-no-underline hover:b-text-primary">İletişim</a>
    </div>
  </div>
</nav>
```

### Form Örneği
```html
<form class="b-flex b-flex-col b-gap-4 b-max-w-md b-mx-auto">
  <input type="text" 
         placeholder="İsim" 
         class="b-p-4 b-rounded-lg b-border b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-800">
  
  <input type="email" 
         placeholder="E-posta" 
         class="b-p-4 b-rounded-lg b-border b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-800">
  
  <textarea placeholder="Mesaj" 
            rows="5" 
            class="b-p-4 b-rounded-lg b-border b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-800"></textarea>
  
  <button type="submit" 
          class="b-bg-primary b-text-white b-px-8 b-py-4 b-rounded-full b-border-0 b-cursor-pointer b-font-bold b-transition hover:b-opacity-80">
    Gönder
  </button>
</form>
```

---

## ⚡ VS Code Snippets

Eğer `.vscode/blabs.code-snippets` dosyasını silerseniz, bu kısayolları kaybedersiniz:

- `b-card` → Kart component'i
- `b-button` → Buton
- `b-hero` → Hero section
- `b-nav` → Navigation bar
- `b-form` → Form yapısı
- `b-grid` → Grid layout
- `b-flex` → Flex layout

**Kullanımı:** HTML dosyasında `b-card` yazıp Tab'a basın!

---

## 🎨 Custom CSS Ekleme

`css/main.css` dosyasına kendi stillerinizi ekleyebilirsiniz:

```css
/* Özel renk değişkenleri */
:root {
  --my-color: #ff6b6b;
  --my-spacing: 2rem;
}

/* Özel class'lar */
.my-custom-class {
  background: var(--my-color);
  padding: var(--my-spacing);
}

/* B-Labs class'larını override edin */
.b-button-special {
  @apply b-bg-primary b-text-white b-px-8 b-py-4 b-rounded-full;
  /* Ek özel stiller */
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

---

## 🚀 Performans İpuçları

1. **Lazy Loading:** Görsellere `loading="lazy"` ekleyin
   ```html
   <img src="image.jpg" loading="lazy" alt="Açıklama">
   ```

2. **Debounce/Throttle:** Scroll ve resize event'lerinde kullanın
   ```javascript
   window.addEventListener('scroll', B.debounce(handler, 300));
   ```

3. **Scroll Reveal:** Sadece görünür elementlere uygulayın
   ```javascript
   B.scrollReveal('.animate-on-scroll');
   ```

4. **Dark Mode:** `prefers-color-scheme` otomatik çalışır
   ```javascript
   B.darkMode.init(); // Kullanıcı tercihini hatırlar
   ```

---

## 📚 Daha Fazla Bilgi

- GitHub: https://github.com/Barand1500/B-Labs
- NPM: https://www.npmjs.com/package/blabs
- Issues: https://github.com/Barand1500/B-Labs/issues

---

## ❤️ Bu Dosyayı Silebilirsiniz!

Bu rehber sadece yardımcı olmak için. İstemiyorsanız silin, proje çalışmaya devam eder. 

Kolay gelsin! 🚀
