(()=>{const m=document.getElementById('rz');if(!m)return;
const open=()=>{m.classList.add('on');document.body.classList.add('rz-open');m.scrollTop=0;history.replaceState(null,'','#resume')};
const close=()=>{m.classList.remove('on');document.body.classList.remove('rz-open');if(location.hash==='#resume')history.replaceState(null,'',location.pathname+location.search)};
window.openResume=open;
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;
 if(a.getAttribute('href')==='resume.html'){e.preventDefault();open()}
 else if(a.classList.contains('rz-back')){e.preventDefault();close()}},true);
m.querySelector('.rz-close').onclick=close;
addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('on'))close()});
if(location.hash==='#resume')open();})();
