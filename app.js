const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const collagePaths = [
 ["assets/Week1/w1a.jpg","W01","Week 1"],["assets/Week3/w3b.jpg","W03","Computer Aided Design"],
 ["assets/Week4/IceWeek4(1).jpg","W04","Embedded Systems"],["assets/week8/robot.jpg","W08","Era-One"],["assets/week10/game week10.jpg","W10","GameJam"]
];

function fallbackArt(){return `<div class="fallback-art"><i data-lucide="scan-line"></i></div>`}

function renderCollage(){
 $('#photo-collage').innerHTML=collagePaths.map(([src,tag,label])=>`<div class="tile" title="${label}"><img src="${src}" alt="${label}" onerror="this.parentElement.innerHTML='<div class=&quot;fallback-art&quot;><i data-lucide=&quot;component&quot;></i></div><div class=&quot;tile-tag&quot;>${tag}</div>'"><div class="tile-tag">${tag}</div></div>`).join('');
}

const filters=[['all','All Weeks (16)'],['interactive','With Interactive Media'],['midterm','Midterm Phase (W1–W9)'],['final','Final Phase (W10–W16)']];
let activeFilter='all';
function renderFilters(){
 $('#filter-tabs').innerHTML=filters.map(([key,label])=>`<button data-filter="${key}" class="${key===activeFilter?'active':''}">${label}</button>`).join('');
 $$('#filter-tabs button').forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;renderFilters();renderWeeks()});
}

function shouldShow(w){
 if(activeFilter==='interactive')return w.interactive;
 if(activeFilter==='midterm')return w.week<=9;
 if(activeFilter==='final')return w.week>=10;
 return true;
}
function renderWeeks(){
 $('#week-grid').innerHTML=CPE102.weeks.filter(shouldShow).map(w=>{
  const glow=w.color+'25';
  return `<article class="week-card" style="--accent:${w.color};--glow:${glow}" data-week="${w.week}">
  <div class="card-cover">${w.image?`<img src="${w.image}" alt="${w.title}" onerror="this.remove()"><div class="cover-orb"></div>`:fallbackArt().replace('<div class="fallback-art">','<div class="cover-orb"></div><div class="fallback-art">')}
  <span class="week-pill">WEEK ${String(w.week).padStart(2,'0')}</span><span class="month-pill">${w.date.toUpperCase()} 2026</span>${w.interactive?'<span class="media-pill">INTERACTIVE MEDIA</span>':''}</div>
  <div class="card-body"><h3>${w.title}</h3><p>${w.preview}</p><div class="tags">${w.tags.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div><div class="card-link"><span>READ & INSPECT</span><i data-lucide="arrow-up-right"></i></div></div></article>`
 }).join('');
 $$('.week-card').forEach(card=>card.onclick=()=>openModal(+card.dataset.week));
 lucide.createIcons();
}

function savedKey(w,idx){return `cpe102-w${w}-r${idx}`}
function getChecked(w,idx){return localStorage.getItem(savedKey(w,idx))==='1'}
function updateProgress(){
 let n=0;CPE102.weeks.forEach(w=>w.review.forEach((_,i)=>{if(getChecked(w.week,i))n++}));
 $('#nav-progress').textContent=`Reviewed: ${n} / 48`; 
}

function openModal(weekNum){
 const w=CPE102.weeks.find(x=>x.week===weekNum); let embeds='';
 if(w.embeds){embeds=`<div class="embed-grid">${w.embeds.map(e=>{
  if(e.type==='youtube'||e.type==='canva')return `<iframe loading="lazy" src="${e.src}" title="${e.title}" allowfullscreen></iframe>`;
  if(e.type==='pdf')return `<iframe src="${e.src}" title="${e.title}"></iframe>`;
  if(e.type==='game')return `<a class="game-card" href="${e.src}" target="_blank" rel="noopener"><img src="${e.cover}" alt="${e.title}"><strong>${e.title}</strong><span>Launch game ↗</span></a>`;
  if(e.type==='link')return `<a class="game-card" href="${e.src}" target="_blank" rel="noopener"><i data-lucide="shield-check"></i><strong>${e.title}</strong><span>Open external resource ↗</span></a>`;
 }).join('')}</div>`}
 $('#modal-content').innerHTML=`<header class="modal-header" style="--accent:${w.color}"><span class="week-big">WEEK ${String(w.week).padStart(2,'0')} // ${w.date.toUpperCase()} 2026</span><h2>${w.title}</h2><p>${w.subtitle} • ${w.instructor}</p></header>${embeds}<div class="reflection-grid"><div class="reflection-col"><h3>Engineering Insights</h3><ul>${w.learned.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="reflection-col"><h3>Key Understanding</h3><ul>${w.takeaways.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="reflection-col"><h3>Self-Check Protocol</h3>${w.review.map((x,i)=>`<label class="review-check"><input type="checkbox" data-w="${w.week}" data-i="${i}" ${getChecked(w.week,i)?'checked':''}><span>${x}</span></label>`).join('')}</div></div>`;
 $('#modal').classList.add('open');$('#modal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
 $$('.review-check input',$('#modal-content')).forEach(input=>input.onchange=()=>{localStorage.setItem(savedKey(+input.dataset.w,+input.dataset.i),input.checked?'1':'0');updateProgress()});
 lucide.createIcons();
}
function closeModal(){ $('#modal').classList.remove('open');$('#modal').setAttribute('aria-hidden','true');document.body.style.overflow='' }

function renderProjects(){
 const manual=[['Camera feed','01'],['MediaPipe Hands','02'],['ML posture classifier','03'],['ESP32 command map','04'],['Fail-safe stop','05']];
 const auto=[['Overhead camera','01'],['HSV segmentation','02'],['AprilTag localization','03'],['Target lock','04'],['Sorting path planner','05']];
 function pipeline(nodes){return nodes.map((n,i)=>`${i?'<span class="pipe-arrow">→</span>':''}<div class="pipe-node"><small>${n[1]}</small><br>${n[0]}</div>`).join('')}
 function setMode(mode){$('#mode-panel').innerHTML=`<div class="pipeline">${pipeline(mode==='manual'?manual:auto)}</div>`;$$('#mode-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode))}
 setMode('manual');$$('#mode-tabs button').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));

 const robotImages=['assets/week8/robot.jpg','assets/week8/robot green.jpg','assets/week8/SufferingAndTorture.png','assets/week8/armGripper.png','assets/week8/1790633780933_image.png'];
 $('#robot-gallery').innerHTML=robotImages.map((src,i)=>`<img src="${src}" alt="Era-One robot view ${i+1}" onerror="this.style.display='none'">`).join('');

 $('#team-grid').innerHTML=CPE102.team.map(m=>`<article class="member" style="--member:${m.color}"><img src="${m.image}" alt="${m.name}" onerror="this.style.opacity='.12'"><div class="member-info"><small>${m.id}</small><h3>${m.name}</h3><p>${m.role}</p></div></article>`).join('');
}

renderCollage();renderFilters();renderWeeks();renderProjects();updateProgress();
$('.modal-close').onclick=closeModal;$('.modal-backdrop').onclick=closeModal;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
lucide.createIcons();
