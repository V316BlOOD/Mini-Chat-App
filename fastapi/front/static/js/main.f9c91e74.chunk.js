(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{171:function(e,s,t){"use strict";t.r(s);var n=t(17),a=t.n(n),c=t(92),i=t.n(c),r=(t(97),t(55)),l=t(56),d=t(58),o=t(57),j=(t(98),t(12)),u=t.n(j),b=t(34),p=t.n(b),m=t(3);var h=function(e){Object(d.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{id:"messagesBoard"})}}]),t}(a.a.Component),O=function(e){Object(d.a)(t,e);var s=Object(o.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"submitMessage",value:function(){var e,s;u()("#messageField").val().length&&u()("#userField").val().length&&u()("#messagesBoard").append(p()((e=u()("#messageField").val(),s=u()("#userField").val(),e=(e=e.replaceAll("<","&lt;")).replaceAll(">","&gt;"),s=(s=s.replaceAll("<","&lt;")).replaceAll(">","&gt;"),window.socket.send(JSON.stringify({message:e,pseudo:s})),Object(m.jsx)("div",{class:"sentMessage",children:e})))),u()("#messageField").val("")}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"messagingBar",children:[Object(m.jsxs)("div",{className:"userContainer",children:[Object(m.jsx)("label",{htmlFor:"userField",children:"Pseudo"}),Object(m.jsx)("input",{id:"userField",type:"text",name:"username"})]}),Object(m.jsxs)("div",{className:"messageContainer",children:[Object(m.jsx)("label",{htmlFor:"messageField",children:"Message"}),Object(m.jsx)("input",{id:"messageField",type:"text",autoComplete:"off",name:"message"})]}),Object(m.jsx)("div",{className:"sendButtonContainer",children:Object(m.jsx)("button",{onClick:this.submitMessage,children:" Envoyer "})})]})}}]),t}(a.a.Component);var g=function(){return Object(m.jsxs)("div",{id:"mainWrapper",children:[Object(m.jsx)(h,{}),Object(m.jsx)(O,{})]})};window.host="ws://127.0.0.1:8000/ws",window.socket=new WebSocket(window.host),window.socket.onmessage=function(e){var s=JSON.parse(e.data),t=s.pseudo,n=s.message;u()("#messagesBoard").append(p()(function(e,s){return Object(m.jsxs)("div",{class:"receivedMessage",children:[Object(m.jsx)("span",{class:"senderName",children:e+":"}),Object(m.jsx)("span",{class:"message",children:s})]})}(t,n)))},i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))},97:function(e,s,t){},98:function(e,s,t){}},[[171,1,2]]]);
//# sourceMappingURL=main.f9c91e74.chunk.js.map