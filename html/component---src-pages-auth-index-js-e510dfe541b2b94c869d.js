(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{276:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),o=a.n(n),r=a(273),l=a(274),i=a(39),c=a(183),s=a(98),m=a(281),u=a(282),p=a(279),g=a(272),h=a(271),d=a(275),f=a.n(d);var w=null;"undefined"!=typeof window&&(w=a(271).Auth);var b=i.c.div.withConfig({displayName:"auth__MainWrapper",componentId:"sc-1ob68al-0"})(["display:block;max-width:560px;margin:0 auto;margin-top:48px;h1,h2{display:block;text-align:center;}h2{font-weight:400;font-size:1.2em;}.top-logos{display:block;margin-left:auto;margin-right:auto;width:60%;max-width:400px;}"]),E=i.c.form.withConfig({displayName:"auth__Form",componentId:"sc-1ob68al-1"})(["background-color:#f2f2f2;padding:40px;margin-top:40px;.form-group{margin-bottom:32px;}."," label.","{margin-bottom:8px;}"],s.a.FORM_GROUP,s.a.LABEL),y=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={username:"",password:""},t._onChange=function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))},t._onSubmit=function(e){e.preventDefault(),h.AxiosClient.get("/login",{params:{username:t.state.username,password:t.state.password}}).then((function(e){w&&w.signin(e.data.sessionToken),setTimeout(Object(l.a)("/auth/licence_generator"),2e3)})).catch((function(e){console.log(e)}))},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(c.default,null,o.a.createElement(b,null,o.a.createElement("div",null,o.a.createElement(r.Helmet,null,o.a.createElement("title",null,"Licence Generator - FUN with Ruby Rei"),o.a.createElement("meta",{name:"description",content:"Licence Generator for FUN with Ruby Rei"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("link",{rel:"canonical",href:"https://fun.rubyrei.com/auth"}))),o.a.createElement(g.a,null,o.a.createElement("p",null,o.a.createElement("img",{className:"top-logos",src:f.a,alt:"FUN with Ruby Rei and Cambridge Exam Preparation logos"})),o.a.createElement("h1",null,"Licence Generator Login"),o.a.createElement(E,{onSubmit:this._onSubmit},o.a.createElement(m.a,{className:"form-group",label:"Username"},o.a.createElement(u.a,{large:!0,name:"username",placeholder:"Your username",onChange:this._onChange})),o.a.createElement(m.a,{className:"form-group",label:"Password"},o.a.createElement(u.a,{large:!0,type:"password",name:"password",placeholder:"Your password",onChange:this._onChange})),o.a.createElement(p.a,{large:!0,intent:"success",type:"submit",text:"Sign in"})))))},n}(o.a.Component);t.default=y}}]);
//# sourceMappingURL=component---src-pages-auth-index-js-e510dfe541b2b94c869d.js.map