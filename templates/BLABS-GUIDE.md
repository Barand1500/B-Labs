# 🎨 B-Labs Hızlı Başlangıç Rehberi

Hoş geldin! Bu rehber B-Labs'ı öğrenmen için adım adım hazırlandı. 
İstersen bu dosyayı silebilirsin - proje çalışmaya devam eder! 💙

---

## 🚀 İlk Adımlar - Dosya Oluşturma

### 📄 HTML Sayfası Oluştur
```bash
# Terminal'i aç ve yaz:
blabs add html iletisim

# ✅ Bu komut "iletisim.html" dosyası oluşturur
# ✅ İçinde temel HTML yapısı hazır gelir
# ✅ CSS ve JS dosyaları otomatik bağlıdır
```

### 🎨 CSS Dosyası Oluştur
```bash
blabs add css animasyonlar

# ✅ "css/animasyonlar.css" dosyası oluşur
# ✅ index.html'e otomatik eklenir
```

### ⚙️ JavaScript Dosyası Oluştur
```bash
blabs add js utils

# ✅ "js/utils.js" dosyası oluşur
# ✅ index.html'e otomatik eklenir
```

### 🧩 Component Oluştur
```bash
blabs add component buton

# ✅ Menüden istediğin component'i seç:
#    - Button (Buton)
#    - Card (Kart)
#    - Navbar (Navigasyon)
#    - Modal (Popup)
#    - Form (Form)
#    - Gallery (Galeri)
#    ve 10+ tane daha!
```

### 🎭 Icon Demo Sayfası
```bash
blabs add icons demo

# ✅ Tüm icon'ları gösteren sayfa oluşur
# ✅ Tıkla-kopyala özelliği ile kullan!
```

### 📚 Türkçe Rehber Sayfası
```bash
blabs add guide rehber

# ✅ B-Labs kullanım rehberi sayfası oluşur
# ✅ Örneklerle dolu öğretici içerik!
```

---

## 📦 Proje Yapısı

Projeniz şu şekilde organize:

```
{{PROJECT_NAME}}/
├── 📄 index.html          # Ana HTML dosyan
├── 📁 css/
│   ├── 🎨 blabs.css      # B-Labs framework (640+ class)
│   └── ✏️ main.css        # Senin stil dosyan
├── 📁 js/
│   ├── ⚡ blabs.js        # B-Labs JavaScript
│   └── ✏️ main.js         # Senin JavaScript'in
└── 📖 BLABS-GUIDE.md      # Bu rehber (silebilirsin)
```

---

## 💡 Hızlı Başlangıç

### İlk Örneğin - Basit Bir Buton

```html
<!-- 
  🎯 HEDEF: Güzel bir buton oluşturmak
  ✨ ÖZELLİKLER: Mavi arka plan, beyaz yazı, yuvarlak köşeler
-->
<button class="b-bg-primary b-text-white b-px-6 b-py-3 b-rounded-lg b-border-0 b-cursor-pointer">
  Tıkla Bana!
</button>

<!-- 
  📝 AÇIKLAMA:
  - b-bg-primary    → Mavi arka plan
  - b-text-white    → Beyaz yazı
  - b-px-6          → Yatay padding (24px)
  - b-py-3          → Dikey padding (12px)
  - b-rounded-lg    → Yuvarlak köşeler (12px)
  - b-border-0      → Kenarlık yok
  - b-cursor-pointer → Fare üzerine gelince el işareti
-->
```

### İkinci Örnek - Hover Efekti Ekle

```html
<!-- 
  🎯 HEDEF: Butonun üzerine gelince renk değişsin
  ✨ YENİ: hover: öneki ile hover stilleri
-->
<button class="b-bg-primary hover:b-bg-blue-700 b-text-white b-px-6 b-py-3 b-rounded-lg b-border-0 b-cursor-pointer b-transition">
  Üzerime Gel!
</button>

<!-- 
  📝 YENİ EKLENENLER:
  - hover:b-bg-blue-700 → Hover'da daha koyu mavi
  - b-transition        → Yumuşak geçiş animasyonu
-->
```

### Üçüncü Örnek - Gölge Ekle

```html
<!-- 
  🎯 HEDEF: Butona modern gölge efekti
  ✨ YENİ: Gölge + hover'da daha büyük gölge
-->
<button class="b-bg-primary b-text-white b-px-6 b-py-3 b-rounded-lg b-shadow-md hover:b-shadow-xl b-border-0 b-cursor-pointer b-transition">
  Şık Buton 🎨
</button>

<!-- 
  📝 YENİ EKLENENLER:
  - b-shadow-md         → Orta boy gölge
  - hover:b-shadow-xl   → Hover'da büyük gölge
-->
```

