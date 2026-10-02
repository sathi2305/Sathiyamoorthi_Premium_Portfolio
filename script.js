const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>{loader?.classList.add('done');document.body.style.overflow='';},700));

const progress=document.querySelector('.progress');
const updateProgress=()=>{const d=document.documentElement;const max=d.scrollHeight-innerHeight;progress.style.width=(max>0?(scrollY/max)*100:0)+'%';};
addEventListener('scroll',updateProgress,{passive:true});updateProgress();

const cursorDot=document.querySelector('.cursor-dot'),cursorRing=document.querySelector('.cursor-ring'),cursorText=document.querySelector('.cursor-text');
let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;if(cursorDot){cursorDot.style.left=mx+'px';cursorDot.style.top=my+'px'}});
function cursorLoop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;if(cursorRing){cursorRing.style.left=rx+'px';cursorRing.style.top=ry+'px'}if(cursorText){cursorText.style.left=rx+'px';cursorText.style.top=ry+'px'}requestAnimationFrame(cursorLoop)} cursorLoop();

document.querySelectorAll('a,.magnetic,[data-tilt]').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-hover'));
});
document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=e.clientX-(r.left+r.width/2),y=e.clientY-(r.top+r.height/2);el.style.transform=`translate(${x*.12}px,${y*.12}px)`});
  el.addEventListener('pointerleave',()=>el.style.transform='');
});

document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateX(${y*-5}deg) rotateY(${x*5}deg) translateY(-4px)`});
  card.addEventListener('pointerleave',()=>card.style.transform='');
});
const hero=document.querySelector('[data-hero-tilt]');
hero?.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.style.transform=`perspective(1100px) rotateX(${y*-3}deg) rotateY(${x*4}deg)`});
hero?.addEventListener('pointerleave',()=>hero.style.transform='');

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));

document.querySelectorAll('.work-card').forEach((card,i)=>{
  card.style.transitionDelay=`${(i%2)*80}ms`;
});

addEventListener('keydown',e=>{if(e.key==='Escape')document.body.classList.remove('cursor-hover')});
