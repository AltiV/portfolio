(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(93),a(94),a(11)),c=a(36),s=a(14),m=a(45),u=a(38),b=a(167),p=a(164),h=a(143),f=a(144),g=a(145),d=a(146),E=a(147),v=a(148),w=a(149),y=a(150),k=a(50),j=a(136),O=a(139),x=a(140),N=a(141),C=a(151),I=a(142),S=a(69),P=a.n(S),M=[{listIcon:r.a.createElement(j.a,null),listText:"Home",listPath:"/"},{listIcon:r.a.createElement(O.a,null),listText:"Portfolio",listPath:"/portfolio"},{listIcon:r.a.createElement(x.a,null),listText:"Resume",listPath:"/resume"},{listIcon:r.a.createElement(N.a,null),listText:"Contact Me",listPath:"/contact"}],A=Object(I.a)((function(e){return{menuSliderContainer:{width:300,background:"#3385ff",height:"100%"},avatar:{display:"block",margin:"0.5rem auto",width:e.spacing(15),height:e.spacing(15)},listItem:{color:"white"},logo:{display:"block",margin:"0.5rem auto",width:e.spacing(25)}}})),F=function(){var e=Object(n.useState)({left:!1}),t=Object(m.a)(e,2),a=t[0],l=t[1],o=function(e,t){l(Object(s.a)(Object(s.a)({},a),{},Object(c.a)({},e,t)))},i=A();return r.a.createElement(v.a,{style:{background:"#222"}},r.a.createElement(w.a,null,r.a.createElement(y.a,{onClick:function(){return o("left",!0)}},r.a.createElement(C.a,{style:{color:"#3385ff"}})),r.a.createElement(k.a,{variant:"h5"},"AltiV"),r.a.createElement(b.a,{anchor:"left",open:a.left,onClose:function(){return o("left",!1)}},r.a.createElement(p.a,{className:i.menuSliderContainer,component:"div",onClick:function(){return o("left",!1)}},r.a.createElement("img",{alt:"AltiV",src:P.a,className:i.logo,component:u.b,to:"/"}),r.a.createElement(h.a,null),r.a.createElement(f.a,null,M.map((function(e,t){return r.a.createElement(g.a,{button:!0,key:t,component:u.b,to:e.listPath},r.a.createElement(d.a,{className:i.listItem},e.listIcon),r.a.createElement(E.a,{primary:e.listText,className:i.listItem}))})))))))},T=a(152),_=a(153),D=a(154),R=a(155),V=Object(I.a)({bottom:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#222"},button:{margin:"0 50px","& .MuiSvgIcon-root":{fill:"white","&:hover":{fill:"#3385ff",fontSize:"1.8rem"}}}}),W=function(){var e=V();return r.a.createElement(T.a,{width:"auto",className:e.bottom},r.a.createElement("a",{href:"https://www.linkedin.com/in/alan-vuong-08579860/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_.a,{className:e.button,icon:r.a.createElement(D.a,null)})),r.a.createElement("a",{href:"https://github.com/AltiV",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_.a,{className:e.button,icon:r.a.createElement(R.a,null)})))},L=a(156),q=a(168),B=a(73),J=a.n(B),z=Object(I.a)((function(e){return{mainBox:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",display:"flex",color:"white",width:"80%",background:"linear-gradient(45deg, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.8) 80%)",boxShadow:"0 3px 3px 0px rgba(50, 50, 50, .5)"},avatar:{width:e.spacing(15),height:e.spacing(15)}}})),H=function(){var e=z();return r.a.createElement(L.a,{container:!0,alignItems:"center",direction:"row",className:e.mainBox},r.a.createElement(L.a,{item:!0,xs:12,sm:6},r.a.createElement(q.a,{src:J.a,variant:"rounded",alt:"Alan Vuong",className:e.avatar})),r.a.createElement(L.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{variant:"h3"},"Alan Vuong"),r.a.createElement(k.a,{variant:"caption"},"Full stack web developer.")))},U=a(157),K=a(170),G=a(158),Z=a(74),$=a.n(Z),Q=a(75),X=a.n(Q),Y=Object(I.a)((function(e){return{root:{backgroundColor:e.palette.primary.light},button:{color:"white"},websiteLink:{color:"white",textDecoration:"none"},technologyChip:{margin:"0 0.1rem"}}})),ee=[{name:"Issue Tracker",description:"Track user-submitted projects and corresponding issues.",technologies:["MERN Stack","Bootstrap"],website:"https://issue-tracker-mern.herokuapp.com/",github:"https://github.com/AltiV/Issue-Tracker"},{name:"KartRider Rush+ Unofficial Manual",description:"An information repository for the KartRider Rush+ mobile application, holding data for the game's karts, characters, tracks, and more. Includes a basic quiz component.",technologies:["Angular","Material UI"],website:"https://krrplus.web.app/",github:null},{name:"Personal Website (Old)",description:"My first portfolio website, using basic web techologies.",technologies:["HTML","Javascript"],website:"https://altiv.github.io/website/",github:"https://github.com/AltiV/website"}],te=function(){var e=Y();return r.a.createElement(f.a,{className:e.root},ee.map((function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{alignItems:"flex-start",key:a},r.a.createElement(U.a,null,r.a.createElement(q.a,{alt:t.name,src:""},t.name[0])),r.a.createElement(E.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",className:e.websiteLink},t.name),"\xa0",t.technologies.map((function(t,a){return r.a.createElement(K.a,{label:t,key:a,className:e.technologyChip})}))),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{component:"span",variant:"body2",color:"textPrimary"},t.description))}),r.a.createElement(G.a,{style:{color:"white"}},r.a.createElement(y.a,{edge:"end"},r.a.createElement("a",{href:t.website,className:e.button,target:"_blank",rel:"noopener noreferrer"},r.a.createElement($.a,null))),t.github&&r.a.createElement(y.a,{edge:"end"},r.a.createElement("a",{href:t.github,className:e.button,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(X.a,null))))),r.a.createElement(h.a,{variant:"inset",component:"li"}))})))},ae=a(59),ne=a.n(ae),re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Download resume"," ",r.a.createElement("a",{href:ne.a,target:"_blank",rel:"noopener noreferrer"},"here.")," "),r.a.createElement("object",{data:ne.a,type:"application/pdf",style:{height:"calc(100vh - 170px)",width:"100%"}},r.a.createElement("p",null,r.a.createElement("a",{href:ne.a},"Link to PDF"))))},le=a(163),oe=a(159),ie=a(160),ce=a(161),se=a(165),me=a(162),ue=a(77),be=a.n(ue),pe=a(76),he=Object(I.a)((function(e){return{form:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",background:"#00064D",zIndex:-1,"& label.MuiInputLabel-root":{color:"white"}},header:{textAlign:"center",color:"white",margin:"1rem 0"},buttonDiv:{margin:"0.5rem",float:"right","& .MuiCircularProgress-root":{position:"absolute",right:"4.8em",top:"19.5em",color:"green"}}}})),fe=function(){var e=he(),t=Object(n.useState)({name:"",email:"",subject:"",message:""}),a=Object(m.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)({loading:!1}),u=Object(m.a)(i,2),b=u[0],p=u[1],h=Object(n.useState)({visible:!1,severity:"success",title:"Success",message:"Form data successfully sent."}),f=Object(m.a)(h,2),g=f[0],d=f[1],E=function(e){var t=e.target,a=t.name,n=t.value;o(Object(s.a)(Object(s.a)({},l),{},Object(c.a)({},a,n)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),p({loading:!0}),pe.send("contact_service","template_nuhdbmn",l,"user_Uo3w87JyZv5toLgJGDNyH").then((function(t){!g.visible&&d(Object(s.a)(Object(s.a)({},g),{},{visible:!0,severity:"success",title:"Success",message:"Form data successfully sent."})),setTimeout((function(){d(Object(s.a)(Object(s.a)({},g),{},{visible:!1}))}),2e3),e.target.reset()})).catch((function(e){!g.visible&&d(Object(s.a)(Object(s.a)({},g),{},{visible:!0,severity:"error",title:"Error",message:"An error has occured trying to send the form data: "+e})),setTimeout((function(){d(Object(s.a)(Object(s.a)({},g),{},{visible:!1}))}),2e3)})).finally((function(){return p({loading:!1})}))}},r.a.createElement(k.a,{variant:"h4",className:e.header},"Contact Me"),r.a.createElement(le.a,{name:"name",label:"Name",variant:"outlined",autoComplete:"off",inputProps:{style:{color:"white"}},required:!0,fullWidth:!0,onChange:function(e){E(e)}}),r.a.createElement(le.a,{name:"email",label:"E-mail",variant:"outlined",autoComplete:"off",inputProps:{style:{color:"white"}},required:!0,fullWidth:!0,onChange:function(e){E(e)}}),r.a.createElement(le.a,{name:"subject",label:"Subject",variant:"outlined",autoComplete:"off",inputProps:{style:{color:"white"}},required:!0,fullWidth:!0,onChange:function(e){E(e)}}),r.a.createElement(le.a,{name:"message",label:"Message",variant:"outlined",autoComplete:"off",inputProps:{style:{color:"white"}},required:!0,fullWidth:!0,multiline:!0,rowsMax:6,onChange:function(e){E(e)}}),r.a.createElement("div",{className:e.buttonDiv},r.a.createElement(oe.a,{variant:"contained",type:"submit",disabled:b.loading,endIcon:r.a.createElement(be.a,null),className:e.button},"Submit Form"),b.loading&&r.a.createElement(ie.a,{size:32,className:e.buttonProgress}))),r.a.createElement(ce.a,{in:g.visible},r.a.createElement(se.a,{severity:g.severity,onClose:function(){d(Object(s.a)(Object(s.a)({},g),{},{visible:!1}))}},r.a.createElement(me.a,null,g.title),g.message)))};var ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(w.a,null),r.a.createElement(i.a,{path:"/",exact:!0,component:H}),r.a.createElement(i.a,{path:"/portfolio",component:te}),r.a.createElement(i.a,{path:"/resume",component:re}),r.a.createElement(i.a,{path:"/contact",component:fe}),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a.p+"static/media/R\xe9sum\xe9.71497ace.pdf"},69:function(e,t,a){e.exports=a.p+"static/media/name_white.865b4ec6.png"},73:function(e,t,a){e.exports=a.p+"static/media/avatar.fd35ba88.png"},88:function(e,t,a){e.exports=a(103)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.9363cc0e.chunk.js.map