---

## 🎨 Renk Sistemi

### 1️⃣ Temel Renkler

```html
<!-- 🔵 PRIMARY (Mavi) - Ana renk -->
<div class="b-bg-primary b-text-white b-p-4">Primary Renk</div>

<!-- ⚫ DARK (Koyu) - Başlıklar için -->
<div class="b-text-dark b-font-bold">Koyu Renk Yazı</div>

<!-- 🔴 DANGER (Kırmızı) - Uyarılar için -->
<div class="b-bg-danger b-text-white b-p-4">Dikkat!</div>

<!-- 🟢 SUCCESS (Yeşil) - Başarı mesajları -->
<div class="b-bg-success b-text-white b-p-4">Başarılı ✅</div>

<!-- 🟡 WARNING (Sarı) - Uyarılar -->
<div class="b-bg-warning b-text-white b-p-4">Dikkat ⚠️</div>
```

### 2️⃣ Gri Tonları (100-900)

```html
<!-- 
  💡 İPUCU: Sayı büyüdükçe renk koyulaşır
  100 = Çok açık, 900 = Çok koyu
-->

<!-- Açık gri arka plan -->
<div class="b-bg-gray-100 b-p-4">Çok Açık Gri (100)</div>

<!-- Orta ton yazı -->
<div class="b-text-gray-600">Normal Açıklama Yazısı (600)</div>

<!-- Koyu yazı -->
<div class="b-text-gray-900">Koyu Yazı (900)</div>
```

### 3️⃣ Gradient (Degrade) Renkler

```html
<!-- 
  🌈 GRADIENT: İki renkli geçişler
  ✨ YÖN: to-r (sağa), to-l (sola), to-t (yukarı), to-b (aşağı)
-->

<!-- Sağa doğru gradient -->
<div class="b-bg-gradient-to-r b-from-purple-500 b-to-pink-500 b-text-white b-p-8 b-rounded-lg">
  Mor'dan Pembe'ye Gradient →
</div>

<!-- Aşağı doğru gradient -->
<div class="b-bg-gradient-to-b b-from-blue-400 b-to-blue-600 b-text-white b-p-8 b-rounded-lg">
  Açık Mavi'den Koyu Mavi'ye ↓
</div>
```

---

## 📐 Boşluklar (Spacing)

### 1️⃣ Padding (İç Boşluk)

```html
<!-- 
  📏 BOYUT TABLOSU:
  1 = 4px   |  2 = 8px   |  3 = 12px  |  4 = 16px
  6 = 24px  |  8 = 32px  |  12 = 48px |  16 = 64px
-->

<!-- Tüm yönlere padding -->
<div class="b-p-4 b-bg-primary b-text-white">
  Her yönde 16px boşluk
</div>

<!-- Sadece yatay padding -->
<div class="b-px-8 b-bg-success b-text-white">
  Sadece sağ-sol 32px boşluk
</div>

<!-- Sadece dikey padding -->
<div class="b-py-6 b-bg-warning b-text-white">
  Sadece üst-alt 24px boşluk
</div>

<!-- Her yön farklı -->
<div class="b-pt-8 b-pr-4 b-pb-2 b-pl-6 b-bg-danger b-text-white">
  Üst: 32px, Sağ: 16px, Alt: 8px, Sol: 24px
</div>
```

### 2️⃣ Margin (Dış Boşluk)

```html
<!-- Tüm yönlere margin -->
<div class="b-m-4 b-bg-primary b-text-white b-p-4">
  Her yönde 16px dış boşluk
</div>

<!-- Ortala (en çok kullanılan!) -->
<div class="b-mx-auto b-max-w-md b-bg-primary b-text-white b-p-4">
  Yatayda ortalanmış kutu
</div>

<!-- Dikey boşluk -->
<div class="b-my-8 b-bg-success b-text-white b-p-4">
  Üst-alt 32px boşluk
</div>
```

---

## 📝 Yazı Stilleri (Typography)

### 1️⃣ Yazı Boyutları

