
document.addEventListener('DOMContentLoaded',()=>{
  const sessions=[
    {name:'Vinyasa Flow (online)', day:'Terças', time:'19:00–20:00'},
    {name:'Meditação guiada (online)', day:'Quintas', time:'19:30–20:00'},
    {name:'Particular 1:1 (por agendamento)', day:'Flexível', time:'Sob consulta'}
  ];
  const wrap=document.querySelector('#agenda');
  sessions.forEach(s=>{
    const div=document.createElement('div'); div.className='item';
    div.innerHTML=`<div><strong>${s.name}</strong><div class="small">${s.day}</div></div><div>${s.time}</div>`;
    wrap.appendChild(div);
  });
});
