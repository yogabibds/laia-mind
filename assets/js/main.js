const STRINGS = {
  pt: {
    nav_agenda: "Agenda",
    nav_services: "Serviços",
    nav_contact: "Contato",
    profile_meta: "Yoga • Meditação • Respiração",
    hero_title: "Respire. Movimente. Integre.",
    hero_sub: "Práticas de yoga e meditação para aumentar foco, reduzir estresse e cultivar presença — online e presenciais.",
    hero_cta1: "Ver agenda",
    hero_cta2: "Planos & Pacotes",
    gallery_title: "Galeria",
    agenda_title: "Agenda",
    services_title: "Serviços",
    svc_g_title: "Aula em grupo",
    svc_g_desc: "Sessões semanais via Zoom",
    svc_g_price: "ARS 6.000 / aula",
    svc_prog_title: "Programa 4 semanas",
    svc_prog_desc: "Acompanhamento completo",
    svc_prog_price: "ARS 120.000",
    contact_title: "Contato",
    contact_note: "Marque uma sessão experimental. Ajusto horários conforme sua rotina.",
    footer: "© 2026 Laiá Wellness — Universo Laia"
  },
  es: {
    nav_agenda: "Agenda",
    nav_services: "Servicios",
    nav_contact: "Contacto",
    profile_meta: "Yoga • Meditación • Respiración",
    hero_title: "Respira. Muévete. Integra.",
    hero_sub: "Prácticas de yoga y meditación para aumentar el enfoque, reducir el estrés y cultivar presencia — online y presenciales.",
    hero_cta1: "Ver agenda",
    hero_cta2: "Planes y Paquetes",
    gallery_title: "Galería",
    agenda_title: "Agenda",
    services_title: "Servicios",
    svc_g_title: "Clase grupal",
    svc_g_desc: "Sesiones semanales vía Zoom",
    svc_g_price: "ARS 6.000 / clase",
    svc_prog_title: "Programa de 4 semanas",
    svc_prog_desc: "Acompañamiento completo",
    svc_prog_price: "ARS 120.000",
    contact_title: "Contacto",
    contact_note: "Reserva una sesión experimental. Adapto los horarios a tu rutina.",
    footer: "© 2026 Laiá Wellness — Universo Laia"
  },
  en: {
    nav_agenda: "Schedule",
    nav_services: "Services",
    nav_contact: "Contact",
    profile_meta: "Yoga • Meditation • Breathwork",
    hero_title: "Breathe. Move. Integrate.",
    hero_sub: "Yoga and meditation practices to increase focus, reduce stress, and cultivate presence — online and in person.",
    hero_cta1: "View schedule",
    hero_cta2: "Plans & Packages",
    gallery_title: "Gallery",
    agenda_title: "Schedule",
    services_title: "Services",
    svc_g_title: "Group Class",
    svc_g_desc: "Weekly sessions via Zoom",
    svc_g_price: "ARS 6,000 / class",
    svc_prog_title: "4-Week Program",
    svc_prog_desc: "Complete support",
    svc_prog_price: "ARS 120,000",
    contact_title: "Contact",
    contact_note: "Book a trial session. I adapt the schedule to your routine.",
    footer: "© 2026 Laiá Wellness — Universo Laia"
  }
};

const SESSIONS = {
  pt: [
    { name: "Vinyasa Flow (online)", day: "Terças", time: "19:00–20:00" },
    { name: "Meditação guiada (online)", day: "Quintas", time: "19:30–20:00" },
    { name: "Particular 1:1 (por agendamento)", day: "Flexível", time: "Sob consulta" }
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
  if (!agendaList) return;

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
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  const savedLang = localStorage.getItem("preferredLang") || "pt";
  applyLang(savedLang);
});