```html
<!-- 
  📏 BOYUTLAR: text-xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 6xl, 8xl
  💡 İPUCU: xl sayısı büyüdükçe yazı büyür
-->

<!-- Başlık boyutları -->
<h1 class="b-text-6xl b-font-bold b-text-dark">Ana Başlık (6xl)</h1>
<h2 class="b-text-4xl b-font-semibold b-text-dark">Alt Başlık (4xl)</h2>
<h3 class="b-text-2xl b-font-medium b-text-dark">Küçük Başlık (2xl)</h3>

<!-- Paragraf boyutları -->
<p class="b-text-lg b-text-gray-700">Büyük paragraf (lg)</p>
<p class="b-text-base b-text-gray-700">Normal paragraf (base)</p>
<p class="b-text-sm b-text-gray-600">Küçük açıklama (sm)</p>
<p class="b-text-xs b-text-gray-500">Mini yazı (xs)</p>
```

### 2️⃣ Yazı Kalınlığı

```html
<!-- 
  💪 KALINLIK: thin, light, normal, medium, semibold, bold, black
-->

<p class="b-font-thin">İnce yazı (100)</p>
<p class="b-font-light">Hafif yazı (300)</p>
<p class="b-font-normal">Normal yazı (400)</p>
<p class="b-font-medium">Orta yazı (500)</p>
<p class="b-font-semibold">Yarı kalın yazı (600)</p>
<p class="b-font-bold">Kalın yazı (700)</p>
<p class="b-font-black">Çok kalın yazı (900)</p>
```

### 3️⃣ Yazı Hizalama

```html
<!-- Sola yasla -->
<div class="b-text-left">Sola yaslı yazı</div>

<!-- Ortala -->
<div class="b-text-center">Ortalı yazı</div>

<!-- Sağa yasla -->
<div class="b-text-right">Sağa yaslı yazı</div>
```

---

## 🎯 Flexbox Layout

### 1️⃣ Yatay Dizilim (Flex Row)

```html
<!-- 
  🎯 HEDEF: Elementleri yan yana diz
  ✨ FLEX: Modern layout sistemi
-->

<!-- Basit flex - yan yana -->
<div class="b-flex b-gap-4">
  <div class="b-bg-primary b-text-white b-p-4">Kutu 1</div>
  <div class="b-bg-success b-text-white b-p-4">Kutu 2</div>
  <div class="b-bg-warning b-text-white b-p-4">Kutu 3</div>
</div>

<!-- 
  📝 AÇIKLAMA:
  - b-flex → Flex container yap
  - b-gap-4 → Aralarında 16px boşluk
-->
```

### 2️⃣ Ortala (En Çok Kullanılan!)

```html
<!-- 
  🎯 HEDEF: Her şeyi tam ortala
  ✨ KULLANIM: Login kutusu, kartlar, hero section için ideal
-->

<div class="b-flex b-items-center b-justify-center b-min-h-screen b-bg-gray-100">
  <div class="b-bg-white b-p-8 b-rounded-lg b-shadow-xl">
    <h2 class="b-text-2xl b-font-bold b-mb-4">Ortalanmış Kutu</h2>
    <p class="b-text-gray-600">Bu kutu tam ortada!</p>
  </div>
</div>

<!-- 
  📝 AÇIKLAMA:
  - b-items-center    → Dikeyde ortala
  - b-justify-center  → Yatayda ortala
  - b-min-h-screen    → Ekran yüksekliğinde
-->
```

### 3️⃣ İki Yana Böl

```html
<!-- 
  🎯 HEDEF: Sol tarafa logo, sağ tarafa menü
  ✨ KULLANIM: Navbar, header için ideal
-->

<div class="b-flex b-items-center b-justify-between b-p-4 b-bg-white b-shadow">
  <div class="b-text-2xl b-font-bold b-text-primary">🎨 Logo</div>
  <div class="b-flex b-gap-6">
    <a href="#" class="b-text-dark b-no-underline">Ana Sayfa</a>
    <a href="#" class="b-text-dark b-no-underline">Hakkımda</a>
    <a href="#" class="b-text-dark b-no-underline">İletişim</a>
  </div>
</div>

<!-- 
  📝 AÇIKLAMA:
  - b-justify-between → İki yana yay, aralarında boşluk
-->
```

### 4️⃣ Dikey Dizilim (Flex Column)

```html
<!-- 
  🎯 HEDEF: Elementleri alt alta diz
  ✨ KULLANIM: Form, kartlar, menüler için
-->

<div class="b-flex b-flex-col b-gap-4 b-max-w-md">
  <div class="b-bg-primary b-text-white b-p-4">Üstteki</div>
  <div class="b-bg-success b-text-white b-p-4">Ortadaki</div>
  <div class="b-bg-warning b-text-white b-p-4">Alttaki</div>
</div>

<!-- 
  📝 AÇIKLAMA:
  - b-flex-col → Dikey yönde diz (default yatay)
-->
```

