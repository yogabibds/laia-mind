const STRINGS = {
  pt: {
    nav_agenda: "Agenda",
    nav_services: "Serviços",
    nav_contact: "Contato",

    profile_meta: "Yoga • Meditação • Respiração",

    hero_title: "Sua pausa consciente começa aqui.",
    hero_sub: "Aulas de yoga e meditação para reduzir o estresse, recuperar energia e voltar ao seu centro. Práticas online e presenciais com acompanhamento leve, humano e acessível.",
    hero_cta1: "Reservar minha aula",
    hero_cta2: "Ver opções",
    hero_note: "Primeira conversa simples e sem complicação pelo WhatsApp.",

    gallery_title: "Um espaço para respirar, mover e voltar para si",

    agenda_title: "Escolha sua prática",

    services_title: "Aulas e programas",

    svc_g_title: "Aula em grupo",
    svc_g_desc: "Ideal para começar com leveza, criar rotina e praticar em companhia.",
    svc_g_price: "USD 4 / aula",

    svc_p_title: "Sessão privada 1:1",
    svc_p_desc: "Uma prática personalizada para seu momento, seu corpo e sua necessidade.",
    svc_p_price: "USD 12 / sessão",

    svc_prog_title: "Programa 4 semanas",
    svc_prog_desc: "Para quem quer consistência, acompanhamento e transformação real no dia a dia.",
    svc_prog_price: "USD 83",

    offer_title: "Comece com uma aula",
    offer_text: "Se você está buscando mais calma, foco e bem-estar, a melhor forma de começar é reservar sua primeira aula. Sem pressão, sem experiência prévia, no seu ritmo.",
    offer_cta: "Quero reservar minha primeira aula",

    contact_title: "Vamos agendar?",
    contact_note: "Me escreva e eu te ajudo a escolher a melhor prática para você. Você pode reservar sua aula pelo WhatsApp ou falar comigo por e-mail.",

    footer: "© 2026 Laiá Wellness — Universo Laia"
  },

  es: {
    nav_agenda: "Agenda",
    nav_services: "Servicios",
    nav_contact: "Contacto",

    profile_meta: "Yoga • Meditación • Respiración",

    hero_title: "Tu pausa consciente empieza aquí.",
    hero_sub: "Clases de yoga y meditación para reducir el estrés, recuperar energía y volver a tu centro. Prácticas online y presenciales con acompañamiento humano, accesible y cercano.",
    hero_cta1: "Reservar mi clase",
    hero_cta2: "Ver opciones",
    hero_note: "Primera conversación simple y sin complicaciones por WhatsApp.",

    gallery_title: "Un espacio para respirar, moverte y volver a ti",

    agenda_title: "Elige tu práctica",

    services_title: "Clases y programas",

    svc_g_title: "Clase grupal",
    svc_g_desc: "Ideal para comenzar con suavidad, crear rutina y practicar en compañía.",
    svc_g_price: "USD 4 / clase",

    svc_p_title: "Sesión privada 1:1",
    svc_p_desc: "Una práctica personalizada para tu momento, tu cuerpo y tu necesidad.",
    svc_p_price: "USD 12 / sesión",

    svc_prog_title: "Programa de 4 semanas",
    svc_prog_desc: "Para quienes buscan constancia, acompañamiento y una transformación real en el día a día.",
    svc_prog_price: "USD 83",

    offer_title: "Empieza con una clase",
    offer_text: "Si estás buscando más calma, foco y bienestar, la mejor forma de empezar es reservar tu primera clase. Sin presión, sin experiencia previa y a tu ritmo.",
    offer_cta: "Quiero reservar mi primera clase",

    contact_title: "¿Agendamos?",
    contact_note: "Escríbeme y te ayudo a elegir la práctica ideal para ti. Puedes reservar tu clase por WhatsApp o escribirme por e-mail.",

    footer: "© 2026 Laiá Wellness — Universo Laia"
  },

  en: {
    nav_agenda: "Schedule",
    nav_services: "Services",
    nav_contact: "Contact",

    profile_meta: "Yoga • Meditation • Breathwork",

    hero_title: "Your mindful pause starts here.",
    hero_sub: "Yoga and meditation classes to reduce stress, restore energy, and help you come back to your center. Online and in-person practices with warm, accessible guidance.",
    hero_cta1: "Book my class",
    hero_cta2: "See options",
    hero_note: "A simple first conversation on WhatsApp, with no pressure.",

    gallery_title: "A space to breathe, move, and return to yourself",

    agenda_title: "Choose your practice",

    services_title: "Classes and programs",

    svc_g_title: "Group Class",
    svc_g_desc: "Perfect for starting gently, building consistency, and practicing in community.",
    svc_g_price: "USD 4 / class",

    svc_p_title: "Private 1:1 Session",
    svc_p_desc: "A personalized practice designed for your moment, your body, and your needs.",
    svc_p_price: "USD 12 / session",

    svc_prog_title: "4-Week Program",
    svc_prog_desc: "For those seeking consistency, support, and meaningful transformation in everyday life.",
    svc_prog_price: "USD 83",

    offer_title: "Start with one class",
    offer_text: "If you are looking for more calm, focus, and well-being, the best way to begin is by booking your first class. No pressure, no prior experience, just your own pace.",
    offer_cta: "I want to book my first class",

    contact_title: "Shall we book?",
    contact_note: "Message me and I will help you choose the best practice for you. You can book your class on WhatsApp or contact me by email.",

    footer: "© 2026 Laiá Wellness — Universo Laia"
  }
};

