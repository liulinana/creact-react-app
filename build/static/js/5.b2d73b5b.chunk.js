(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{363:function(e,t){e.exports={"/frame/home":"\u9996\u9875","/frame/mockPage":"\u97f3\u4e50\u6a21\u5757","/frame/mockPage/mus":"\u97f3\u4e50\u7cfb\u5217","/frame/tool":"\u5de5\u5177","/frame/tool/tools":"\u5c0f\u5e94\u7528"}},364:function(e,t){e.exports={"/frame/home":"home","/frame/mockPage":"bars","/frame/tool":"tool"}},60:function(e,t,n){"use strict";n.r(t);var a=n(347),r=(n(106),n(142)),l=n.n(r),c=(n(94),n(74)),o=n.n(c),i=(n(348),n(387)),m=n.n(i),u=(n(107),n(143)),s=n.n(u),h=n(15),d=n(16),f=n(21),p=n(17),g=n(22),E=(n(351),n(383)),y=n.n(E),k=(n(354),n(367)),w=n.n(k),b=n(0),v=n.n(b),O=n(397),x=n(398),j=n(9),C=[{name:"\u9996\u9875",url:"frame/home",exact:!0,icon:"home",component:j.d},{name:"\u97f3\u4e50\u6a21\u5757",url:"frame/mockPage",exact:!0,icon:"bars",children:[{name:"\u97f3\u4e50\u7cfb\u5217",url:"frame/mockPage/mus",exact:!0,component:j.d}]},{name:"\u5de5\u5177\u6a21\u5757",url:"frame/tool",exact:!0,icon:"tool",children:[{name:"\u5c0f\u5e94\u7528",url:"frame/tool/tools"},{name:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668",url:"editor"},{name:"\u5f85\u529e\u4e8b\u9879",url:"todoList"}]},{name:"\u753b\u5eca\u6a21\u5757",url:"pic",icon:"edit",children:[{name:"\u65f6\u5149\u76f8\u7247",url:"album"},{name:"\u7011\u5e03\u6d41",url:"waterfall"}]},{name:"\u641c\u7d22\u6a21\u5757",url:"search",icon:"search",children:[{name:"\u641c\u7d22\u5f15\u64ce",url:"searchEngine"}]},{name:"\u5f00\u53d1\u6a21\u5757",url:"dev",icon:"apple-o",children:[{name:"\u66f4\u591a\u6a21\u5757\u5f00\u53d1\u4e2d",url:"todo"}]},{name:"\u9879\u76ee\u5730\u5740",url:"frame/follow",icon:"heart-o"}],S=(n(360),n(365)),L=n.n(S),I=n(396),P=n(363),J=n.n(P),N=n(364),U=n.n(N),D=Object(I.a)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e}),n=t.map(function(e,n){var a="/".concat(t.slice(0,n+1).join("/"));return v.a.createElement(L.a.Item,{key:a},v.a.createElement(x.a,{to:a},v.a.createElement("span",null,v.a.createElement(o.a,{type:U.a[a]}),v.a.createElement("span",null),J.a[a])))}),a=[v.a.createElement(L.a.Item,{key:"home"})].concat(n);return v.a.createElement("div",{className:"demo"},v.a.createElement(L.a,null,a))}),H=n(87),K=w.a.SubMenu,M=y.a.Header,T=y.a.Content,A=y.a.Sider;function R(e){return e.children&&e.children.length?e.children.map(function(e,t){return v.a.createElement(O.a,{path:"/".concat(e.url),exact:e.exact,component:e.component,key:t})}):v.a.createElement(O.a,{path:"/".concat(e.url),exact:e.exact,component:e.component})}var q=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={theme:"dark",current:"home",collapsed:!1},n.changeTheme=function(e){n.setState({theme:e?"dark":"light"})},n.handleClick=function(e,t){n.setState({current:e.key||t})},n.toggle=function(){n.setState({collapsed:!n.state.collapsed})},n.toLogin=function(){Object(H.d)(),n.props.history.push("/")},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){Object(H.b)()||this.props.history.push("/")}},{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(y.a,null,v.a.createElement(M,{stylename:"header"},v.a.createElement("div",null,v.a.createElement(l.a,null,v.a.createElement(s.a,{span:1},v.a.createElement("p",{style:{color:"white"}},"\u4e3b\u9898:")),v.a.createElement(s.a,{span:1},v.a.createElement(m.a,{checked:"dark"===this.state.theme,onChange:this.changeTheme,checkedChildren:"Dark",unCheckedChildren:"Light"})),v.a.createElement(s.a,{span:4},v.a.createElement(o.a,{stylename:"trigger",style:{color:"white",marginLeft:"10%"},type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),v.a.createElement("div",{onClick:this.toLogin,style:{marginLeft:"94%"}},v.a.createElement(x.a,{to:"#"},v.a.createElement("span",{style:{color:"white"}},"\u9000\u51fa\u767b\u5f55"),v.a.createElement(o.a,{type:"logout"})))))),v.a.createElement(y.a,null,v.a.createElement(A,{width:200,style:{background:"#fff"},trigger:null,collapsible:!0,collapsed:this.state.collapsed},v.a.createElement(w.a,{mode:"inline",style:{height:670,borderRight:0,overflow:"scroll"},theme:this.state.theme,defaultOpenKeys:[""],selectedKeys:[this.state.current],onClick:this.handleClick},C.map(function(e){return e.children&&e.children.length?v.a.createElement(K,{key:e.url,title:v.a.createElement("span",null,v.a.createElement(o.a,{type:e.icon}),v.a.createElement("span",null,e.name))},e.children.map(function(e){return v.a.createElement(w.a.Item,{key:e.url},v.a.createElement(x.a,{to:"/".concat(e.url)},e.name))})):v.a.createElement(w.a.Item,{key:e.url},v.a.createElement(x.a,{to:"/".concat(e.url)},v.a.createElement(o.a,{type:e.icon}),v.a.createElement("span",{stylename:"nav-text"},e.name)))}))),v.a.createElement(y.a,{style:{padding:"0 24px 24px"}},v.a.createElement("div",{style:{margin:"15px 0"}},v.a.createElement(D,null)),v.a.createElement(T,{style:{background:"#fff",padding:24,margin:0,minHeight:280,overflow:"scroll",position:"relative"}},v.a.createElement("div",null,C.map(function(e,t){return v.a.createElement(R,Object(a.a)({key:t},e))})))))))}}]),t}(b.Component);t.default=q},87:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i});var a=n(24),r=n(396),l=function(e){return function(t){return e?Object(r.a)(Object(a.b)(e)(t)):Object(r.a)(t)}};function c(){return!!function(){var e=window.sessionStorage.getItem("currentLoginUser");return e?JSON.parse(e):null}()}function o(e){window.sessionStorage.setItem("currentLoginUser",JSON.stringify(e))}function i(){return-1!==window.location.pathname.indexOf("/")&&window.sessionStorage.removeItem("currentLoginUser"),window.sessionStorage.setItem("last-href",window.location.href),window.location.href="/",null}}}]);
//# sourceMappingURL=5.b2d73b5b.chunk.js.map