---

## 📊 Grid Layout

### 1️⃣ Basit 3 Kolonlu Grid

```html
<!-- 
  🎯 HEDEF: 3 sütunlu eşit bölünmüş layout
  ✨ KULLANIM: Ürün kartları, fotoğraflar için ideal
-->

<div class="b-grid b-grid-cols-3 b-gap-6">
  <div class="b-bg-primary b-text-white b-p-6 b-rounded-lg">Kolon 1</div>
  <div class="b-bg-success b-text-white b-p-6 b-rounded-lg">Kolon 2</div>
  <div class="b-bg-warning b-text-white b-p-6 b-rounded-lg">Kolon 3</div>
  <!-- Daha fazla element eklenebilir, otomatik 3'lü grup halinde sıralanır -->
</div>

<!-- 
  📝 AÇIKLAMA:
  - b-grid          → Grid container yap
  - b-grid-cols-3   → 3 sütun oluştur
  - b-gap-6         → Aralarında 24px boşluk
-->
```

### 2️⃣ Responsive Grid (Mobil + Desktop)

```html
<!-- 
  🎯 HEDEF: Mobilde 1, tablette 2, desktop'ta 4 kolon
  ✨ KULLANIM: Responsive ürün listeleri için mükemmel!
-->

<div class="b-grid b-grid-cols-1 md:b-grid-cols-2 lg:b-grid-cols-4 b-gap-6">
  <div class="b-bg-white b-p-6 b-rounded-lg b-shadow">Kart 1</div>
  <div class="b-bg-white b-p-6 b-rounded-lg b-shadow">Kart 2</div>
  <div class="b-bg-white b-p-6 b-rounded-lg b-shadow">Kart 3</div>
  <div class="b-bg-white b-p-6 b-rounded-lg b-shadow">Kart 4</div>
</div>

<!-- 
  📝 AÇIKLAMA:
  - b-grid-cols-1        → Mobilde 1 sütun (default)
  - md:b-grid-cols-2     → Tablette (768px+) 2 sütun
  - lg:b-grid-cols-4     → Desktop'ta (1024px+) 4 sütun
  
  💡 EKRAN BOYUTLARI:
  - sm: 640px   (Büyük telefon)
  - md: 768px   (Tablet)
  - lg: 1024px  (Laptop)
  - xl: 1280px  (Büyük ekran)
-->
```

---

## 🎭 Kenarlıklar ve Köşeler

### 1️⃣ Border (Kenarlık)

```html
<!-- Basit kenarlık -->
<div class="b-border b-p-4">İnce kenarlık</div>

<!-- Kalın kenarlık -->
<div class="b-border-2 b-border-primary b-p-4">Kalın mavi kenarlık</div>

<!-- Sadece alt kenarlık -->
<div class="b-border-b-2 b-p-4">Sadece alt</div>

<!-- Yukarı kenarlık -->
<div class="b-border-t-2 b-p-4">Sadece üst</div>
```

### 2️⃣ Border Radius (Yuvarlak Köşeler)

```html
<!-- 
  💡 BOYUTLAR: none, sm, (default), lg, xl, 2xl, 3xl, full
-->

<div class="b-rounded b-bg-primary b-text-white b-p-4">8px köşe</div>
<div class="b-rounded-lg b-bg-success b-text-white b-p-4">12px köşe</div>
<div class="b-rounded-xl b-bg-warning b-text-white b-p-4">16px köşe</div>
<div class="b-rounded-2xl b-bg-danger b-text-white b-p-4">24px köşe</div>
<div class="b-rounded-full b-bg-primary b-text-white b-p-4">Tam yuvarlak</div>
```

---

## ✨ Gölgeler (Shadows)

### Basit Gölge Örnekleri

```html
<!-- 
  📏 BOYUTLAR: sm, (default), md, lg, xl, 2xl
  💡 İPUCU: Boyut büyüdükçe gölge daha belirgin
-->

<!-- Küçük gölge -->
<div class="b-shadow-sm b-bg-white b-p-4 b-rounded-lg">
  Hafif gölge
</div>

<!-- Normal gölge -->
<div class="b-shadow b-bg-white b-p-4 b-rounded-lg">
  Normal gölge
</div>

<!-- Orta boy gölge -->
<div class="b-shadow-md b-bg-white b-p-4 b-rounded-lg">
  Orta gölge
</div>

<!-- Büyük gölge -->
<div class="b-shadow-xl b-bg-white b-p-4 b-rounded-lg">
  Büyük gölge
</div>

<!-- Hover ile gölge animasyonu -->
<div class="b-shadow hover:b-shadow-xl b-transition b-bg-white b-p-4 b-rounded-lg b-cursor-pointer">
  Üzerime gel, gölgem büyüsün! ✨
</div>
```

