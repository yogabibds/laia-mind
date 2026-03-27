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
    agenda_sub: "Escolha a modalidade que melhor acompanha seu ritmo e seu momento.",

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
    agenda_sub: "Elige la modalidad que mejor acompaña tu ritmo y tu momento.",

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
    agenda_sub: "Choose the format that best supports your rhythm and your moment.",

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
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderAgenda(lang);
  localStorage.setItem("preferredLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
    });
  });

  const savedLang = localStorage.getItem("preferredLang") || "pt";
  applyLang(savedLang);
});
