(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{138:(t,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/TaskList",function(){return n(3486)}])},3486:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var s=n(4848),l=n(6540);function a(t){let{tasks:e,onChangeTask:n,onDeleteTask:l}=t,a=e&&e.map(t=>(0,s.jsx)(i,{task:t,onChangeTask:n,onDeleteTask:l},t.id));return(0,s.jsx)("ul",{id:"task-list",children:a})}function i(t){let{task:e,onChangeTask:n,onDeleteTask:a}=t;function i(){d(!u)}let[u,d]=(0,l.useState)(!1),[o,c]=(0,l.useState)(e.text);return(0,s.jsxs)("li",{children:[u?(0,s.jsx)("input",{type:"text",value:o,placeholder:"...",onChange:t=>c(t.target.value)}):(0,s.jsx)("p",{children:e.text}),(0,s.jsxs)("div",{className:"flex flex-row",children:[u?""==o?(0,s.jsx)("button",{className:"button disabled-button",disabled:!0,children:"Save"}):(0,s.jsx)("button",{className:"button button-dark-blue",onClick:function(){n({id:e.id,text:o}),i()},children:"Save"}):(0,s.jsx)("button",{className:"button",onClick:i,children:"Edit"}),(0,s.jsx)("button",{className:"button",id:"delete-button",onClick:()=>a(e.id),children:"Delete"})]})]})}}},t=>{var e=e=>t(t.s=e);t.O(0,[636,593,792],()=>e(138)),_N_E=t.O()}]);