---

## 🌙 Dark Mode

### 1️⃣ Otomatik Dark Mode

```html
<!-- 
  🎯 HEDEF: Aynı element light ve dark mode'da farklı görünsün
  ✨ KULLANIM: dark: öneki ekle
-->

<!-- Beyaz/Siyah arka plan -->
<div class="b-bg-white dark:b-bg-gray-900 b-p-8 b-rounded-lg">
  <!-- Light mode: beyaz, Dark mode: koyu gri -->
  
  <h2 class="b-text-dark dark:b-text-white b-text-2xl b-font-bold b-mb-4">
    Başlık (Light'ta koyu, Dark'ta beyaz)
  </h2>
  
  <p class="b-text-gray-600 dark:b-text-gray-400">
    Açıklama (Light'ta gri, Dark'ta açık gri)
  </p>
</div>

<!-- 
  📝 NASIL ÇALIŞIR:
  1. Kullanıcı dark mode açar
  2. <html> tag'ine "dark" class'ı eklenir
  3. dark: önekli stiller devreye girer
-->
```

### 2️⃣ Dark Mode Toggle Butonu

```html
<!-- 
  🎯 HEDEF: Kullanıcı tıklayınca dark mode açılsın/kapansın
-->

<!-- Sağ üst köşede sabit duran buton -->
<button 
  onclick="toggleDarkMode()" 
  class="b-fixed b-top-4 b-right-4 b-bg-white dark:b-bg-gray-800 b-p-3 b-rounded-full b-shadow-lg b-cursor-pointer b-z-50 b-border-2 b-border-gray-200 dark:b-border-gray-700">
  <span id="dark-icon" class="b-text-2xl">🌙</span>
</button>

<script>
// Dark mode aç/kapa fonksiyonu
function toggleDarkMode() {
  B.darkMode.toggle(); // B-Labs dark mode değiştir
  
  // Icon'u güncelle
  const icon = document.getElementById('dark-icon');
  icon.textContent = B.darkMode.isEnabled() ? '☀️' : '🌙';
}

// Sayfa yüklenince icon'u ayarla
B.ready(() => {
  B.darkMode.init(); // Dark mode başlat
  const icon = document.getElementById('dark-icon');
  icon.textContent = B.darkMode.isEnabled() ? '☀️' : '🌙';
});
</script>

<!-- 
  📝 AÇIKLAMA:
  - B.darkMode.init()      → Dark mode sistem başlat
  - B.darkMode.toggle()    → Dark mode aç/kapa
  - B.darkMode.isEnabled() → Açık mı kontrol et
-->
```

---

## 🎨 Pratik Örnekler

### 1️⃣ Modern Kart (Card) Component

```html
<!-- 
  🎯 HEDEF: Güzel, modern, hover efektli kart
  ✨ ÖZELLİKLER: Gölge, yuvarlak köşe, hover animasyonu
-->

<div class="b-bg-white dark:b-bg-gray-800 b-rounded-xl b-shadow-lg hover:b-shadow-2xl b-p-6 b-transition hover:b-transform hover:-b-translate-y-2 b-cursor-pointer">
  <!-- Başlık -->
  <h3 class="b-text-2xl b-font-bold b-mb-3 b-text-dark dark:b-text-white">
    Kart Başlığı
  </h3>
  
  <!-- Açıklama -->
  <p class="b-text-gray-600 dark:b-text-gray-400 b-mb-4 b-leading-relaxed">
    Bu bir kart açıklaması. Buraya istediğin metni yazabilirsin.
    Dark mode ile uyumlu çalışır! 🌙
  </p>
  
  <!-- Buton -->
  <button class="b-bg-primary hover:b-bg-blue-700 b-text-white b-px-6 b-py-3 b-rounded-full b-border-0 b-cursor-pointer b-transition b-font-semibold">
    Daha Fazla →
  </button>
</div>

<!-- 
  📝 HOVER EFEKTLERİ:
  - hover:b-shadow-2xl      → Gölge büyür
  - hover:-b-translate-y-2  → Yukarı kayar
  - hover:b-transform       → Transform etkinleştir
-->
```

