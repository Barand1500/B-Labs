# B-Labs Örnekler

## 🎯 Temel Örnek - Portfolio Sayfası

Bu örnek, B-Labs'in temel özelliklerini gösterir.

### HTML
```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - B-Labs</title>
  <link rel="stylesheet" href="css/blabs.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="b-fixed b-w-full b-bg-white b-shadow b-py-4">
    <div class="container b-flex b-items-center b-justify-between">
      <div class="b-text-2xl b-font-bold b-text-primary">Portfolio</div>
      
      <button class="menu-btn b-cursor-pointer">
        ☰
      </button>
      
      <div class="menu b-hidden">
        <a href="#home" class="b-text-dark b-px-4">Ana Sayfa</a>
        <a href="#about" class="b-text-dark b-px-4">Hakkında</a>
        <a href="#projects" class="b-text-dark b-px-4">Projeler</a>
        <a href="#contact" class="b-text-dark b-px-4">İletişim</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="b-h-screen b-flex b-items-center b-justify-center b-bg-light">
    <div class="b-text-center">
      <h1 class="b-text-5xl b-font-bold b-mb-4 b-text-dark">
        Merhaba, Ben <span class="b-text-primary">Developer</span>
      </h1>
      <p class="b-text-xl b-mb-8 b-text-dark">
        Web geliştirici ve tasarımcı
      </p>
      <a href="#projects" class="b-bg-primary b-text-white b-px-8 b-py-4 b-rounded-lg b-inline-block b-transition b-hover-opacity">
        Projelerimi Gör
      </a>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="b-py-20">
    <div class="container">
      <h2 class="b-text-4xl b-font-bold b-text-center b-mb-12">Projeler</h2>
      
      <div class="b-grid b-gap-6">
        <div class="b-bg-white b-rounded-lg b-shadow-md b-p-6 b-transition b-hover-scale">
          <img data-src="images/project1.jpg" alt="Proje 1" class="b-rounded b-mb-4">
          <h3 class="b-text-2xl b-font-semibold b-mb-2">Proje 1</h3>
          <p class="b-mb-4">Harika bir web uygulaması</p>
          <a href="#" class="b-text-primary b-font-medium">Detaylar →</a>
        </div>
        
        <div class="b-bg-white b-rounded-lg b-shadow-md b-p-6 b-transition b-hover-scale">
          <img data-src="images/project2.jpg" alt="Proje 2" class="b-rounded b-mb-4">
          <h3 class="b-text-2xl b-font-semibold b-mb-2">Proje 2</h3>
          <p class="b-mb-4">Modern bir tasarım projesi</p>
          <a href="#" class="b-text-primary b-font-medium">Detaylar →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section id="contact" class="b-py-20 b-bg-light">
    <div class="container">
      <h2 class="b-text-4xl b-font-bold b-text-center b-mb-12">İletişim</h2>
      
      <form id="contactForm" class="b-max-w-lg b-mx-auto">
        <div class="b-mb-4">
          <input 
            type="text" 
            name="name" 
            required
            placeholder="İsminiz"
            class="b-w-full b-border b-rounded b-p-3"
          >
        </div>
        
        <div class="b-mb-4">
          <input 
            type="email" 
            name="email" 
            required
            placeholder="Email"
            class="b-w-full b-border b-rounded b-p-3"
          >
        </div>
        
        <div class="b-mb-4">
          <textarea 
            name="message" 
            required
            placeholder="Mesajınız"
            rows="5"
            class="b-w-full b-border b-rounded b-p-3"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          class="b-w-full b-bg-primary b-text-white b-py-3 b-rounded b-cursor-pointer b-transition b-hover-opacity"
        >
          Gönder
        </button>
      </form>
    </div>
  </section>

  <script src="js/blabs.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

### JavaScript (main.js)
```javascript
B.ready(() => {
  // Menu toggle
  B.toggle('.menu-btn', '.menu');
  
  // Lazy load images
  B.lazyImages();
  
  // Smooth scroll
  B.smoothScroll('a[href^="#"]', 80);
  
  // Scroll spy
  B.scrollSpy('.menu a', 'section', 'active', 100);
  
  // Form validation
  B.formValidation('#contactForm', {
    onSuccess: (data) => {
      alert('Mesajınız gönderildi!');
      console.log(data);
      document.getElementById('contactForm').reset();
    },
    onError: (errors) => {
      console.log('Form hataları:', errors);
    }
  });
});
```

### Custom CSS (main.css)
```css
@import url('blabs.css');

/* Custom styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.menu {
  transition: all 0.3s ease;
}

.menu.active {
  display: flex !important;
  gap: 1rem;
}

@media (min-width: 768px) {
  .menu {
    display: flex !important;
  }
  
  .menu-btn {
    display: none;
  }
}

/* Project grid responsive */
@media (min-width: 768px) {
  #projects .b-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  #projects .b-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

## 🎨 Diğer Örnekler

### 1. Card Component
```html
<div class="b-bg-white b-rounded-lg b-shadow-md b-p-6 b-max-w-sm">
  <img data-src="avatar.jpg" alt="Avatar" class="b-w-24 b-h-24 b-rounded-full b-mb-4">
  <h3 class="b-text-xl b-font-bold b-mb-2">John Doe</h3>
  <p class="b-text-dark b-mb-4">Web Developer</p>
  <button class="b-bg-primary b-text-white b-px-4 b-py-2 b-rounded b-w-full">
    Contact
  </button>
</div>
```

### 2. Alert Component
```html
<div class="b-bg-success b-text-white b-p-4 b-rounded b-mb-4">
  ✓ İşlem başarılı!
</div>

<div class="b-bg-danger b-text-white b-p-4 b-rounded b-mb-4">
  ✗ Bir hata oluştu!
</div>

<div class="b-bg-warning b-text-white b-p-4 b-rounded b-mb-4">
  ⚠ Dikkat!
</div>
```

### 3. Modal (Toggle ile)
```html
<button class="modal-trigger b-bg-primary b-text-white b-px-6 b-py-3 b-rounded">
  Modal Aç
</button>

<div class="modal b-hidden b-fixed b-w-screen b-h-screen b-bg-dark" style="top:0;left:0;background:rgba(0,0,0,0.5);">
  <div class="b-flex b-items-center b-justify-center b-h-full">
    <div class="b-bg-white b-rounded-lg b-p-8 b-max-w-md">
      <h2 class="b-text-2xl b-font-bold b-mb-4">Modal Başlık</h2>
      <p class="b-mb-6">Modal içeriği buraya gelir.</p>
      <button class="modal-close b-bg-danger b-text-white b-px-4 b-py-2 b-rounded">
        Kapat
      </button>
    </div>
  </div>
</div>

<script>
  B.ready(() => {
    B.toggle('.modal-trigger', '.modal');
    B.toggle('.modal-close', '.modal');
  });
</script>
```

### 4. Loading Spinner
```html
<div class="b-flex b-items-center b-justify-center b-h-screen">
  <div class="spinner b-w-16 b-h-16 b-border-4 b-border-primary b-rounded-full"></div>
</div>

<style>
.spinner {
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
```

### 5. Responsive Grid
```html
<div class="b-grid b-gap-4" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
  <div class="b-bg-light b-p-4 b-rounded">Item 1</div>
  <div class="b-bg-light b-p-4 b-rounded">Item 2</div>
  <div class="b-bg-light b-p-4 b-rounded">Item 3</div>
  <div class="b-bg-light b-p-4 b-rounded">Item 4</div>
</div>
```

Bu örnekleri kopyalayıp projelerinizde kullanabilirsiniz!
