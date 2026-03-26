const STRINGS = {
  pt: {
    nav_agenda: "Agenda",
    nav_services: "Serviços",
    nav_contact: "Contato",
    hero_title: "Respire. Movimente. Integre.",
    hero_sub: "Práticas de yoga e meditação para aumentar foco, reduzir estresse e cultivar presença — online e presenciais.",
    hero_cta1: "Ver agenda",
    hero_cta2: "Planos & Pacotes",
    gallery_title: "Galeria",
    gallery_note: "Substitua os arquivos SVG por suas fotos reais.",
    agenda_title: "Agenda",
    services_title: "Serviços",
    contact_title: "Contato",
    contact_note: "Marque uma sessão experimental. Ajusto horários conforme sua rotina.",
    footer: "© 2026 Laia Mind — Universo Laia"
  },
  es: {
    nav_agenda: "Agenda",
    nav_services: "Servicios",
    nav_contact: "Contacto",
    hero_title: "Respira. Muévete. Integra.",
    hero_sub: "Prácticas de yoga e meditación para foco, menos estrés y más presencia — online y presenciales.",
    hero_cta1: "Ver agenda",
    hero_cta2: "Planes y Paquetes",
    gallery_title: "Galería",
    gallery_note: "Sustituye los archivos SVG por tus fotos reales.",
    agenda_title: "Agenda",
    services_title: "Servicios",
    contact_title: "Contacto",
    contact_note: "Reserva una sesión experimental. Ajusto horarios según tu rutina.",
    footer: "© 2026 Laia Mind — Universo Laia"
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
