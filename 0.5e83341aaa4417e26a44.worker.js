webpackChunk([0],{7:function(n,t,e){"use strict";function r(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(u,o){try{var c=t[u](o),i=c.value}catch(n){return void e(n)}if(!c.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"dynamicImport",function(){return c});var u=e(0),o=e.n(u),c=function(){var n=r(o.a.mark(function n(t){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com/posts/"+t);case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()}});
//# sourceMappingURL=0.5e83341aaa4417e26a44.worker.js.map