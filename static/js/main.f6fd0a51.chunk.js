(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){},36:function(t,e,a){t.exports=a(95)},42:function(t,e,a){},95:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),i=(a(42),a(7)),s=a(8),l=a(11),u=a(10),m=a(12),d=a(96),h=(a(16),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar clearfix"},r.a.createElement("div",{className:"logo"},r.a.createElement(d.a,{to:"/"},"Hacker News")))}}]),e}(n.Component)),p=a(97),f=a(99),E=a(100),v=a(21),b=a(13),O=a.n(b),j=a(15),y=a(22),g=a.n(y),k="https://hacker-news.firebaseio.com/v0/",w=function(t){return g.a.get("".concat(k).concat(t,".json")).then(function(t){return t.data}).catch(function(t){return t})},N=function(t){return g.a.get("".concat(k,"item/").concat(t,".json")).then(function(t){return t.data}).catch(function(t){return t})};function S(t){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(O.a.mark(function t(e){var a;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("".concat(k,"item/").concat(e,".json"));case 2:return a=t.sent,t.abrupt("return",Promise.resolve(a));case 4:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var L={TOP_STORIES:"topstories"},x=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).componentDidMount=function(){var t=a.props.data.kids;t?t.forEach(function(t){S(t).then(function(t){return a.setState({CommentChild:[].concat(Object(v.a)(a.state.CommentChild),[t.data])})}).catch(function(t){return t})}):a.setState({errors:"no CommentChild to display"})},a.state={CommentChild:[]},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.data;return r.a.createElement("div",null,r.a.createElement("li",{className:"comment-list",key:t.id,dangerouslySetInnerHTML:{__html:t.text}}),r.a.createElement("div",{className:"story-time"},"createdAt: ",new Date(t.time).toLocaleString()),this.state.CommentChild?this.state.CommentChild.map(function(t){return r.a.createElement("div",{className:"child-comment",key:t.id},r.a.createElement(e,{data:t,key:t.id}))}):r.a.createElement("div",{className:"progress progress-bar"},r.a.createElement("div",{className:"indeterminate"})))}}]),e}(n.Component),I=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={comments:[],errors:""},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.history.location.state.data.kids;e?e.forEach(function(e){S(e).then(function(e){return t.setState({comments:[].concat(Object(v.a)(t.state.comments),[e.data])})}).catch(function(t){return t})}):this.setState({errors:"no comments to display"})}},{key:"render",value:function(){var t=this.state,e=t.comments,a=t.errors;return r.a.createElement("div",{className:"container local-container list-container"},r.a.createElement("div",{className:"story-comment-title"},this.props.history.location.state.data.title),0!==e.length?r.a.createElement("ul",null,e.map(function(t){return r.a.createElement(x,{data:t,key:t.id})})):r.a.createElement("div",null," ",a))}}]),e}(n.Component),P={ROOT:"/",HOME:"/home/",ITEM:"/item/"},M=new(function(){function t(){Object(i.a)(this,t),this.authenticated=!1}return Object(s.a)(t,[{key:"login",value:function(t){this.authenticated=!0,t()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),t}()),T=function(t){return r.a.createElement("div",{className:"login-button"},r.a.createElement("h1",null,"Login Page"),r.a.createElement("button",{onClick:function(){M.login(function(){t.history.push(P.HOME)})}},"Login"))},D=a(34),H=function(){return r.a.createElement("div",{className:"spinner-container"},r.a.createElement(D.PropagateLoader,{color:"#4285F4"}))},R=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).componentDidMount=Object(j.a)(O.a.mark(function t(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a.props.id);case 2:e=t.sent,a.setState({data:e,idLoaded:!0});case 4:case"end":return t.stop()}},t,this)})),a.state={data:{},position:a.props.position,idLoaded:!1},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return this.state.idLoaded?r.a.createElement("div",{className:"post-item clearfix"},r.a.createElement("div",{className:"post-left left clearfix"},r.a.createElement("div",{className:"left post-position"},this.state.position,".")),r.a.createElement("div",{className:"left post-right clearfix"},r.a.createElement("div",{className:"post-top-section clearfix"},r.a.createElement("div",{className:"left post-title"},r.a.createElement("a",{href:this.state.data.url},this.state.data.title))),r.a.createElement("div",{className:"post-bottom-section clearfix"},r.a.createElement("div",{className:"post-points left"},this.state.data.score," points"),r.a.createElement("div",{className:"post-by left"},"By",r.a.createElement(d.a,{to:"#"}," ",this.state.data.by)),r.a.createElement("div",{className:"post-comment left"},r.a.createElement(d.a,{to:{pathname:"".concat(this.state.data.id),state:{data:this.state.data}}},this.state.data.descendants," comments"))))):r.a.createElement(H,null)}}]),e}(n.Component),_=function(t,e){return t+1+25*e},A=function(t,e){return t.slice(25*e,25*(e+1))},B=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).componentDidMount=Object(j.a)(O.a.mark(function e(){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(L.TOP_STORIES);case 2:a=e.sent,t.setState({allStoryIdList:a,showStoryIdList:A(a,0)});case 4:case"end":return e.stop()}},e,this)})),t.handleUpdate=function(e){var a=t.state.currentPage;a+=e,t.setState({currentPage:a},function(){t.setState({showStoryIdList:A(t.state.allStoryIdList,t.state.currentPage)})})},t.state={allStoryIdList:[],showStoryIdList:[],currentPage:0},t}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"pagination-btn "},r.a.createElement("button",{disabled:0===this.state.currentPage||this.state.currentPage<0,onClick:function(){return t.handleUpdate(-1)},className:"btn-left left "},"\u25c0"),r.a.createElement("span",{className:"page-number "},this.state.currentPage+1),r.a.createElement("button",{onClick:function(){return t.handleUpdate(1)},className:"btn-right right "},"\u25b6")),this.state.showStoryIdList.length?this.state.showStoryIdList.map(function(e,a){return r.a.createElement(R,{key:e,position:_(a,t.state.currentPage),id:e})}):r.a.createElement(H,null))}}]),e}(n.Component),U=a(35),J=a(98),W=function(t){var e=t.component,a=Object(U.a)(t,["component"]);return r.a.createElement(E.a,Object.assign({},a,{render:function(t){return M.isAuthenticated()?r.a.createElement(e,t):r.a.createElement(J.a,{to:{pathname:P.ROOT,state:{from:t.location}}})}}))},F=function(){return r.a.createElement(p.a,{basename:"/hacker-news"},r.a.createElement("div",{className:"main "},r.a.createElement(f.a,null,r.a.createElement(E.a,{exact:!0,path:P.ROOT,component:T}),r.a.createElement(W,{path:P.HOME,component:B}),r.a.createElement(W,{path:"/:id",component:function(t){return r.a.createElement(I,t)}}))))},$=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(h,null),r.a.createElement(F,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p.a,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.f6fd0a51.chunk.js.map