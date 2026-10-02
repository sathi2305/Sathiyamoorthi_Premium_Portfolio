(()=>{const cs=[...document.querySelectorAll('.work-list.stack .work-card')];if(!cs.length)return;
const f=()=>{cs.forEach((c,i)=>{let n=0;for(let j=i+1;j<cs.length;j++){const t=parseFloat(getComputedStyle(cs[j]).top)||0;if(cs[j].getBoundingClientRect().top<=t+4)n++}
c.style.transform=`scale(${1-n*.035})`;c.style.filter=n?`brightness(${1-n*.14})`:''})};
addEventListener('scroll',f,{passive:true});f()})();
