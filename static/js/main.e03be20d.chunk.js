(this["webpackJsonpglorified-todo"]=this["webpackJsonpglorified-todo"]||[]).push([[0],{104:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(43),o=a.n(s),c=a(16),i=a(12),u=(a(103),a(104),a(4)),l=a(53),m=a(59),d=a.n(m),p=a(60),f=a.n(p),b=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:f.a.h1},"Ooops!"),r.a.createElement("h2",{className:f.a.h2},"We can't seem to find the page ",r.a.createElement("br",null),"you're looking for."),r.a.createElement("h3",{styles:f.a.h3},"Error code: 404"))},E=a(135),g=a(94),h=a(17),v=a(136),k=a(137),_=a(19),w=a.n(_),x=a(78),y=a.n(x),O=a(79),I=a.n(O),j=a(80),A=a.n(j),P=a(81),N=a.n(P),C="TODO_ITEM",T=function(e){var t=e.item,a=e.index,n=e.authData,s=e.todoData,o=Object(v.a)({item:{type:C,data:Object(h.a)({},t,{index:a})},collect:function(e){return{isDragging:!!e.isDragging()}}}),c=Object(u.a)(o,2)[1],i=Object(k.a)({accept:C,drop:function(e){s.swapTodoItems(e.data,Object(h.a)({},t,{index:a}))}}),l=Object(u.a)(i,2)[1],m=t.completed?A.a:y.a,d=t.completed?N.a:I.a;return r.a.createElement("li",{"data-testid":t.IDNumber,className:"".concat(w.a.li," ").concat(t.completed?w.a.completed:""),onClick:function(){s.completeTodo(Object(h.a)({},t,{index:a}),n)},ref:c},r.a.createElement("span",{className:w.a.span},r.a.createElement("img",{src:m,alt:"Completed!",className:"".concat(w.a.check," ").concat(t.completed?w.a.show:w.a.hide)})),r.a.createElement("p",{className:w.a.p,ref:l},t.todo),r.a.createElement("button",{type:"button","data-testid":"".concat(t.IDNumber,"-button"),className:"".concat(w.a.span," ").concat(w.a.remove," ").concat(t.completed?w.a.completed:""),onClick:function(e){return function(e){e.stopPropagation(),s.removeTodo(Object(h.a)({},t,{index:a}),n)}(e)}},r.a.createElement("img",{src:d,alt:"Remove",className:w.a.x})))},S=function(e){var t=e.authData,a=e.todoData,s=Object(n.useState)(!1),o=Object(u.a)(s,2),c=o[0],i=o[1],l=Object(n.useState)(a.todos),m=Object(u.a)(l,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){!1===c&&t.isAuthenticated?(p(t.authentication.todos),a.setInitialTodos(t.authentication.todos)):c&&t.isAuthenticated?p(t.authentication.todos):p(a.todos),i(!0)}),[c,i,p,t,a]),r.a.createElement(E.a,{backend:g.a},r.a.createElement("ul",{className:w.a.ul},d.map((function(e,n){return r.a.createElement(T,{item:e,key:e.IDNumber,index:n,todoData:a,authData:t})}))))},D=a(28),B=a(83),M=a.n(B),U=a(10),L=a(13),K=a(18),R=a.n(K),V=a(29),F=a(40),G=a(85),q=a(84),W=a.n(q),z=function(e){var t=e.email,a=e.visibleEmails,n=e.setEmailText;return r.a.createElement(V.a,{className:"mb-3"},r.a.createElement(V.a.Prepend,{className:R.a.envelope},r.a.createElement(V.a.Text,{id:"inputGroup-sizing-sm"},r.a.createElement("img",{src:W.a,alt:"Email",title:"Email"}))),r.a.createElement(G.a,{as:V.a.Prepend,variant:"outline-secondary",title:t||" ",className:R.a.dropdown},r.a.createElement(F.a.Item,{href:"#",className:R.a.blankEmail,onClick:function(){return n(" ")}},"Leave Blank"),a.map((function(e){return r.a.createElement(F.a.Item,{href:"#",className:R.a.choice,onClick:function(){return n(e)},key:e},e)}))))},H=function(e){var t=e.bio,a=e.setBioText;return r.a.createElement(U.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(U.a.Control,{as:"textarea",rows:3,placeholder:"Add a bio",value:t,onChange:function(e){return a(e.target.value)}}))},J=a(51),Q=a(86),X=a.n(Q),Y=a(87),Z=a.n(Y),$=a(88),ee=a.n($),te=a(89),ae=a.n(te),ne=function(e){var t,a=e.localKey,n=e.keyValue,s=e.setProfileKey;switch(a.toLowerCase()){case"company":t=X.a;break;case"location":t=Z.a;break;case"website":t=ee.a;break;default:t=ae.a}return r.a.createElement(V.a,{size:"sm",className:"mb-3"},r.a.createElement(V.a.Prepend,null,r.a.createElement(V.a.Text,{id:"inputGroup-sizing-sm",className:R.a.bioIconContainer},r.a.createElement("img",{src:t,alt:a,title:a}))),r.a.createElement(J.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",onChange:function(e){return s(e.target.value)},value:n,className:R.a.bioStringInput,placeholder:a}))},re=function(e){var t=e.setDisplayBioInputs;return r.a.createElement(L.a,{type:"button",className:R.a.editButton,onClick:function(){return t(!0)}},"Edit Profile")},se=a(9),oe=a.n(se),ce=a(11),ie=a(25),ue=a.n(ie),le=function(){var e=Object(ce.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.post("https://glorified-todo-backend.herokuapp.com/login",t).then((function(e){return{status:200,token:e.data}})).catch((function(e){return 406===e.response.status?"username"===e.response.data?{status:406,data:"Username not found."}:{status:406,data:"Incorrect password."}:{status:400,data:"Something went wrong"}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=a(27),de={signup:function(){var e=Object(ce.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.post("/signup",t).then((function(e){return{status:200,token:e.data}})).catch((function(e){if(406===e.response.status){var t=e.response.data.split(" ");return{status:406,data:[406].concat(Object(me.a)(t))}}return{status:500,data:"Something went wrong"}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:le,updateProfile:function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,n){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.put("/users/".concat(t,"/profile"),n,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return{status:200,token:e.data.token}})).catch((function(e){return 401===e.response.status||403===e.response.status?{status:401,data:"Please login. Your session has ended."}:{status:500,data:"Something went wrong."}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),todos:{addTodo:function(){var e=Object(ce.a)(oe.a.mark((function e(t,a){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.post("/users/".concat(a.id,"/todos"),t,{headers:{Authorization:"Bearer ".concat(a.token)}});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",{status:200,token:n.data});case 7:return e.abrupt("return",{status:500,data:"Something went wrong."});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),completeTodo:function(){var e=Object(ce.a)(oe.a.mark((function e(t,a){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.put("/users/".concat(a.id,"/todos/").concat(t.IDNumber),t,{headers:{Authorization:"Bearer ".concat(a.token)}});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",{status:200,token:n.data});case 7:return e.abrupt("return",{status:500,data:"Something went wrong."});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),removeTodo:function(){var e=Object(ce.a)(oe.a.mark((function e(t,a){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.a.delete("/users/".concat(a.id,"/todos/").concat(t.IDNumber,"/").concat(t.index),{headers:{Authorization:"Bearer ".concat(a.token)}});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",{status:200,token:n.data});case 7:return e.abrupt("return",{status:500,data:"Something went wrong"});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}},pe=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,n){var r;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.updateProfile(t.id,t.token,a);case 2:200===(r=e.sent).status?(n.setDisplayError(""),n.setProfileKey(r.token),n.setDisplayBioInputs(!1)):401===r.status||403===r.status?(n.setDisplayError(""),n.setToken(),n.history.push("/login",{message:r.data,time:Date.now()})):(n.setDisplayError(r.data),n.setDisplayBioInputs(!1));case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),fe=function(e,t){t.forEach((function(e){e.action(e.value)})),e.setDisplayBioInputs(!1),e.setDisplayError("")},be=function(e){var t=e.authentication,a=e.profile,s=e.setProfileKey,o=e.displayBioInputs,c=e.setDisplayBioInputs,l=e.setToken,m=Object(n.useState)(a.bio),d=Object(u.a)(m,2),p=d[0],f=d[1],b=Object(n.useState)(a.company),E=Object(u.a)(b,2),g=E[0],h=E[1],v=Object(n.useState)(a.location),k=Object(u.a)(v,2),_=k[0],w=k[1],x=Object(n.useState)(a.visibleEmail),y=Object(u.a)(x,2),O=y[0],I=y[1],j=Object(n.useState)(a.website),A=Object(u.a)(j,2),P=A[0],N=A[1],C=Object(n.useState)(a.twitter),T=Object(u.a)(C,2),S=T[0],D=T[1],B=Object(n.useState)(""),M=Object(u.a)(B,2),K=M[0],V=M[1],F={bio:p,visibleEmail:O,company:g,location:_,website:P,twitter:S,emails:a.emails},G=[{value:a.bio,action:f},{value:a.company,action:h},{value:a.location,action:w},{value:a.visibleEmail,action:I},{value:a.website,action:N},{value:a.twitter,action:D}],q=Object(i.g)();return r.a.createElement(U.a,{style:{minWidth:"229px",maxWidth:"229px"}},r.a.createElement("img",{className:R.a.profilePic,src:t.profilePic,alt:"Avatar"}),r.a.createElement("p",{className:R.a.username},t.username),!o&&r.a.createElement(re,{setDisplayBioInputs:c}),K&&r.a.createElement("p",{className:R.a.error},K),o&&r.a.createElement("div",null,r.a.createElement(H,{bio:p,setBioText:f}),r.a.createElement(ne,{localKey:"Company",keyValue:g,setProfileKey:h}),r.a.createElement(ne,{localKey:"Location",keyValue:_,setProfileKey:w}),r.a.createElement(z,{email:O,visibleEmails:a.emails,setEmailText:I}),r.a.createElement(ne,{localKey:"Website",keyValue:P,setProfileKey:N}),r.a.createElement(ne,{localKey:"Twitter",keyValue:S,setProfileKey:D}),r.a.createElement(L.a,{type:"button",className:R.a.save,onClick:function(){pe(t,F,{setProfileKey:s,setDisplayBioInputs:c,setDisplayError:V,history:q,setToken:l})}},"Save"),r.a.createElement(L.a,{type:"button",className:R.a.cancel,onClick:function(){fe({setDisplayBioInputs:c,setDisplayError:V},G)}},"Cancel")))},Ee=function(e){var t=e.authentication,a=e.setProfileKey,s=e.setToken,o=Object(D.a)(t.profile),c=Object(n.useState)(!1),i=Object(u.a)(c,2),l=i[0],m=i[1];return r.a.createElement("div",{className:M.a.profilePage},r.a.createElement(be,{authentication:t,profile:o,setProfileKey:a,displayBioInputs:l,setDisplayBioInputs:m,setToken:s}))},ge=a(95),he=a(5),ve=a.n(he),ke=function(e,t,a){a.setUsername(e),t.usernameMessage>0&&(a.setUsernameMessage(0),a.setUsernameError(!1))},_e=function(e,t,a){a.setPassword(e),t.passwordMessage>0&&(a.setPasswordMessage(0),a.setPasswordError(!1))},we=function(e,t,a){a.setEmail(e),t.emailMessage>0&&(a.setEmailMessage(0),a.setEmailError(!1))};var xe=function(e,t,a){var n=e.location.pathname,r=t.username,s=t.email,o=t.password,c=a.captcha;return!!("/login"===n&&r.length>0&&o.length>0&&c)||!!("/signup"===n&&r.length>0&&s.length>0&&o.length>0&&c)},ye=function(e,t,a,n){if(!(Date.now()-e<n)&&(t(Date.now()),a>0&&a===a)){var r=document.getElementById("usernameId"),s=document.getElementById("emailId");document.getElementById("passwordId").classList.remove("bold"),s&&s.classList.remove("bold"),r.classList.add(ve.a.bold),setTimeout((function(){r.classList.remove(ve.a.bold)}),e)}},Oe=function(e,t,a,n){if(!(Date.now()-e<n)){t(Date.now());var r=a,s=document.getElementById("usernameId"),o=document.getElementById("emailId");if(a>0&&r===a){var c=document.getElementById("passwordId");s.classList.remove("bold"),o&&o.classList.remove("bold"),c.classList.add(ve.a.bold),setTimeout((function(){c.classList.remove(ve.a.bold)}),e)}}},Ie=function(e,t,a,n){if(!(Date.now()-e<n)){t(Date.now());var r=a,s=document.getElementById("usernameId"),o=document.getElementById("passwordId");if(a>0&&r===a){var c=document.getElementById("emailId");s.classList.remove("bold"),o.classList.remove("bold"),c.classList.add(ve.a.bold),setTimeout((function(){c.classList.remove(ve.a.bold)}),e)}}},je=function(e,t,a){if(!(Date.now()-e<a)){var n=document.querySelector('[role="presentation"]');n.classList.add(ve.a.captchaError),setTimeout((function(){n.classList.remove(ve.a.captchaError)}),e)}};var Ae={usernameIsEmpty:function(e,t){e.setUsernameError(!0),e.setEmailError(!1),e.setPasswordError(!1),e.setUsernameMessage(1),ye(500,e.setLastClicked,t.usernameMessage,t.lastClicked)},passwordIsEmpty:function(e,t){e.setPasswordError(!0),e.setUsernameError(!1),e.setEmailError(!1),e.setPasswordMessage(1),Oe(500,e.setLastClicked,t.passwordMessage,t.lastClicked)},successful:function(e,t,a){t.setUsernameError(!1),t.setPasswordError(!1),t.setToken(e.token),a.history.push("/profile")},usernameNotFound:function(e,t){e.setUsernameError(!0),e.setPasswordError(!1),e.setUsernameMessage(2),ye(500,e.setLastClicked,t.usernameMessage,t.lastClicked)},passwordIncorrect:function(e,t){e.setPasswordError(!0),e.setUsernameError(!1),e.setPasswordMessage(2),Oe(500,e.setLastClicked,t.passwordMessage,t.lastClicked)},emailIsEmpty:function(e,t){e.setEmailError(!0),e.setUsernameError(!1),e.setPasswordError(!1),e.setEmailMessage(1),Ie(500,e.setLastClicked,t.emailMessage,t.lastClicked)},usernameAndEmailInUse:function(e,t){e.setUsernameError(!0),e.setUsernameMessage(3),ye(500,e.setLastClicked,t.usernameMessage,t.lastClicked),e.setEmailError(!0),e.setEmailMessage(3),Ie(500,e.setLastClicked,t.emailMessage,t.lastClicked)},onlyUsernameInUse:function(e,t){e.setUsernameError(!0),e.setPasswordError(!1),e.setUsernameMessage(3),ye(500,e.setLastClicked,t.usernameMessage,t.lastClicked)},onlyEmailInUse:function(e,t){e.setEmailError(!0),e.setUsernameError(!1),e.setEmailMessage(3),Ie(500,e.setLastClicked,t.emailMessage,t.lastClicked)}},Pe=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,n){var r;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.username.trim().length){e.next=5;break}return Ae.usernameIsEmpty(a,n),e.abrupt("return",!1);case 5:if(0!==t.password.trim().length){e.next=8;break}return Ae.passwordIsEmpty(a,n),e.abrupt("return",!1);case 8:if(n.captchaValue||!n.settings.captch){e.next=10;break}return e.abrupt("return",!1);case 10:return e.next=12,de.login({username:t.username,password:t.password});case 12:if(200!==(r=e.sent).status){e.next=18;break}return Ae.successful(r,a,n),e.abrupt("return",!0);case 18:if(406!==r.status){e.next=26;break}if("Username not found."!==r.data){e.next=24;break}return Ae.usernameNotFound(a,n),e.abrupt("return",!1);case 24:return Ae.passwordIncorrect(a,n),e.abrupt("return",!1);case 26:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,n){var r,s;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.username.trim().length){e.next=5;break}return Ae.usernameIsEmpty(a,n),e.abrupt("return",!1);case 5:if(0!==t.email.trim().length){e.next=10;break}return Ae.emailIsEmpty(a,n),e.abrupt("return",!1);case 10:if(0!==t.password.trim().length){e.next=13;break}return Ae.passwordIsEmpty(a,n),e.abrupt("return",!1);case 13:return e.next=15,de.signup(t);case 15:if(200!==(r=e.sent).status){e.next=19;break}return Ae.successful(r,a,n),e.abrupt("return",!0);case 19:if(406!==r.status){e.next=34;break}if(!(s=r.data).includes("username")||!s.includes("email")){e.next=26;break}return Ae.usernameAndEmailInUse(a,n),e.abrupt("return",!1);case 26:if(!s.includes("username")){e.next=31;break}return Ae.onlyUsernameInUse(a,n),e.abrupt("return",!1);case 31:if(!s.includes("email")){e.next=34;break}return Ae.onlyEmailInUse(a,n),e.abrupt("return",!1);case 34:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,n){var r,s,o;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r={username:a.username,email:a.email,password:a.password},a.settings.captcha&&(s=a.recaptchaRef.current.getValue()),o=xe(a.history,r,a.settings),void 0!==s&&""!==s||!o){e.next=7;break}return!0===a.usernameError?ye(500,n.setLastClicked,a.lastClicked):!0===a.passwordError?Oe(500,n.setLastClicked,a.lastClicked):!0===a.emailError?Ie(500,n.setLastClicked,a.lastClicked):je(500,n.setLastClicked,a.lastClicked),e.abrupt("return");case 7:if("login"!==a.page){e.next=12;break}!1===Pe(r,n,a)&&a.settings.captcha&&n.setCaptchaValue(void 0),e.next=16;break;case 12:return e.next=14,Ne(r,n,a);case 14:!1===e.sent&&function(e){n.setCaptchaValue(e)}(void 0);case 16:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Te=function(e){var t=e.page,a="login"===t?ve.a.loginButton:ve.a.signupButton,n="login"===t?"Log In":"Create New Account";return r.a.createElement(L.a,{variant:"primary",type:"submit",className:a},n)},Se=function(e){var t=e.usernameError,a=e.usernameMessage,n=[r.a.createElement("p",{id:"usernameId",className:ve.a.blankUsernameMessage},"We'll never share your email with anyone else."),r.a.createElement("p",{className:ve.a.textError,id:"usernameId"},"Username cannot be blank."),r.a.createElement("p",{className:ve.a.textError,id:"usernameId"},"The email you've entered doesn't match any account.\xa0",r.a.createElement(c.b,{to:"signup",className:ve.a.boldError},r.a.createElement("span",null,"Sign up for an account."))),r.a.createElement("p",{className:ve.a.textError,id:"usernameId"},"That username is already taken.")];return r.a.createElement(U.a.Text,{className:"text-muted"},t?n[a]:n[0])},De=function(e){var t=e.emailError,a=e.emailMessage,n=[r.a.createElement("p",{id:"emailId"},"We'll never share your email with anyone else."),r.a.createElement("p",{className:ve.a.textError,id:"emailId"},"Email cannot be blank."),r.a.createElement("p",{className:ve.a.textError,id:"emailId"},"The email you've entered doesn't match any account.\xa0",r.a.createElement(c.b,{to:"signup",className:ve.a.boldError},r.a.createElement("span",null,"Sign up for an account."))),r.a.createElement("p",{className:ve.a.textError,id:"emailId"},"That email is already taken.")];return r.a.createElement(U.a.Text,{className:"text-muted"},t?n[a]:n[0])},Be=function(e){var t=e.passwordError,a=e.passwordMessage,n=[r.a.createElement("p",{id:"passwordId"},"Never share your password with anyone else."),r.a.createElement("p",{className:ve.a.textError,id:"passwordId"},"Password cannot be blank."),r.a.createElement("p",{className:ve.a.textError,id:"passwordId"},"The password you've entered is incorrect."," ",r.a.createElement("span",{className:ve.a.boldError},"Forgot Password?"))];return r.a.createElement(U.a.Text,{className:"text-muted"},t?n[a]:n[0])},Me=a(90),Ue=a.n(Me),Le=function(e){return e.error&&r.a.createElement("img",{src:Ue.a,alt:"Authentication Problem",className:ve.a.authProblem})},Ke=a(91),Re=a.n(Ke),Ve=a(92),Fe=a.n(Ve),Ge=function(e){var t=e.displayPassword,a=e.passwordError,n=e.setDisplayPassword;return t?r.a.createElement("button",{type:"button",className:a?ve.a.showPW1:ve.a.showPW2,onClick:function(){return n(!1)}},r.a.createElement("img",{src:Fe.a,alt:"Password Vision"})):r.a.createElement("button",{type:"button",className:a?ve.a.showPW1:ve.a.showPW2,onClick:function(){return n(!0)}},r.a.createElement("img",{src:Re.a,alt:"Password Vision"}))},qe=function(e){var t=e.settings,a=e.setSettingsKey,s=Object(n.useState)(t.captcha),o=Object(u.a)(s,2),c=o[0],i=o[1];return r.a.createElement("div",{className:ve.a.tokenCookieContainer},r.a.createElement(U.a.Group,{controlId:"tokenCheck",className:ve.a.check},r.a.createElement(U.a.Check,{type:"checkbox",label:"Captcha",checked:c,onChange:function(e){return function(e,t){e.stopPropagation(),i(!c),a(t,!c)}(e,"captcha")}})))},We=function(e){var t=e.setToken,a=e.page,s=e.settings,o=e.setSettingsKey,c=Object(n.useState)(""),m=Object(u.a)(c,2),d=m[0],p=m[1],f=Object(n.useState)(""),b=Object(u.a)(f,2),E=b[0],g=b[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),k=v[0],_=v[1],w=Object(n.useState)(!1),x=Object(u.a)(w,2),y=x[0],O=x[1],I=Object(n.useState)(!1),j=Object(u.a)(I,2),A=j[0],P=j[1],N=Object(n.useState)(!1),C=Object(u.a)(N,2),T=C[0],S=C[1],D=Object(n.useState)(!1),B=Object(u.a)(D,2),M=B[0],L=B[1],K=Object(n.useState)(0),R=Object(u.a)(K,2),V=R[0],F=R[1],G=Object(n.useState)(0),q=Object(u.a)(G,2),W=q[0],z=q[1],H=Object(n.useState)(0),J=Object(u.a)(H,2),Q=J[0],X=J[1],Y=Object(n.useState)(void 0),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(a),ae=Object(u.a)(te,2),ne=ae[0],re=ae[1],se=Object(n.useState)(""),oe=Object(u.a)(se,2),ce=oe[0],ie=oe[1],ue=Object(n.useState)(0),le=Object(u.a)(ue,2),me=le[0],de=le[1],pe=Object(n.useState)(void 0),fe=Object(u.a)(pe,2),be=fe[0],Ee=fe[1],he=Object(i.g)();he.location.state&&0===me&&(ie(he.location.state.message),de(1));var xe=r.a.createRef(),ye={setPrevPage:re,setUsername:p,setEmail:_,setPassword:g,setUsernameError:O,setEmailError:P,setPasswordError:S,setDisplayPassword:L,setUsernameMessage:F,setEmailMessage:z,setPasswordMessage:X,setOverHeadMessage:ie,setCounter:de,setCaptchaValue:Ee,setToken:t,setLastClicked:ee},Oe={username:d,password:E,email:k,usernameError:y,passwordError:T,emailError:A,displayPassword:M,usernameMessage:V,emailMessage:W,passwordMessage:Q,lastClicked:$,prevPage:ne,overHeadMessage:ce,counter:me,captchaValue:be,settings:s,history:he,page:a,recaptchaRef:xe};ne!==a&&function(e,t){e.setPrevPage(t),e.setUsername(""),e.setEmail(""),e.setPassword(""),e.setUsernameError(!1),e.setEmailError(!1),e.setPasswordError(!1),e.setDisplayPassword(!1),e.setUsernameMessage(0),e.setEmailMessage(0),e.setPasswordMessage(0),e.setOverHeadMessage(""),e.setCounter(0),e.setCaptchaValue(void 0)}(ye,a);var Ie=Object(n.useState)(!1),je=Object(u.a)(Ie,2),Ae=je[0],Pe=je[1];return Object(n.useEffect)((function(){!1===Ae&&"/login"===he.location.pathname&&ie(""),(y||A||T)&&be&&xe.current.reset(),Pe(!0)}),[Ae,Pe,he,xe,be,y,A,T]),r.a.createElement(l.a,null,ce&&r.a.createElement("p",{className:"".concat(ve.a.boldError," ").concat(ve.a.overHead)},ce),r.a.createElement(U.a,{className:ve.a.form,onSubmit:function(e){return Ce(e,Oe,ye)}},r.a.createElement(U.a.Group,{controlId:"formBasic",className:ve.a.relative},r.a.createElement(U.a.Control,{type:"text",placeholder:"Enter username",value:d,onChange:function(e){return ke(e.target.value,Oe,ye)},className:y?ve.a.error:""}),r.a.createElement(Le,{error:y}),r.a.createElement(Se,{usernameError:y,usernameMessage:V})),"/signup"===he.location.pathname&&r.a.createElement(U.a.Group,{controlId:"formBasicEmail",className:ve.a.relative},r.a.createElement(U.a.Control,{type:"email",placeholder:"Enter email",value:k,onChange:function(e){return we(e.target.value,Oe,ye)},className:A?ve.a.error:""}),r.a.createElement(Le,{error:A}),r.a.createElement(De,{emailError:A,emailMessage:W})),r.a.createElement(U.a.Group,{controlId:"formBasicPassword",className:ve.a.relative},r.a.createElement(U.a.Control,{type:M?"text":"password",placeholder:"Password",value:E,onChange:function(e){return _e(e.target.value,Oe,ye)},className:T?ve.a.error:"",autoComplete:"on"}),r.a.createElement(Ge,{displayPassword:M,passwordError:T,setDisplayPassword:L}),r.a.createElement(Le,{error:T}),r.a.createElement(Be,{passwordError:T,passwordMessage:Q})),s.captcha&&r.a.createElement("div",{className:ve.a.captchaContainer},r.a.createElement(ge.a,{ref:xe,sitekey:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",onChange:function(e){Ee(e)}})),r.a.createElement(Te,{page:a}),r.a.createElement(qe,{settings:s,setSettingsKey:o})))},ze=a(15),He=a.n(ze),Je=function(){return r.a.createElement(c.b,{to:"/signup"},r.a.createElement(L.a,{className:He.a.button},"Signup"))},Qe=function(e){var t=e.authData,a=e.setInitialTodos;return t.isAuthenticated?r.a.createElement(L.a,{className:He.a.button,onClick:function(){t.setToken(),a([])}},"Log Out"):r.a.createElement(c.b,{className:He.a.link,to:"/login"},r.a.createElement(L.a,{className:He.a.button},"Log In"))},Xe=function(e){var t=e.profilePic;return r.a.createElement(c.b,{className:He.a.profile,to:"/signup"},r.a.createElement(L.a,{className:He.a.button},r.a.createElement("img",{src:t,alt:"Profile",className:He.a.profilePic,width:"32",height:"32"}),r.a.createElement("span",{className:He.a.profileText},"Profile")))},Ye=function(){return r.a.createElement(c.b,{to:"/",className:He.a.items},r.a.createElement(L.a,{className:He.a.button},"Items"))},Ze=function(e){var t=e.authData,a=e.setInitialTodos;return r.a.createElement("header",{className:He.a.header},r.a.createElement("nav",{className:He.a.nav},r.a.createElement("div",{className:He.a.linksContainer},r.a.createElement(Ye,null),r.a.createElement(Qe,{authData:t,setInitialTodos:a}),!t.isAuthenticated&&r.a.createElement(Je,null)),r.a.createElement("div",{className:He.a.profileContainer},t.isAuthenticated&&r.a.createElement(Xe,{profilePic:t.authentication.profilePic}))),r.a.createElement("h1",null,"My Glorified To Do List"))},$e=a(30),et=a.n($e),tt=function(e){var t=e.addTodo,a=e.authData,s=Object(n.useState)(""),o=Object(u.a)(s,2),c=o[0],i=o[1],l=Object(n.useState)(!1),m=Object(u.a)(l,2),d=m[0],p=m[1],f=function(e){e.preventDefault();var n={todo:c,IDNumber:c+Math.random(1e4),completed:!1};t(n,a)?(i(""),p(!1)):p(!0)},b=d?et.a.display:et.a.hide;return r.a.createElement(U.a,{className:et.a.form,onSubmit:function(e){return f(e)}},r.a.createElement(U.a.Control,{size:"lg",type:"text",placeholder:"Todo...",value:c,onChange:function(e){return i(e.target.value)},className:et.a.input,onSubmit:function(e){return f(e)}}),r.a.createElement("div",{className:et.a.buttonContainer},r.a.createElement("span",{className:"".concat(et.a.warning," ").concat(b)},"You must write something!"),r.a.createElement(L.a,{onClick:function(e){return f(e)},"data-testid":"add-todo",className:et.a.button},"Add")))},at=a(45),nt={captcha:!1},rt=a(93),st=a.n(rt),ot={email:"",iat:0,exp:0,username:"",token:"",profile:{bio:"",company:"",location:"",website:"",twitter:"",visibleEmail:"",emails:[]},profilePic:"",todos:[]},ct=function(){var e=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(ce.a)(oe.a.mark((function e(t,n){var s,o;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=t.todo.trim()).length>0)){e.next=17;break}if(t.todo=s,a.push(t),r(Object(me.a)(a)),!n.isAuthenticated){e.next=14;break}return e.next=8,de.todos.addTodo(t,n.authentication);case 8:if(200!==(o=e.sent).status){e.next=13;break}n.setToken(o.token),e.next=14;break;case 13:return e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 17:return e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),o=function(){var e=Object(ce.a)(oe.a.mark((function e(t,n){var s,o,c,u,l,m,d;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.index,o=t.IDNumber,a[s].IDNumber!==o){e.next=17;break}if(a[s].completed=!a[s].completed,!n.isAuthenticated){e.next=13;break}return c=Object(h.a)({},a[s],{index:s}),e.next=7,de.todos.completeTodo(c,n.authentication);case 7:if(200!==(u=e.sent).status){e.next=12;break}n.setToken(u.token),e.next=13;break;case 12:return e.abrupt("return",!1);case 13:return r(Object(me.a)(a)),e.abrupt("return",!0);case 17:if(-1!==(l=i(o,a))){e.next=20;break}return e.abrupt("return",!1);case 20:if(a[l].completed=!a[l].completed,!n.isAuthenticated){e.next=29;break}if(m=Object(h.a)({},a[l],{index:l}),200!==(d=de.todos.completeTodo(m,n.authentication)).status){e.next=28;break}n.setToken(d.token),e.next=29;break;case 28:return e.abrupt("return",!1);case 29:return r(Object(me.a)(a)),e.abrupt("return",!0);case 31:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),c=function(){var e=Object(ce.a)(oe.a.mark((function e(t,n){var s,o,c,u,l;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.index,o=t.IDNumber,a[s].IDNumber!==o){e.next=16;break}if(a.splice(s,1),!n.isAuthenticated){e.next=12;break}return e.next=6,de.todos.removeTodo({index:s,IDNumber:o},n.authentication);case 6:if(200!==(c=e.sent).status){e.next=11;break}n.setToken(c.token),e.next=12;break;case 11:return e.abrupt("return",!1);case 12:return r(Object(me.a)(a)),e.abrupt("return",!0);case 16:if(-1!==(u=i(o,a))){e.next=19;break}return e.abrupt("return",!1);case 19:if(a.splice(u,1),!n.isAuthenticated){e.next=29;break}return e.next=23,de.todos.removeTodo({index:u,IDNumber:o},n.authentication);case 23:if(200!==(l=e.sent).status){e.next=28;break}n.setToken(l.token),e.next=29;break;case 28:return e.abrupt("return",!1);case 29:return r(Object(me.a)(a)),e.abrupt("return",!0);case 31:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),i=function(e,t){for(var a=0;a<t.length;a++){if(t[a].IDNumber===e)return a}return-1};return[a,s,o,c,function(e,t){var n=Object(h.a)({},e,{index:t.index}),s=Object(h.a)({},t,{index:e.index});a[e.index]=s,a[t.index]=n,r(Object(me.a)(a))},function(e){r(Object(me.a)(e))}]}(),t=Object(u.a)(e,6),a=t[0],s=t[1],o=t[2],c=t[3],m=t[4],p=t[5],f=function(){var e=Object(n.useState)(ot),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===e){var t=localStorage.getItem("token");t&&localStorage.removeItem("token"),r(Object(h.a)({},ot))}else{var n=Object(D.a)(e);r(Object(h.a)({},a,{},n,{token:e,profilePic:st.a,todos:n.todos})),localStorage.setItem("token",e)}},function(e){var t=Object(D.a)(e).profile;localStorage.setItem("token",e),r(Object(h.a)({},a,{profile:t}))}]}(),E=Object(u.a)(f,3),g=E[0],v=E[1],k=E[2],_=function(){var e=Object(n.useState)(nt),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(){var e=localStorage.getItem("settings");if(e){var t=JSON.parse(e);r(t)}else localStorage.setItem("settings",JSON.stringify(a))},function(e,t){var n=Object(h.a)({},a,Object(at.a)({},e,t));r(n),localStorage.setItem("settings",JSON.stringify(n))}]}(),w=Object(u.a)(_,3),x=w[0],y=w[1],O=w[2],I=Object(n.useState)(!1),j=Object(u.a)(I,2),A=j[0],P=j[1];Object(n.useEffect)((function(){!1===A&&(y(),function(e,t,a){if(!1===e.loaded){var n=localStorage.getItem("token");if(n){var r=Object(D.a)(n);Date.now()<=1e3*r.exp?(t.setToken(n),a(r.todos)):t.setToken()}e.setLoaded(!0)}else{Date.now()>=1e3*t.exp&&0!==t.exp&&t.setToken()}}({loaded:A,setLoaded:P},{exp:g.exp,setToken:v},p))}),[A,P,g,v,x,y,p]);var N=function(e){if(e.length>0){var t=Object(D.a)(e);return Date.now()<=1e3*t.exp}return!1}(g.token),C={authentication:g,isAuthenticated:N,setToken:v,setProfileKey:k},T={todos:a,addTodo:s,completeTodo:o,removeTodo:c,swapTodoItems:m,setInitialTodos:p};return A&&r.a.createElement(l.a,{className:d.a.fixedPadding},r.a.createElement("div",{className:d.a.width},r.a.createElement("div",{className:d.a.top},r.a.createElement(Ze,{authData:C,setInitialTodos:p}),r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(tt,{addTodo:s,authData:C})}})),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(S,{authData:C,todoData:T})),r.a.createElement(i.b,{path:"/login",exact:!0},N?r.a.createElement(i.a,{to:"/profile"}):r.a.createElement(We,{setToken:v,page:"login",settings:x,setSettingsKey:O})),r.a.createElement(i.b,{path:"/signup",exact:!0},N?r.a.createElement(i.a,{to:"/profile"}):r.a.createElement(We,{setToken:v,page:"signup",settings:x,setSettingsKey:O})),r.a.createElement(i.b,{path:"/profile",exact:!0},N?r.a.createElement(Ee,{authentication:g,setProfileKey:k,setToken:v}):r.a.createElement(i.a,{to:"/login"})),r.a.createElement(i.b,{component:b}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(i.b,{to:"/",exact:!0,component:ct}))),document.getElementById("root"))},15:function(e,t,a){e.exports={header:"Header_header__eKXAo",nav:"Header_nav__2utk4",linksContainer:"Header_linksContainer__FPNqQ",profileContainer:"Header_profileContainer__38cbw",button:"Header_button__FDKz2",items:"Header_items__1azIx",profile:"Header_profile__1E8Z9",profileText:"Header_profileText__B5RWG",profilePic:"Header_profilePic__ugGmU"}},18:function(e,t,a){e.exports={username:"Biography_username__1gwVI",bioStringInput:"Biography_bioStringInput__2Q_7U",bioIconContainer:"Biography_bioIconContainer__seqpC",profilePic:"Biography_profilePic__OihXm",save:"Biography_save__3x90x",cancel:"Biography_cancel__3bfOQ",editButton:"Biography_editButton__3EglE",envelope:"Biography_envelope__1Ve9B",dropdown:"Biography_dropdown__ePOqG",blankEmail:"Biography_blankEmail__5OX1X",choice:"Biography_choice__IGx2I",error:"Biography_error__1O1Qt"}},19:function(e,t,a){e.exports={li:"TodoItems_li__2-lRF",remove:"TodoItems_remove__32wHd",p:"TodoItems_p__1w0JM",span:"TodoItems_span__JnKXm",completed:"TodoItems_completed__2NGOB",x:"TodoItems_x__3B87g",check:"TodoItems_check__39fw3",hide:"TodoItems_hide__2i1oK",show:"TodoItems_show__L3zqR"}},30:function(e,t,a){e.exports={form:"AddTodoForm_form__18_kb",input:"AddTodoForm_input__crQzW",buttonContainer:"AddTodoForm_buttonContainer__2a-jz",button:"AddTodoForm_button__1Sb4-",warning:"AddTodoForm_warning__28cyb",display:"AddTodoForm_display__2MHQo",hide:"AddTodoForm_hide__37pnf"}},5:function(e,t,a){e.exports={form:"AuthenticationPage_form__1b20b",error:"AuthenticationPage_error__1L5TW",textError:"AuthenticationPage_textError__3YLKQ",boldError:"AuthenticationPage_boldError__2vYjL",loginButton:"AuthenticationPage_loginButton__1BJ_W",signupButton:"AuthenticationPage_signupButton__1jHiB",relative:"AuthenticationPage_relative__eW08L",authProblem:"AuthenticationPage_authProblem__3hqEZ",showPW1:"AuthenticationPage_showPW1__oVYMD",showPW2:"AuthenticationPage_showPW2__3tuDI",bold:"AuthenticationPage_bold__3jDsD",blankUsernameMessage:"AuthenticationPage_blankUsernameMessage__1GLvc",tokenCookieContainer:"AuthenticationPage_tokenCookieContainer__1dJBB",check:"AuthenticationPage_check__Dx-nN",overHead:"AuthenticationPage_overHead__24Dt_",captchaContainer:"AuthenticationPage_captchaContainer__lizAo",captchaError:"AuthenticationPage_captchaError__eqA8u"}},59:function(e,t,a){e.exports={fixedPadding:"App_fixedPadding__T7ge5",top:"App_top__3pCvB",width:"App_width__2soKE"}},60:function(e,t,a){e.exports={h1:"FourOhPage_h1__1l3uR",h2:"FourOhPage_h2__3MiNm",h3:"FourOhPage_h3__zmLK3"}},78:function(e,t,a){e.exports=a.p+"static/media/check.7812c5ab.svg"},79:function(e,t,a){e.exports=a.p+"static/media/x.2329a60d.svg"},80:function(e,t,a){e.exports=a.p+"static/media/checkComplete.c4e37bc8.svg"},81:function(e,t,a){e.exports=a.p+"static/media/xComplete.4a74a651.svg"},83:function(e,t,a){e.exports={profilePage:"ProfilePage_profilePage__3x5t8"}},84:function(e,t,a){e.exports=a.p+"static/media/envelope.f38c166d.svg"},86:function(e,t,a){e.exports=a.p+"static/media/company.8d611e64.svg"},87:function(e,t,a){e.exports=a.p+"static/media/location.9c69d282.svg"},88:function(e,t,a){e.exports=a.p+"static/media/website.a45c1559.svg"},89:function(e,t,a){e.exports=a.p+"static/media/twitter.b48524a2.svg"},90:function(e,t,a){e.exports=a.p+"static/media/auth_problem.2a5a1bfc.svg"},91:function(e,t,a){e.exports=a.p+"static/media/show_password.e4b464d9.svg"},92:function(e,t,a){e.exports=a.p+"static/media/hide_password.dbd11928.svg"},93:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAidScV25GtAAAAAJ0Uk5TAP9bkSK1AAAAiElEQVR4nO3XwQ2AIAxAUW6OwaisxkhugBfhADGRGGMw7x/bvgEagiRJeqlYzvLMCUVRFEVRFEVRFEV9qG5EURRFURRFURRFUeupVqq7OtjqYB+PKYqiKIqiKIqiKOqJiqVvUK1MURRFURRFURRFUcupVrpUS370FEVRFEVRFEVR1I+VJEnqOwCJzA1b+LwVKgAAAABJRU5ErkJggg=="},98:function(e,t,a){e.exports=a(130)}},[[98,1,2]]]);
//# sourceMappingURL=main.e03be20d.chunk.js.map