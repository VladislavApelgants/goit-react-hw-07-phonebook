(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={phonebook:"App_phonebook__1BnXQ",title:"App_title__2xxf8",containerOverflow:"App_containerOverflow__2lcNq"}},20:function(t,e,n){t.exports={form:"Form_form__2toBZ",btnSend:"Form_btnSend__1T0f-"}},63:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(15),o=n.n(r),i=(n(37),n(11)),u=n.n(i),s=n(22),l=n(20),b=n.n(l),j=n(1);var d=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),l=u[0],d=u[1],f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":d(c);break;default:console.log("\u0423\u043f\u0441, \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}};return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target.name.value,c=t.target.number.value;e(n,c),o(""),d("")},className:b.a.form,children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:f})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:f})]}),Object(j.jsx)("button",{type:"submit",className:b.a.btnSend,children:"Add contact"})]})},f=n(9),O=n.n(f),p=n(6),m=n(7),h=n.n(m),_=n(18),v=n(12),x=n.n(v),g=n(4);x.a.defaults.baseURL="https://61b8d87738f69a0017ce5dbc.mockapi.io/";var C=Object(g.c)("contacts/fetchContacts",Object(_.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("./contacts/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),y=Object(g.c)("contacts/contactsItem",function(){var t=Object(_.a)(h.a.mark((function t(e){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:e.name,phone:e.phone},t.next=3,x.a.post("/contacts/contacts",n);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w=Object(g.c)("contacts/delete",function(){var t=Object(_.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("/contacts/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var k=function(t){var e=t.data,n=Object(p.b)();return Object(j.jsx)("ul",{className:O.a.contact__list,children:e.map((function(t){return Object(j.jsxs)("li",{className:O.a.contact__item,children:[Object(j.jsxs)("span",{className:O.a.contact__name,children:[t.name,":"]}),Object(j.jsx)("span",{className:O.a.contact__number,children:t.phone}),Object(j.jsx)("button",{type:"button",className:O.a.contact__button,onClick:function(){return n(w(t.id))}})]},t.id)}))})},A=n(17),N=n.n(A);function z(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:["Filter by name",Object(j.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n})]})}z.popTypes={value:N.a.string.isRequired,onChange:N.a.func.isRequired};var L=Object(g.b)("app/filter");var S,Z,q,B=function(){var t=Object(p.c)((function(t){return function(t){return t.contacts.filter}(t)})),e=Object(p.c)((function(t){return function(t){return t.contacts.item}(t)})),n=Object(p.c)((function(t){return function(t){return t.contacts.loading}(t)})),a=Object(p.b)();return Object(c.useEffect)((function(){a(C())}),[]),Object(j.jsxs)("div",{className:u.a.phonebook,children:[Object(j.jsx)("h1",{className:u.a.title,children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(t,n){if(!e.find((function(e){return e.name===t})))return a(y({name:t,phone:n}));alert("".concat(t," is already in the contacts"))}}),Object(j.jsxs)("div",{className:"contacts",children:[Object(j.jsx)("h2",{className:u.a.title,children:"Contacts"}),Object(j.jsx)(z,{value:t,onChange:function(t){var e=t.currentTarget,n=e.name,c=e.value;"filter"===n&&a(L(c))}}),Object(j.jsxs)("div",{className:u.a.containerOverflow,children:[n&&Object(j.jsx)("p",{children:"Load..."}),0!==e.length?Object(j.jsx)(k,{data:function(){var n=t&&t.toLowerCase();return e.filter((function(t){return t.name&&t.name.toLowerCase().includes(n)}))}()}):Object(j.jsx)("p",{children:"There is nothing here yet"})]})]})]})},T=n(3),J=n(32),F=n(2),M=Object(g.d)("",Object(F.a)({},L,(function(t,e){return e.payload}))),R=Object(g.d)([],(S={},Object(F.a)(S,C.fulfilled,(function(t,e){return e.payload})),Object(F.a)(S,y.fulfilled,(function(t,e){return[e.payload].concat(Object(J.a)(t))})),Object(F.a)(S,w.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),S)),E=Object(g.d)(null,(Z={},Object(F.a)(Z,C.rejected,(function(t,e){var n=e.error;return console.log(n)})),Object(F.a)(Z,C.pending,null),Object(F.a)(Z,y.rejected,(function(t,e){var n=e.error;return console.log(n)})),Object(F.a)(Z,y.pending,null),Object(F.a)(Z,w.rejected,(function(t,e){var n=e.error;return console.log(n)})),Object(F.a)(Z,w.pending,null),Z)),I=Object(g.d)(!1,(q={},Object(F.a)(q,C.pending,(function(){return!0})),Object(F.a)(q,C.fulfilled,(function(){return!1})),Object(F.a)(q,C.rejected,(function(){return!1})),Object(F.a)(q,y.pending,(function(){return!0})),Object(F.a)(q,y.fulfilled,(function(){return!1})),Object(F.a)(q,y.rejected,(function(){return!1})),Object(F.a)(q,w.pending,(function(){return!0})),Object(F.a)(q,w.fulfilled,(function(){return!1})),Object(F.a)(q,w.rejected,(function(){return!1})),q)),$=Object(T.b)({filter:M,item:R,error:E,loading:I}),D=n(8),G=Object(T.b)({contacts:$}),K=Object(g.a)({reducer:G,middleware:Object(g.e)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})});o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p.a,{store:K,children:Object(j.jsx)(B,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contact__list:"ContactList_contact__list__14CLv",contact__item:"ContactList_contact__item__2OyGc",contact__number:"ContactList_contact__number__16Z5f",contact__button:"ContactList_contact__button__fYK4y"}}},[[63,1,2]]]);
//# sourceMappingURL=main.8e9cf478.chunk.js.map