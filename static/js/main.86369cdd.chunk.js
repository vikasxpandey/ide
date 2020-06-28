(this.webpackJsonpide=this.webpackJsonpide||[]).push([[0],{13:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),l=(a(12),a(13),a(2)),i=a(3),s=a.n(i),u=a(1),d=(a(14),a(15),a(16),a(17),a(18),function(e){var t=e.lang,a=e.code,n=e.setCode;return 1===t?o.a.createElement("div",{className:"editor-wrap"},o.a.createElement(s.a,{value:a,onValueChange:function(e){return n(e)},highlight:function(e){return Object(u.highlight)(e,u.languages.py)},padding:20,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:14,background:"#1c67da",color:"#fff",borderTopRightRadius:"50px",borderBottomRightRadius:"50px",borderBottomLeftRadius:"50px",minHeight:"60vh",boxShadow:"7px 7px 5px rgba(0, 0, 0, 0.1)"}})):2===t?o.a.createElement("div",{className:"editor-wrap"},o.a.createElement(s.a,{value:a,onValueChange:function(e){return n(e)},highlight:function(e){return Object(u.highlight)(e,u.languages.java)},padding:20,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:14,background:"#1c67da",color:"#fff",borderTopRightRadius:"50px",borderBottomRightRadius:"50px",borderBottomLeftRadius:"50px",minHeight:"50vh",boxShadow:"7px 7px 5px rgba(0, 0, 0, 0.1)"}})):o.a.createElement("div",{className:"editor-wrap"},o.a.createElement(s.a,{value:a,onValueChange:function(e){return n(e)},highlight:function(e){return Object(u.highlight)(e,u.languages.c)},padding:20,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:14,background:"#1c67da",color:"#fff",borderTopRightRadius:"50px",borderBottomRightRadius:"50px",borderBottomLeftRadius:"50px",minHeight:"50vh",boxShadow:"7px 7px 5px rgba(0, 0, 0, 0.1)"}}))}),m=function(e){var t=e.lang,a=e.setLang,n=e.setCode,r=e.runCode;return o.a.createElement("div",{className:"options-wrap mt-3 p-3 blue-bg"},o.a.createElement("h5",{className:"text-center"},"Options"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Select Language:"),o.a.createElement("select",{value:t,onChange:function(e){a(e.target.value)},className:"form-control"},o.a.createElement("option",{value:1},"Python"),o.a.createElement("option",{value:2},"Java"),o.a.createElement("option",{value:3},"C++")),o.a.createElement("div",{className:"options-button-parent"},o.a.createElement("button",{onClick:function(){return r()},className:"btn shadow btn-success mt-5"},"Run Code"),o.a.createElement("button",{onClick:function(){return n("Type your code here...")},className:"btn shadow btn-danger mt-5"},"Clear Code"))))},p=function(e){var t=e.input,a=e.setInput;return o.a.createElement("div",{className:"input-wrap mt-3 p-3 blue-bg"},o.a.createElement("h5",{className:"text-center"},"Input"),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{style:{background:"transparent",border:"0px"},cols:"30",rows:"5",className:"form-control",value:t,onChange:function(e){a(e.target.value)}})))},g=function(e){var t=e.output;return o.a.createElement("div",{className:"input-wrap mt-3 p-3 blue-bg"},o.a.createElement("h5",{className:"text-center"},"Output"),o.a.createElement("textarea",{style:{background:"transparent",border:"0px"},cols:"30",rows:"5",className:"form-control",value:t,readOnly:!0}))},h={id:"13b8a5eb8b858b39f04965178c4d3d8f",secret:"d458737deda4bd748cfa03c66e6847e088865087d29d7797d61e917dcd667685"},b=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("Type your code here..."),i=Object(l.a)(c,2),s=i[0],u=i[1],b=Object(n.useState)("Enter standard inputs here..."),f=Object(l.a)(b,2),v=f[0],E=f[1],x=Object(n.useState)("Output will appear here!"),w=Object(l.a)(x,2),N=w[0],y=w[1];return o.a.createElement("div",{className:"parent-row row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement(d,{lang:a,code:s,setCode:u})),o.a.createElement("div",{className:"col-md-3 "},o.a.createElement(m,{lang:a,setLang:r,setCode:u,runCode:function(){var e={clientId:h.id,clientSecret:h.secret,script:s,language:1===a?"python3":2===a?"java":"cpp",versionIndex:0};fetch("https://api.jdoodle.com/v1/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return y(e.output)})).catch((function(e){return y("Something Went Wrong: "+e.error)}))}})),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"input-wrap mt-3 blue-bg"},o.a.createElement(p,{input:v,setInput:E}))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"output-wrap mt-3 blue-bg"},o.a.createElement(g,{output:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(19)}},[[7,1,2]]]);
//# sourceMappingURL=main.86369cdd.chunk.js.map