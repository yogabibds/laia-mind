Skip to content
yogabibds
laia-mind
Repository navigation
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Important update
On April 24 we'll start using GitHub Copilot interaction data for AI model training unless you opt out. Review this update and manage your preferences in your GitHub account settings.
Files
Go to file
t
js content loaded
assets
css
styles.css
icons
.testing
icon-sphere-128.png
icon-sphere-256.png
icon-sphere-32.png
icon-sphere-64.png
img
gallery
yoga-1.svg
yoga-2.svg
yoga-3.svg
yoga-4.svg
hero.svg
pfp.svg
js
main.js
README.md
index.html
laia-mind
/index.html
yogabibds
yogabibds
Enhance layout and content in index.html
e8f51fd
 · 
22 minutes ago

Code

Blame
242 lines (224 loc) · 11.8 KB
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laia Mind — Yoga & Bem‑estar</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <header class="topbar">
    <div class="container nav-wrapper">
      <strong class="brand-name">Laia Mind</strong>
      <nav class="main-nav">
        <a class="nav-link" href="#agenda" data-i18n="nav_agenda">Agenda</a>
        <a class="nav-link" href="#servicos" data-i18n="nav_services">Serviços</a>
        <a class="nav-link" href="#contato" data-i18n="nav_contact">Contato</a>
        <div class="lang-switcher">
          <button class="lang-btn" data-lang="pt">PT</button>
          <button class="lang-btn" data-lang="es">ES</button>
          <button class="lang-btn" data-lang="en">EN</button>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <section class="container hero">
      <div class="hero-grid">
        <div class="hero-text">
          <div class="profile-card">
            <img src="assets/img/pfp.jpg" alt="Gabi Barbosa" class="pfp">
            <div>
              <strong>Gabi Barbosa</strong>
              <div class="small" style="color: var(--sage-green)">Yoga • Meditação • Respiração</div>
            </div>
          </div>
          <h1 data-i18n="hero_title">Respire. Movimente. Integre.</h1>
          <p class="lead" data-i18n="hero_sub">Práticas de yoga e meditação para aumentar foco, reduzir estresse e cultivar presença.</p>
          <div class="cta-row">
            <a class="btn primary" href="#agenda" data-i18n="hero_cta1">Ver agenda</a>
            <a class="btn" href="#servicos" data-i18n="hero_cta2">Planos & Pacotes</a>
          </div>
        </div>
        <div class="hero-image">
           <div class="gallery-item" style="aspect-ratio: 16/9; width: 100%;">
            <img src="assets/img/hero.jpg" alt="Yoga">
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="h2" data-i18n="gallery_title">Galeria</h2>
      <div class="gallery">
        <div class="gallery-item"><img src="assets/img/gallery/yoga-1.jpg" alt="Yoga 1"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-2.jpg" alt="Yoga 2"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-3.jpg" alt="Yoga 3"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-4.jpg" alt="Yoga 4"></div>
      </div>
    </section>

    <section id="servicos" class="container section">
      <h2 class="h2" data-i18n="services_title">Serviços</h2>
      <div class="services-grid">
        <div class="card">
          <h3 data-i18n="svc_g_title">Aula em grupo</h3>
          <p class="muted" data-i18n="svc_g_desc">Sessões semanais · Zoom</p>
          <div class="price">ARS 6.000 / aula</div>
        </div>
        <div class="card highlight">
          <h3 data-i18n="svc_prog_title">Programa 4 semanas</h3>
          <p class="muted" data-i18n="svc_prog_desc">Acompanhamento completo</p>
          <div class="price">ARS 120.000</div>
        </div>
      </div>
    </section>

    <section id="contato" class="container section" style="text-align: center;">
      <h2 class="h2" data-i18n="contact_title">Contato</h2>
      <p data-i18n="contact_note">Marque uma sessão experimental.</p>
      <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center;">
        <a class="btn primary" href="https://wa.me/5493412280994" target="_blank">WhatsApp</a>
        <a class="btn" href="mailto:mind@universolaia.com">Email</a>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="container">
      <span data-i18n="footer">© 2026 Laia Mind — Universo Laia</span>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>
            </div>
          </div>
          <h1 data-i18n="hero_title">Respire. Movimente. Integre.</h1>
          <p class="lead" data-i18n="hero_sub">Práticas de yoga e meditação para aumentar foco, reduzir estresse e cultivar presença — online e presenciais.</p>
          <div class="cta-row">
            <a class="btn primary" href="#agenda" data-i18n="hero_cta1">Ver agenda</a>
            <a class="btn" href="#servicos" data-i18n="hero_cta2">Planos & Pacotes</a>
          </div>
        </div>
        <div class="hero-image">
           <div class="image-placeholder">
            <img src="assets/img/hero.svg" alt="Yoga Illustration">
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="h2" data-i18n="gallery_title">Galeria</h2>
      <div class="gallery">
        <div class="gallery-item"><img src="assets/img/gallery/yoga-1.jpg" alt="Yoga"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-2.jpg" alt="Yoga"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-3.jpg" alt="Yoga"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-4.jpg" alt="Yoga"></div>
      </div>
      <p class="small muted" data-i18n="gallery_note" style="margin-top:10px">Substitua os arquivos por suas fotos reais.</p>
    </section>

    <section id="agenda" class="container section">
      <h2 class="h2" data-i18n="agenda_title">Agenda</h2>
      <div class="schedule-placeholder">
        <p class="muted">Calendário semanal em atualização...</p>
      </div>
    </section>

    <section id="servicos" class="container section">
      <h2 class="h2" data-i18n="services_title">Serviços</h2>
      <div class="services-grid" id="services-container">
        <div class="card">
          <h3 data-i18n="svc_g_title">Aula em grupo (online)</h3>
          <p class="muted" data-i18n="svc_g_desc">Sessões semanais · Zoom</p>
          <div class="price" data-i18n="svc_g_price">ARS 6.000 / aula</div>
        </div>
        <div class="card">
          <h3 data-i18n="svc_p_title">Particular 1:1</h3>
          <p class="muted" data-i18n="svc_p_desc">Plano personalizado · Respiração</p>
          <div class="price" data-i18n="svc_p_price">ARS 18.000 / sessão</div>
        </div>
        <div class="card highlight">
          <h3 data-i18n="svc_prog_title">Programa 4 semanas</h3>
          <p class="muted" data-i18n="svc_prog_desc">2x por semana + acompanhamento</p>
          <div class="price" data-i18n="svc_prog_price">ARS 120.000</div>
        </div>
      </div>
    </section>

    <section id="contato" class="container section">
      <h2 class="h2" data-i18n="contact_title">Contato</h2>
      <div class="contact-box">
        <p data-i18n="contact_note">Marque uma sessão experimental. Ajusto horários conforme sua rotina.</p>
        <div class="cta-row" style="justify-content: center; margin-top: 20px;">
          <a class="btn primary wa-btn" href="https://wa.me/5493412280994" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.843L.057 23.927l6.235-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.374l-.36-.214-3.727.977.996-3.638-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
            WhatsApp
          </a>
          <a class="btn" href="mailto:mind@universolaia.com">Email</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="container">
      <span data-i18n="footer">© 2026 Laia Mind — Universo Laia</span>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>          </div>
        </div>
        <h1 data-i18n="hero_title">Respire. Movimente. Integre.</h1>
        <p data-i18n="hero_sub">Práticas de yoga e meditação para aumentar foco, reduzir estresse e cultivar presença — online e presenciais.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">
          <a class="btn primary" href="#agenda" data-i18n="hero_cta1">Ver agenda</a>
          <a class="btn" href="#servicos" data-i18n="hero_cta2">Planos & Pacotes</a>
        </div>
      </div>
      <div>
        <img src="assets/img/hero.svg" alt="Yoga pose illustration">
      </div>
    </section>

    <!-- GALLERY -->
    <section class="container section">
      <h2 data-i18n="gallery_title">Galeria</h2>
      <div class="gallery">
        <img src="assets/img/gallery/yoga-1.svg" alt="Yoga 1">
        <img src="assets/img/gallery/yoga-2.svg" alt="Yoga 2">
        <img src="assets/img/gallery/yoga-3.svg" alt="Yoga 3">
        <img src="assets/img/gallery/yoga-4.svg" alt="Yoga 4">
      </div>
      <p class="small" data-i18n="gallery_note" style="margin-top:10px">Substitua os arquivos SVG por suas fotos reais.</p>
    </section>

    <!-- AGENDA -->
    <section id="agenda" class="container section">
      <h2 data-i18n="agenda_title">Agenda</h2>
      <div class="schedule"></div>
    </section>

    <!-- SERVIÇOS -->
    <section id="servicos" class="container section">
      <h2 data-i18n="services_title">Serviços</h2>
      <div class="grid"></div>
    </section>

    <!-- CONTATO -->
    <section id="contato" class="container section">
      <h2 data-i18n="contact_title">Contato</h2>
      <div class="contact-box">
        <a class="btn primary" href="https://wa.me/5493412280994" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.843L.057 23.927l6.235-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.374l-.36-.214-3.727.977.996-3.638-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
          WhatsApp
        </a>
        <a class="btn" href="mailto:mind@universolaia.com">mind@universolaia.com</a>
      </div>
      <p class="small" data-i18n="contact_note" style="margin-top:14px">Marque uma sessão experimental. Ajusto horários conforme sua rotina.</p>
    </section>
  </main>

  <footer>
    <div class="container">
      <span data-i18n="footer">© 2025 Laia Mind — Universo Laia</span>
      <div style="display:flex;gap:16px">
        <a href="https://wa.me/5493412280994" target="_blank" rel="noopener" style="opacity:.6">WhatsApp</a>
        <a href="mailto:mind@universolaia.com" style="opacity:.6">Email</a>
      </div>
    </div>
  </footer>

  <script src="assets/js/app.js"></script>
