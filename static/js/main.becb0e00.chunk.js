(this["webpackJsonpproyecto-final"]=this["webpackJsonpproyecto-final"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(13),o=n.n(c),s=(n(21),n(22),n(3)),i=n.n(s),u=n(4),l=n(6),b=n(5),x=n(16),d="https://posts-pw2021.herokuapp.com/api/v1",f={};f.login=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/auth/signin"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:t,password:n})});case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f.verifyToken=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(d,"/auth/whoami"),n);case 4:if(!(r=e.sent).ok){e.next=10;break}return e.next=8,r.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();var p=f,j=n(1),m=a.a.createContext(),h="token",v=function(e){var t=Object(r.useState)(void 0),n=Object(l.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(void 0),s=Object(l.a)(o,2),b=s[0],d=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem(h))){e.next=6;break}return e.next=4,p.verifyToken(t);case 4:(n=e.sent)&&(r=n.username,a=n.role,r&&a&&(d({username:r,role:a}),f(t)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var f=function(e){localStorage.setItem(h,e),c(e)},v=Object(r.useCallback)((function(e,t){var n=function(){var n=Object(u.a)(i.a.mark((function n(){var r,a,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,n.prev=1,n.next=4,p.login(e,t);case 4:a=n.sent,(c=a.token)&&(f(c),r=!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0),console.error("Error in login");case 13:return n.prev=13,n.abrupt("return",r);case 16:case"end":return n.stop()}}),n,null,[[1,9,13,16]])})));return function(){return n.apply(this,arguments)}}();return n()}),[]),O=Object(r.useCallback)((function(){d(void 0),f("")}),[]),g=Object(r.useMemo)((function(){return{token:a,user:b,login:v,logout:O}}),[a,b]);return Object(j.jsx)(m.Provider,Object(x.a)({value:g},e))},O=function(){var e=a.a.useContext(m);if(!e)throw new Error("Ha ocurrido un error");return e},g=function(e){var t=e.text;return Object(j.jsx)("div",{className:"mt-3 text-2xl  font-mono text-center",children:Object(j.jsx)("label",{className:"title-label",children:t})})},k=function(e){var t=e.text;return Object(j.jsx)("div",{className:" mt-3 block font-mono md:font-Cambria text-xl text-center",children:Object(j.jsx)("label",{children:t})})},w=function(e){var t=e.attribute,n=e.handleChange;e.param;return Object(j.jsx)("div",{className:"border px-3 py-5 mt- rounded-md hover:outline-none focus:outline-none text-center",children:Object(j.jsx)("input",{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,onChange:function(e){return n(e.target.name,e.target.value)},className:"regular-style px-3 py-3"})})},y={admin:"/admin",user:"/user"},N=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(l.a)(c,2),s=o[0],x=o[1],d=O(),f=d.login,p=d.user,m=Object(b.g)(),h=Object(r.useState)(!1),v=Object(l.a)(h,2),N=v[0],C=v[1];function P(e,t){"usuario"===e?a(t):x(t)}function S(){return(S=Object(u.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n,s);case 2:if(!(t=e.sent)){e.next=9;break}return console.log("logueado"),C(!1),e.abrupt("return",Object(j.jsx)(b.a,{replace:!0,to:null!==(r=y[n.role])&&void 0!==r?r:"/"}));case 9:C(!t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e;p&&m(null!==(e=y[p.role])&&void 0!==e?e:"/")}),[p]),Object(j.jsx)("div",{className:" min-h-screen items-center  bg-gray-200 py-3 flex flex-col justify-center",children:Object(j.jsxs)("div",{className:"bg-white border-solid border-2 border-black flex flex-col justify-center rounded-md",children:[Object(j.jsx)(g,{text:"\xa1BIENVENIDO!"}),N&&Object(j.jsx)("p",{className:" mt-3 rounded-md p-2 text-center text-black  bg-red-300 select-none",children:"Un error ha ocurrido en el inicio de sesi\xf3n ingrese sus datos validos porfavor."}),Object(j.jsx)(k,{text:"Usuario"}),Object(j.jsx)(w,{attribute:{id:"usuario",name:"usuario",type:"text",placeholder:"Ingrese su usuario"},handleChange:P}),Object(j.jsx)(k,{text:"Contrase\xf1a"}),Object(j.jsx)(w,{attribute:{id:"contrase\xf1a",name:"contrase\xf1a",type:"password",placeholder:"Ingrese su contrase\xf1a"},handleChange:P}),Object(j.jsx)("button",{className:"mt-5 bg-blue-400 text-white py-2 px-2 rounded-md hover:bg-blue-600 font-mono md:font-Cambria\r text-2xl",onClick:function(){return S.apply(this,arguments)},children:"Ingresar"})]})})},C=n(14),P=function(){var e=Object(b.g)();return Object(j.jsxs)("div",{className:"flex flex-col justify-center items-center w-screen h-screen bg-gray-400",children:[Object(j.jsx)(C.a,{className:"text-8xl m-4"}),Object(j.jsx)("h2",{className:"text-6xl font-roboto text-center mb-6",children:"404"}),Object(j.jsx)("h3",{className:"text-xl font-roboto text-center",children:"Pagina prohibida."}),Object(j.jsx)("p",{className:"text-lg font-roboto text-center",children:"No eres digno de acceder a esta pagina."}),Object(j.jsx)("button",{className:"font-roboto bg-gray-600 m-4 py-2 px-4 rounded",onClick:function(t){return e("/Login"),void console.log("si da click")},children:"Go to Login"})]})},S=n(8),A="https://posts-pw2021.herokuapp.com/api/v1",E={};E.getAll=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a,c,o,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:10,r=s.length>2&&void 0!==s[2]?s[2]:0,e.prev=2,a={method:"GET",headers:{Authorization:"Bearer ".concat(t)}},e.next=6,fetch("".concat(A,"/post/all?limit=").concat(n,"&page=").concat(r),a);case 6:if(!(c=e.sent).ok){e.next=12;break}return e.next=10,c.json();case 10:return o=e.sent,e.abrupt("return",o.data);case 12:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",{});case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),E.getOne=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"GET",headers:{Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(A,"/post/one/").concat(n),r);case 4:if(!(a=e.sent).ok){e.next=10;break}return e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),E.getFavorites=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(A,"/post/fav"),n);case 4:if(!(r=e.sent).ok){e.next=10;break}return e.next=8,r.json();case 8:return a=e.sent,e.abrupt("return",a.favorites);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),E.like=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"PATCH",headers:{Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(A,"/post/like/").concat(n),r);case 4:if(!(a=e.sent).ok){e.next=10;break}return e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),E.fav=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"PATCH",headers:{Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(A,"/post/fav/").concat(n),r);case 4:if(!(a=e.sent).ok){e.next=10;break}return e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),E.comment=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({description:r})},e.next=4,fetch("".concat(A,"/post/comment/").concat(n),a);case 4:if(!(c=e.sent).ok){e.next=10;break}return e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,r){return e.apply(this,arguments)}}();var T=E,I=function(e){var t=e.options,n=e.onClickOutside,a=void 0===n?function(){}:n,c=0,o=Object(r.useRef)(),s=function(e){o.current.contains(e.target)||a()};return Object(r.useEffect)((function(){return document.addEventListener("mousedown",s),function(){return document.removeEventListener("mousedown",s)}})),Object(j.jsx)("div",{ref:o,className:"fixed bg-blue-500 bottom-0 w-full flex flex-col items-center bg-green-500 text-white",children:t.map((function(e){return Object(j.jsxs)("button",{className:"w-full text-xl hover:bg-blue-700",onClick:e.action,children:[" ",e.text," "]},c++)}))})},L=function(e){var t=e.className,n=void 0===t?"":t,r=e.tabIndex,a=e.tabController,c=e.children;return r===a&&Object(j.jsx)("div",{className:n,children:c})},F=n(27),_=n(28),B=n(26),z=function(e){var t=e.post,n=e.onOptions,r=void 0===n?function(){}:n,a=e.onLike,c=void 0===a?function(){}:a,o=e.onFav,s=void 0===o?function(){}:o,i=e.onChat,u=void 0===i?function(){}:i;return Object(j.jsxs)("div",{className:"font-serif w-80  max-w-full bg-white border-solid border-2 border-black rounded-md mt-3 sm:w-96  flex flex-col items-center",children:[Object(j.jsxs)("div",{className:"w-full flex  py-2 px-3 justify-between",children:[Object(j.jsxs)("span",{className:"text-blue-500 text-2xl ",children:[t.user.username," "]}),Object(j.jsx)("button",{onClick:function(){r(t)},children:Object(j.jsx)(B.a,{className:"self-start text-2xl"})})]}),Object(j.jsx)("img",{className:" rounded-2xl h-52 w-72 ",src:"".concat(t.image),alt:"Post"}),Object(j.jsxs)("b",{children:[" ",t.title," "]}),Object(j.jsxs)("div",{children:[" ",t.description," "]}),Object(j.jsxs)("div",{children:[" Activo",": ".concat(t.active?"Si":"No")," "]}),Object(j.jsxs)("div",{className:"items-start flex justify-evenly w-full h-20 ",children:[Object(j.jsxs)("button",{onClick:function(){c(t)},children:[Object(j.jsx)(F.a,{className:"self-start text-2xl m-1 text-red-600"}),t.likes.length]}),Object(j.jsx)("button",{onClick:function(){s(t)},children:Object(j.jsx)(S.c,{className:"self-start text-2xl m-1 text-yellow-600 "})}),Object(j.jsxs)("button",{onClick:function(){u(t)},children:[Object(j.jsx)(_.a,{className:"self-start text-2xl m-1 text-blue-800"}),t.comments.length]})]})]})},D=function(e){var t=e.posts,n=void 0===t?[]:t,r=e.onOptions,a=void 0===r?function(){}:r,c=e.onLike,o=void 0===c?function(){}:c,s=e.onFav,i=void 0===s?function(){}:s,u=e.onChat,l=void 0===u?function(){}:u;return Object(j.jsx)("div",{className:"w-full h-full flex flex-col items-center bg-gray-300",children:n.map((function(e){return e&&Object(j.jsx)(z,{post:e,onOptions:a,onLike:o,onFav:i,onChat:l},e._id)}))})},V=function(e){var t=e.comment;return t&&Object(j.jsxs)("div",{className:"font-serif  bg-gray-200 border-solid border-2 border-black rounded-md mt-3  w-72 sm:w-96  flex flex-col items-center",children:[Object(j.jsxs)("div",{className:"text-blue-500 text-xl ",children:[" ",t.user.username," "]}),Object(j.jsxs)("div",{children:[" ",t.description," "]})]})},G=function(e){var t=e.post,n=e.onComment,r=void 0===n?function(){}:n,a=e.children;return console.log(t),Object(j.jsxs)("div",{className:"w-full h-full flex flex-col items-center pb-12",children:[a,t.comments.map((function(e){return e&&Object(j.jsx)(V,{comment:e},e._id)})),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target);r(t,n.get("description"))},className:"fixed bottom-0 flex items-center w-full sm:w-4/5 justify-center text-xl",children:[Object(j.jsx)("input",{name:"description",className:"regular-style px-2 py-1 w-4/5\r border-solid border-t-2 border-l-2 border-b-2 border-black rounded-l-md",type:"text",placeholder:"A\xf1ade un Comentario ..."}),Object(j.jsx)("button",{type:"submit",className:"bg-blue-400 text-white border-solid border-black border-t-2 border-r-2 border-b-2 py-1 px-2 rounded-r-md hover:bg-pink-200 font-mono md:font-Cambria text-xl",onClick:function(){r(t)},children:"Enviar"})]})]})},J={_id:0,title:"",description:"",image:null,active:!1,createdAt:null,user:{username:""},likes:[]},H=function(){var e=O(),t=e.token,n=(e.user,e.logout),a=Object(r.useState)(J),c=Object(l.a)(a,2),o=c[0],s=c[1],b=Object(r.useState)([]),x=Object(l.a)(b,2),d=x[0],f=x[1],p=Object(r.useState)([]),m=Object(l.a)(p,2),h=m[0],v=m[1],g=Object(r.useState)([]),k=Object(l.a)(g,2),w=k[0],y=k[1],N=Object(r.useState)(!1),C=Object(l.a)(N,2),P=C[0],A=C[1],E=Object(r.useState)(0),F=Object(l.a)(E,2),_=F[0],B=F[1],V=Object(r.useState)(0),H=Object(l.a)(V,2),M=H[0],U=H[1],R=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.map(function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getOne(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,T.getAll(t,10,_);case 3:n=e.sent,f(n),console.log(n);case 6:case"end":return e.stop()}}),e)}))),[t,_]),Object(r.useEffect)(Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,T.getFavorites(t);case 3:n=e.sent,v(n);case 5:case"end":return e.stop()}}),e)}))),[t]),Object(r.useEffect)(Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(h);case 2:t=e.sent,y(t),console.log(w);case 5:case"end":return e.stop()}}),e)}))),[h]);var q=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(t),console.log(t),A(!0),console.log(o);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Dando like"),s(n),console.log(n),A(!1),e.next=6,T.like(t,n._id);case 6:if(!e.sent){e.next=24;break}return e.next=10,T.getOne(t,n._id);case 10:return a=e.sent,e.next=13,a.likes;case 13:return o.likes=e.sent,e.next=16,a.likes;case 16:return n.likes=e.sent,e.next=19,a;case 19:n=e.sent,s(a),console.log(n),e.next=25;break;case 24:console.log("No se pudo likear");case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(u.a)(i.a.mark((function e(n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),s(n),A(!1),r=n._id,e.next=6,T.fav(t,r);case 6:if(!(a=e.sent)){e.next=23;break}return e.t0=console,e.next=11,a;case 11:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=15,T.getFavorites(t);case 15:return a=e.sent,e.t2=v,e.next=19,a;case 19:e.t3=e.sent,(0,e.t2)(e.t3),e.next=24;break;case 23:console.log("No se pudo dar favorito");case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){s(e),U(2),A(!1)},X=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(n),console.log("comment"),console.log(n),console.log(r),e.next=6,T.comment(t,n._id,r);case 6:return a=e.sent,e.t0=console,e.next=10,a;case 10:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=14,a;case 14:if(!e.sent){e.next=24;break}return e.next=17,T.getOne(t,n._id);case 17:return c=e.sent,e.next=20,c.comments;case 20:o.comments=e.sent,s(c),e.next=25;break;case 24:console.log("No se pudo comentar");case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"min-h-screen text-center flex flex-col font-mono md:font-Cambria  w-full bg-gray-300 h-full relative",children:[Object(j.jsxs)("div",{className:"w-full flex flex-wrap justify-around mx-auto bg-blue-500 text-white py-2 px-3 md:font-Cambria text-xl ",children:[Object(j.jsx)("button",{className:"hover:bg-blue-800 py-2 px-3",onClick:function(){U(0)},children:"Ver todos"}),Object(j.jsx)("button",{className:"hover:bg-blue-800 py-2 px-3",onClick:function(){U(1)},children:"Ver favoritos"}),Object(j.jsx)("button",{className:"hover:bg-blue-800 py-2 px-3",onClick:function(){n()},children:"Logout"})]}),Object(j.jsxs)(L,{className:"",tabIndex:0,tabController:M,children:[Object(j.jsxs)("div",{className:"w-4/5 flex justify-between mx-auto mt-4",children:[Object(j.jsx)("button",{className:"text-gray-400 self text-lg hover:text-gray-700 mb-2",onClick:function(){_&&B(_-1)},children:Object(j.jsx)(S.a,{className:" text-xl"})}),Object(j.jsx)("button",{className:"text-gray-400 self text-lg hover:text-gray-700 mb-2",onClick:function(){B(_+1)},children:Object(j.jsx)(S.b,{className:" text-xl"})})]}),Object(j.jsx)(D,{posts:d,onOptions:q,onLike:K,onFav:Q,onChat:W}),Object(j.jsxs)("div",{className:"w-4/5 flex justify-between mx-auto",children:[Object(j.jsx)("button",{className:"text-gray-400 self text-lg hover:text-gray-700 mb-2",onClick:function(){_&&B(_-1)},children:Object(j.jsx)(S.a,{className:" text-xl"})}),Object(j.jsx)("button",{className:"text-gray-400 self text-lg hover:text-gray-700 mb-2",onClick:function(){B(_+1)},children:Object(j.jsx)(S.b,{className:" text-xl"})})]})]}),Object(j.jsx)(L,{className:"",tabIndex:1,tabController:M,children:Object(j.jsx)(D,{posts:w,onOptions:q,onLike:K,onFav:Q,onChat:W})}),Object(j.jsx)(L,{className:"",tabIndex:2,tabController:M,children:Object(j.jsx)(G,{post:o,onComment:X,children:Object(j.jsx)(z,{post:o,onOptions:q,onLike:K,onFav:Q,onChat:W})})}),P&&Object(j.jsx)(I,{options:[{text:"Dar like",action:function(){return K(o)}},{text:"Favorito",action:function(){return Q(o)}},{text:"Ver Comentarios",action:function(){return W(o)}},{text:"Cancelar",action:function(){A(!1)}}],onClickOutside:function(){A(!1)}})]})},M=n(15),U="https://posts-pw2021.herokuapp.com/api/v1",R={nullPost:{_id:0,title:"",description:"",image:null,active:!1,createdAt:null,user:{username:""},likes:[]},createPost:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a){var c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({title:n,description:r,image:a})},e.next=4,fetch("".concat(U,"/post/create"),c);case 4:if(!(o=e.sent).ok){e.next=10;break}return e.next=8,o.json();case 8:return s=e.sent,e.abrupt("return",s);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ownedPost:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(U,"/post/owned"),n);case 4:if(!(r=e.sent).ok){e.next=10;break}return e.next=8,r.json();case 8:return a=e.sent,e.abrupt("return",a.data);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),updatePost:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a,c){var o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({title:r,description:a,image:c})},e.next=4,fetch("".concat(U,"/post/update/").concat(n),o);case 4:if(!(s=e.sent).ok){e.next=10;break}return e.next=8,s.json();case 8:return u=e.sent,e.abrupt("return",u);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,r,a,c){return e.apply(this,arguments)}}(),toggleActive:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"PATCH",headers:{Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(U,"/post/toggle/").concat(n),r);case 4:if(!(a=e.sent).ok){e.next=10;break}return e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()},q=R,K=function(e){var t=e.onSubmit,n=e.idPost,a=void 0===n?"":n,c=e.titlePost,o=void 0===c?"":c,s=e.descriptionPost,i=void 0===s?"":s,u=e.imgPost,b=void 0===u?"":u,x=Object(r.useState)(b),d=Object(l.a)(x,2),f=d[0],p=d[1],m=Object(r.useState)(""),h=Object(l.a)(m,2),v=h[0],O=h[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target);n.get("title")&&n.get("description")&&n.get("image")?n.get("title").length>=8&&n.get("description").length>=8?t(n):O("Los campos deben tener mas de 8 caracteres"):O("No deje campos vacios")},className:" border-solid border-2 border-black w-80 flex flex-col bg-white rounded-2xl items-center ",children:[Object(j.jsx)("input",{className:"regular-style px-2 py-2",name:"idPost",value:a,type:"hidden"}),Object(j.jsx)("img",{className:"mt-3 rounded-2xl h-52 w-72  ",src:f}),v&&Object(j.jsx)("p",{className:" mt-3 rounded-md p-2 text-center text-black  bg-red-300 select-none",children:v}),Object(j.jsx)("label",{className:" mt-3 block font-mono md:font-Cambria text-xl text-center ",children:"Titulo"}),Object(j.jsx)("input",{className:"regular-style px-2 py-2 border-solid border-2 border-black rounded-2xl",name:"title",defaultValue:o,type:"text"}),Object(j.jsx)("label",{className:" mt-3 block font-mono md:font-Cambria text-xl text-center",children:"Descripcion"}),Object(j.jsx)("input",{className:"regular-style px-2 py-2\r border-solid border-2 border-black rounded-2xl",name:"description",type:"text",defaultValue:i}),Object(j.jsx)("label",{className:" mt-3 block font-mono md:font-Cambria text-xl text-center",children:"Imagen"}),Object(j.jsx)("input",{className:"regular-style px-2 py-2\r border-solid border-2 border-black rounded-2xl",name:"image",type:"text",defaultValue:b,onChange:function(e){return function(e,t){t(e.target.value)}(e,p)}}),Object(j.jsx)("button",{className:"mt-5 h-12 bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-800 font-mono md:font-Cambria text-2xl",type:"submit",children:"Guardar"})]})},Q={_id:0,title:"",description:"",image:null,active:!1,createdAt:null,user:{username:""},likes:[]},W=function(){var e=O(),t=e.token,n=(e.user,e.logout),a=Object(r.useState)([]),c=Object(l.a)(a,2),o=c[0],s=c[1],b=Object(r.useState)(!1),x=Object(l.a)(b,2),d=x[0],f=x[1],p=Object(r.useState)(0),m=Object(l.a)(p,2),h=m[0],v=m[1],g=Object(r.useState)(Q),k=Object(l.a)(g,2),w=k[0],y=k[1];Object(r.useEffect)(Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,q.ownedPost(t);case 3:n=e.sent,s(n),console.log(o);case 6:case"end":return e.stop()}}),e)}))),[t]);var N=function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.createPost(t,n.get("title"),n.get("description"),n.get("image"));case 2:if(!(r=e.sent)){e.next=9;break}return e.next=6,q.ownedPost(t);case 6:Object(M.a)("res"),s(r),v(0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.get("idPost")),e.next=3,q.updatePost(t,n.get("idPost"),n.get("title"),n.get("description"),n.get("image"));case 3:if(!(r=e.sent)){e.next=16;break}return e.t0=console,e.next=8,r;case 8:e.t1=e.sent,e.t0.log.call(e.t0,e.t1),w.title=n.get("title"),w.description=n.get("description"),w.image=n.get("image"),v(0),e.next=17;break;case 16:console.log("No se pudo editar");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.toggleActive(t,w._id);case 2:if(!(n=e.sent)){e.next=12;break}return w.active=!w.active,e.t0=console,e.next=8,n;case 8:e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=13;break;case 12:console.log("No se pudo alternar");case 13:f(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!1),v(2);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Dando like"),y(n),console.log(n),f(!1),e.next=6,T.like(t,n._id);case 6:if(!e.sent){e.next=24;break}return e.next=10,T.getOne(t,n._id);case 10:return a=e.sent,e.next=13,a.likes;case 13:return w.likes=e.sent,e.next=16,a.likes;case 16:return n.likes=e.sent,e.next=19,a;case 19:n=e.sent,y(a),console.log(n),e.next=25;break;case 24:console.log("No se pudo likear");case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(e){y(e),v(3),f(!1)},_=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(n),console.log("comment"),console.log(n),console.log(r),e.next=6,T.comment(t,n._id,r);case 6:return a=e.sent,e.t0=console,e.next=10,a;case 10:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=14,a;case 14:if(!e.sent){e.next=24;break}return e.next=17,T.getOne(t,n._id);case 17:return c=e.sent,e.next=20,c.comments;case 20:w.comments=e.sent,y(c),e.next=25;break;case 24:console.log("No se pudo comentar");case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t),f(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:" min-h-screen text-center flex flex-col font-mono md:font-Cambria  w-full bg-gray-300 h-full relative",children:[Object(j.jsxs)("div",{className:"w-full flex flex-wrap justify-around mx-auto bg-blue-500 text-white py-2 px-3 md:font-Cambria text-xl ",children:[Object(j.jsx)("button",{className:"hover:bg-blue-800 py-2 px-3",onClick:function(){v(0)},children:"Ver mis post"}),Object(j.jsx)("button",{className:"hover:bg-blue-800 py-2 px-3",onClick:function(){v(1)},children:"A\xf1adir nuevo post"}),Object(j.jsx)("button",{className:"hover:bg-blue-800 py-2 px-3",onClick:function(){n()},children:"Logout"})]}),Object(j.jsx)(L,{tabIndex:0,tabController:h,children:Object(j.jsx)(D,{posts:o,onOptions:B,onLike:E,onChat:F})}),Object(j.jsxs)(L,{className:"bg-gray-300 p-14 flex flex-col h-full justify-center items-center",tabIndex:1,tabController:h,children:[Object(j.jsx)("button",{className:"text-gray-400 self-start text-lg hover:text-gray-700 mb-2 absolute top-4 left-5",onClick:function(){v(0)},children:Object(j.jsx)(S.a,{className:" text-xl"})}),Object(j.jsx)(K,{onSubmit:N})]}),Object(j.jsxs)(L,{className:"bg-gray-300 p-4 flex flex-col h-full justify-center items-center",tabIndex:2,tabController:h,children:[Object(j.jsx)("button",{className:"text-gray-400 text-lg self-start hover:text-gray-700 mb-2 absolute top-4 left-5",onClick:function(){v(0)},children:Object(j.jsx)(S.a,{className:"text-xl"})}),Object(j.jsx)(K,{onSubmit:C,idPost:w._id,titlePost:w.title,descriptionPost:w.description,imgPost:w.image})]}),Object(j.jsx)(L,{className:"",tabIndex:3,tabController:h,children:Object(j.jsx)(G,{post:w,onComment:_,children:Object(j.jsx)(z,{post:w,onOptions:B,onLike:E,onChat:F})})}),d&&Object(j.jsx)(I,{options:[{text:"Editar",action:A},{text:w.active?"Ocultar Post":"Mostrar Post",action:P},{text:"Ver Comentarios",action:function(){return F(w)}},{text:"Cancelar",action:function(){f(!1)}}],onClickOutside:function(){f(!1)}})]})},X=n(9),Y=function(e){var t=e.role,n=void 0===t?"user":t,r=e.children,a=O(),c=a.token,o=a.user;return c?o&&o.role===n?r:Object(j.jsx)(b.a,{replace:!0,to:"/404"}):Object(j.jsx)(b.a,{replace:!0,to:"/login"})};var Z=function(){return Object(j.jsx)(X.a,{children:Object(j.jsxs)(b.d,{children:[Object(j.jsx)(b.b,{path:"/login",element:Object(j.jsx)(N,{})}),Object(j.jsx)(b.b,{path:"/admin",element:Object(j.jsx)(Y,{role:"admin",children:Object(j.jsx)(W,{})})}),Object(j.jsx)(b.b,{path:"/user",element:Object(j.jsxs)(Y,{role:"user",children:[" ",Object(j.jsx)(H,{})," "]})}),Object(j.jsx)(b.b,{path:"*",element:Object(j.jsx)(P,{})})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{children:Object(j.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[25,1,2]]]);
//# sourceMappingURL=main.becb0e00.chunk.js.map