const SESSIONS = {
  pt: [
    { name: "Vinyasa Flow (online)", day: "Terças", time: "19:00–20:00" },
    { name: "Meditação guiada (online)", day: "Quintas", time: "19:30–20:00" },
    { name: "Sessão privada 1:1", day: "Flexível", time: "Sob consulta" }
  ],
  es: [
    { name: "Vinyasa Flow (online)", day: "Martes", time: "19:00–20:00" },
    { name: "Meditación guiada (online)", day: "Jueves", time: "19:30–20:00" },
    { name: "Sesión privada 1:1", day: "Flexible", time: "A consultar" }
  ],
  en: [
    { name: "Vinyasa Flow (online)", day: "Tuesdays", time: "19:00–20:00" },
    { name: "Guided Meditation (online)", day: "Thursdays", time: "19:30–20:00" },
    { name: "Private 1:1 Session", day: "Flexible", time: "By request" }
  ]
};

function renderAgenda(lang) {
  const agendaList = document.getElementById("agenda-list");
  if (!agendaList || !SESSIONS[lang]) return;

  agendaList.innerHTML = "";

  SESSIONS[lang].forEach((session) => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <div>
        <strong>${session.name}</strong>
        <div class="small">${session.day}</div>
      </div>
      <div>${session.time}</div>
    `;
    agendaList.appendChild(item);
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (STRINGS[lang] && STRINGS[lang][key]) {
      el.textContent = STRINGS[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  renderAgenda(lang);
  localStorage.setItem("preferredLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLang(lang);
    });
  });

  const savedLang = localStorage.getItem("preferredLang") || "pt";
  applyLang(savedLang);
});
        <div class="lang-switcher">
          <button type="button" class="lang-btn" data-lang="pt">PT</button>
          <button type="button" class="lang-btn" data-lang="es">ES</button>
          <button type="button" class="lang-btn" data-lang="en">EN</button>
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
              <div class="small profile-meta" data-i18n="profile_meta">Yoga • Meditação • Respiração</div>
            </div>
          </div>

          <h1 data-i18n="hero_title">Sua pausa consciente começa aqui.</h1>

          <p class="lead" data-i18n="hero_sub">
            Aulas de yoga e meditação para reduzir o estresse, recuperar energia e voltar ao seu centro. Práticas online e presenciais com acompanhamento leve, humano e acessível.
          </p>

          <div class="cta-row">
            <a
              class="btn primary"
              href="https://wa.me/5493413739528?text=Hola!%20Quiero%20reservar%20una%20clase%20de%20yoga."
              target="_blank"
              rel="noopener"
              data-i18n="hero_cta1"
            >
              Reservar minha aula
            </a>

            <a class="btn" href="#servicos" data-i18n="hero_cta2">Ver opções</a>
          </div>

          <p class="small" style="margin-top:14px" data-i18n="hero_note">
            Primeira conversa simples e sem complicação pelo WhatsApp.
          </p>
        </div>

        <div class="hero-image">
          <div class="hero-frame">
            <img src="assets/img/hero.jpg" alt="Laiá Wellness Hero">
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="h2" data-i18n="gallery_title">Um espaço para respirar, mover e voltar para si</h2>

      <div class="gallery">
        <div class="gallery-item"><img src="assets/img/gallery/yoga-1.jpg" alt="Yoga 1"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-2.jpg" alt="Yoga 2"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-3.jpg" alt="Yoga 3"></div>
        <div class="gallery-item"><img src="assets/img/gallery/yoga-4.jpg" alt="Yoga 4"></div>
      </div>
    </section>

    <section id="agenda" class="container section">
      <h2 class="h2" data-i18n="agenda_title">Escolha sua prática</h2>
      <div id="agenda-list" class="schedule"></div>
    </section>

    <section id="servicos" class="container section">
      <h2 class="h2" data-i18n="services_title">Aulas e programas</h2>

      <div class="services-grid">
        <div class="card">
          <h3 data-i18n="svc_g_title">Aula em grupo</h3>
          <p class="muted" data-i18n="svc_g_desc">
            Ideal para começar com leveza, criar rotina e praticar em companhia.
          </p>
          <div class="price" data-i18n="svc_g_price">USD 4 / aula</div>
        </div>

        <div class="card">
          <h3 data-i18n="svc_p_title">Sessão privada 1:1</h3>
          <p class="muted" data-i18n="svc_p_desc">
            Uma prática personalizada para seu momento, seu corpo e sua necessidade.
          </p>
          <div class="price" data-i18n="svc_p_price">USD 12 / sessão</div>
        </div>

        <div class="card highlight">
          <h3 data-i18n="svc_prog_title">Programa 4 semanas</h3>
          <p class="muted" data-i18n="svc_prog_desc">
            Para quem quer consistência, acompanhamento e transformação real no dia a dia.
          </p>
          <div class="price" data-i18n="svc_prog_price">USD 83</div>
        </div>
      </div>
    </section>

    <section class="container section">
      <div class="card highlight" style="text-align:center;">
        <h2 class="h2" style="margin-bottom:12px;" data-i18n="offer_title">Comece com uma aula</h2>
        <p class="muted" style="max-width:760px;margin:0 auto 20px;" data-i18n="offer_text">
          Se você está buscando mais calma, foco e bem-estar, a melhor forma de começar é reservar sua primeira aula. Sem pressão, sem experiência prévia, no seu ritmo.
        </p>
        <a
          class="btn primary"
          href="https://wa.me/5493413739528?text=Hola!%20Quiero%20reservar%20mi%20primera%20clase."
          target="_blank"
          rel="noopener"
          data-i18n="offer_cta"
        >
          Quero reservar minha primeira aula
        </a>
      </div>
    </section>

    <section id="contato" class="container section contact-section">
      <h2 class="h2" data-i18n="contact_title">Vamos agendar?</h2>

      <p class="contact-note" data-i18n="contact_note">
        Me escreva e eu te ajudo a escolher a melhor prática para você. Você pode reservar sua aula pelo WhatsApp ou falar comigo por e-mail.
      </p>

      <div class="contact-actions">
        <a
          class="btn primary"
          href="https://wa.me/5493413739528?text=Hola!%20Quiero%20reservar%20una%20clase%20de%20yoga."
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </a>

        <a class="btn" href="mailto:universolaia06@gmail.com">
          universolaia06@gmail.com
        </a>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="container">
      <span data-i18n="footer">© 2026 Laiá Wellness — Universo Laia</span>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>