### 2️⃣ Navbar (Navigation Bar)

```html
<!-- 
  🎯 HEDEF: Üstte sabit duran, responsive navbar
  ✨ ÖZELLİKLER: Sticky, gölge, dark mode uyumlu
-->

<nav class="b-sticky b-top-0 b-bg-white dark:b-bg-gray-900 b-shadow-md b-z-50">
  <div class="b-max-w-6xl b-mx-auto b-px-4 b-py-4 b-flex b-items-center b-justify-between">
    <!-- Logo (Sol) -->
    <div class="b-text-2xl b-font-bold b-text-primary">
      🎨 B-Labs
    </div>
    
    <!-- Menü (Sağ) -->
    <div class="b-flex b-gap-6">
      <a href="#" class="b-text-dark dark:b-text-white b-no-underline hover:b-text-primary b-transition b-font-medium">
        Ana Sayfa
      </a>
      <a href="#" class="b-text-dark dark:b-text-white b-no-underline hover:b-text-primary b-transition b-font-medium">
        Özellikler
      </a>
      <a href="#" class="b-text-dark dark:b-text-white b-no-underline hover:b-text-primary b-transition b-font-medium">
        İletişim
      </a>
    </div>
  </div>
</nav>

<!-- 
  📝 AÇIKLAMA:
  - b-sticky b-top-0 → Üstte sabit dur (scroll ederken)
  - b-z-50           → Diğer elementlerin üstünde olsun
-->
```

### 3️⃣ Hero Section (Ana Banner)

```html
<!-- 
  🎯 HEDEF: Etkileyici, tam sayfa hero section
  ✨ ÖZELLİKLER: Gradient arka plan, ortalanmış, animasyonlu
-->

<section class="b-min-h-screen b-flex b-items-center b-justify-center b-bg-gradient-to-r b-from-purple-600 b-to-pink-600 b-text-white b-text-center b-px-4">
  <div class="b-max-w-4xl">
    <!-- Ana Başlık -->
    <h1 class="b-text-6xl md:b-text-8xl b-font-bold b-mb-6 b-animate-fade-in">
      B-Labs ile Hızlı Başla 🚀
    </h1>
    
    <!-- Alt Başlık -->
    <p class="b-text-xl md:b-text-2xl b-mb-8 b-opacity-90 b-animate-fade-in b-delay-200">
      Modern web projeleri için hazır CSS framework ve JavaScript library
    </p>
    
    <!-- Butonlar -->
    <div class="b-flex b-gap-4 b-justify-center b-flex-wrap b-animate-fade-in b-delay-300">
      <a href="#" class="b-bg-white b-text-primary b-px-8 b-py-4 b-rounded-full b-no-underline b-font-bold b-text-lg hover:b-opacity-90 b-transition">
        Hemen Başla
      </a>
      <a href="#" class="b-border-2 b-border-white b-text-white b-px-8 b-py-4 b-rounded-full b-no-underline b-font-bold b-text-lg hover:b-bg-white hover:b-text-primary b-transition">
        Daha Fazla Bilgi
      </a>
    </div>
  </div>
</section>

<!-- 
  📝 AÇIKLAMA:
  - b-min-h-screen        → En az ekran yüksekliği kadar
  - b-animate-fade-in     → Belirme animasyonu
  - b-delay-200, 300      → Animasyon gecikmesi (sırayla görünür)
-->
```

### 4️⃣ Form Örneği

