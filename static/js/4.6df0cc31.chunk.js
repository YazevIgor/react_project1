(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[4],{86:function(e,n,t){e.exports={currentPages:"Users_currentPages__2z9HT"}},88:function(e,n,t){"use strict";t.r(n);var i=t(16),s=t(17),c=t(19),o=t(18),r=t(1),a=t.n(r),l=t(12),u=t(49),g=t(20),b=t(46),d=t(86),p=t.n(d),h=t(6),j=t(0),P=function(e){for(var n=Object(r.useState)(0),t=Object(g.a)(n,2),i=t[0],s=t[1],c=Object(r.useState)(e.sizePage),o=Object(g.a)(c,2),a=o[0],l=o[1],u=[],d=Math.ceil(e.totalCountPages/e.sizePage),P=1;P<=d;P++)u.push(P);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){s(i-e.sizePage),l(a-e.sizePage)},children:"\u041d\u0430\u0437\u0430\u0434"}),u.slice(i,a).map((function(n){return Object(j.jsx)("span",{onClick:function(){return e.onClickPage(n)},className:e.currentPage===n?p.a.currentPages:null,children:" ".concat(n)},n)})),Object(j.jsx)("button",{onClick:function(){s(i+e.sizePage),l(a+e.sizePage)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"})]}),e.users.map((function(n){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h.b,{to:"/profile/"+n.id,children:Object(j.jsx)("img",{src:null!=n.photos.small?n.photos.small:b.a,className:p.a,width:100,height:100,alt:""})}),Object(j.jsx)("div",{children:n.followed?Object(j.jsx)("button",{disabled:e.loadFollowing.some((function(e){return e===n.id})),onClick:function(){e.onClickUnSubscribe(n.id)},children:"UnFollowed"}):Object(j.jsx)("button",{disabled:e.loadFollowing.some((function(e){return e===n.id})),onClick:function(){e.onClickSubscribe(n.id)},children:"Followed"})}),Object(j.jsx)("div",{children:n.name}),Object(j.jsx)("div",{children:n.id})]},n.id)}))]})},f=t(29),k=function(e){return e.usersPage.totalCountPages},O=function(e){return e.usersPage.currentPage},C=function(e){return e.usersPage.sizePage},w=function(e){return e.usersPage.isFetching},x=function(e){return e.usersPage.loadFollowing},F=function(e){Object(c.a)(t,e);var n=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=n.call.apply(n,[this].concat(c))).onClickPage=function(n){e.props.clickPage(e.props.sizePage,n)},e.onClickSubscribe=function(n){e.props.clickSubscribe(n)},e.onClickUnSubscribe=function(n){e.props.clickUnSubscribe(n)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.addUsers(this.props.currentPage,this.props.sizePage)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:this.props.isFetching?Object(f.a)():null}),Object(j.jsx)(P,{totalCountPages:this.props.totalCountPages,currentPage:this.props.currentPage,sizePage:this.props.sizePage,followToggle:this.props.followToggle,users:this.props.users,loadFollowing:this.props.loadFollowing,onClickPage:this.onClickPage,onClickSubscribe:this.onClickSubscribe,onClickUnSubscribe:this.onClickUnSubscribe,updateLoadFollowing:this.updateLoadFollowing})]})}}]),t}(a.a.Component),v={followToggle:u.g,addUser:u.a,updateTotalCountPages:u.k,updateCurrentPage:u.h,updateIsFetching:u.i,updateLoadFollowing:u.j,addUsers:u.b,clickPage:u.c,clickSubscribe:u.d,clickUnSubscribe:u.e};n.default=Object(l.b)((function(e){return{users:(n=e,n.usersPage.users),totalCountPages:k(e),currentPage:O(e),sizePage:C(e),isFetching:w(e),loadFollowing:x(e)};var n}),v)(F)}}]);
//# sourceMappingURL=4.6df0cc31.chunk.js.map