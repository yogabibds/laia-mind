const STRINGS = {
  pt:{
    nav:{home:"Laia Mind",agenda:"Agenda",servicos:"Serviços",contato:"Contato"},
    hero:{title:"Respire. Movimente. Integre.",lead:"Práticas de yoga e meditação para aumentar foco, reduzir estresse e cultivar presença — online e presenciais." ,cta1:"Ver agenda",cta2:"Planos & Pacotes"},
    agenda:{title:"Agenda",note:"Exemplo de agenda semanal. Substitua por seu calendário."},
    servicos:{title:"Serviços",g:{title:"Aula em grupo (online)",desc:"Sessões semanais · Zoom",price:"ARS 6.000 / aula"},p:{title:"Particular 1:1",desc:"Plano personalizado · Respiração · Alongamento",price:"ARS 18.000 / sessão"},prog:{title:"Programa 4 semanas",desc:"2x por semana + acompanhamento",price:"ARS 120.000"}},
    contato:{title:"Contato",cta:"Marque uma sessão experimental. Ajusto horários conforme sua rotina.",wa:"WhatsApp",email:"E-mail"},
    galeria:{title:"Galeria"}
  },
  es:{
    nav:{home:"Laia Mind",agenda:"Agenda",servicos:"Servicios",contato:"Contacto"},
    hero:{title:"Respira. Muévete. Integra.",lead:"Prácticas de yoga y meditación para foco, menos estrés y más presencia — online y presenciales.",cta1:"Ver agenda",cta2:"Planes y Paquetes"},
    agenda:{title:"Agenda",note:"Ejemplo de agenda semanal. Sustituye con tu calendario."},
    servicos:{title:"Servicios",g:{title:"Clase grupal (online)",desc:"Sesiones semanales · Zoom",price:"ARS 6.000 / clase"},p:{title:"Particular 1:1",desc:"Plan personalizado · Respiración · Estiramiento",price:"ARS 18.000 / sesión"},prog:{title:"Programa 4 semanas",desc:"2x por semana + acompañamiento",price:"ARS 120.000"}},
    contato:{title:"Contacto",cta:"Reserva una sesión experimental. Ajusto horarios según tu rutina.",wa:"WhatsApp",email:"Correo"},
    galeria:{title:"Galería"}
  },
  en:{
    nav:{home:"Laia Mind",agenda:"Schedule",servicos:"Services",contato:"Contact"},
    hero:{title:"Breathe. Move. Integrate.",lead:"Yoga and meditation to increase focus, reduce stress and cultivate presence — online and in person.",cta1:"See schedule",cta2:"Plans & Packages"},
    agenda:{title:"Schedule",note:"Weekly example. Replace with your calendar."},
    servicos:{title:"Services",g:{title:"Group class (online)",desc:"Weekly sessions · Zoom",price:"ARS 6,000 / class"},p:{title:"1:1 Private",desc:"Personalized plan · Breath · Stretching",price:"ARS 18,000 / session"},prog:{title:"4-week program",desc:"2x per week + follow-up",price:"ARS 120,000"}},
    contato:{title:"Contact",cta:"Book a trial session. I adapt to your routine.",wa:"WhatsApp",email:"Email"},
    galeria:{title:"Gallery"}
  }
};

const html=document.documentElement;
function t(path){
  const dict=STRINGS[html.lang]||STRINGS.pt;
  return path.split('.').reduce((o,k)=>o&&o[k], dict) || path;
}
function applyLang(l){html.lang=l;document.querySelectorAll('[data-i18n]').forEach(n=>n.textContent=t(n.dataset.i18n));}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('active'));b.classList.add('active');applyLang(b.dataset.lang)});
applyLang('pt');

// logo toggle via ?logo=mandala
const params = new URLSearchParams(location.search);
if(params.get('logo')==='mandala'){
  document.getElementById('brandMark').src='assets/logo/logo-mandala-64.png';
  document.getElementById('heroLogo').src='assets/logo/logo-mandala-256.png';
}