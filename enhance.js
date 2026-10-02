// Carousel drag-to-scroll
const car=document.getElementById('car');
if(car){let d=false,sx=0,sl=0;car.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;d=true;sx=e.clientX;sl=car.scrollLeft});
addEventListener('pointerup',()=>d=false);car.addEventListener('pointermove',e=>{if(d)car.scrollLeft=sl-(e.clientX-sx)});}
// Terminal form -> opens mail draft
document.getElementById('cf')?.addEventListener('submit',e=>{e.preventDefault();
const n=cn.value,m=cm.value,em=ce.value;
location.href='mailto:sathiyamoorthisaravanan2006@gmail.com?subject='+encodeURIComponent('Portfolio enquiry from '+n)+'&body='+encodeURIComponent(m+'\n\n— '+n+' ('+em+')');});
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const toast=m=>{let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=m;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),2600)};
// hero: aurora + constellation canvas
const hero=$('.hero');
if(hero&&!reduce){
 const au=document.createElement('div');au.className='aurora';au.innerHTML='<i></i><i></i><i></i>';hero.prepend(au);
 const c=document.createElement('canvas');c.className='hero-canvas';hero.prepend(c);
 const x=c.getContext('2d');let W,H,P=[],m={x:-999,y:-999};
 const size=()=>{W=c.width=hero.clientWidth;H=c.height=hero.clientHeight;P=Array.from({length:Math.min(70,W/18|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};
 size();addEventListener('resize',size);
 hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
 hero.addEventListener('pointerleave',()=>m.x=-999);
 const draw=()=>{x.clearRect(0,0,W,H);
  for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.fillStyle='rgba(110,203,255,.7)';x.fillRect(p.x,p.y,1.8,1.8)}
  for(let i=0;i<P.length;i++){
   for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<120){x.strokeStyle=`rgba(110,203,255,${.16*(1-d/120)})`;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
   const dm=Math.hypot(P[i].x-m.x,P[i].y-m.y);if(dm<160){x.strokeStyle=`rgba(164,124,255,${.35*(1-dm/160)})`;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(m.x,m.y);x.stroke()}}
  requestAnimationFrame(draw)};draw();
}
// typewriter roles
const sub=$('.hero-sub');
if(sub){const p=document.createElement('p');p.className='typer';p.innerHTML='<i>›</i><span></span><b></b>';sub.after(p);
 const L=['building GenAI agents','shipping full-stack products','simulating digital twins','grading answers with NLP','turning data into decisions'];let i=0,j=0,del=false;const sp=$('span',p);
 const tick=()=>{const w=L[i];sp.textContent=w.slice(0,j);if(!del&&j===w.length){del=true;return setTimeout(tick,1400)}if(del&&j===0){del=false;i=(i+1)%L.length}j+=del?-1:1;setTimeout(tick,del?28:60)};tick();}
// count-up stats
$$('.hero-meta strong').forEach(el=>{const t=el.textContent.trim();const m=t.match(/^(\d+(?:\.\d+)?)(\+?)$/);if(!m)return;const end=parseFloat(m[1]),dec=(m[1].split('.')[1]||'').length,pad=m[1].length;let s=null;
 const step=ts=>{s=s||ts;const k=Math.min((ts-s)/1400,1),v=end*(1-Math.pow(1-k,3));el.textContent=(dec?v.toFixed(dec):String(Math.round(v)).padStart(pad,'0'))+m[2];if(k<1)requestAnimationFrame(step)};
 el.textContent=m[1].replace(/\d/g,'0')+m[2];setTimeout(()=>requestAnimationFrame(step),900)});
// cursor spotlight
if(matchMedia('(pointer:fine)').matches){const s=document.createElement('div');s.className='spot';document.body.appendChild(s);addEventListener('pointermove',e=>{s.style.left=e.clientX+'px';s.style.top=e.clientY+'px'},{passive:true})}
// scroll-linked 3D headings
const hs=$$('.section h2');
if(!reduce){const f=()=>{const vh=innerHeight;for(const h of hs){const r=h.getBoundingClientRect();const k=Math.max(0,Math.min(1,(r.top-vh*.5)/(vh*.5)));h.style.transform=`perspective(900px) rotateX(${(k*24).toFixed(1)}deg) translateY(${(k*28).toFixed(1)}px)`;h.style.opacity=(1-k*.55).toFixed(2)}};addEventListener('scroll',f,{passive:true});f()}
// active nav
const links=$$('.nav nav a[href^="#"]');
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(a=>{const t=$(a.getAttribute('href'));t&&so.observe(t)});
// project filters + carousel controls
const car=$('#car');
if(car){const cards=$$('.work-card',car),lab=c=>$('.media-label',c).textContent;
 const F=[['All',()=>1],['AI / ML',c=>/\bAI\b|NLP|Twin/.test(lab(c))],['Full Stack',c=>/Full Stack/.test(lab(c))],['Live preview',c=>!!$('.live',c)]];
 const bar=document.createElement('div');bar.className='chips';
 F.forEach(([n,fn],k)=>{const b=document.createElement('button');b.className='chip'+(k?'':' on');b.textContent=n;b.onclick=()=>{$$('.chip',bar).forEach(x=>x.classList.remove('on'));b.classList.add('on');cards.forEach(c=>c.classList.toggle('hide',!fn(c)));car.scrollLeft=0;upd()};bar.appendChild(b)});
 car.before(bar);
 const ctl=document.createElement('div');ctl.className='car-ctl';ctl.innerHTML='<button aria-label="Previous">←</button><div class="car-prog"><i></i></div><button aria-label="Next">→</button>';car.after(ctl);
 const [pb,nb]=$$('button',ctl),bar2=$('i',ctl);
 pb.onclick=()=>car.scrollBy({left:-car.clientWidth*.6,behavior:'smooth'});nb.onclick=()=>car.scrollBy({left:car.clientWidth*.6,behavior:'smooth'});
 function upd(){const mx=car.scrollWidth-car.clientWidth;bar2.style.width=(mx>0?20+80*car.scrollLeft/mx:100)+'%'}
 car.addEventListener('scroll',upd,{passive:true});upd();
}
// back-to-top + quick-jump button
const tt=document.createElement('button');tt.className='totop';tt.textContent='↑ TOP';tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.body.appendChild(tt);
addEventListener('scroll',()=>tt.classList.toggle('on',scrollY>900),{passive:true});
// command palette (Ctrl/Cmd + K)
const EMAIL='sathiyamoorthisaravanan2006@gmail.com';
const go=h=>()=>{if(h[0]==='#')$(h)?.scrollIntoView({behavior:'smooth'});else if(h.startsWith('http'))open(h,'_blank');else location.href=h};
const A=[['Go to Work','#work',go('#work')],['Go to Architecture','#architecture',go('#architecture')],['Go to Experience','#experience',go('#experience')],['Go to Contact','#contact',go('#contact')],['Open Résumé','page',()=>window.openResume?window.openResume():location.href='resume.html'],['GitHub profile','↗',go('https://github.com/sathi2305')],['LinkedIn profile','↗',go('https://www.linkedin.com/in/sathiyamoorthi-ss/')],['Send an email','mail',go('mailto:'+EMAIL)],['Copy email address','copy',()=>{try{navigator.clipboard.writeText(EMAIL);toast('Email copied ✓')}catch(e){toast(EMAIL)}}],['Back to top','↑',()=>scrollTo({top:0,behavior:'smooth'})]];
const pal=document.createElement('div');pal.className='pal';pal.innerHTML='<div class="pal-box"><input placeholder="Type a command or search…" aria-label="Command palette"><ul></ul><div class="pal-foot">↑↓ navigate · ↵ select · esc close</div></div>';document.body.appendChild(pal);
const inp=$('input',pal),ul=$('ul',pal);let sel=0,cur=A;
const render=()=>{ul.innerHTML='';cur.forEach((a,i)=>{const li=document.createElement('li');li.className=i===sel?'sel':'';li.innerHTML=`<span>${a[0]}</span><small>${a[1]}</small>`;li.onclick=()=>run(i);ul.appendChild(li)})};
const run=i=>{const a=cur[i];if(!a)return;close();a[2]()};
const open_=()=>{pal.classList.add('on');inp.value='';cur=A;sel=0;render();setTimeout(()=>inp.focus(),30)};
const close=()=>pal.classList.remove('on');
inp.oninput=()=>{const q=inp.value.toLowerCase();cur=A.filter(a=>a[0].toLowerCase().includes(q));sel=0;render()};
pal.addEventListener('click',e=>{if(e.target===pal)close()});
addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();pal.classList.contains('on')?close():open_();return}
 if(!pal.classList.contains('on'))return;
 if(e.key==='Escape')close();
 else if(e.key==='ArrowDown'){e.preventDefault();sel=(sel+1)%cur.length;render()}
 else if(e.key==='ArrowUp'){e.preventDefault();sel=(sel-1+cur.length)%cur.length;render()}
 else if(e.key==='Enter'){e.preventDefault();run(sel)}});
const kb=document.createElement('button');kb.className='kbtn';kb.textContent='⌘K  Quick jump';kb.onclick=open_;document.body.appendChild(kb);
// form feedback
$('#cf')?.addEventListener('submit',()=>toast('Compiling… opening your mail app ✓'));
})();
