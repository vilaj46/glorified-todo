(this["webpackJsonpglorified-todo"]=this["webpackJsonpglorified-todo"]||[]).push([[0],{10:function(e,t,a){e.exports={li:"TodoItems_li__2-lRF",remove:"TodoItems_remove__32wHd",p:"TodoItems_p__1w0JM",span:"TodoItems_span__JnKXm",completed:"TodoItems_completed__2NGOB",x:"TodoItems_x__3B87g",check:"TodoItems_check__39fw3",hide:"TodoItems_hide__2i1oK",show:"TodoItems_show__L3zqR"}},19:function(e,t,a){e.exports={form:"AddTodoForm_form__18_kb",input:"AddTodoForm_input__crQzW",buttonContainer:"AddTodoForm_buttonContainer__2a-jz",button:"AddTodoForm_button__1Sb4-",warning:"AddTodoForm_warning__28cyb",display:"AddTodoForm_display__2MHQo",hide:"AddTodoForm_hide__37pnf"}},34:function(e,t,a){e.exports=a.p+"static/media/auth_problem.2a5a1bfc.svg"},44:function(e,t,a){e.exports=a.p+"static/media/show_password.e4b464d9.svg"},45:function(e,t,a){e.exports=a.p+"static/media/hide_password.dbd11928.svg"},47:function(e,t,a){e.exports=a.p+"static/media/check.7812c5ab.svg"},48:function(e,t,a){e.exports=a.p+"static/media/x.2329a60d.svg"},49:function(e,t,a){e.exports=a.p+"static/media/checkComplete.c4e37bc8.svg"},50:function(e,t,a){e.exports=a.p+"static/media/xComplete.4a74a651.svg"},56:function(e,t,a){e.exports=a(69)},62:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(43),c=a.n(r),l=a(17),s=a(6),i=(a(61),a(62),a(7)),m=a(28),u=a(9),d=a.n(u),p=a(14),b=a(15),_=a(8),f=a.n(_),g={jwt:"12345",users:[{username:"vilaj46@gmail.com",password:"georgia46"}],post:function(e,t){for(var a=0;a<g.users.length;a++){var n=g.users[a];if(e===n.username)return g.checkPW(t,n.password)}return 404},checkPW:function(e,t){return e===t?g.jwt:406}},E=g,h=a(34),v=a.n(h),N=a(44),x=a.n(N),T=a(45),w=a.n(T),k=function(e){var t=e.setToken,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],l=r[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),_=d[0],g=d[1],h=Object(n.useState)(!1),N=Object(i.a)(h,2),T=N[0],k=N[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),P=O[0],I=O[1],y=Object(n.useState)(!1),C=Object(i.a)(y,2),A=C[0],S=C[1],D=Object(s.g)(),L=function(e){S(e)};return o.a.createElement(m.a,null,o.a.createElement(p.a,{className:f.a.form,onSubmit:function(e){return function(e){console.log("submit"),e.preventDefault();var a=E.post(c,_);404===a?(k(!0),I(!1)):406===a?(I(!0),k(!1)):(t({username:c,response:a}),D.push("/profile"),k(!1),I(!1))}(e)}},o.a.createElement(p.a.Group,{controlId:"formBasicEmail",className:f.a.relative},o.a.createElement(p.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return l(e.target.value)},className:T?f.a.error:""}),T&&o.a.createElement("img",{src:v.a,alt:"Authentication Problem",className:f.a.authProblem}),o.a.createElement(p.a.Text,{className:"text-muted"},T?o.a.createElement("p",{className:f.a.textError},"The email you've entered doesn't match any account."," ",o.a.createElement("span",{className:f.a.boldError},"Sign up for an account.")):o.a.createElement("p",null,"We'll never share your email with anyone else."))),o.a.createElement(p.a.Group,{controlId:"formBasicPassword",className:f.a.relative},o.a.createElement(p.a.Control,{type:A?"text":"password",placeholder:"Password",onChange:function(e){return g(e.target.value)}}),A?o.a.createElement("button",{type:"button",className:P?f.a.showPW1:f.a.showPW2,onClick:function(){return L(!1)}},o.a.createElement("img",{src:w.a,alt:"Password Vision"})):o.a.createElement("button",{type:"button",className:P?f.a.showPW1:f.a.showPW2,onClick:function(){return L(!0)}},o.a.createElement("img",{src:x.a,alt:"Password Vision"})),P&&o.a.createElement("img",{src:v.a,alt:"Authentication Problem",className:f.a.authProblem}),o.a.createElement(p.a.Text,{className:"text-muted"},P?o.a.createElement("p",{className:f.a.textError},"The password you've entered is incorrect."," ",o.a.createElement("span",{className:f.a.boldError},"Forgot Password?")):o.a.createElement("p",null,"Never share your password with anyone else."))),o.a.createElement(b.a,{variant:"primary",type:"submit",className:f.a.loginButton},"Log In")))},j=function(){return o.a.createElement("div",null,"Signup Page")},O=function(){return o.a.createElement("div",null,"Profile Page")},P=a(71),I=a(53),y=a(18),C=a(72),A=a(73),S=a(10),D=a.n(S),L=a(47),W=a.n(L),B=a(48),F=a.n(B),M=a(49),G=a.n(M),R=a(50),z=a.n(R),H="TodoItem",J=function(e){var t=e.item,a=e.index,n=e.completeTodo,r=e.removeTodo,c=e.swapTodoItems,l=Object(C.a)({item:{type:H,data:Object(y.a)({},t,{index:a})},collect:function(e){return{isDragging:!!e.isDragging()}}}),s=Object(i.a)(l,2)[1],m=Object(A.a)({accept:H,drop:function(e){c(e.data,Object(y.a)({},t,{index:a}))}}),u=Object(i.a)(m,2)[1],d=t.completed?G.a:W.a,p=t.completed?z.a:F.a;return o.a.createElement("li",{"data-testid":t.IDNumber,className:"".concat(D.a.li," ").concat(t.completed?D.a.completed:""),onClick:function(){return n(Object(y.a)({},t,{index:a}))},ref:s},o.a.createElement("span",{className:D.a.span},o.a.createElement("img",{src:d,alt:"Completed!",className:"".concat(D.a.check," ").concat(t.completed?D.a.show:D.a.hide)})),o.a.createElement("p",{className:D.a.p,ref:u},t.todo),o.a.createElement("button",{type:"button","data-testid":"".concat(t.IDNumber,"-button"),className:"".concat(D.a.span," ").concat(D.a.remove," ").concat(t.completed?D.a.completed:""),onClick:function(e){return function(e){e.stopPropagation(),r(Object(y.a)({},t,{index:a}))}(e)}},o.a.createElement("img",{src:p,alt:"Remove",className:D.a.x})))},K=function(e){var t=e.todos,a=e.completeTodo,n=e.removeTodo,r=e.swapTodoItems;return o.a.createElement(P.a,{backend:I.a},o.a.createElement("ul",{className:D.a.ul},t.map((function(e,t){return o.a.createElement(J,{item:e,key:e.IDNumber,index:t,completeTodo:a,removeTodo:n,swapTodoItems:r})}))))},Q=a(52),X=function(e){return e.isAuthenticated?o.a.createElement(l.b,{to:"/profile"},o.a.createElement(b.a,{className:"".concat(d.a.button," ").concat(d.a.link)},"Profile")):o.a.createElement(l.b,{className:d.a.link,to:"/signup"},o.a.createElement(b.a,{className:d.a.button},"Signup"))},V=function(e){var t=e.isAuthenticated,a=e.setToken;return t?o.a.createElement(b.a,{className:"".concat(d.a.button," ").concat(d.a.link),onClick:function(){return a({username:"",response:""})}},"Logout"):o.a.createElement(l.b,{className:d.a.link,to:"/login"},o.a.createElement(b.a,{className:d.a.button},"Login"))},U=function(e){e.authentication;var t=e.setToken,a=e.isAuthenticated;return o.a.createElement("header",{className:d.a.header},o.a.createElement("div",{className:d.a.linksContainer},o.a.createElement(Q.a,null,o.a.createElement(l.b,{className:d.a.link,to:"/"},o.a.createElement(b.a,{className:d.a.button},"Items")),o.a.createElement(V,{isAuthenticated:a,setToken:t}),o.a.createElement(X,{isAuthenticated:a}))),o.a.createElement("h1",null,"My Glorified To Do List"))},q=a(19),Y=a.n(q),Z=function(e){var t=e.addTodo,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],l=r[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1],_=function(e){e.preventDefault();var a=t({todo:c,IDNumber:c+Math.random(1e4),completed:!1});a?(l(""),d(!1)):(console.log(a),d(!0))},f=u?Y.a.display:Y.a.hide;return o.a.createElement(p.a,{className:Y.a.form,onSubmit:function(e){return _(e)}},o.a.createElement(p.a.Control,{size:"lg",type:"text",placeholder:"Todo...",value:c,onChange:function(e){return l(e.target.value)},className:Y.a.input,onSubmit:function(e){return _(e)}}),o.a.createElement("div",{className:Y.a.buttonContainer},o.a.createElement("span",{className:"".concat(Y.a.warning," ").concat(f)},"You must write something!"),o.a.createElement(b.a,{onClick:function(e){return _(e)},"data-testid":"add-todo",className:Y.a.button},"Add")))},$=a(25),ee=function(){var e=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];return[a,function(e){var t=e.todo.trim();return t.length>0&&(e.todo=t,a.push(e),o(Object($.a)(a)),!0)},function(e){var t=e.index,n=e.IDNumber;if(a[t].IDNumber===n)a[t].completed=!a[t].completed;else{for(var r,c=0;c<a.length;c++){if(a[c].IDNumber===n){r=c;break}}a[r].completed=!a[r].completed}o(Object($.a)(a))},function(e){var t=e.index,n=e.IDNumber;if(a[t].IDNumber===n)a.splice(t,1);else{for(var r,c=0;c<a.length;c++){if(a[c].IDNumber===n){r=c;break}}a.splice(r,1)}o(Object($.a)(a))},function(e,t){var n=Object(y.a)({},e,{index:t.index}),r=Object(y.a)({},t,{index:e.index});a[e.index]=r,a[t.index]=n,o(Object($.a)(a))}]}(),t=Object(i.a)(e,5),a=t[0],r=t[1],c=t[2],l=t[3],u=t[4],p=function(){var e=Object(n.useState)({username:"",token:""}),t=Object(i.a)(e,2),a=t[0],o=t[1];return[a,function(e){o({username:e.username,token:e.response})}]}(),b=Object(i.a)(p,2),_=b[0],f=b[1],g=_.username.length>0&&_.token.length>0;return o.a.createElement(m.a,null,o.a.createElement("div",{className:d.a.top},o.a.createElement(U,{authentication:_,setToken:f,isAuthenticated:g}),o.a.createElement(s.b,{path:"/",exact:!0,render:function(){return o.a.createElement(Z,{addTodo:r})}})),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/",exact:!0},o.a.createElement(K,{todos:a,completeTodo:c,removeTodo:l,swapTodoItems:u})),o.a.createElement(s.b,{path:"/login",exact:!0},g?o.a.createElement(s.a,{to:"/profile"}):o.a.createElement(k,{setToken:f})),o.a.createElement(s.b,{path:"/signup",exact:!0,component:j}),o.a.createElement(s.b,{path:"/profile",exact:!0},g?o.a.createElement(O,null):o.a.createElement(s.a,{to:"/login"}))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,null,o.a.createElement(s.b,{to:"/",exact:!0,component:ee}))),document.getElementById("root"))},8:function(e,t,a){e.exports={form:"LoginPage_form__1nHR1",error:"LoginPage_error__QZVcP",textError:"LoginPage_textError__4bbEH",boldError:"LoginPage_boldError__1cT-X",loginButton:"LoginPage_loginButton__28ktM",relative:"LoginPage_relative__3UQWy",authProblem:"LoginPage_authProblem__3R4X0",showPW1:"LoginPage_showPW1__2B6hi",showPW2:"LoginPage_showPW2__2GIPA"}},9:function(e,t,a){e.exports={top:"App_top__3pCvB",header:"App_header__3U4th",linksContainer:"App_linksContainer__1mKK6",link:"App_link__2XWxO"}}},[[56,1,2]]]);
//# sourceMappingURL=main.d0184b9f.chunk.js.map