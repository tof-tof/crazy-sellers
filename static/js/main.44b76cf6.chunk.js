(this["webpackJsonpcrazy-sellers"]=this["webpackJsonpcrazy-sellers"]||[]).push([[0],{39:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(1),n=c.n(s),a=c(29),l=c.n(a),i=(c(39),c(4)),o=c(3),d=c(12),b=c(30),j=c(32),u=c(10);var x=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"font-bold py-3",children:"Menu"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/",className:"text-blue-500 py-3 border-t border-b block",onClick:e.closeMenu,children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/about",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu,children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/products/1",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu,children:"Products"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/contact",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu,children:"Contact Me"})})]})]})};var h=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(u.b)(c,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),l=Object(u.b)(c,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return Object(r.jsxs)("nav",{children:[Object(r.jsx)("span",{className:"text-xl",children:Object(r.jsx)(b.a,{icon:j.a,onClick:function(){return n(!c)}})}),a.map((function(e){var t=e.item,c=e.key,s=e.props;return t&&Object(r.jsx)(u.a.div,{style:s,className:"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50",onClick:function(){return n(!1)}},c)})),l.map((function(e){var t=e.item,c=e.key,s=e.props;return t&&Object(r.jsx)(u.a.div,{style:s,className:"fixed bg-white top-0 left-0 w-2/5 h-full z-50 shadow p-3",children:Object(r.jsx)(x,{closeMenu:function(){return n(!1)}})},c)}))]})};var p=function(){return Object(r.jsxs)("header",{className:"border-b p-3 flex justify-between items-center text-3xl",children:[Object(r.jsx)("span",{className:"font-bold",children:"Crazy Items"}),Object(r.jsx)(h,{})]})};var O=function(){return Object(r.jsx)("header",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full",children:"\xa9 Copyright 2020"})};var m=function(){return Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsx)("div",{className:"loader"})})};var f=function(e){return e.product.theImage?Object(r.jsxs)("div",{className:"border w-64 mb-4 rounded overflow-hidden ",children:[Object(r.jsx)(i.b,{to:"/products/".concat(e.product.id),children:Object(r.jsx)("div",{style:{backgroundImage:"url('".concat(e.product.theImage,"')")},className:"w-64 h-64 bg-blue bg-cover"})}),Object(r.jsxs)("div",{className:"p-3",children:[Object(r.jsx)("h3",{className:"font-bold text-xl mb-3",children:Object(r.jsx)(i.b,{to:"/products/".concat(e.product.id),children:e.product.name})}),Object(r.jsxs)("div",{className:"font-bold mb-3",children:["\xa3 ",e.product.price]}),Object(r.jsx)("div",{className:"mb-3",children:e.product.description}),Object(r.jsx)(i.b,{to:"/products/".concat(e.product.id),className:"bg-blue-500 text-white p-2 flex justify-center w-full",children:"View"})]})]}):Object(r.jsx)("div",{className:"border w-64 mb-4 rounded overflow-hidden ",children:Object(r.jsxs)("div",{className:"p-3",children:[Object(r.jsx)("h3",{className:"font-bold text-xl mb-3",children:Object(r.jsx)(i.b,{to:"/products/".concat(e.product.id),children:e.product.name})}),Object(r.jsxs)("div",{className:"font-bold mb-3",children:["\xa3 ",e.product.price]}),Object(r.jsx)("div",{className:"mb-3",children:e.product.description}),Object(r.jsx)(i.b,{to:"/products/".concat(e.product.id),className:"bg-blue-500 text-white p-2 flex justify-center w-full",children:"View"})]})})},v=c(33),g=c.n(v);var N=function(e){var t=Object(s.useState)({loading:!1,data:null,error:!1}),c=Object(d.a)(t,2),r=c[0],n=c[1];return Object(s.useEffect)((function(){n({loading:!0,data:null,error:!1}),g.a.get(e).then((function(e){n({loading:!1,data:e.data,error:!1})})).catch((function(){n({loading:!1,data:null,error:!0})}))}),[e]),r};var y=function(){var e=N("https://5fb050d17edddb00164683e7.mockapi.io/products?page=1&limit=10"),t=null;return e.error&&(t=Object(r.jsx)("p",{children:"There was an error. You may of searched for a product that doesn't exist.  Please refresh or try again later."})),e.loading&&(t=Object(r.jsx)(m,{children:" "})),e.data&&(t=e.data.map((function(e){return Object(r.jsx)("div",{className:"justify-center",children:Object(r.jsx)(f,{product:e})},e.id)}))),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"Best Sellers"}),t]})};var w=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"About us "}),Object(r.jsx)("p",{children:"This is the about page content"})]})};var k=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"About us "}),Object(r.jsx)("p",{children:"This is the contact page content"}),Object(r.jsxs)("p",{children:["Name: Tofunmi Adigun-Hameed ",Object(r.jsx)("br",{}),"Phone Number: You wish"]})]})};var I=function(){var e,t,c=Object(o.f)().id,s="https://5fb050d17edddb00164683e7.mockapi.io/products/".concat(c),n=N(s),a=null;return e=1!==parseInt(c)?parseInt(c)-1:50,t=50!==parseInt(c)?parseInt(c)+1:1,n.error&&(a=Object(r.jsx)("p",{children:"There was an error. You may of searched for a product that doesn't exist.  Please refresh or try again later."})),n.loading&&(a=Object(r.jsx)(m,{children:" "})),n.data?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"There are 50 items in the catalogue"}),Object(r.jsxs)("h1",{className:"text-2xl font-bold mb-3",children:[n.data.name,"  "]}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:n.data.theImage,alt:n.data.name})}),Object(r.jsxs)("div",{className:"font-bold text-xl mb-3",children:["\xa3 ",n.data.price]}),Object(r.jsx)("div",{children:n.data.description}),Object(r.jsxs)("div",{class:"grid grid-cols-2 gap-4 justify-items-start h-auto w-64",children:[Object(r.jsx)(i.b,{to:"/products/".concat(e),className:"bg-blue-500 text-white p-2 flex justify-center w-32",children:"Previous Item"}),Object(r.jsx)(i.b,{to:"/products/".concat(t),className:"bg-green-500 text-white p-2 flex justify-center w-32",children:"Next Item"})]})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"Product  "}),a]})};var C=function(){return Object(r.jsx)("div",{className:"relative pb-10 min-h-screen",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"p-3",children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/crazy-sellers",children:Object(r.jsx)(y,{})}),Object(r.jsx)(o.a,{path:"/about",children:Object(r.jsx)(w,{})}),Object(r.jsx)(o.a,{path:"/products/:id",children:Object(r.jsx)(I,{})}),Object(r.jsx)(o.a,{path:"/contact",children:Object(r.jsx)(k,{})})]})}),Object(r.jsx)(O,{})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),M()}},[[62,1,2]]]);
//# sourceMappingURL=main.44b76cf6.chunk.js.map