"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{368:function(r,t,e){e.d(t,{O:function(){return u}});var n=e(689),a=e(87),c=e(184),u=function(r){var t=r.movies,e=(0,n.TH)();return(0,c.jsx)("ul",{children:t.map((function(r){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(r.id),state:{from:e},children:r.title})},r.id)}))})}},983:function(r,t,e){e.r(t);var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),i=e(368),o=e(390),f=e(673),p=e(184);t.default=function(){var r=(0,s.useState)(!1),t=(0,a.Z)(r,2),e=t[0],c=t[1],v=(0,s.useState)([]),d=(0,a.Z)(v,2),h=d[0],l=d[1],x=(0,s.useState)(""),m=(0,a.Z)(x,2),w=m[0],k=m[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(!0),r.prev=1,c(!0),r.next=5,(0,o.SU)();case 5:t=r.sent,e=t.data.results,l(e),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),k(r.t0.message);case 13:return r.prev=13,c(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,10,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("section",{children:[(0,p.jsx)("h2",{children:"Trending today:"}),e&&(0,p.jsx)(f.a,{}),w&&(0,p.jsxs)("p",{children:["Sorry, an error occurred! Error: ",w," Please try again later!"]}),(0,p.jsx)(i.O,{movies:h})]})}},390:function(r,t,e){e.d(t,{Hx:function(){return p},PQ:function(){return f},SU:function(){return i},Y5:function(){return o},mv:function(){return v}});var n=e(861),a=e(757),c=e.n(a),u=e(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="1deae1a36202e3ac8c29219a3d453e0f",i=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(s));case 2:return e=r.sent,n=e.data,console.log(n),r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.688c55bf.chunk.js.map