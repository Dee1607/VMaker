(this.webpackJsonpcsci5709_group5_s21_frontend=this.webpackJsonpcsci5709_group5_s21_frontend||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(13),n=a.n(c),i=(a(64),a(65),a(44),a(28),a(21)),o=a(6),d=a(111),l=a(107),j=a(110),u=(a(66),a(1));function b(){return Object(u.jsx)(d.a,{className:"app-nav-bar-container",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(d.a.Brand,{className:"app-nav-bar-text",href:"/",children:"Video Maker"}),Object(u.jsxs)(j.a,{className:"ml-auto",children:[Object(u.jsx)(j.a.Link,{className:"app-nav-bar-link",href:"login",children:"Login"}),Object(u.jsx)(j.a.Link,{className:"app-nav-bar-link",href:"register",children:"Register"})]})]})})}var m=function(e){var t=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(b,{})}),Object(u.jsx)("main",{children:Object(u.jsx)(l.a,{children:t})})]})};a(71);function h(){return Object(u.jsx)(d.a,{className:"nav-bar-container",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(d.a.Brand,{className:"nav-bar-text",href:"/",children:"Video Maker"}),Object(u.jsx)(j.a,{className:"ml-auto",children:Object(u.jsx)(j.a.Link,{title:"Log Out",className:"nav-bar-link",onClick:function(){localStorage.removeItem("user"),localStorage.removeItem("email")},href:"/",children:Object(u.jsx)("i",{className:"fas fa-sign-out-alt"})})})]})})}var O=a(19),f=a(17),x=a(59),p=a(15);a(72);function g(e){var t=Object(o.g)(),a=Object(r.useState)(!1),s=Object(f.a)(a,2),c=s[0],n=s[1];return Object(u.jsxs)(p.Drawer,Object(O.a)(Object(O.a)({},e),{},{children:[Object(u.jsx)(p.Drawer.Toggle,{onClick:function(){return n(!c)}}),Object(u.jsx)(x.a,{in:c,children:Object(u.jsx)(p.Drawer.Overflow,{children:Object(u.jsx)(p.Drawer.ToC,{children:Object(u.jsxs)(p.Drawer.Nav,{children:[Object(u.jsx)(p.Drawer.Item,{href:"/home",children:Object(u.jsx)("span",{className:"/home"===t.pathname?"nav-item-active":"",children:"Create Videos"})}),Object(u.jsx)(p.Drawer.Item,{href:"/history",children:Object(u.jsx)("span",{className:"/history"===t.pathname?"nav-item-active":"",children:"History"})}),Object(u.jsx)(p.Drawer.Item,{href:"/credits",children:Object(u.jsx)("span",{className:"/credits"===t.pathname?"nav-item-active":"",children:"Add Credits"})})]})})})})]}))}var v=a(108),w=a(56),N=function(e){var t=e.children,a=Object(o.f)();return Object(r.useEffect)((function(){localStorage.getItem("user")||a.push("/login")}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(h,{})}),Object(u.jsx)("main",{children:Object(u.jsx)(l.a,{fluid:!0,children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{md:2,as:g}),Object(u.jsx)(w.a,{md:10,children:t})]})})})]})},C=a(22),E=a(23),S=a(33),k=a(25),y=a(24),P=a(26),D=a.n(P),I=(a(84),function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"page-header-title",children:e.title}),Object(u.jsx)("div",{className:"page-header-subtitle",children:e.subtitle})]})}),L=(a(39),a(8)),A=a.n(L),z=a(30),F=a(57),R=a.n(F),T=function(e){Object(k.a)(a,e);var t=Object(y.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).imageChange=function(e,t){e.forEach((function(t,a){r.convertToBase64(e,a)}))},r.audioChange=function(e,t){var a=new FileReader;a.readAsDataURL(e[e.length-1]);a.onload=function(e){r.setAudio(a.result)}},r.sendNotificationMessage=function(e){e.preventDefault();var t={};t.username=localStorage.getItem("user"),t.email=localStorage.getItem("email");var a="https://ms0lqkisrd.execute-api.us-east-1.amazonaws.com/default/snsVMaker?username="+t.username+"&email="+t.email;A.a.post(a).then((function(t){console.log(t),r.emptyS3(e)}))},r.validate=function(e){r.state.pictures&&0==r.state.pictures.length?alert("Photos empty!!"):""==r.state.audio?alert("Audio Empty!!"):r.deductCredits(e)},r.deductCredits=function(e){e.preventDefault();var t=localStorage.getItem("email");URL="https://avnm0a9gre.execute-api.us-east-1.amazonaws.com/default/deductcredit?username="+t,A.a.post(URL).then((function(t){t&&"true"==t.data?r.uploadToS3(e):alert("You do not have enough credits!!"),console.log(t)}))},r.emptyS3=function(e){e.preventDefault();var t=localStorage.getItem("user");URL="https://mgzh2n5bti.execute-api.us-east-1.amazonaws.com/default/deleteuserfolder?username="+t,A.a.post(URL).then((function(e){e&&"true"==e.data?(r.setState({pictures:[]}),r.setState({audio:""}),r.props.history.push("/history"),alert("Video Generated")):alert("Some error has occurred")}))},r.uploadToS3=function(e){e.preventDefault();var t={};t.images=r.state.pictures,t.audio=r.state.audio,t.userName=localStorage.getItem("user");A()({method:"post",url:"/create",data:t}).then((function(t){console.log(t),alert("Successful.."),r.sendNotificationMessage(e)})).catch((function(e){console.log(e)}))},r.fetchCredits=function(e){var t=" https://d5ug4od3oi.execute-api.us-east-1.amazonaws.com/default/addcredit?username="+localStorage.getItem("email");A.a.get(t).then((function(e){e&&e.data&&e.data.credits>=0&&r.setState({currentCredits:e.data.credits})}))},r.state={pictures:[],audio:"",currentCredits:0},r.onDrop=r.imageChange.bind(Object(S.a)(r)),r}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.fetchCredits()}},{key:"convertToBase64",value:function(e,t){var a=this,r=new FileReader;r.readAsDataURL(e[t]),r.onload=function(s){e[t]=r.result,a.setPictures(e)}}},{key:"setPictures",value:function(e){this.setState({pictures:e})}},{key:"setAudio",value:function(e){this.setState({audio:e})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"page-container to-do-list-container",children:[Object(u.jsx)("div",{className:"page-header-container",children:Object(u.jsx)(I,{title:"Create Video",subtitle:""})}),Object(u.jsx)("div",{className:"page-content-container",children:Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsxs)("p",{children:["Current Credits:\xa0",this.state.currentCredits]}),Object(u.jsxs)("div",{className:"upload-container",children:[Object(u.jsx)("div",{className:"upload-image-container",children:Object(u.jsx)(D.a,{withIcon:!0,withPreview:!0,withLabel:!1,buttonText:"Choose images",onChange:this.imageChange,imgExtension:[".jpg",".jpeg",".png"],maxFileSize:5242880})}),Object(u.jsxs)("div",{className:"upload-audio-container",children:[Object(u.jsx)(D.a,{withIcon:!0,withPreview:!1,withLabel:!1,buttonText:"Choose audio",onChange:this.audioChange,imgExtension:[".mp3"],accept:"audio/*",maxFileSize:5242880}),this.state.audio?Object(u.jsx)(R.a,{src:this.state.audio,controls:!0}):Object(u.jsx)("div",{})]})]}),Object(u.jsx)("div",{className:"button-container",children:Object(u.jsx)(z.a,{onClick:this.validate,children:"Upload"})})]})})]})}}]),a}(r.Component),U=Object(o.h)(T),q=a(43),M=a.n(q),V=a(58);function B(){var e=Object(o.f)(),t=Object(r.useState)(""),a=Object(f.a)(t,2),s=a[0],c=a[1],n=Object(r.useState)(""),i=Object(f.a)(n,2),d=i[0],l=i[1],j=function(){var t=Object(V.a)(M.a.mark((function t(a){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),r="https://g0q3skkmei.execute-api.us-east-1.amazonaws.com/default/getuserpassword?username="+s,A.a.post(r).then((function(t){200==t.status&&(console.log(t.data.password),t.data.upassword==d?(alert("Login Successful.."),localStorage.setItem("user",t.data.username),localStorage.setItem("email",t.data.email),e.push("/home",s)):"error"==t.data?alert("User does not exist!"):alert("Invalid Password"))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"row",children:[" ",Object(u.jsx)("br",{})," "]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-3"}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsxs)("form",{onSubmit:j,children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Log in"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email. Eg:'admin@gmail.com' ",id:"email",name:"email",value:s,onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password Eg:'admin@123",id:"password",name:"password",value:d,onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",id:"customCheck1"}),Object(u.jsx)("label",{children:"Remember me"})]})}),Object(u.jsx)(z.a,{variant:"primary",type:"submit",className:"btn-block",children:"Sign in"}),Object(u.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(u.jsx)("a",{href:"#",children:"password?"})]})]})}),Object(u.jsx)("div",{className:"col-md-3"})]})]})}var _=a(32),Z=a(109);function H(){var e=Object(o.f)(),t=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,s=Object(r.useState)({name:"",email:"",password:"",confirmPassword:""}),c=Object(f.a)(s,2),n=c[0],i=c[1],d=Object(r.useState)({nameError:"",emailError:"",passwordError:"",confirmPasswordError:""}),l=Object(f.a)(d,2),j=l[0],b=l[1],m=function(e){var t=Object(O.a)(Object(O.a)({},n),{},Object(_.a)({},e.target.name,e.target.value));i(t)};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"row",children:[" ",Object(u.jsx)("br",{})," "]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-3"}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsxs)("form",{onSubmit:function(r){r.preventDefault();var s=!0;b({nameError:"",emailError:"",passwordError:"",confirmPasswordError:""});var c=Object(O.a)({},j);if(""===n.name?(c.nameError="Please enter name!!",b(c),s=!1):(c.nameError="",b(c)),""===n.email?(c.emailError="Please enter email!!",b(c),s=!1):t.test(n.email)?(c.emailError="",b(c)):(c.emailError="Email Invalid!!",b(c),s=!1),""===n.password?(c.passwordError="Please enter password!!",b(c),s=!1):a.test(n.password)?(c.passwordError="",b(c)):(c.passwordError="Password Invalid!!",b(c),s=!1),""===n.confirmPassword?(c.confirmPasswordError="Please enter password!!",b(c),s=!1):n.password!==n.confirmPassword?(c.confirmPasswordError="Password does not match!!",b(c),s=!1):(c.confirmPasswordError="",b(c)),!0===s){var i="https://c5sg6b51g0.execute-api.us-east-1.amazonaws.com/default/insertuserinfo?username="+n.name+"&password="+n.password+"&email="+n.email+";";A.a.post(i).then((function(t){200==t.status?(alert("Registration Successful.."),e.push("/login")):alert("User Exist!")}))}},children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Register"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)(Z.a.Label,{className:"required",children:"Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Name",id:"name",name:"name",required:"required",onChange:function(e){return m(e)}}),Object(u.jsx)("p",{className:"text-danger",children:j.nameError})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)(Z.a.Label,{className:"required",children:"Email"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter email",id:"email",name:"email",onChange:function(e){return m(e)}}),Object(u.jsx)("p",{className:"text-danger",children:j.emailError})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)(Z.a.Label,{className:"required",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",id:"password",name:"password",onChange:function(e){return m(e)}}),Object(u.jsx)("p",{className:"text-danger",children:j.passwordError})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)(Z.a.Label,{className:"required",children:"Confirm Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm your password",onChange:function(e){return m(e)}}),Object(u.jsx)("p",{className:"text-danger",children:j.confirmPasswordError})]}),Object(u.jsx)(z.a,{variant:"primary",type:"submit",className:"btn-block",children:" Register "})]})}),Object(u.jsx)("div",{className:"col-md-3"})]})]})}a(104);var J=function(e){Object(k.a)(a,e);var t=Object(y.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).fetchCredits=function(e){var t=" https://d5ug4od3oi.execute-api.us-east-1.amazonaws.com/default/addcredit?username="+localStorage.getItem("email");A.a.get(t).then((function(e){e&&e.data&&e.data.credits>=0&&r.setState({currentCredits:e.data.credits})}))},r.addCredit=function(e){30===e?r.state.isOrdered30=!0:50===e?r.state.isOrdered50=!0:100===e&&(r.state.isOrdered100=!0);var t=e,a=" https://d5ug4od3oi.execute-api.us-east-1.amazonaws.com/default/addcredit?username="+localStorage.getItem("email")+"&credit="+t;A.a.post(a).then((function(e){e&&"true"==e.data&&(r.fetchCredits(),r.setState({isOrdered:e.data}),console.log("Credits Added Successfully!!"))})).catch((function(e){console.log(e)}))},r.state={isOrdered30:!1,isOrdered50:!1,isOrdered100:!1,currentCredits:0},r}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.fetchCredits()}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"page-container to-do-list-container",children:[Object(u.jsx)("div",{className:"page-header-container",children:Object(u.jsx)(I,{title:"Add Credits",subtitle:""})}),Object(u.jsx)("div",{className:"page-content-container",children:Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsxs)("p",{children:["Current Credits:\xa0",this.state.currentCredits]}),Object(u.jsxs)("center",{children:[this.state.isOrdered30?Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"button",style:{backgroundColor:"#2EE59D",color:"#ffffff",border:"#2EE59D"},onClick:function(t){return e.addCredit(30)},children:"30 Credits Added"})}):Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"button",style:{backgroundColor:"rgb(42, 82, 190)",color:"#ffffff",border:"rgb(42, 82, 190)"},onClick:function(t){return e.addCredit(30)},children:"Add 30 Credits"})}),this.state.isOrdered50?Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"button",style:{backgroundColor:"#2EE59D",color:"#ffffff",border:"#2EE59D"},onClick:function(t){return e.addCredit(50)},children:"50 Credits Added"})}):Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"button",style:{backgroundColor:"rgb(42, 82, 190)",color:"#ffffff",border:"rgb(42, 82, 190)"},onClick:function(t){return e.addCredit(50)},children:"Add 50 Credits"})}),this.state.isOrdered100?Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"button",style:{backgroundColor:"#2EE59D",color:"#ffffff",border:"#2EE59D"},onClick:function(t){return e.addCredit(100)},children:"100 Credits Added"})}):Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"button",style:{backgroundColor:"rgb(42, 82, 190)",color:"#ffffff",border:"rgb(42, 82, 190)"},onClick:function(t){return e.addCredit(100)},children:"Add 100 Credits"})})]})]})})]})}}]),a}(r.Component),$=Object(o.h)(J),G=function(e){Object(k.a)(a,e);var t=Object(y.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).getFromS3=function(){var e="  https://4u8ftjgyv3.execute-api.us-east-1.amazonaws.com/default/gets3bucketdata?user="+localStorage.getItem("user");A.a.get(e).then((function(e){r.setState({videos:e.data})})).catch((function(e){console.log(e)}))},r.state={videos:[]},r.getFromS3(),r}return Object(E.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"page-container to-do-list-container",children:[Object(u.jsx)("div",{className:"page-header-container",children:Object(u.jsx)(I,{title:"Videos History",subtitle:""})}),Object(u.jsx)("div",{className:"page-content-container",children:Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsx)("p",{children:"Below is the video history:"}),this.state.videos.length>0&&this.state.videos.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("b",{children:["Video ",t+1," "]})," ",Object(u.jsx)("iframe",{src:e})]})})}))]})})]})}}]),a}(r.Component),Y=Object(o.h)(G);function K(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/login",children:Object(u.jsx)(m,{children:Object(u.jsx)(B,{})})}),Object(u.jsx)(o.a,{exact:!0,path:"/register",children:Object(u.jsx)(m,{children:Object(u.jsx)(H,{})})}),Object(u.jsx)(o.a,{exact:!0,path:"/home",children:Object(u.jsx)(N,{children:Object(u.jsx)(U,{})})}),Object(u.jsx)(o.a,{exact:!0,path:"/credits",children:Object(u.jsx)(N,{children:Object(u.jsx)($,{})})}),Object(u.jsx)(o.a,{exact:!0,path:"/history",children:Object(u.jsx)(N,{children:Object(u.jsx)(Y,{})})}),Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(m,{children:Object(u.jsx)(B,{})})}),Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)("div",{children:"404 Page not found."})})]})})}var Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),c(e),n(e)}))};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root")),Q()},28:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},84:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.117a01ac.chunk.js.map