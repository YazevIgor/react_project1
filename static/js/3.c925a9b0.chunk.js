(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[3],{200:function(e,s,a){e.exports={Dialogs:"Dialogs_Dialogs__o5_Dm",DialogsItems:"Dialogs_DialogsItems__2PKOR",Item:"Dialogs_Item__3eqqA",active:"Dialogs_active__b0s_k",MessagesItems:"Dialogs_MessagesItems__2MTsR"}},204:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),c=a(200),i=a.n(c),r=a(7),o=a(1),g=function(e){return Object(o.jsx)(r.b,{to:"/messages/"+e.id,className:i.a.Item+" "+i.a.active,children:Object(o.jsx)("div",{children:e.name})})},m=function(e){return Object(o.jsx)("div",{className:i.a.Item,children:e.message})},d=function(e){var s=e.dialogsData.map((function(e){return Object(o.jsx)(g,{name:e.name,id:e.id},e.id)})),a=e.messagesData.map((function(e){return Object(o.jsx)(m,{message:e.message},e.id)})),t=n.a.createRef();return Object(o.jsxs)("div",{className:i.a.Dialogs,children:[Object(o.jsx)("div",{className:i.a.DialogsItems,children:s}),Object(o.jsxs)("div",{className:i.a.MessagesItems,children:[Object(o.jsx)("textarea",{onChange:function(){var s=t.current.value;e.AddMessageTextCreateAction(s)},ref:t,value:e.messagesText}),Object(o.jsx)("button",{onClick:function(){e.AddMessageCreateAction()},children:"Add message"}),a]})]})},l=a(8),u=a(73),j=a(72),b=a(18);s.default=Object(b.c)(Object(l.b)((function(e){return{dialogsData:e.messagesPage.dialogsData,messagesData:e.messagesPage.messagesData,messagesText:e.messagesPage.messagesText}}),(function(e){return{AddMessageCreateAction:function(){return e(Object(u.a)())},AddMessageTextCreateAction:function(s){return e(Object(u.b)(s))}}})),j.a)(d)}}]);
//# sourceMappingURL=3.c925a9b0.chunk.js.map