```html
<!-- 
  🎯 HEDEF: Güzel, kullanıcı dostu form
  ✨ ÖZELLİKLER: Dark mode, placeholder, focus stilleri
-->

<form class="b-flex b-flex-col b-gap-4 b-max-w-md b-mx-auto b-bg-white dark:b-bg-gray-800 b-p-8 b-rounded-xl b-shadow-xl">
  <!-- Başlık -->
  <h2 class="b-text-3xl b-font-bold b-mb-4 b-text-dark dark:b-text-white b-text-center">
    İletişime Geç 📬
  </h2>
  
  <!-- İsim Input -->
  <div>
    <label class="b-block b-mb-2 b-font-semibold b-text-dark dark:b-text-white">
      İsim
    </label>
    <input 
      type="text" 
      placeholder="Adınız Soyadınız" 
      class="b-w-full b-p-4 b-rounded-lg b-border-2 b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-750 dark:b-text-white focus:b-border-primary b-transition b-outline-none">
  </div>
  
  <!-- E-posta Input -->
  <div>
    <label class="b-block b-mb-2 b-font-semibold b-text-dark dark:b-text-white">
      E-posta
    </label>
    <input 
      type="email" 
      placeholder="ornek@email.com" 
      class="b-w-full b-p-4 b-rounded-lg b-border-2 b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-750 dark:b-text-white focus:b-border-primary b-transition b-outline-none">
  </div>
  
  <!-- Mesaj Textarea -->
  <div>
    <label class="b-block b-mb-2 b-font-semibold b-text-dark dark:b-text-white">
      Mesaj
    </label>
    <textarea 
      placeholder="Mesajınızı buraya yazın..." 
      rows="5" 
      class="b-w-full b-p-4 b-rounded-lg b-border-2 b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-750 dark:b-text-white focus:b-border-primary b-transition b-outline-none b-resize-none"></textarea>
  </div>
  
  <!-- Gönder Butonu -->
  <button 
    type="submit" 
    class="b-bg-primary hover:b-bg-blue-700 b-text-white b-px-8 b-py-4 b-rounded-full b-border-0 b-cursor-pointer b-font-bold b-text-lg b-transition b-shadow-lg hover:b-shadow-xl">
    Gönder 🚀
  </button>
</form>

<!-- 
  📝 AÇIKLAMA:
  - focus:b-border-primary → Focus olunca kenarlık mavi olur
  - b-outline-none         → Tarayıcı default outline'ını kaldır
  - b-resize-none          → Textarea'yı resize edilemez yap
-->
```

---

## ⚡ JavaScript Helper'lar

### 1️⃣ Smooth Scroll (Yumuşak Kaydırma)

```javascript
/*
  🎯 HEDEF: # linklere tıklanınca yumuşak kaydırma
  ✨ KULLANIM: Tek satırda tüm anchor link'lere ekle
*/

B.ready(() => {
  // Tüm # ile başlayan linklere ekle
  B.smoothScroll('a[href^="#"]');
  
  // İstersen offset (üstten boşluk) ekle
  B.smoothScroll('a[href^="#"]', 100); // 100px offset
});

/*
  📝 HTML ÖRNEK:
  <a href="#about">Hakkımda</a>
  <section id="about">...</section>
  
  Tıklayınca yumuşak bir şekilde "about" bölümüne kayar!
*/
```

### 2️⃣ Toast Bildirimleri

```javascript
/*
  🎯 HEDEF: Kullanıcıya mesaj göster
  ✨ TÜRLERİ: success, error, info, warning
*/

// Başarı mesajı (yeşil)
B.components.toast('İşlem başarılı! ✅', { type: 'success' });

// Hata mesajı (kırmızı)
B.components.toast('Bir hata oluştu! ❌', { type: 'error' });

// Bilgi mesajı (mavi)
B.components.toast('Bilgilendirme mesajı ℹ️', { type: 'info' });

// Uyarı mesajı (sarı)
B.components.toast('Dikkat! ⚠️', { type: 'warning' });

// Özel süre (varsayılan 3000 = 3 saniye)
B.components.toast('5 saniye kalacak!', { 
  type: 'success', 
  duration: 5000 
});
```

### 3️⃣ Modal (Popup)

```javascript
/*
  🎯 HEDEF: Popup pencere göster
  ✨ KULLANIM: Bildirim, onay mesajı, form için
*/

// Basit modal
B.components.modal({
  title: 'Emin misin?',
  content: '<p>Bu işlemi gerçekten yapmak istiyor musun?</p>',
  confirmText: 'Evet',
  cancelText: 'Hayır',
  onConfirm: () => {
    console.log('Onaylandı!');
  },
  onCancel: () => {
    console.log('İptal edildi!');
  }
});

// Sadece bilgi modalı (Tamam butonu)
B.components.modal({
  title: 'Bilgilendirme',
  content: '<p>İşlem başarıyla tamamlandı!</p>',
  showCancel: false,
  confirmText: 'Tamam'
});
```

---

## 💡 Pro İpuçları

### 1️⃣ Hızlı Prototipleme

```html
<!-- 
  💪 İPUCU: Renkleri hızlıca değiştirerek tasarım dene
  🎨 Primary, success, danger, warning aralarında geç
-->

<!-- Renkleri değiştir → -->
<button class="b-bg-primary">Primary</button>
<button class="b-bg-success">Success</button>
<button class="b-bg-danger">Danger</button>
<button class="b-bg-warning">Warning</button>
```

