(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var c=t(3),m=t(0),n=t.n(m),r=t(2),d=t.n(r);t(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){return n.a.createElement("div",{id:"display"},e.drumName)}d.a.render(n.a.createElement((function(e){var a=Object(m.useState)(""),t=Object(c.a)(a,2),r=t[0],d=t[1],o=Object(m.useRef)(null),u=Object(m.useRef)(null),i=Object(m.useRef)(null),l=Object(m.useRef)(null),p=Object(m.useRef)(null),f=Object(m.useRef)(null),E=Object(m.useRef)(null),y=Object(m.useRef)(null),b=Object(m.useRef)(null),K={KeyQ:{audio:o,name:"Heater 1"},KeyW:{audio:u,name:"Heater 2"},KeyE:{audio:i,name:"Heater 3"},KeyA:{audio:l,name:"Heater 4"},KeyS:{audio:p,name:"Clap"},KeyD:{audio:f,name:"Open HH"},KeyZ:{audio:E,name:"Kick n' Hat"},KeyX:{audio:y,name:"Kick"},KeyC:{audio:b,name:"Closed HH"}};Object(m.useEffect)((function(){return document.addEventListener("keydown",h),function(){document.removeEventListener("keydown",h)}}));var h=function(e){w(e.code)},N=function(e){w(e.target.name)},w=function(e){var a=K[e];a&&(d(a.name),a.audio.current.play())};return n.a.createElement("div",{id:"drum-machine"},n.a.createElement(s,{drumName:r}),n.a.createElement("div",{className:"drum-pads"},n.a.createElement("button",{className:"drum-pad",id:"drum-pad-Q",name:"KeyQ",onClick:N},"Q",n.a.createElement("audio",{className:"clip",id:"Q",ref:o,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-W",name:"KeyW",onClick:N},"W",n.a.createElement("audio",{className:"clip",id:"W",ref:u,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-E",name:"KeyE",onClick:N},"E",n.a.createElement("audio",{className:"clip",id:"E",ref:i,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-A",name:"KeyA",onClick:N},"A",n.a.createElement("audio",{className:"clip",id:"A",ref:l,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-S",name:"KeyS",onClick:N},"S",n.a.createElement("audio",{className:"clip",id:"S",ref:p,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-D",name:"KeyD",onClick:N},"D",n.a.createElement("audio",{className:"clip",id:"D",ref:f,src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-Z",name:"KeyZ",onClick:N},"Z",n.a.createElement("audio",{className:"clip",id:"Z",ref:E,src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-X",name:"KeyX",onClick:N},"X",n.a.createElement("audio",{className:"clip",id:"X",ref:y,src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"})),n.a.createElement("button",{className:"drum-pad",id:"drum-pad-C",name:"KeyC",onClick:N},"C",n.a.createElement("audio",{className:"clip",id:"C",ref:b,src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.28265153.chunk.js.map