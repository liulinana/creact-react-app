(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,t,a){"use strict";a(110);var r=a(116),n=a.n(r),s=a(11),o=a(113),i=a.n(o);i.a.defaults.baseURL="";var l={get:"",post:"",delete:"",put:"",patch:"",head:"",request:""},c={"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,PUT,DELETE,OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"},u=function(e,t,a){return new Promise(function(r,o){i()({url:t,method:e,headers:Object(s.a)({},c),data:a}).then(function(e){r(e)}).catch(function(e){n.a.error(e.message,3),o(e)})})};l.get=function(e,t){var a=JSON.stringify(t);return u("get",e,a)},l.post=function(e,t){var a=JSON.stringify(t);return u("post",e,a)},t.a=l},195:function(e,t,a){},197:function(e,t,a){e.exports=a.p+"static/media/d9c59dcb17dacafac0aa06510ea23c52.78fc9967.jpg"},58:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return x});a(93);var r,n=a(103),s=a.n(n),o=(a(106),a(142)),i=a.n(o),l=(a(107),a(143)),c=a.n(l),u=(a(187),a(337)),m=a.n(u),d=(a(94),a(74)),g=a.n(d),p=(a(110),a(116)),f=a.n(p),w=a(15),h=a(16),E=a(21),b=a(17),y=a(22),v=(a(111),a(133)),O=a.n(v),P=a(0),A=a.n(P),S=(a(195),a(87)),k=a(197),j=a.n(k),N=a(112),L=O.a.Item,T={background:"url(".concat(j.a,")"),backgroundRepeat:"noRepeat",backgroundSize:"cover",height:document.body.offsetHeight},x=O.a.create()(r=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={status:"Log in",register:"register now!",forgotPassword:"Forgot password",msgPassword:"Password"},a.handleSubmit=function(e){e.preventDefault();var t=a.props.form.getFieldsValue(),r=t.loginName,n=t.passwd,s=t.email,o=t.nickname,i=a.state.status,l={loginname:r,loginpw:n,email:s,nickname:o},c={loginName:r,passwd:n,email:s,nickname:o};a.props.form.validateFields(function(e){e||("Log in"===a.state.status&&Object(S.c)(c),"Log in"===i?N.a.post("/princess/login",c).then(function(e){}):"register now!"===i?N.a.post("/princess/register",l).then(function(e){}):N.a.get("/princess/getuserinfo?loginName=".concat(r,"&passwd=").concat(n,"&email=").concat(s,"&nickname=").concat(o)).then(function(e){}),"123"===r&&"123"===n?Object(S.b)()&&(a.props.history.push("/read"),f.a.success("\u767b\u9646\u6210\u529f!")):"123"===r&&"123"!==n?f.a.error("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff01"):f.a.error("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7528\u6237\u540d\u5b57\uff01"))})},a.handelRegister=function(){a.props.form.resetFields(),"register now!"===a.state.register?a.setState({status:"register",register:"Log in",msgPassword:"Password"}):a.setState({status:"Log in",register:"register now!",msgPassword:"Password",forgotPassword:"Forgot password"})},a.handelPassword=function(){a.props.form.resetFields(),a.setState({status:"reset password",register:"Log in",forgotPassword:"",msgPassword:"newPassword"})},a.regType=function(e,t,a){!t||""===t||"email"!==e.field||/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(t)?a():a("\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e!")},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.status,r=t.register,n=t.forgotPassword,o=t.msgPassword;return A.a.createElement("div",{style:T},A.a.createElement("div",{className:"box"},A.a.createElement("p",null,"\u5c0f\u4ed9\u5973\u624d\u80fd\u767b\u9646\u7684\u7cfb\u7edf"),A.a.createElement("br",null),A.a.createElement("div",{className:"loginWrap"},A.a.createElement(O.a,{className:"login-form",onSubmit:this.handleSubmit},A.a.createElement(L,null,e("loginName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]})(A.a.createElement(m.a,{prefix:A.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),A.a.createElement(L,null,e("passwd",{rules:[{required:!0,message:"reset password"===a?"\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801!":"\u8bf7\u8f93\u5165\u5bc6\u7801!"}]})(A.a.createElement(m.a,{prefix:A.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:o}))),"Log in"===a?null:"register"!==a?A.a.createElement(L,null,e("email",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1!"},{validator:this.regType}]})(A.a.createElement(m.a,{prefix:A.a.createElement(g.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),type:"email",placeholder:"Email"}))):A.a.createElement("div",null,A.a.createElement(L,null,e("email",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1!"},{validator:this.regType}]})(A.a.createElement(m.a,{prefix:A.a.createElement(g.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),A.a.createElement(L,null,e("nickname",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6635\u79f0!"},{validator:this.regType}]})(A.a.createElement(m.a,{prefix:A.a.createElement(g.a,{type:"heart-o",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"nickname"})))),A.a.createElement(i.a,null,A.a.createElement(c.a,{span:12,style:{textAlign:"left"}},A.a.createElement("a",{onClick:this.handelPassword},n)),A.a.createElement(c.a,{span:12,style:{textAlign:"right"}},A.a.createElement("a",{onClick:this.handelRegister},r))),A.a.createElement("br",null),A.a.createElement(i.a,null,A.a.createElement(s.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{width:"100%"}},a))))))}}]),t}(P.Component))||r},87:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return l});var r=a(24),n=a(396),s=function(e){return function(t){return e?Object(n.a)(Object(r.b)(e)(t)):Object(n.a)(t)}};function o(){return!!function(){var e=window.sessionStorage.getItem("currentLoginUser");return e?JSON.parse(e):null}()}function i(e){window.sessionStorage.setItem("currentLoginUser",JSON.stringify(e))}function l(){return-1!==window.location.pathname.indexOf("/")&&window.sessionStorage.removeItem("currentLoginUser"),window.sessionStorage.setItem("last-href",window.location.href),window.location.href="/",null}}}]);
//# sourceMappingURL=4.bc042d78.chunk.js.map