### 2️⃣ Responsive Tasarım

```html
<!-- 
  📱 İPUCU: Mobil-first yaklaşım kullan
  💡 Önce mobil yaz, sonra md: lg: ekle
-->

<!-- ✅ DOĞRU: Mobil-first -->
<div class="b-p-4 md:b-p-8 lg:b-p-12">
  Mobilde 16px, tablette 32px, desktop'ta 48px padding
</div>

<!-- ❌ YANLIŞ: Desktop-first (tavsiye edilmez) -->
<div class="lg:b-p-12 md:b-p-8 b-p-4">
  Karışık ve hatalı!
</div>
```

### 3️⃣ Dark Mode İpuçları

```html
<!-- 
  🌙 İPUCU: dark: önekini heryere ekleme!
  💡 Sadece beyaz/açık renklere ekle
-->

<!-- ✅ DOĞRU: Sadece gerekli yerlerde -->
<div class="b-bg-white dark:b-bg-gray-900">
  <h2 class="b-text-dark dark:b-text-white">Başlık</h2>
  <p class="b-text-gray-600 dark:b-text-gray-400">Açıklama</p>
</div>

<!-- ❌ YANLIŞ: Gereksiz yerlerde -->
<div class="b-bg-primary dark:b-bg-primary">
  <!-- Primary zaten her modda aynı, gereksiz! -->
</div>
```

### 4️⃣ Animasyon Performansı

```javascript
/*
  ⚡ İPUCU: Scroll event'lerinde debounce kullan
  💡 Performans çok artar!
*/

// ❌ YANLIŞ: Her scroll'da çalışır (yavaş!)
window.addEventListener('scroll', () => {
  console.log('Scroll!');
});

// ✅ DOĞRU: 300ms'de bir çalışır (hızlı!)
window.addEventListener('scroll', B.debounce(() => {
  console.log('Scroll!');
}, 300));
```

---

## 🔥 Sık Kullanılan Pattern'ler

### Buton Stilleri

```html
<!-- Primary buton -->
<button class="b-bg-primary hover:b-bg-blue-700 b-text-white b-px-6 b-py-3 b-rounded-lg b-border-0 b-cursor-pointer b-transition">
  Primary
</button>

<!-- Outline buton -->
<button class="b-border-2 b-border-primary b-text-primary hover:b-bg-primary hover:b-text-white b-px-6 b-py-3 b-rounded-lg b-cursor-pointer b-transition b-bg-transparent">
  Outline
</button>

<!-- Ghost buton -->
<button class="b-text-primary hover:b-bg-primary hover:b-bg-opacity-10 b-px-6 b-py-3 b-rounded-lg b-border-0 b-cursor-pointer b-transition">
  Ghost
</button>
```

### Kart Stilleri

```html
<!-- Basit kart -->
<div class="b-bg-white b-p-6 b-rounded-lg b-shadow">
  Basit kart
</div>

<!-- Hover efektli kart -->
<div class="b-bg-white b-p-6 b-rounded-lg b-shadow hover:b-shadow-xl b-transition b-cursor-pointer">
  Hover kart
</div>

<!-- Border'lı kart -->
<div class="b-bg-white b-p-6 b-rounded-lg b-border-2 b-border-gray-200 hover:b-border-primary b-transition">
  Border kart
</div>
```

---

## 📚 Daha Fazla

### VS Code Snippets

HTML dosyasında şunları yaz ve Tab bas:

- `b-card` → Kart template'i
- `b-button` → Buton template'i
- `b-nav` → Navbar template'i
- `b-hero` → Hero section template'i
- `b-form` → Form template'i

### Yardım & Destek

- 🌐 GitHub: https://github.com/Barand1500/B-Labs
- 📦 NPM: https://www.npmjs.com/package/blabs
- 🐛 Issues: https://github.com/Barand1500/B-Labs/issues

---

## ❤️ Son Söz

Bu rehber sana B-Labs'ı öğretmek için hazırlandı! 

Artık istersen bu dosyayı silebilirsin - proje çalışmaya devam eder. 

**Kolay gelsin, iyi kodlamalar! 🚀**

<div style="text-align: center; margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem; color: white;">
  <h3 style="font-size: 2rem; margin-bottom: 1rem;">Başlamaya Hazır mısın? 🎉</h3>
  <p style="font-size: 1.2rem; opacity: 0.9;">Kodlamaya başla ve harika projeler yap!</p>
</div>
