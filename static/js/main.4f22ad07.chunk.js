(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{51:function(e,t,n){e.exports=n(90)},60:function(e,t){},63:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),i=n.n(c),l=n(8),o=n(3),s=n(13),u=n(40),m=n.n(u),p=n(41),b=n(6);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentUser:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return f({},e,{currentUser:t.payload});default:return e}},h=n(48);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?y({},e,{quantity:e.quantity+1}):e})):[].concat(Object(h.a)(e),[y({},t,{quantity:1})])},E=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?y({},e,{quantity:e.quantity-1}):e}))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hidden:!0,cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_CART":return w({},e,{hidden:!e.hidden});case"ADD_ITEM":return w({},e,{cartItems:O(e.cartItems,t.payload)});case"CLEAR_ITEM":return w({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case"REMOVE_ITEM":return w({},e,{cartItems:E(e.cartItems,t.payload)});default:return e}},N={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},C=n(26),x=n(42),I={key:"root",storage:n.n(x).a,whitelist:["cart"]},D=Object(s.c)({user:g,cart:k,directory:P,shop:S}),T=Object(C.a)(I,D),B=[m.a,Object(p.createStateSyncMiddleware)({blacklist:["TOGGLE_CART"]})],R=Object(s.d)(T,s.a.apply(void 0,B)),A=Object(C.b)(R),M=n(43),G=(n(63),n(11)),q=n.n(G),W=n(18),J=n(20),L=n(23),_=n.n(L);n(65),n(68);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}_.a.initializeApp({apiKey:"AIzaSyCAHptOwS6BqGgf8iLnWeolIiBDI1p1Dlc",authDomain:"crown-db-12f34.firebaseapp.com",databaseURL:"https://crown-db-12f34.firebaseio.com",projectId:"crown-db-12f34",storageBucket:"crown-db-12f34.appspot.com",messagingSenderId:"1088368175379",appId:"1:1088368175379:web:44c8a934f3697aa411d2e6",measurementId:"G-CFF44N6QGJ"});var V=_.a.auth(),F=_.a.firestore(),Q=new _.a.auth.GoogleAuthProvider;Q.setCustomParameters({prompt:"select_account"});var Y=function(){return V.signInWithPopup(Q)},K=function(){var e=Object(W.a)(q.a.mark((function e(t,n){var r,a,c,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=F.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(H({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user:",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),X=(_.a,function(e){return{type:"SET_CURRENT_USER",payload:e}}),$=n(5),Z=Object($.a)([function(e){return e.user}],(function(e){return e.currentUser})),ee=(n(70),n(16)),te=n(17);function ne(){var e=Object(ee.a)(["\n    padding: 20px 80px;\n"]);return ne=function(){return e},e}var re=te.b.div(ne()),ae=n(19),ce=Object($.a)([function(e){return e.directory}],(function(e){return e.sections})),ie=(n(71),Object(J.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.linkUrl,i=e.history,l=e.match;return a.a.createElement("div",{className:"".concat(r," menu-item"),onClick:function(){return i.push("".concat(l.url).concat(c))}},a.a.createElement("div",{className:"backgroud-image",style:{background:"url(".concat(n,")")}}),a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title"},t),a.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),le=(n(73),Object(o.b)((function(e){return{sections:ce(e)}}))((function(e){var t=e.sections;return a.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(ae.a)(e,["id"]);return a.a.createElement(ie,Object.assign({key:t},n))})))}))),oe=function(){return a.a.createElement(re,null,a.a.createElement(le,null))},se=Object($.a)([function(e){return e.shop}],(function(e){return e.collections})),ue=Object($.a)([se],(function(e){return Object.values(e)})),me=function(e){return{type:"ADD_ITEM",payload:e}},pe=(n(74),function(e){var t=e.children,n=e.inverted,r=e.grow,c=Object(ae.a)(e,["children","inverted","grow"]);return a.a.createElement("button",Object.assign({className:"\n    ".concat(n?"inverted":"","\n    ").concat(r?"grow":""," \n    custom-button\n    ")},c),t)}),be=(n(75),Object(o.b)(null,(function(e){return{addItem:function(t){return e(me(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,i=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},r),a.a.createElement("span",{className:"price"},"$",c)),a.a.createElement(pe,{onClick:function(){return n(t)},inverted:!0,grow:!0},"ADD TO CART"))}))),de=(n(76),Object(o.b)((function(e,t){return{collection:(n=t.match.params.categoryId,Object($.a)([se],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},n),a.a.createElement("div",{className:"items"},r.map((function(e){return a.a.createElement(be,{item:e})}))))}))),fe=(n(77),function(e){var t=e.title,n=e.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},t.toUpperCase()),a.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return a.a.createElement(be,{key:e.id,item:e})}))))}),ge=Object(o.b)((function(e){return{collections:ue(e)}}))((function(e){var t=e.collections;return a.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(ae.a)(e,["id"]);return a.a.createElement(fe,Object.assign({key:t},n))})))})),he=function(e){var t=e.match;return a.a.createElement("div",{className:"shop-page"},a.a.createElement(J.b,{exact:!0,path:"".concat(t.path),component:ge}),a.a.createElement(J.b,{path:"".concat(t.path,"/:categoryId"),component:de}))},ve=n(27),ye=(n(78),function(e){var t=e.handleChange,n=e.label,r=Object(ae.a)(e,["handleChange","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),n?a.a.createElement("label",{className:"".concat(r.value.length?"shrink":""," form-input-label")},n):null)});n(79);function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Ee=function(){var e={email:"",password:""},t=Object(r.useState)(e),n=Object(ve.a)(t,2),c=n[0],i=n[1],l=function(e){var t=e.target,n=t.value,r=t.name;i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c,Object(b.a)({},r,n)))},o=function(){var t=Object(W.a)(q.a.mark((function t(n){var r,a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=c.email,a=c.password,t.prev=2,t.next=5,V.signInWithEmailAndPassword(r,a);case 5:i(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",null,"I already have an account"),a.a.createElement("span",null,"Sign in with yout email and password"),a.a.createElement("form",{onSubmit:o},a.a.createElement(ye,{name:"email",type:"email",label:"Email",value:c.email,handleChange:l,required:!0,autoFocus:!0}),a.a.createElement(ye,{name:"password",type:"password",label:"Password",value:c.password,handleChange:l,required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(pe,{type:"submit"},"Sign In"),a.a.createElement(pe,{onClick:Y},"Sign In with Google"))))};n(80);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var we=function(){var e={displayName:"",email:"",password:"",confirmPassword:""},t=Object(r.useState)(e),n=Object(ve.a)(t,2),c=n[0],i=n[1],l=function(){var t=Object(W.a)(q.a.mark((function t(n){var r,a,l,o,s,u;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=c.displayName,a=c.email,l=c.password,o=c.confirmPassword,l===o){t.next=5;break}return alert("Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,V.createUserWithEmailAndPassword(a,l);case 8:return s=t.sent,u=s.user,t.next=12,K(u,{displayName:r});case 12:i(e),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),o=function(e){var t=e.target,n=t.name,r=t.value;i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c,Object(b.a)({},n,r)))};return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",{className:"sign-up"},"I do not have an account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:l},a.a.createElement(ye,{type:"text",name:"displayName",label:"Display Name",value:c.displayName,onChange:o,required:!0}),a.a.createElement(ye,{type:"email",name:"email",label:"Email",value:c.email,onChange:o,required:!0}),a.a.createElement(ye,{type:"password",name:"password",label:"Password",value:c.password,onChange:o,required:!0}),a.a.createElement(ye,{type:"password",name:"confirmPassword",label:"confirm Password",value:c.confirmPassword,onChange:o,required:!0}),a.a.createElement(pe,{type:"submit"},"SIGN UP")))},ke=(n(81),function(){return a.a.createElement("div",{className:"sign-in-and-sign-out"},a.a.createElement(Ee,null),a.a.createElement(we,null))}),Ne=function(e){return e.cart},Pe=Object($.a)([Ne],(function(e){return e.cartItems})),Ue=Object($.a)([Ne],(function(e){return e.hidden})),Se=Object($.a)([Pe],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ce=Object($.a)([Pe],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),xe=(n(82),Object(o.b)(null,(function(e){return{clearItem:function(t){return e({type:"CLEAR_ITEM",payload:t})},removeItem:function(t){return e({type:"REMOVE_ITEM",payload:t})},addItem:function(t){return e(me(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.removeItem,c=e.addItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return a.a.createElement("div",{className:"checkout-item"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:l,alt:"item"})),a.a.createElement("span",{className:"name"},i),a.a.createElement("span",{className:"quantity"},a.a.createElement("div",{className:"arrow",onClick:function(){return r(t)}},"\u276e"),a.a.createElement("span",{className:"value"},s),a.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276f")),a.a.createElement("span",{className:"price"},o),a.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),Ie=n(47),De=n.n(Ie),Te=function(e){console.log(e),alert("Payment Successful")},Be=function(e){var t=e.price,n=100*t;return a.a.createElement(De.a,{label:"Pay Now",name:"CRWN Clothing S.A.",billingAddress:!0,shippingAddress:!0,image:"",description:"Your total is $".concat(t),amout:n,panelLAbel:"Pay Now",token:Te,stripeKey:"pk_test_yNuoIsmfD5pOn3B0xuadQqdR00yWF88pzt",bitcoin:!0})},Re=(n(83),Object(o.b)((function(e){return{cartItems:Pe(e),totalPrice:Ce(e)}}))((function(e){var t=e.cartItems,n=e.totalPrice;return a.a.createElement("div",{className:"checkout-page"},a.a.createElement("div",{className:"checkout-header"},a.a.createElement("div",{className:"header-blocks"},a.a.createElement("span",null,"Product")),a.a.createElement("div",{className:"header-blocks"},a.a.createElement("span",null,"Description")),a.a.createElement("div",{className:"header-blocks"},a.a.createElement("span",null,"Quantity")),a.a.createElement("div",{className:"header-blocks"},a.a.createElement("span",null,"Price")),a.a.createElement("div",{className:"header-blocks"},a.a.createElement("span",null,"Remove"))),t.map((function(e){return a.a.createElement(xe,{key:e.id,cartItem:e})})),a.a.createElement("div",{className:"total"},a.a.createElement("span",null,"Total: $",n)),a.a.createElement(Be,{price:n}))})));function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Me(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ge=a.a.createElement("title",null,"Group"),qe=a.a.createElement("desc",null,"Created with Sketch."),We=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Je=function(e){var t=e.svgRef,n=e.title,r=Me(e,["svgRef","title"]);return a.a.createElement("svg",Ae({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},r),void 0===n?Ge:n?a.a.createElement("title",null,n):null,qe,We)},Le=a.a.forwardRef((function(e,t){return a.a.createElement(Je,Ae({svgRef:t},e))}));n.p;function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var He=a.a.createElement("g",null),Ve=a.a.createElement("g",null),Fe=a.a.createElement("g",null),Qe=a.a.createElement("g",null),Ye=a.a.createElement("g",null),Ke=a.a.createElement("g",null),Xe=a.a.createElement("g",null),$e=a.a.createElement("g",null),Ze=a.a.createElement("g",null),et=a.a.createElement("g",null),tt=a.a.createElement("g",null),nt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=a.a.createElement("g",null),ct=a.a.createElement("g",null),it=function(e){var t=e.svgRef,n=e.title,r=ze(e,["svgRef","title"]);return a.a.createElement("svg",_e({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),He,Ve,Fe,Qe,Ye,Ke,Xe,$e,Ze,et,tt,nt,rt,at,ct)},lt=a.a.forwardRef((function(e,t){return a.a.createElement(it,_e({svgRef:t},e))})),ot=(n.p,n(84),Object(o.b)((function(e){return{itemCount:Se(e)}}),(function(e){return{toggleCart:function(){return e({type:"TOGGLE_CART"})}}}))((function(e){var t=e.toggleCart,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(lt,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))}))),st=(n(85),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,i=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:"item"}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},i," x $",r)))}),ut=(n(86),Object(J.g)(Object(o.b)((function(e){return{cartItems:Pe(e)}}))((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return a.a.createElement(st,{key:e.id,item:e})})):a.a.createElement("span",{className:"empty-msg"},"Your cart is empty")),t.length?a.a.createElement(pe,{onClick:function(){r({type:"TOGGLE_CART"}),n.push("/checkout")}},"FINISH"):null)}))));function mt(){var e=Object(ee.a)(["\n    ","\n"]);return mt=function(){return e},e}function pt(){var e=Object(ee.a)(["\n    ","\n"]);return pt=function(){return e},e}function bt(){var e=Object(ee.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return bt=function(){return e},e}function dt(){var e=Object(ee.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]);return dt=function(){return e},e}function ft(){var e=Object(ee.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return ft=function(){return e},e}function gt(){var e=Object(ee.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return gt=function(){return e},e}var ht=Object(te.a)(gt()),vt=(te.b.div(ft()),Object(te.b)(l.b)(dt()),te.b.div(bt()),Object(te.b)(l.b)(pt(),ht),te.b.div(mt(),ht),n(87),Object($.b)({currentUser:Z,hidden:Ue})),yt=Object(o.b)(vt)((function(e){var t=e.currentUser,n=e.hidden;return a.a.createElement("div",{className:"header"},a.a.createElement(l.b,{className:"logo-container",to:"/"},a.a.createElement(Le,{className:"logo"})),a.a.createElement("div",{className:"options",style:{position:"relative"}},a.a.createElement(l.b,{to:"/shop",className:"option"},"SHOP"),a.a.createElement(l.b,{to:"/contact",className:"option"},"CONTACT"),t?a.a.createElement("div",{className:"option",onClick:function(){V.signOut()}},"SIGN OUT"):a.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),a.a.createElement(ot,null),n?null:a.a.createElement(ut,null)))}));n(88),n(89);function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ot(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var jt=Object($.b)({currentUser:Z}),wt=Object(o.b)(jt,(function(e){return{setCurrentUser:function(t){return e(X(t))}}}))((function(e){var t=e.setCurrentUser,n=e.currentUser;return Object(r.useEffect)((function(){var e=V.onAuthStateChanged(function(){var e=Object(W.a)(q.a.mark((function e(n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,K(n);case 3:e.sent.onSnapshot((function(e){t(Et({id:e.id},e.data()))}));case 5:t(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]),a.a.createElement("div",null,a.a.createElement(yt,null),a.a.createElement(J.d,null,a.a.createElement(J.b,{exact:!0,path:"/",component:oe}),a.a.createElement(J.b,{path:"/shop",component:he}),a.a.createElement(J.b,{exact:!0,path:"/checkout",component:Re}),a.a.createElement(J.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(J.a,{to:"/"}):a.a.createElement(ke,null)}})))}));i.a.render(a.a.createElement(o.a,{store:R},a.a.createElement(l.a,null,a.a.createElement(M.a,{persistor:A},a.a.createElement(wt,null)))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.4f22ad07.chunk.js.map