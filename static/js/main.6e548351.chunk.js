(this["webpackJsonpglorified-todo"]=this["webpackJsonpglorified-todo"]||[]).push([[0],{104:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(43),o=a.n(s),c=a(16),i=a(12),u=(a(103),a(104),a(4)),l=a(53),m=a(59),d=a.n(m),p=a(60),b=a.n(p),f=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:b.a.h1},"Ooops!"),n.a.createElement("h2",{className:b.a.h2},"We can't seem to find the page ",n.a.createElement("br",null),"you're looking for."),n.a.createElement("h3",{styles:b.a.h3},"Error code: 404"))},E=a(135),h=a(94),g=a(17),k=a(136),v=a(137),_=a(19),x=a.n(_),w=a(78),y=a.n(w),O=a(79),I=a.n(O),j=a(80),A=a.n(j),P=a(81),N=a.n(P),T="TODO_ITEM",C=function(e){var t=e.item,a=e.index,r=e.authData,s=e.todoData,o=Object(k.a)({item:{type:T,data:Object(g.a)({},t,{index:a})},collect:function(e){return{isDragging:!!e.isDragging()}}}),c=Object(u.a)(o,2)[1],i=Object(v.a)({accept:T,drop:function(e){s.swapTodoItems(e.data,Object(g.a)({},t,{index:a}),r)}}),l=Object(u.a)(i,2)[1],m=t.completed?A.a:y.a,d=t.completed?N.a:I.a;return n.a.createElement("li",{"data-testid":t.IDNumber,className:"".concat(x.a.li," ").concat(t.completed?x.a.completed:""),onClick:function(){s.completeTodo(Object(g.a)({},t,{index:a}),r)},ref:c},n.a.createElement("span",{className:x.a.span},n.a.createElement("img",{src:m,alt:"Completed!",className:"".concat(x.a.check," ").concat(t.completed?x.a.show:x.a.hide)})),n.a.createElement("p",{className:x.a.p,ref:l},t.todo),n.a.createElement("button",{type:"button","data-testid":"".concat(t.IDNumber,"-button"),className:"".concat(x.a.span," ").concat(x.a.remove," ").concat(t.completed?x.a.completed:""),onClick:function(e){return function(e){e.stopPropagation(),s.removeTodo(Object(g.a)({},t,{index:a}),r)}(e)}},n.a.createElement("img",{src:d,alt:"Remove",className:x.a.x})))},D=function(e){var t=e.authData,a=e.todoData,s=Object(r.useState)(!1),o=Object(u.a)(s,2),c=o[0],i=o[1],l=Object(r.useState)(a.todos),m=Object(u.a)(l,2),d=m[0],p=m[1];return Object(r.useEffect)((function(){!1===c&&t.isAuthenticated?(p(t.authentication.todos),a.setInitialTodos(t.authentication.todos)):c&&t.isAuthenticated?p(t.authentication.todos):p(a.todos),i(!0)}),[c,i,p,t,a]),n.a.createElement(E.a,{backend:h.a},n.a.createElement("ul",{className:x.a.ul},d.map((function(e,r){return n.a.createElement(C,{item:e,key:e.IDNumber,index:r,todoData:a,authData:t})}))))},S=a(28),B=a(83),M=a.n(B),U=a(11),L=a(13),K=a(18),R=a.n(K),V=a(29),F=a(40),G=a(85),q=a(84),z=a.n(q),W=function(e){var t=e.email,a=e.visibleEmails,r=e.setEmailText;return n.a.createElement(V.a,{className:"mb-3"},n.a.createElement(V.a.Prepend,{className:R.a.envelope},n.a.createElement(V.a.Text,{id:"inputGroup-sizing-sm"},n.a.createElement("img",{src:z.a,alt:"Email",title:"Email"}))),n.a.createElement(G.a,{as:V.a.Prepend,variant:"outline-secondary",title:t||" ",className:R.a.dropdown},n.a.createElement(F.a.Item,{href:"#",className:R.a.blankEmail,onClick:function(){return r(" ")}},"Leave Blank"),a.map((function(e){return n.a.createElement(F.a.Item,{href:"#",className:R.a.choice,onClick:function(){return r(e)},key:e},e)}))))},H=function(e){var t=e.bio,a=e.setBioText;return n.a.createElement(U.a.Group,{controlId:"exampleForm.ControlTextarea1"},n.a.createElement(U.a.Control,{as:"textarea",rows:3,placeholder:"Add a bio",value:t,onChange:function(e){return a(e.target.value)}}))},J=a(51),Q=a(86),X=a.n(Q),Y=a(87),Z=a.n(Y),$=a(88),ee=a.n($),te=a(89),ae=a.n(te),re=function(e){var t,a=e.localKey,r=e.keyValue,s=e.setProfileKey;switch(a.toLowerCase()){case"company":t=X.a;break;case"location":t=Z.a;break;case"website":t=ee.a;break;default:t=ae.a}return n.a.createElement(V.a,{size:"sm",className:"mb-3"},n.a.createElement(V.a.Prepend,null,n.a.createElement(V.a.Text,{id:"inputGroup-sizing-sm",className:R.a.bioIconContainer},n.a.createElement("img",{src:t,alt:a,title:a}))),n.a.createElement(J.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",onChange:function(e){return s(e.target.value)},value:r,className:R.a.bioStringInput,placeholder:a}))},ne=function(e){var t=e.setDisplayBioInputs;return n.a.createElement(L.a,{type:"button",className:R.a.editButton,onClick:function(){return t(!0)}},"Edit Profile")},se=a(9),oe=a.n(se),ce=a(10),ie=a(24),ue=a.n(ie),le=function(){var e=Object(ce.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.post("https://glorified-todo-backend.herokuapp.com/login",t).then((function(e){return{status:200,token:e.data}})).catch((function(e){return console.log(e),406===e.response.status?"username"===e.response.data?{status:406,data:"Username not found."}:{status:406,data:"Incorrect password."}:{status:400,data:"Something went wrong"}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=a(27),de=function(){var e=Object(ce.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.post("https://glorified-todo-backend.herokuapp.com/signup",t).then((function(e){return{status:200,token:e.data}})).catch((function(e){var t=e.response.status;if(console.log(t),406===t){var a=e.response.data.split(" ");return{status:406,data:[406].concat(Object(me.a)(a))}}return{status:500,data:"Something went wrong"}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,r){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.put("https://glorified-todo-backend.herokuapp.com/users/".concat(t,"/profile"),r,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return{status:200,token:e.data.token}})).catch((function(e){return 401===e.response.status||403===e.response.status?{status:401,data:"Please login. Your session has ended."}:{status:500,data:"Something went wrong."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),be=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a){var r;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.post("https://glorified-todo-backend.herokuapp.com/users/".concat(a.id,"/todos"),t,{headers:{Authorization:"Bearer ".concat(a.token)}});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",{status:200,token:r.data});case 7:return e.abrupt("return",{status:500,data:"Something went wrong."});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),fe=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a){var r;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.put("https://glorified-todo-backend.herokuapp.com/users/".concat(a.id,"/todos/").concat(t.IDNumber),t,{headers:{Authorization:"Bearer ".concat(a.token)}});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",{status:200,token:r.data});case 7:return e.abrupt("return",{status:500,data:"Something went wrong."});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a){var r;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.delete("https://glorified-todo-backend.herokuapp.com/users/".concat(a.id,"/todos/").concat(t.IDNumber,"/").concat(t.index),{headers:{Authorization:"Bearer ".concat(a.token)}});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",{status:200,token:r.data});case 7:return e.abrupt("return",{status:500,data:"Something went wrong"});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),he={signup:de,login:le,updateProfile:pe,todos:{addTodo:be,swapTodos:function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,r){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.put("https://glorified-todo-backend.herokuapp.com/users/".concat(r.id,"/todos/").concat(t.IDNumber,"-").concat(a.IDNumber,"/").concat(t.index,"-").concat(a.index),{headers:{Authorization:"Bearer ".concat(r.token)}});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",{status:200,token:n.data});case 7:return e.abrupt("return",{status:500,data:"Something went wrong"});case 8:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),removeTodo:Ee,completeTodo:fe}},ge=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,r){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.updateProfile(t.id,t.token,a);case 2:200===(n=e.sent).status?(r.setDisplayError(""),r.setProfileKey(n.token),r.setDisplayBioInputs(!1)):401===n.status||403===n.status?(r.setDisplayError(""),r.setToken(),r.history.push("/login",{message:n.data,time:Date.now()})):(r.setDisplayError(n.data),r.setDisplayBioInputs(!1));case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),ke=function(e,t){t.forEach((function(e){e.action(e.value)})),e.setDisplayBioInputs(!1),e.setDisplayError("")},ve=function(e){var t=e.authentication,a=e.profile,s=e.setProfileKey,o=e.displayBioInputs,c=e.setDisplayBioInputs,l=e.setToken,m=Object(r.useState)(a.bio),d=Object(u.a)(m,2),p=d[0],b=d[1],f=Object(r.useState)(a.company),E=Object(u.a)(f,2),h=E[0],g=E[1],k=Object(r.useState)(a.location),v=Object(u.a)(k,2),_=v[0],x=v[1],w=Object(r.useState)(a.visibleEmail),y=Object(u.a)(w,2),O=y[0],I=y[1],j=Object(r.useState)(a.website),A=Object(u.a)(j,2),P=A[0],N=A[1],T=Object(r.useState)(a.twitter),C=Object(u.a)(T,2),D=C[0],S=C[1],B=Object(r.useState)(""),M=Object(u.a)(B,2),K=M[0],V=M[1],F={bio:p,visibleEmail:O,company:h,location:_,website:P,twitter:D,emails:a.emails},G=[{value:a.bio,action:b},{value:a.company,action:g},{value:a.location,action:x},{value:a.visibleEmail,action:I},{value:a.website,action:N},{value:a.twitter,action:S}],q=Object(i.g)();return n.a.createElement(U.a,{style:{minWidth:"229px",maxWidth:"229px"}},n.a.createElement("img",{className:R.a.profilePic,src:t.profilePic,alt:"Avatar"}),n.a.createElement("p",{className:R.a.username},t.username),!o&&n.a.createElement(ne,{setDisplayBioInputs:c}),K&&n.a.createElement("p",{className:R.a.error},K),o&&n.a.createElement("div",null,n.a.createElement(H,{bio:p,setBioText:b}),n.a.createElement(re,{localKey:"Company",keyValue:h,setProfileKey:g}),n.a.createElement(re,{localKey:"Location",keyValue:_,setProfileKey:x}),n.a.createElement(W,{email:O,visibleEmails:a.emails,setEmailText:I}),n.a.createElement(re,{localKey:"Website",keyValue:P,setProfileKey:N}),n.a.createElement(re,{localKey:"Twitter",keyValue:D,setProfileKey:S}),n.a.createElement(L.a,{type:"button",className:R.a.save,onClick:function(){ge(t,F,{setProfileKey:s,setDisplayBioInputs:c,setDisplayError:V,history:q,setToken:l})}},"Save"),n.a.createElement(L.a,{type:"button",className:R.a.cancel,onClick:function(){ke({setDisplayBioInputs:c,setDisplayError:V},G)}},"Cancel")))},_e=function(e){var t=e.authentication,a=e.setProfileKey,s=e.setToken,o=Object(S.a)(t.profile),c=Object(r.useState)(!1),i=Object(u.a)(c,2),l=i[0],m=i[1];return n.a.createElement("div",{className:M.a.profilePage},n.a.createElement(ve,{authentication:t,profile:o,setProfileKey:a,displayBioInputs:l,setDisplayBioInputs:m,setToken:s}))},xe=a(95),we=a(6),ye=a.n(we),Oe=function(e,t,a){a.setUsername(e),t.usernameMessage>0&&(a.setUsernameMessage(0),a.setUsernameError(!1))},Ie=function(e,t,a){a.setPassword(e),t.passwordMessage>0&&(a.setPasswordMessage(0),a.setPasswordError(!1))},je=function(e,t,a){a.setEmail(e),t.emailMessage>0&&(a.setEmailMessage(0),a.setEmailError(!1))};var Ae=function(e,t,a){var r=e.location.pathname,n=t.username,s=t.email,o=t.password,c=a.captcha;return!!("/login"===r&&n.length>0&&o.length>0&&c)||!!("/signup"===r&&n.length>0&&s.length>0&&o.length>0&&c)},Pe=function(e,t,a,r){if(!(Date.now()-e<r)&&(t(Date.now()),a>0&&a===a)){var n=document.getElementById("usernameId"),s=document.getElementById("emailId");document.getElementById("passwordId").classList.remove("bold"),s&&s.classList.remove("bold"),n.classList.add(ye.a.bold),setTimeout((function(){n.classList.remove(ye.a.bold)}),e)}},Ne=function(e,t,a,r){if(!(Date.now()-e<r)){t(Date.now());var n=a,s=document.getElementById("usernameId"),o=document.getElementById("emailId");if(a>0&&n===a){var c=document.getElementById("passwordId");s.classList.remove("bold"),o&&o.classList.remove("bold"),c.classList.add(ye.a.bold),setTimeout((function(){c.classList.remove(ye.a.bold)}),e)}}},Te=function(e,t,a,r){if(!(Date.now()-e<r)){t(Date.now());var n=a,s=document.getElementById("usernameId"),o=document.getElementById("passwordId");if(a>0&&n===a){var c=document.getElementById("emailId");s.classList.remove("bold"),o.classList.remove("bold"),c.classList.add(ye.a.bold),setTimeout((function(){c.classList.remove(ye.a.bold)}),e)}}},Ce=function(e,t,a){if(!(Date.now()-e<a)){var r=document.querySelector('[role="presentation"]');r.classList.add(ye.a.captchaError),setTimeout((function(){r.classList.remove(ye.a.captchaError)}),e)}};var De={usernameIsEmpty:function(e,t){e.setUsernameError(!0),e.setEmailError(!1),e.setPasswordError(!1),e.setUsernameMessage(1),Pe(500,e.setLastClicked,t.usernameMessage,t.lastClicked)},passwordIsEmpty:function(e,t){e.setPasswordError(!0),e.setUsernameError(!1),e.setEmailError(!1),e.setPasswordMessage(1),Ne(500,e.setLastClicked,t.passwordMessage,t.lastClicked)},successful:function(e,t,a){t.setUsernameError(!1),t.setPasswordError(!1),t.setToken(e.token),a.history.push("/profile")},usernameNotFound:function(e,t){e.setUsernameError(!0),e.setPasswordError(!1),e.setUsernameMessage(2),Pe(500,e.setLastClicked,t.usernameMessage,t.lastClicked)},passwordIncorrect:function(e,t){e.setPasswordError(!0),e.setUsernameError(!1),e.setPasswordMessage(2),Ne(500,e.setLastClicked,t.passwordMessage,t.lastClicked)},emailIsEmpty:function(e,t){e.setEmailError(!0),e.setUsernameError(!1),e.setPasswordError(!1),e.setEmailMessage(1),Te(500,e.setLastClicked,t.emailMessage,t.lastClicked)},usernameAndEmailInUse:function(e,t){e.setUsernameError(!0),e.setUsernameMessage(3),Pe(500,e.setLastClicked,t.usernameMessage,t.lastClicked),e.setEmailError(!0),e.setEmailMessage(3),Te(500,e.setLastClicked,t.emailMessage,t.lastClicked)},onlyUsernameInUse:function(e,t){e.setUsernameError(!0),e.setPasswordError(!1),e.setUsernameMessage(3),Pe(500,e.setLastClicked,t.usernameMessage,t.lastClicked)},onlyEmailInUse:function(e,t){e.setEmailError(!0),e.setUsernameError(!1),e.setEmailMessage(3),Te(500,e.setLastClicked,t.emailMessage,t.lastClicked)}},Se=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,r){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.username.trim().length){e.next=5;break}return De.usernameIsEmpty(a,r),e.abrupt("return",!1);case 5:if(0!==t.password.trim().length){e.next=8;break}return De.passwordIsEmpty(a,r),e.abrupt("return",!1);case 8:if(r.captchaValue||!r.settings.captch){e.next=10;break}return e.abrupt("return",!1);case 10:return e.next=12,he.login({username:t.username,password:t.password});case 12:if(200!==(n=e.sent).status){e.next=18;break}return De.successful(n,a,r),e.abrupt("return",!0);case 18:if(406!==n.status){e.next=26;break}if("Username not found."!==n.data){e.next=24;break}return De.usernameNotFound(a,r),e.abrupt("return",!1);case 24:return De.passwordIncorrect(a,r),e.abrupt("return",!1);case 26:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),Be=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,r){var n,s;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.username.trim().length){e.next=5;break}return De.usernameIsEmpty(a,r),e.abrupt("return",!1);case 5:if(0!==t.email.trim().length){e.next=10;break}return De.emailIsEmpty(a,r),e.abrupt("return",!1);case 10:if(0!==t.password.trim().length){e.next=13;break}return De.passwordIsEmpty(a,r),e.abrupt("return",!1);case 13:return e.next=15,he.signup(t);case 15:if(200!==(n=e.sent).status){e.next=19;break}return De.successful(n,a,r),e.abrupt("return",!0);case 19:if(406!==n.status){e.next=34;break}if(!(s=n.data).includes("username")||!s.includes("email")){e.next=26;break}return De.usernameAndEmailInUse(a,r),e.abrupt("return",!1);case 26:if(!s.includes("username")){e.next=31;break}return De.onlyUsernameInUse(a,r),e.abrupt("return",!1);case 31:if(!s.includes("email")){e.next=34;break}return De.onlyEmailInUse(a,r),e.abrupt("return",!1);case 34:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),Me=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,r){var n,s,o;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={username:a.username,email:a.email,password:a.password},a.settings.captcha&&(s=a.recaptchaRef.current.getValue()),o=Ae(a.history,n,a.settings),void 0!==s&&""!==s||!o){e.next=7;break}return!0===a.usernameError?Pe(500,r.setLastClicked,a.lastClicked):!0===a.passwordError?Ne(500,r.setLastClicked,a.lastClicked):!0===a.emailError?Te(500,r.setLastClicked,a.lastClicked):Ce(500,r.setLastClicked,a.lastClicked),e.abrupt("return");case 7:if("login"!==a.page){e.next=12;break}!1===Se(n,r,a)&&a.settings.captcha&&r.setCaptchaValue(void 0),e.next=16;break;case 12:return e.next=14,Be(n,r,a);case 14:!1===e.sent&&function(e){r.setCaptchaValue(e)}(void 0);case 16:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),Ue=function(e){var t=e.page,a="login"===t?ye.a.loginButton:ye.a.signupButton,r="login"===t?"Log In":"Create New Account";return n.a.createElement(L.a,{variant:"primary",type:"submit",className:a},r)},Le=function(e){var t=e.usernameError,a=e.usernameMessage,r=[n.a.createElement("p",{id:"usernameId",className:ye.a.blankUsernameMessage},"We'll never share your email with anyone else."),n.a.createElement("p",{className:ye.a.textError,id:"usernameId"},"Username cannot be blank."),n.a.createElement("p",{className:ye.a.textError,id:"usernameId"},"The email you've entered doesn't match any account.\xa0",n.a.createElement(c.b,{to:"signup",className:ye.a.boldError},n.a.createElement("span",null,"Sign up for an account."))),n.a.createElement("p",{className:ye.a.textError,id:"usernameId"},"That username is already taken.")];return n.a.createElement(U.a.Text,{className:"text-muted"},t?r[a]:r[0])},Ke=function(e){var t=e.emailError,a=e.emailMessage,r=[n.a.createElement("p",{id:"emailId"},"We'll never share your email with anyone else."),n.a.createElement("p",{className:ye.a.textError,id:"emailId"},"Email cannot be blank."),n.a.createElement("p",{className:ye.a.textError,id:"emailId"},"The email you've entered doesn't match any account.\xa0",n.a.createElement(c.b,{to:"signup",className:ye.a.boldError},n.a.createElement("span",null,"Sign up for an account."))),n.a.createElement("p",{className:ye.a.textError,id:"emailId"},"That email is already taken.")];return n.a.createElement(U.a.Text,{className:"text-muted"},t?r[a]:r[0])},Re=function(e){var t=e.passwordError,a=e.passwordMessage,r=[n.a.createElement("p",{id:"passwordId"},"Never share your password with anyone else."),n.a.createElement("p",{className:ye.a.textError,id:"passwordId"},"Password cannot be blank."),n.a.createElement("p",{className:ye.a.textError,id:"passwordId"},"The password you've entered is incorrect."," ",n.a.createElement("span",{className:ye.a.boldError},"Forgot Password?"))];return n.a.createElement(U.a.Text,{className:"text-muted"},t?r[a]:r[0])},Ve=a(90),Fe=a.n(Ve),Ge=function(e){return e.error&&n.a.createElement("img",{src:Fe.a,alt:"Authentication Problem",className:ye.a.authProblem})},qe=a(91),ze=a.n(qe),We=a(92),He=a.n(We),Je=function(e){var t=e.displayPassword,a=e.passwordError,r=e.setDisplayPassword;return t?n.a.createElement("button",{type:"button",className:a?ye.a.showPW1:ye.a.showPW2,onClick:function(){return r(!1)}},n.a.createElement("img",{src:He.a,alt:"Password Vision"})):n.a.createElement("button",{type:"button",className:a?ye.a.showPW1:ye.a.showPW2,onClick:function(){return r(!0)}},n.a.createElement("img",{src:ze.a,alt:"Password Vision"}))},Qe=function(e){var t=e.setToken,a=e.page,s=e.settings,o=(e.setSettingsKey,Object(r.useState)("")),c=Object(u.a)(o,2),m=c[0],d=c[1],p=Object(r.useState)(""),b=Object(u.a)(p,2),f=b[0],E=b[1],h=Object(r.useState)(""),g=Object(u.a)(h,2),k=g[0],v=g[1],_=Object(r.useState)(!1),x=Object(u.a)(_,2),w=x[0],y=x[1],O=Object(r.useState)(!1),I=Object(u.a)(O,2),j=I[0],A=I[1],P=Object(r.useState)(!1),N=Object(u.a)(P,2),T=N[0],C=N[1],D=Object(r.useState)(!1),S=Object(u.a)(D,2),B=S[0],M=S[1],L=Object(r.useState)(0),K=Object(u.a)(L,2),R=K[0],V=K[1],F=Object(r.useState)(0),G=Object(u.a)(F,2),q=G[0],z=G[1],W=Object(r.useState)(0),H=Object(u.a)(W,2),J=H[0],Q=H[1],X=Object(r.useState)(void 0),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.useState)(a),te=Object(u.a)(ee,2),ae=te[0],re=te[1],ne=Object(r.useState)(""),se=Object(u.a)(ne,2),oe=se[0],ce=se[1],ie=Object(r.useState)(0),ue=Object(u.a)(ie,2),le=ue[0],me=ue[1],de=Object(r.useState)(void 0),pe=Object(u.a)(de,2),be=pe[0],fe=pe[1],Ee=Object(i.g)();Ee.location.state&&0===le&&(ce(Ee.location.state.message),me(1));var he=n.a.createRef(),ge={setPrevPage:re,setUsername:d,setEmail:v,setPassword:E,setUsernameError:y,setEmailError:A,setPasswordError:C,setDisplayPassword:M,setUsernameMessage:V,setEmailMessage:z,setPasswordMessage:Q,setOverHeadMessage:ce,setCounter:me,setCaptchaValue:fe,setToken:t,setLastClicked:$},ke={username:m,password:f,email:k,usernameError:w,passwordError:T,emailError:j,displayPassword:B,usernameMessage:R,emailMessage:q,passwordMessage:J,lastClicked:Z,prevPage:ae,overHeadMessage:oe,counter:le,captchaValue:be,settings:s,history:Ee,page:a,recaptchaRef:he};ae!==a&&function(e,t){e.setPrevPage(t),e.setUsername(""),e.setEmail(""),e.setPassword(""),e.setUsernameError(!1),e.setEmailError(!1),e.setPasswordError(!1),e.setDisplayPassword(!1),e.setUsernameMessage(0),e.setEmailMessage(0),e.setPasswordMessage(0),e.setOverHeadMessage(""),e.setCounter(0),e.setCaptchaValue(void 0)}(ge,a);var ve=Object(r.useState)(!1),_e=Object(u.a)(ve,2),we=_e[0],Ae=_e[1];return Object(r.useEffect)((function(){!1===we&&"/login"===Ee.location.pathname&&ce(""),(w||j||T)&&be&&he.current.reset(),Ae(!0)}),[we,Ae,Ee,he,be,w,j,T]),n.a.createElement(l.a,null,oe&&n.a.createElement("p",{className:"".concat(ye.a.boldError," ").concat(ye.a.overHead)},oe),n.a.createElement(U.a,{className:ye.a.form,onSubmit:function(e){return Me(e,ke,ge)}},n.a.createElement(U.a.Group,{controlId:"formBasic",className:ye.a.relative},n.a.createElement(U.a.Control,{type:"text",placeholder:"Enter username",value:m,onChange:function(e){return Oe(e.target.value,ke,ge)},className:w?ye.a.error:""}),n.a.createElement(Ge,{error:w}),n.a.createElement(Le,{usernameError:w,usernameMessage:R})),"/signup"===Ee.location.pathname&&n.a.createElement(U.a.Group,{controlId:"formBasicEmail",className:ye.a.relative},n.a.createElement(U.a.Control,{type:"email",placeholder:"Enter email",value:k,onChange:function(e){return je(e.target.value,ke,ge)},className:j?ye.a.error:""}),n.a.createElement(Ge,{error:j}),n.a.createElement(Ke,{emailError:j,emailMessage:q})),n.a.createElement(U.a.Group,{controlId:"formBasicPassword",className:ye.a.relative},n.a.createElement(U.a.Control,{type:B?"text":"password",placeholder:"Password",value:f,onChange:function(e){return Ie(e.target.value,ke,ge)},className:T?ye.a.error:"",autoComplete:"on"}),n.a.createElement(Je,{displayPassword:B,passwordError:T,setDisplayPassword:M}),n.a.createElement(Ge,{error:T}),n.a.createElement(Re,{passwordError:T,passwordMessage:J})),s.captcha&&n.a.createElement("div",{className:ye.a.captchaContainer},n.a.createElement(xe.a,{ref:he,sitekey:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",onChange:function(e){fe(e)}})),n.a.createElement(Ue,{page:a})))},Xe=a(15),Ye=a.n(Xe),Ze=function(){return n.a.createElement(c.b,{to:"/signup"},n.a.createElement(L.a,{className:Ye.a.button},"Signup"))},$e=function(e){var t=e.authData,a=e.setInitialTodos;return t.isAuthenticated?n.a.createElement(L.a,{className:Ye.a.button,onClick:function(){t.setToken(),a([])}},"Log Out"):n.a.createElement(c.b,{className:Ye.a.link,to:"/login"},n.a.createElement(L.a,{className:Ye.a.button},"Log In"))},et=function(e){var t=e.profilePic;return n.a.createElement(c.b,{className:Ye.a.profile,to:"/signup"},n.a.createElement(L.a,{className:Ye.a.button},n.a.createElement("img",{src:t,alt:"Profile",className:Ye.a.profilePic,width:"32",height:"32"}),n.a.createElement("span",{className:Ye.a.profileText},"Profile")))},tt=function(){return n.a.createElement(c.b,{to:"/",className:Ye.a.items},n.a.createElement(L.a,{className:Ye.a.button},"Items"))},at=function(e){var t=e.authData,a=e.setInitialTodos;return n.a.createElement("header",{className:Ye.a.header},n.a.createElement("nav",{className:Ye.a.nav},n.a.createElement("div",{className:Ye.a.linksContainer},n.a.createElement(tt,null),n.a.createElement($e,{authData:t,setInitialTodos:a}),!t.isAuthenticated&&n.a.createElement(Ze,null)),n.a.createElement("div",{className:Ye.a.profileContainer},t.isAuthenticated&&n.a.createElement(et,{profilePic:t.authentication.profilePic}))),n.a.createElement("h1",null,"My Glorified To Do List"))},rt=a(30),nt=a.n(rt),st=function(e){var t=e.addTodo,a=e.authData,s=Object(r.useState)(""),o=Object(u.a)(s,2),c=o[0],i=o[1],l=Object(r.useState)(!1),m=Object(u.a)(l,2),d=m[0],p=m[1],b=function(e){e.preventDefault();var r={todo:c,IDNumber:c+Math.random(1e4),completed:!1};t(r,a)?(i(""),p(!1)):p(!0)},f=d?nt.a.display:nt.a.hide;return n.a.createElement(U.a,{className:nt.a.form,onSubmit:function(e){return b(e)}},n.a.createElement(U.a.Control,{size:"lg",type:"text",placeholder:"Todo...",value:c,onChange:function(e){return i(e.target.value)},className:nt.a.input,onSubmit:function(e){return b(e)}}),n.a.createElement("div",{className:nt.a.buttonContainer},n.a.createElement("span",{className:"".concat(nt.a.warning," ").concat(f)},"You must write something!"),n.a.createElement(L.a,{onClick:function(e){return b(e)},"data-testid":"add-todo",className:nt.a.button},"Add")))},ot=a(45),ct={captcha:!0},it=a(93),ut=a.n(it),lt={email:"",iat:0,exp:0,username:"",token:"",profile:{bio:"",company:"",location:"",website:"",twitter:"",visibleEmail:"",emails:[]},profilePic:"",todos:[]},mt=function(){var e=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(ce.a)(oe.a.mark((function e(t,r){var s,o;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=t.todo.trim()).length>0)){e.next=17;break}if(t.todo=s,a.push(t),n(Object(me.a)(a)),!r.isAuthenticated){e.next=14;break}return e.next=8,he.todos.addTodo(t,r.authentication);case 8:if(200!==(o=e.sent).status){e.next=13;break}r.setToken(o.token),e.next=14;break;case 13:return e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 17:return e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),o=function(){var e=Object(ce.a)(oe.a.mark((function e(t,r){var s,o,c,i,u,m,d;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.index,o=t.IDNumber,a[s].IDNumber!==o){e.next=17;break}if(a[s].completed=!a[s].completed,!r.isAuthenticated){e.next=13;break}return c=Object(g.a)({},a[s],{index:s}),e.next=7,he.todos.completeTodo(c,r.authentication);case 7:if(200!==(i=e.sent).status){e.next=12;break}r.setToken(i.token),e.next=13;break;case 12:return e.abrupt("return",!1);case 13:return n(Object(me.a)(a)),e.abrupt("return",!0);case 17:if(-1!==(u=l(o,a))){e.next=20;break}return e.abrupt("return",!1);case 20:if(a[u].completed=!a[u].completed,!r.isAuthenticated){e.next=29;break}if(m=Object(g.a)({},a[u],{index:u}),200!==(d=he.todos.completeTodo(m,r.authentication)).status){e.next=28;break}r.setToken(d.token),e.next=29;break;case 28:return e.abrupt("return",!1);case 29:return n(Object(me.a)(a)),e.abrupt("return",!0);case 31:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),c=function(){var e=Object(ce.a)(oe.a.mark((function e(t,r){var s,o,c,i,u;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.index,o=t.IDNumber,a[s].IDNumber!==o){e.next=16;break}if(a.splice(s,1),!r.isAuthenticated){e.next=12;break}return e.next=6,he.todos.removeTodo({index:s,IDNumber:o},r.authentication);case 6:if(200!==(c=e.sent).status){e.next=11;break}r.setToken(c.token),e.next=12;break;case 11:return e.abrupt("return",!1);case 12:return n(Object(me.a)(a)),e.abrupt("return",!0);case 16:if(-1!==(i=l(o,a))){e.next=19;break}return e.abrupt("return",!1);case 19:if(a.splice(i,1),!r.isAuthenticated){e.next=29;break}return e.next=23,he.todos.removeTodo({index:i,IDNumber:o},r.authentication);case 23:if(200!==(u=e.sent).status){e.next=28;break}r.setToken(u.token),e.next=29;break;case 28:return e.abrupt("return",!1);case 29:return n(Object(me.a)(a)),e.abrupt("return",!0);case 31:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),i=function(){var e=Object(ce.a)(oe.a.mark((function e(t,r,s){var o,c,i,u,l,m,d;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.index,c=t.IDNumber,i=r.index,u=r.IDNumber,a[o].IDNumber!==c||a[i].IDNumber!==u){e.next=15;break}return e.next=7,he.todos.swapTodos(t,r,s.authentication);case 7:if(200!==(l=e.sent).status){e.next=12;break}s.setToken(l.token),e.next=13;break;case 12:return e.abrupt("return",!1);case 13:e.next=16;break;case 15:return e.abrupt("return",!1);case 16:m=Object(g.a)({},t,{index:r.index}),d=Object(g.a)({},r,{index:t.index}),a[t.index]=d,a[r.index]=m,n(Object(me.a)(a));case 21:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),l=function(e,t){for(var a=0;a<t.length;a++){if(t[a].IDNumber===e)return a}return-1};return[a,s,o,c,i,function(e){n(Object(me.a)(e))}]}(),t=Object(u.a)(e,6),a=t[0],s=t[1],o=t[2],c=t[3],m=t[4],p=t[5],b=function(){var e=Object(r.useState)(lt),t=Object(u.a)(e,2),a=t[0],n=t[1];return[a,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===e){var t=localStorage.getItem("token");t&&localStorage.removeItem("token"),n(Object(g.a)({},lt))}else{var r=Object(S.a)(e);n(Object(g.a)({},a,{},r,{token:e,profilePic:ut.a,todos:r.todos})),localStorage.setItem("token",e)}},function(e){var t=Object(S.a)(e).profile;localStorage.setItem("token",e),n(Object(g.a)({},a,{profile:t}))}]}(),E=Object(u.a)(b,3),h=E[0],k=E[1],v=E[2],_=function(){var e=Object(r.useState)(ct),t=Object(u.a)(e,2),a=t[0],n=t[1];return[a,function(){var e=localStorage.getItem("settings");if(e){var t=JSON.parse(e);n(t)}else localStorage.setItem("settings",JSON.stringify(a))},function(e,t){var r=Object(g.a)({},a,Object(ot.a)({},e,t));n(r),localStorage.setItem("settings",JSON.stringify(r))}]}(),x=Object(u.a)(_,3),w=x[0],y=x[1],O=x[2],I=Object(r.useState)(!1),j=Object(u.a)(I,2),A=j[0],P=j[1];Object(r.useEffect)((function(){!1===A&&(y(),function(e,t,a){if(!1===e.loaded){var r=localStorage.getItem("token");if(r){var n=Object(S.a)(r);Date.now()<=1e3*n.exp?(t.setToken(r),a(n.todos)):t.setToken()}e.setLoaded(!0)}else{Date.now()>=1e3*t.exp&&0!==t.exp&&t.setToken()}}({loaded:A,setLoaded:P},{exp:h.exp,setToken:k},p))}),[A,P,h,k,w,y,p]);var N=function(e){if(e.length>0){var t=Object(S.a)(e);return Date.now()<=1e3*t.exp}return!1}(h.token),T={authentication:h,isAuthenticated:N,setToken:k,setProfileKey:v},C={todos:a,addTodo:s,completeTodo:o,removeTodo:c,swapTodoItems:m,setInitialTodos:p};return A&&n.a.createElement(l.a,{className:d.a.fixedPadding},n.a.createElement("div",{className:d.a.width},n.a.createElement("div",{className:d.a.top},n.a.createElement(at,{authData:T,setInitialTodos:p}),n.a.createElement(i.b,{path:"/",exact:!0,render:function(){return n.a.createElement(st,{addTodo:s,authData:T})}})),n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/",exact:!0},n.a.createElement(D,{authData:T,todoData:C})),n.a.createElement(i.b,{path:"/login",exact:!0},N?n.a.createElement(i.a,{to:"/profile"}):n.a.createElement(Qe,{setToken:k,page:"login",settings:w,setSettingsKey:O})),n.a.createElement(i.b,{path:"/signup",exact:!0},N?n.a.createElement(i.a,{to:"/profile"}):n.a.createElement(Qe,{setToken:k,page:"signup",settings:w,setSettingsKey:O})),n.a.createElement(i.b,{path:"/profile",exact:!0},N?n.a.createElement(_e,{authentication:h,setProfileKey:v,setToken:k}):n.a.createElement(i.a,{to:"/login"})),n.a.createElement(i.b,{component:f}))))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,null,n.a.createElement(i.b,{to:"/",exact:!0,component:mt}))),document.getElementById("root"))},15:function(e,t,a){e.exports={header:"Header_header__eKXAo",nav:"Header_nav__2utk4",linksContainer:"Header_linksContainer__FPNqQ",profileContainer:"Header_profileContainer__38cbw",button:"Header_button__FDKz2",items:"Header_items__1azIx",profile:"Header_profile__1E8Z9",profileText:"Header_profileText__B5RWG",profilePic:"Header_profilePic__ugGmU"}},18:function(e,t,a){e.exports={username:"Biography_username__1gwVI",bioStringInput:"Biography_bioStringInput__2Q_7U",bioIconContainer:"Biography_bioIconContainer__seqpC",profilePic:"Biography_profilePic__OihXm",save:"Biography_save__3x90x",cancel:"Biography_cancel__3bfOQ",editButton:"Biography_editButton__3EglE",envelope:"Biography_envelope__1Ve9B",dropdown:"Biography_dropdown__ePOqG",blankEmail:"Biography_blankEmail__5OX1X",choice:"Biography_choice__IGx2I",error:"Biography_error__1O1Qt"}},19:function(e,t,a){e.exports={li:"TodoItems_li__2-lRF",remove:"TodoItems_remove__32wHd",p:"TodoItems_p__1w0JM",span:"TodoItems_span__JnKXm",completed:"TodoItems_completed__2NGOB",x:"TodoItems_x__3B87g",check:"TodoItems_check__39fw3",hide:"TodoItems_hide__2i1oK",show:"TodoItems_show__L3zqR"}},30:function(e,t,a){e.exports={form:"AddTodoForm_form__18_kb",input:"AddTodoForm_input__crQzW",buttonContainer:"AddTodoForm_buttonContainer__2a-jz",button:"AddTodoForm_button__1Sb4-",warning:"AddTodoForm_warning__28cyb",display:"AddTodoForm_display__2MHQo",hide:"AddTodoForm_hide__37pnf"}},59:function(e,t,a){e.exports={fixedPadding:"App_fixedPadding__T7ge5",top:"App_top__3pCvB",width:"App_width__2soKE"}},6:function(e,t,a){e.exports={form:"AuthenticationPage_form__1b20b",error:"AuthenticationPage_error__1L5TW",textError:"AuthenticationPage_textError__3YLKQ",boldError:"AuthenticationPage_boldError__2vYjL",loginButton:"AuthenticationPage_loginButton__1BJ_W",signupButton:"AuthenticationPage_signupButton__1jHiB",relative:"AuthenticationPage_relative__eW08L",authProblem:"AuthenticationPage_authProblem__3hqEZ",showPW1:"AuthenticationPage_showPW1__oVYMD",showPW2:"AuthenticationPage_showPW2__3tuDI",bold:"AuthenticationPage_bold__3jDsD",blankUsernameMessage:"AuthenticationPage_blankUsernameMessage__1GLvc",tokenCookieContainer:"AuthenticationPage_tokenCookieContainer__1dJBB",check:"AuthenticationPage_check__Dx-nN",overHead:"AuthenticationPage_overHead__24Dt_",captchaContainer:"AuthenticationPage_captchaContainer__lizAo",captchaError:"AuthenticationPage_captchaError__eqA8u"}},60:function(e,t,a){e.exports={h1:"FourOhPage_h1__1l3uR",h2:"FourOhPage_h2__3MiNm",h3:"FourOhPage_h3__zmLK3"}},78:function(e,t,a){e.exports=a.p+"static/media/check.7812c5ab.svg"},79:function(e,t,a){e.exports=a.p+"static/media/x.2329a60d.svg"},80:function(e,t,a){e.exports=a.p+"static/media/checkComplete.c4e37bc8.svg"},81:function(e,t,a){e.exports=a.p+"static/media/xComplete.4a74a651.svg"},83:function(e,t,a){e.exports={profilePage:"ProfilePage_profilePage__3x5t8"}},84:function(e,t,a){e.exports=a.p+"static/media/envelope.f38c166d.svg"},86:function(e,t,a){e.exports=a.p+"static/media/company.8d611e64.svg"},87:function(e,t,a){e.exports=a.p+"static/media/location.9c69d282.svg"},88:function(e,t,a){e.exports=a.p+"static/media/website.a45c1559.svg"},89:function(e,t,a){e.exports=a.p+"static/media/twitter.b48524a2.svg"},90:function(e,t,a){e.exports=a.p+"static/media/auth_problem.2a5a1bfc.svg"},91:function(e,t,a){e.exports=a.p+"static/media/show_password.e4b464d9.svg"},92:function(e,t,a){e.exports=a.p+"static/media/hide_password.dbd11928.svg"},93:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAidScV25GtAAAAAJ0Uk5TAP9bkSK1AAAAiElEQVR4nO3XwQ2AIAxAUW6OwaisxkhugBfhADGRGGMw7x/bvgEagiRJeqlYzvLMCUVRFEVRFEVRFEV9qG5EURRFURRFURRFUeupVqq7OtjqYB+PKYqiKIqiKIqiKOqJiqVvUK1MURRFURRFURRFUcupVrpUS370FEVRFEVRFEVR1I+VJEnqOwCJzA1b+LwVKgAAAABJRU5ErkJggg=="},98:function(e,t,a){e.exports=a(130)}},[[98,1,2]]]);
//# sourceMappingURL=main.6e548351.chunk.js.map