</body>
</html>
js content loaded  },
  en: {
    nav_agenda: "Schedule",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "Breathe. Move. Integrate.",
    hero_sub: "Yoga and meditation to increase focus, reduce stress and cultivate presence — online and in person.",
    hero_cta1: "See schedule",
    hero_cta2: "Plans & Packages",
    gallery_title: "Gallery",
    services_title: "Services",
    svc_g_title: "Group Class",
    svc_g_desc: "Weekly sessions via Zoom",
    svc_prog_title: "4-Week Program",
    svc_prog_desc: "Complete coaching",
    contact_title: "Contact",
    contact_note: "Book a trial session. I adapt to your routine.",
    footer: "© 2026 Laia Mind — Universo Laia"
  }
};

function applyLang(lang) {
  // 1. Atualiza o atributo lang
  document.documentElement.lang = lang;
  
  // 2. Traduz todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (STRINGS[lang] && STRINGS[lang][key]) {
      el.textContent = STRINGS[lang][key];
    }
  });

  // 3. Atualiza os botões ativos
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // 4. Salva a escolha
  localStorage.setItem('preferredLang', lang);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Configura os botões de clique
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  // Aplica o idioma salvo ou padrão
  const savedLang = localStorage.getItem('preferredLang') || 'pt';
  applyLang(savedLang);
});
  },
  en: {
    nav_agenda: "Schedule",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "Breathe. Move. Integrate.",
    hero_sub: "Yoga and meditation to increase focus, reduce stress and cultivate presence — online and in person.",
    hero_cta1: "See schedule",
    hero_cta2: "Plans & Packages",
    gallery_title: "Gallery",
    services_title: "Services",
    svc_g_title: "Group Class",
    svc_g_desc: "Weekly sessions via Zoom",
    svc_prog_title: "4-Week Program",
    svc_prog_desc: "Complete coaching",
    contact_title: "Contact",
    contact_note: "Book a trial session. I adapt to your routine.",
    footer: "© 2026 Laia Mind — Universo Laia"
  }
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (STRINGS[lang][key]) el.textContent = STRINGS[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  localStorage.setItem('preferredLang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

document.addEventListener('DOMContentLoaded', () => {
  applyLang(localStorage.getItem('preferredLang') || 'pt');
});
    nav_contact: "Contact",
    hero_title: "Breathe. Move. Integrate.",
    hero_sub: "Yoga and meditation to increase focus, reduce stress and cultivate presence — online and in person.",
    hero_cta1: "See schedule",
    hero_cta2: "Plans & Packages",
    gallery_title: "Gallery",
    gallery_note: "Replace SVG files with your real photos.",
    agenda_title: "Schedule",
    services_title: "Services",
    contact_title: "Contact",
    contact_note: "Book a trial session. I adapt to your routine.",
    footer: "© 2026 Laia Mind — Universo Laia"
  }
};

// Função para aplicar o idioma
function applyLang(lang) {
  // Define o atributo lang no HTML (bom para SEO)
  document.documentElement.lang = lang;
  
  // Busca todos os elementos que tenham o atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (STRINGS[lang] && STRINGS[lang][key]) {
      el.textContent = STRINGS[lang][key];
    }
  });

  // Atualiza a classe 'active' nos botões de troca de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Opcional: Salva a preferência do usuário no navegador
  localStorage.setItem('preferredLang', lang);
}

// Configura os cliques nos botões de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.getAttribute('data-lang');
    applyLang(selectedLang);
  });
});

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  // Tenta recuperar idioma salvo ou usa PT como padrão
  const savedLang = localStorage.getItem('preferredLang') || 'pt';
  applyLang(savedLang);
});// logo toggle via ?logo=mandala
const params = new URLSearchParams(location.search);
if(params.get('logo')==='mandala'){
  document.getElementById('brandMark').src='assets/logo/logo-mandala-64.png';
  document.getElementById('heroLogo').src='assets/logo/logo-mandala-256.png';
}
