function e(e){return new Promise(((o,t)=>{const n=Math.random()>.3;setTimeout((()=>{n&&o(e),t(e)}),e)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const t=new FormData(o.currentTarget);let n=0,r=0,c=0;t.forEach(((e,o)=>{"delay"===o&&(n=e),"step"===o&&(r=e),"amount"===o&&(c=e)})),console.log(n,r,c);for(let o=1;o<=c;o+=1)e(n).then((e=>{console.log(`✅ Fulfilled promise ${o} in ${e}ms`)})).catch((e=>{console.log(`❌ Rejected promise ${o} in ${e}ms`)})),n+=r}));
//# sourceMappingURL=03-promises.213feadf.js.map
