!function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}this.webpackChunk=function(r,e){for(var o in e)t[o]=e[o];for(;r.length;)n[r.pop()]=1};var e={},n={1:1};r.e=function(t){return new Promise(function(r){n[t]||importScripts(t+".5e83341aaa4417e26a44.worker.js"),r()})},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="/offload/",r(r.s=1)}([function(t,r,e){t.exports=e(2)},function(t,r,e){"use strict";function n(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){function n(o,i){try{var a=r[o](i),c=a.value}catch(t){return void e(t)}if(!a.done)return Promise.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}Object.defineProperty(r,"__esModule",{value:!0}),e.d(r,"getPhotos",function(){return u}),e.d(r,"getUsers",function(){return s}),e.d(r,"getPostsofUser",function(){return f}),e.d(r,"getCommentofPost",function(){return h}),e.d(r,"getPost",function(){return l});var o=e(0),i=e.n(o),a=e(4),c=e.n(a),u=function(){var t=n(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),s=function(){var t=n(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),f=function(){var t=n(i.a.mark(function t(r){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts?userId="+r);case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=n(i.a.mark(function t(r){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/comments?postId="+r);case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=n(i.a.mark(function t(r){var n,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(0).then(e.bind(null,7));case 2:return n=t.sent,o=n.dynamicImport,t.next=6,o(r);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}();c()(this)},function(t,r,e){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e(3),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,r){!function(r){"use strict";function e(t,r,e,n){var i=r&&r.prototype instanceof o?r:o,a=Object.create(i.prototype),c=new p(n||[]);return a._invoke=s(t,e,c),a}function n(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function u(t){function r(e,o,i,a){var c=n(t[e],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function e(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=e}function s(t,r,e){var o=_;return function(i,a){if(o===k)throw new Error("Generator is already running");if(o===P){if("throw"===i)throw a;return v()}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=f(c,e);if(u){if(u===R)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===_)throw o=P,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=k;var s=n(t,r,e);if("normal"===s.type){if(o=e.done?P:O,s.arg===R)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=P,e.method="throw",e.arg=s.arg)}}}function f(t,r){var e=t.iterator[r.method];if(e===d){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=d,f(t,r),"throw"===r.method))return R;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return R}var o=n(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,R;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=d),r.delegate=null,R):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,R)}function h(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function l(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function y(t){if(t){var r=t[x];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(m.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=d,r.done=!0,r};return n.next=n}}return{next:v}}function v(){return{value:d,done:!0}}var d,g=Object.prototype,m=g.hasOwnProperty,w="function"===typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",L=w.toStringTag||"@@toStringTag",E="object"===typeof t,j=r.regeneratorRuntime;if(j)return void(E&&(t.exports=j));j=r.regeneratorRuntime=E?t.exports:{},j.wrap=e;var _="suspendedStart",O="suspendedYield",k="executing",P="completed",R={},N={};N[x]=function(){return this};var S=Object.getPrototypeOf,G=S&&S(S(y([])));G&&G!==g&&m.call(G,x)&&(N=G);var T=a.prototype=o.prototype=Object.create(N);i.prototype=T.constructor=a,a.constructor=i,a[L]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===i||"GeneratorFunction"===(r.displayName||r.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,L in t||(t[L]="GeneratorFunction")),t.prototype=Object.create(T),t},j.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[b]=function(){return this},j.AsyncIterator=u,j.async=function(t,r,n,o){var i=new u(e(t,r,n,o));return j.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(T),T[L]="Generator",T[x]=function(){return this},T.toString=function(){return"[object Generator]"},j.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},j.values=y,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(l),!t)for(var r in this)"t"===r.charAt(0)&&m.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=d),!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,R):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),R},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),l(e),R}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;l(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:y(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=d),R}}}(function(){return this}()||Function("return this")())},function(t,r,e){"use strict";function n(t){if(!t)throw new Error("no functions exported in worker file");Object.entries(t).forEach(function(t){var r=c(t,2),e=r[0],n=r[1];return n instanceof Function&&(self.userDefined[e]=n)}),self.onmessage=function(){var t=a(o.mark(function t(r){var e,n,a,c,s;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.data,n=e.UID,a=e.method,c=e.action,s=e.payload,self.userDefined.hasOwnProperty(a)){t.next=3;break}throw new Error(a+" is either not defined or exported");case 3:if(c!==i){t.next=6;break}return t.next=6,u(self.userDefined[a],n,s);case 6:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}()}var o=e(5),i="NEW_TASK",a=function(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){function n(o,i){try{var a=r[o](i),c=a.value}catch(t){return void e(t)}if(!a.done)return Promise.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}},c=function(){function t(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return e}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return t(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){var t=a(o.mark(function t(r,e,n){var i;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!((i=r(n,function(t){return self.postMessage({UID:e,action:"TASK_UPDATE",payload:t})}))instanceof Promise)){t.next=6;break}return t.next=5,i;case 5:i=t.sent;case 6:self.postMessage({UID:e,action:"TASK_DONE",payload:i}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),self.postMessage({UID:e,action:"TASK_ERROR",error:t.t0.message});case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(r,e,n){return t.apply(this,arguments)}}();self.userDefined={},t.exports=n},function(t,r,e){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e(6),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,r){!function(r){"use strict";function e(t,r,e,n){var i=r&&r.prototype instanceof o?r:o,a=Object.create(i.prototype),c=new p(n||[]);return a._invoke=s(t,e,c),a}function n(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function u(t){function r(e,o,i,a){var c=n(t[e],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function e(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=e}function s(t,r,e){var o=_;return function(i,a){if(o===k)throw new Error("Generator is already running");if(o===P){if("throw"===i)throw a;return v()}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=f(c,e);if(u){if(u===R)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===_)throw o=P,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=k;var s=n(t,r,e);if("normal"===s.type){if(o=e.done?P:O,s.arg===R)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=P,e.method="throw",e.arg=s.arg)}}}function f(t,r){var e=t.iterator[r.method];if(e===d){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=d,f(t,r),"throw"===r.method))return R;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return R}var o=n(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,R;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=d),r.delegate=null,R):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,R)}function h(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function l(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function y(t){if(t){var r=t[x];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(m.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=d,r.done=!0,r};return n.next=n}}return{next:v}}function v(){return{value:d,done:!0}}var d,g=Object.prototype,m=g.hasOwnProperty,w="function"===typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",L=w.toStringTag||"@@toStringTag",E="object"===typeof t,j=r.regeneratorRuntime;if(j)return void(E&&(t.exports=j));j=r.regeneratorRuntime=E?t.exports:{},j.wrap=e;var _="suspendedStart",O="suspendedYield",k="executing",P="completed",R={},N={};N[x]=function(){return this};var S=Object.getPrototypeOf,G=S&&S(S(y([])));G&&G!==g&&m.call(G,x)&&(N=G);var T=a.prototype=o.prototype=Object.create(N);i.prototype=T.constructor=a,a.constructor=i,a[L]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===i||"GeneratorFunction"===(r.displayName||r.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,L in t||(t[L]="GeneratorFunction")),t.prototype=Object.create(T),t},j.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[b]=function(){return this},j.AsyncIterator=u,j.async=function(t,r,n,o){var i=new u(e(t,r,n,o));return j.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(T),T[L]="Generator",T[x]=function(){return this},T.toString=function(){return"[object Generator]"},j.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},j.values=y,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(l),!t)for(var r in this)"t"===r.charAt(0)&&m.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=d),!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,R):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),R},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),l(e),R}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;l(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:y(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=d),R}}}(function(){return this}()||Function("return this")())}]);
//# sourceMappingURL=5e83341aaa4417e26a44.worker.js.map