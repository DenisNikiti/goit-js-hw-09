!function(){var n=document.querySelector(".form"),o=0,t=0,e=0;n.addEventListener("submit",(function(n){var c=function(n){var e;(e=o,new Promise((function(n,t){var c=Math.random()>.3;setTimeout((function(){c&&n(o),t(o)}),e)}))).then((function(o){console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")),o+=t})).catch((function(o){console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms")),o+=t}))};n.preventDefault(),new FormData(n.currentTarget).forEach((function(n,c){"delay"===c&&(o=n),"step"===c&&(t=n),"amount"===c&&(e=n)}));for(var a=1;a<=e;a+=1)c(a)}))}();
//# sourceMappingURL=03-promises.bf2d1fa8.js.map
