import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar">
    <div class="logo">M. Egi <span>Prasetyo</span></div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="#contact" class="btn nav-btn">Let's Talk</a>
  </nav>

  <main>
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="badge">✨ Available for work</div>
        <h1 class="name">Muhammad Egi Prasetyo.</h1>
        <h2 class="role">Crafting elegant software solutions.</h2>
        <p class="summary">Mahasiswa Sistem Informasi Universitas Metamedia (IPK 3.79). Saya membangun aplikasi web yang fungsional, terstruktur, dan memiliki pengalaman pengguna yang modern.</p>
        <div class="hero-actions">
          <a href="#projects" class="btn primary-btn">View My Work <span class="arrow">↓</span></a>
          <div class="social-links">
            <a href="https://wa.me/6282269055139" target="_blank" class="social-icon" title="WhatsApp">WA</a>
            <a href="mailto:muhammadegiprasetyo34@gmail.com" class="social-icon" title="Email">@</a>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="glow-orb orb-primary"></div>
        <div class="glow-orb orb-secondary"></div>
        <div class="glass-panel">
          <div class="panel-header">
            <div class="dots"><span></span><span></span><span></span></div>
            <div class="title">profile.json</div>
          </div>
          <div class="panel-body code-font">
<span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="property">name</span>: <span class="string">"Egi Prasetyo"</span>,
  <span class="property">role</span>: <span class="string">"Full Stack Developer"</span>,
  <span class="property">education</span>: {
    <span class="property">university</span>: <span class="string">"Universitas Metamedia"</span>,
    <span class="property">gpa</span>: <span class="number">3.79</span>
  },
  <span class="property">location</span>: <span class="string">"Kota Solok, Sumbar"</span>
};
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="projects">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Karya unggulan yang merepresentasikan perjalanan belajar dan keahlian saya.</p>
      </div>

      <!-- Project 1: Data Mutu -->
      <div class="bento-project">
        <div class="bento-box bento-main">
          <div class="project-header">
            <h3>Aplikasi Data Mutu</h3>
            <span class="project-sub">Sistem Informasi Manajemen Evaluasi Kuesioner</span>
          </div>
          <div class="project-visual data-mutu-bg"></div>
        </div>
        <div class="bento-box bento-meta">
          <div class="meta-item">
            <span class="meta-label">Year Accomplished</span>
            <span class="meta-value">2026</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Role</span>
            <span class="meta-value">Full Stack Developer</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Publication</span>
            <a href="https://sidamu.metamedia.ac.id/login" target="_blank" class="meta-link">sidamu.metamedia.ac.id</a>
          </div>
        </div>
        <div class="bento-box bento-tech">
          <h4>Tech Stack</h4>
          <div class="tech-tags code-font">
            <span>PHP (Laravel)</span>
            <span>MySQL</span>
            <span>Blade</span>
            <span>Bootstrap 5</span>
            <span>JavaScript</span>
            <span>Chart.js</span>
          </div>
        </div>
        <div class="bento-box bento-details">
          <div class="detail-group">
            <h5>Project Summary</h5>
            <p>Aplikasi berbasis web untuk mengelola kuesioner, responden, dan evaluasi. Menyediakan dashboard analitik interaktif untuk memantau hasil secara real-time.</p>
          </div>
          <div class="detail-group">
            <h5>Impact Made</h5>
            <p>Mempermudah proses evaluasi dan pelaporan manual. Data menjadi terstruktur, mudah dianalisis, dan laporan dihasilkan otomatis.</p>
          </div>
          <div class="detail-group">
            <h5>What I Learned</h5>
            <p>Membangun sistem user-friendly membutuhkan perpaduan UI/UX yang baik dengan logika bisnis kuat. Ini memperkuat kemampuan saya membuat dashboard analitik efisien.</p>
          </div>
        </div>
      </div>

      <!-- Project 2: Bengkel Service -->
      <div class="bento-project project-reverse">
        <div class="bento-box bento-main">
          <div class="project-header">
            <h3>Sistem Manajemen Bengkel</h3>
            <span class="project-sub">Aplikasi manajemen bengkel motor & mobil berbasis web</span>
          </div>
          <div class="project-visual bengkel-bg"></div>
        </div>
        <div class="bento-box bento-meta">
          <div class="meta-item">
            <span class="meta-label">Year Accomplished</span>
            <span class="meta-value">2025</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Role</span>
            <span class="meta-value">Full Stack Developer</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Publication</span>
            <span class="meta-value text-muted">(Private Project)</span>
          </div>
        </div>
        <div class="bento-box bento-tech">
          <h4>Tech Stack</h4>
          <div class="tech-tags code-font">
            <span>PHP (Laravel)</span>
            <span>MySQL</span>
            <span>Bootstrap 5</span>
            <span>JavaScript</span>
            <span>Blade</span>
          </div>
        </div>
        <div class="bento-box bento-details">
          <div class="detail-group">
            <h5>Project Summary</h5>
            <p>Aplikasi untuk membantu bengkel mengelola booking servis, data mekanik, layanan, dan laporan keuangan secara efisien.</p>
          </div>
          <div class="detail-group">
            <h5>Impact Made</h5>
            <p>Memudahkan pengelolaan data booking, antrian servis, dan laporan keuangan sehingga operasional bengkel menjadi lebih terorganisir dan transparan.</p>
          </div>
          <div class="detail-group">
            <h5>What I Learned</h5>
            <p>Meningkatkan kemampuan membangun aplikasi full-stack dengan Laravel, membuat sistem manajemen data kompleks, serta mendesain UI/UX yang user-friendly untuk bisnis nyata.</p>
          </div>
        </div>
      </div>

      <!-- Project 3: E-Riset -->
      <div class="bento-project">
        <div class="bento-box bento-main">
          <div class="project-header">
            <h3>E-Riset Balitbang</h3>
            <span class="project-sub">Sistem Informasi Pendaftaran Riset Online</span>
          </div>
          <div class="project-visual eriset-bg"></div>
        </div>
        <div class="bento-box bento-meta">
          <div class="meta-item">
            <span class="meta-label">Year Accomplished</span>
            <span class="meta-value">2025</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Role</span>
            <span class="meta-value">Full Stack Developer</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Publication</span>
            <span class="meta-value text-muted">(Private Project)</span>
          </div>
        </div>
        <div class="bento-box bento-tech">
          <h4>Tech Stack</h4>
          <div class="tech-tags code-font">
            <span>PHP (Laravel)</span>
            <span>MySQL</span>
            <span>Bootstrap 5</span>
            <span>JavaScript</span>
            <span>Chart.js</span>
            <span>Cloudinary</span>
          </div>
        </div>
        <div class="bento-box bento-details">
          <div class="detail-group">
            <h5>Project Summary</h5>
            <p>Platform berbasis web untuk pendaftaran dan pengelolaan riset/penelitian secara online di Balitbang Sumatera Barat.</p>
          </div>
          <div class="detail-group">
            <h5>Impact Made</h5>
            <p>Mempermudah peneliti melakukan pendaftaran riset online. Proses verifikasi dan pelaporan menjadi lebih cepat, transparan, dan terarsip digital.</p>
          </div>
          <div class="detail-group">
            <h5>What I Learned</h5>
            <p>Meningkatkan kemampuan membangun sistem end-to-end dengan fokus pada pengalaman pengguna (UX) dan pengelolaan dokumen yang aman.</p>
          </div>
        </div>
      </div>

    </section>

    <section id="contact" class="contact">
      <div class="contact-container">
        <h2>Let's build something amazing together.</h2>
        <p>Currently available for new opportunities and collaborations.</p>
        <div class="contact-cards">
          <a href="mailto:muhammadegiprasetyo34@gmail.com" class="c-card">
            <div class="c-icon">📧</div>
            <div>
              <h3>Email Me</h3>
              <p>muhammadegiprasetyo34@gmail.com</p>
            </div>
          </a>
          <a href="https://wa.me/6282269055139" target="_blank" class="c-card">
            <div class="c-icon">💬</div>
            <div>
              <h3>WhatsApp</h3>
              <p>0822-6905-5139</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
  
  <footer>
    <div class="footer-content">
      <div class="f-logo">M. Egi <span>Prasetyo</span></div>
      <p>&copy; ${new Date().getFullYear()} Muhammad Egi Prasetyo. All rights reserved.</p>
    </div>
  </footer>
`

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    if (targetId) {
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.bento-box, .section-header, .contact-container').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
