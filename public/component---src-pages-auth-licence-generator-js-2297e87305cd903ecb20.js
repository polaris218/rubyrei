(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{278:function(e,t,n){"use strict";n.r(t);n(35),n(13),n(14),n(3),n(283),n(100);var a=n(0),r=n.n(a),o=n(274),i=n(39),l=n(183),s=n(98),c=n(281),u=(n(34),n(131),n(4)),p=n(30),d=n.n(p),m=n(1),h=n(63),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u.b(t,e),t.prototype.render=function(){var e,t=this.props,n=t.className,r=t.disabled,o=t.elementRef,i=t.fill,l=t.iconProps,s=t.large,c=t.minimal,p=t.options,f=void 0===p?[]:p,E=u.c(t,["className","disabled","elementRef","fill","iconProps","large","minimal","options"]),v=d()(m.HTML_SELECT,((e={})[m.DISABLED]=r,e[m.FILL]=i,e[m.LARGE]=s,e[m.MINIMAL]=c,e),n),g=f.map((function(e){var t="object"==typeof e?e:{value:e};return a.createElement("option",u.a({},t,{key:t.value,children:t.label||t.value}))}));return a.createElement("div",{className:v},a.createElement("select",u.a({disabled:r,ref:o},E,{multiple:!1}),g,E.children),a.createElement(h.a,u.a({icon:"double-caret-vertical"},l)))},t}(a.PureComponent),E=n(282),v=(n(36),n(82)),g=n(81),y=n(18),C=n(21),N=function(e){var t,n=e.alignIndicator,r=e.children,o=e.className,i=e.indicatorChildren,l=e.inline,s=e.inputRef,c=e.label,p=e.labelElement,h=e.large,f=e.style,E=e.type,v=e.typeClassName,g=e.tagName,y=void 0===g?"label":g,C=u.c(e,["alignIndicator","children","className","indicatorChildren","inline","inputRef","label","labelElement","large","style","type","typeClassName","tagName"]),N=d()(m.CONTROL,v,((t={})[m.DISABLED]=C.disabled,t[m.INLINE]=l,t[m.LARGE]=h,t),m.alignmentClass(n),o);return a.createElement(y,{className:N,style:f},a.createElement("input",u.a({},C,{ref:s,type:E})),a.createElement("span",{className:m.CONTROL_INDICATOR},i),c,p,r)},b=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}u.b(t,e),t.prototype.render=function(){var e=this.props,t=e.innerLabelChecked,n=e.innerLabel,r=u.c(e,["innerLabelChecked","innerLabel"]),o=n||t?[a.createElement("div",{key:"checked",className:m.CONTROL_INDICATOR_CHILD},a.createElement("div",{className:m.SWITCH_INNER_TEXT},t||n)),a.createElement("div",{key:"unchecked",className:m.CONTROL_INDICATOR_CHILD},a.createElement("div",{className:m.SWITCH_INNER_TEXT},n))]:null;return a.createElement(N,u.a({},r,{type:"checkbox",typeClassName:m.SWITCH,indicatorChildren:o}))},t.displayName=y.a+".Switch"}(a.PureComponent),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u.b(t,e),t.prototype.render=function(){return a.createElement(N,u.a({},this.props,{type:"radio",typeClassName:m.RADIO}))},t.displayName=y.a+".Radio",t}(a.PureComponent)),O=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={indeterminate:t.props.indeterminate||t.props.defaultIndeterminate||!1},t.handleChange=function(e){var n=e.target.indeterminate;null==t.props.indeterminate&&t.setState({indeterminate:n}),Object(C.f)(t.props.onChange,e)},t.handleInputRef=function(e){t.input=e,Object(C.f)(t.props.inputRef,e)},t}u.b(t,e),t.prototype.render=function(){var e=this.props,t=(e.defaultIndeterminate,e.indeterminate,u.c(e,["defaultIndeterminate","indeterminate"]));return a.createElement(N,u.a({},t,{inputRef:this.handleInputRef,onChange:this.handleChange,type:"checkbox",typeClassName:m.CHECKBOX}))},t.prototype.componentWillReceiveProps=function(e){var t=e.indeterminate;null!=t&&this.setState({indeterminate:t})},t.prototype.componentDidMount=function(){this.updateIndeterminate()},t.prototype.componentDidUpdate=function(){this.updateIndeterminate()},t.prototype.updateIndeterminate=function(){null!=this.input&&(this.input.indeterminate=this.state.indeterminate)},t.displayName=y.a+".Checkbox"}(a.PureComponent),0);var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.autoGroupName=x.displayName+"-"+O++,t}return u.b(t,e),t.prototype.render=function(){var e=this.props.label;return a.createElement("div",{className:this.props.className},null==e?null:a.createElement("label",{className:m.LABEL},e),Array.isArray(this.props.options)?this.renderOptions():this.renderChildren())},t.prototype.validateProps=function(){null!=this.props.children&&null!=this.props.options&&console.warn(g.e)},t.prototype.renderChildren=function(){var e=this;return a.Children.map(this.props.children,(function(t){return Object(C.b)(t,b)?a.cloneElement(t,e.getRadioProps(t.props)):t}))},t.prototype.renderOptions=function(){var e=this;return this.props.options.map((function(t){return a.createElement(b,u.a({},e.getRadioProps(t),{key:t.value,labelElement:t.label||t.value}))}))},t.prototype.getRadioProps=function(e){var t=this.props.name,n=e.className,a=e.disabled,r=e.value;return{checked:r===this.props.selectedValue,className:n,disabled:a||this.props.disabled,inline:this.props.inline,name:null==t?this.autoGroupName:t,onChange:this.props.onChange,value:r}},t.displayName=y.a+".RadioGroup",t}(v.a),_=n(279);function L(e,t){return function(n){var r=n.className,o=n.elementRef,i=u.c(n,["className","elementRef"]);return a.createElement(e,u.a({},i,{className:d()(t,r),ref:o}))}}L("h1",m.HEADING),L("h2",m.HEADING),L("h3",m.HEADING);var S=L("h4",m.HEADING),T=(L("h5",m.HEADING),L("h6",m.HEADING),L("blockquote",m.BLOCKQUOTE),L("code",m.CODE),L("pre",m.CODE_BLOCK),L("label",m.LABEL),L("ol",m.LIST),L("ul",m.LIST),n(66),n(80),n(9),n(289)),k=n(99),D=n(76),I=(n(31),!Object(C.c)(k.createPortal)),R={blueprintPortalClassName:function(e,t){if(null!=e[t]&&"string"!=typeof e[t])return new Error(g.d)}},w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasMounted:!1},t}return u.b(t,e),t.prototype.render=function(){return I||"undefined"==typeof document||!this.state.hasMounted?null:k.createPortal(this.props.children,this.portalElement)},t.prototype.componentDidMount=function(){this.props.container&&(this.portalElement=this.createContainerElement(),this.props.container.appendChild(this.portalElement),this.setState({hasMounted:!0},this.props.onChildrenMount),I&&this.unstableRenderNoPortal())},t.prototype.componentDidUpdate=function(e){null!=this.portalElement&&e.className!==this.props.className&&(this.portalElement.classList.remove(e.className),P(this.portalElement.classList,this.props.className)),I&&this.unstableRenderNoPortal()},t.prototype.componentWillUnmount=function(){null!=this.portalElement&&(I&&k.unmountComponentAtNode(this.portalElement),this.portalElement.remove())},t.prototype.createContainerElement=function(){var e=document.createElement("div");return e.classList.add(m.PORTAL),P(e.classList,this.props.className),null!=this.context&&P(e.classList,this.context.blueprintPortalClassName),e},t.prototype.unstableRenderNoPortal=function(){k.unstable_renderSubtreeIntoContainer(this,a.createElement("div",null,this.props.children),this.portalElement)},t.displayName=y.a+".Portal",t.contextTypes=R,t.defaultProps={container:"undefined"!=typeof document?document.body:null},t}(a.Component);function P(e,t){null!=t&&""!==t&&e.add.apply(e,t.split(" "))}var A=function(e){function t(n,r){var o=e.call(this,n,r)||this;return o.refHandlers={container:function(e){return o.containerElement=Object(k.findDOMNode)(e)}},o.maybeRenderChild=function(e){if(null==e)return null;var t="object"==typeof e?a.cloneElement(e,{className:d()(e.props.className,m.OVERLAY_CONTENT),tabIndex:0}):a.createElement("span",{className:m.OVERLAY_CONTENT},e),n=o.props,r=n.onOpening,i=n.onOpened,l=n.onClosing,s=n.onClosed,c=n.transitionDuration,u=n.transitionName;return a.createElement(T.CSSTransition,{classNames:u,onEntering:r,onEntered:i,onExiting:l,onExited:s,timeout:c},t)},o.handleBackdropMouseDown=function(e){var t=o.props,n=t.backdropProps,a=t.canOutsideClickClose,r=t.enforceFocus,i=t.onClose;a&&Object(C.f)(i,e),r&&o.bringFocusInsideOverlay(),Object(C.f)(n.onMouseDown,e)},o.handleDocumentClick=function(e){var n=o.props,a=n.canOutsideClickClose,r=n.isOpen,i=n.onClose,l=e.target,s=t.openStack.indexOf(o),c=t.openStack.slice(s).some((function(e){var t=e.containerElement;return t&&t.contains(l)&&!t.isSameNode(l)}));r&&a&&!c&&Object(C.f)(i,e)},o.handleDocumentFocus=function(e){o.props.enforceFocus&&null!=o.containerElement&&!o.containerElement.contains(e.target)&&(e.preventDefault(),e.stopImmediatePropagation(),o.bringFocusInsideOverlay())},o.handleKeyDown=function(e){var t=o.props,n=t.canEscapeKeyClose,a=t.onClose;e.which===D.a&&n&&(Object(C.f)(a,e),e.preventDefault())},o.state={hasEverOpened:n.isOpen},o}return u.b(t,e),t.prototype.render=function(){var e;if(this.props.lazy&&!this.state.hasEverOpened)return null;var t=this.props,n=t.children,r=t.className,o=t.usePortal,i=t.isOpen,l=i?a.Children.map(n,this.maybeRenderChild):[];l.unshift(this.maybeRenderBackdrop());var s=d()(m.OVERLAY,((e={})[m.OVERLAY_OPEN]=i,e[m.OVERLAY_INLINE]=!o,e),r),c=a.createElement(T.TransitionGroup,{appear:!0,className:s,component:"div",onKeyDown:this.handleKeyDown,ref:this.refHandlers.container},l);return o?a.createElement(w,{className:this.props.portalClassName,container:this.props.portalContainer},c):c},t.prototype.componentDidMount=function(){this.props.isOpen&&this.overlayWillOpen()},t.prototype.componentWillReceiveProps=function(e){this.setState({hasEverOpened:this.state.hasEverOpened||e.isOpen})},t.prototype.componentDidUpdate=function(e){e.isOpen&&!this.props.isOpen?this.overlayWillClose():!e.isOpen&&this.props.isOpen&&this.overlayWillOpen()},t.prototype.componentWillUnmount=function(){this.overlayWillClose()},t.prototype.bringFocusInsideOverlay=function(){var e=this;return requestAnimationFrame((function(){if(null!=e.containerElement&&null!=document.activeElement&&e.props.isOpen&&!e.containerElement.contains(document.activeElement)){var t=e.containerElement.querySelector("[autofocus]"),n=e.containerElement.querySelector("[tabindex]");null!=t?t.focus():null!=n&&n.focus()}}))},t.prototype.maybeRenderBackdrop=function(){var e=this.props,t=e.backdropClassName,n=e.backdropProps,r=e.hasBackdrop,o=e.isOpen,i=e.transitionDuration,l=e.transitionName;return r&&o?a.createElement(T.CSSTransition,{classNames:l,key:"__backdrop",timeout:i},a.createElement("div",u.a({},n,{className:d()(m.OVERLAY_BACKDROP,t,n.className),onMouseDown:this.handleBackdropMouseDown,tabIndex:this.props.canOutsideClickClose?0:null}))):null},t.prototype.overlayWillClose=function(){document.removeEventListener("focus",this.handleDocumentFocus,!0),document.removeEventListener("mousedown",this.handleDocumentClick);var e=t.openStack,n=e.indexOf(this);if(-1!==n){if(e.splice(n,1),e.length>0){var a=t.getLastOpened();a.props.enforceFocus&&document.addEventListener("focus",a.handleDocumentFocus,!0)}0===e.filter((function(e){return e.props.usePortal&&e.props.hasBackdrop})).length&&document.body.classList.remove(m.OVERLAY_OPEN)}},t.prototype.overlayWillOpen=function(){var e=t.openStack;e.length>0&&document.removeEventListener("focus",t.getLastOpened().handleDocumentFocus,!0),e.push(this),this.props.autoFocus&&this.bringFocusInsideOverlay(),this.props.enforceFocus&&document.addEventListener("focus",this.handleDocumentFocus,!0),this.props.canOutsideClickClose&&!this.props.hasBackdrop&&document.addEventListener("mousedown",this.handleDocumentClick),this.props.hasBackdrop&&this.props.usePortal&&document.body.classList.add(m.OVERLAY_OPEN)},t.displayName=y.a+".Overlay",t.defaultProps={autoFocus:!0,backdropProps:{},canEscapeKeyClose:!0,canOutsideClickClose:!0,enforceFocus:!0,hasBackdrop:!0,isOpen:!1,lazy:!0,transitionDuration:300,transitionName:m.OVERLAY,usePortal:!0},t.openStack=[],t.getLastOpened=function(){return t.openStack[t.openStack.length-1]},t}(a.PureComponent),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u.b(t,e),t.prototype.render=function(){return a.createElement(A,u.a({},this.props,{className:m.OVERLAY_SCROLL_CONTAINER,hasBackdrop:!0}),a.createElement("div",{className:m.DIALOG_CONTAINER},a.createElement("div",{className:d()(m.DIALOG,this.props.className),style:this.props.style},this.maybeRenderHeader(),this.props.children)))},t.prototype.validateProps=function(e){null==e.title&&(null!=e.icon&&console.warn(g.c),null!=e.isCloseButtonShown&&console.warn(g.b))},t.prototype.maybeRenderCloseButton=function(){return!1!==this.props.isCloseButtonShown?a.createElement(_.a,{"aria-label":"Close",className:m.DIALOG_CLOSE_BUTTON,icon:a.createElement(h.a,{icon:"small-cross",iconSize:h.a.SIZE_LARGE}),minimal:!0,onClick:this.props.onClose}):void 0},t.prototype.maybeRenderHeader=function(){var e=this.props,t=e.icon,n=e.title;if(null!=n)return a.createElement("div",{className:m.DIALOG_HEADER},a.createElement(h.a,{icon:t,iconSize:h.a.SIZE_LARGE}),a.createElement(S,null,n),this.maybeRenderCloseButton())},t.defaultProps={canOutsideClickClose:!0,isOpen:!1},t.displayName=y.a+".Dialog",t}(v.a),G=n(180),j=n(272),F=n(271),B=n(275),U=n.n(B);var V=null;"undefined"!=typeof window&&(V=n(271).Auth);var H=new Date,W=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),Y=RegExp(/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/i),K=RegExp(/^(?=.*\d)(?=.*[1-9]).{1,10}$/),X=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},z=function(e){var t=0;return Object.values(e).forEach((function(e){return e.length>0&&(t+=1)})),t},$=["languagePair","purchaserSchool","numberOfLicenses","licenceType","purchaserEmail","sellerEmail"],q=i.c.div.withConfig({displayName:"licence_generator__Error",componentId:"sc-1wnxflw-0"})(["color:#db2269;font-size:0.75em;margin-top:7px;"]),J=i.c.span.withConfig({displayName:"licence_generator__P",componentId:"sc-1wnxflw-1"})(["margin-left:10px;"]),Z=i.c.div.withConfig({displayName:"licence_generator__MainWrapper",componentId:"sc-1wnxflw-2"})(["display:block;max-width:560px;margin:0 auto;margin-top:48px;h1,h2{display:block;text-align:center;}h2{font-weight:400;font-size:1.2em;}.top-logos{display:block;margin-left:auto;margin-right:auto;width:60%;max-width:400px;}"]),Q=i.c.form.withConfig({displayName:"licence_generator__Form",componentId:"sc-1wnxflw-3"})(["background-color:#f2f2f2;padding:40px;margin-top:40px;.form-group{margin-bottom:32px;}."," label.","{margin-bottom:8px;}"],s.a.FORM_GROUP,s.a.LABEL),ee=i.c.div.withConfig({displayName:"licence_generator__AccountToolbar",componentId:"sc-1wnxflw-4"})(["display:block;position:absolute;top:24px;right:40px;text-align:right;width:200px;height:56px;a{text-decoration:underline;}"]),te=i.c.div.withConfig({displayName:"licence_generator__CompletedMessageBar",componentId:"sc-1wnxflw-5"})(["display:block;color:##182026;background-color:#f2f2f2;padding:24px;a{color:#0A6640;&:hover{text-decoration:underline}}"]),ne={LALEN:"Mexico",SPLEN:"Spain",TULEN:"Turkey"},ae=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).form=r.a.createRef(),t.state={confirmOpen:!1,isLoading:!1,completed:!1,formValid:!1,errorCount:null,isGenerate:!1,licenceType:"",errors:{languagePair:"",purchaserSchool:"",numberOfLicenses:"",licenceType:"",purchaserEmail:"",sellerEmail:""}},t._onChange=function(e,n){var a,r=e.target,o=r.name,i=r.value,l=$.indexOf(o);3!=l&&(t.form.current[l>3?l+1:l].value=i);var s=t.state.errors;switch(o){case"languagePair":s.languagePair=i.length>6?"Please select a country.":"";break;case"purchaserSchool":s.purchaserSchool=i.length<1?"Please enter a school name.":"";break;case"numberOfLicenses":s.numberOfLicenses=K.test(i)?i>250?"You can create a maximum of 250 logins at one time.":"":"Please enter a valid number between 1 - 250.";break;case"licenceType":s.licenceType=i.length<1?"Please select a licence type":"";break;case"purchaserEmail":s.purchaserEmail=Y.test(i)?"":"Email is not valid!";break;case"sellerEmail":s.sellerEmail=W.test(i)?"":"Email is not valid!"}t.setState(((a={errors:s})[o]=i,a.isGenerate=!1,a)),null!==z(s)&&X(s)&&n&&l+1==6&&t.setState({confirmOpen:!0})},t._onSubmit=function(e){e.preventDefault(),$.map((function(e,n){3==n?t._onChange({target:{name:e,value:t.state[e]}},!0):t._onChange({target:{name:e,value:t.form.current[n>3?n+1:n].value}},!0)})),t.setState({formValid:X(t.state.errors),errorCount:z(t.state.errors),isGenerate:!0})},t._onCancelGeneration=function(e){e.preventDefault(),t.setState({confirmOpen:!1})},t._onConfirmGeneration=function(e){e.preventDefault(),t.setState({isLoading:!0});var n={paymentReference:t.state.purchaserSchool,paymentSource:"",chargeId:"",purchaseDateMS:H.getTime(),gameId:"180131",productType:"standard",licenseType:t.state.licenceType,productDetail:{languagePair:t.state.languagePair},numberOfLicenses:parseInt(t.state.numberOfLicenses),purchaserEmail:t.state.purchaserEmail,purchaserFirstName:"",purchaserLastName:"",purchaserPhoneNumber:"",purchaserPosition:"BD",purchaserSchool:t.state.purchaserSchool,sellerEmail:t.state.sellerEmail};F.AxiosClient.post("/functions/deliverProduct",n,{headers:{"X-Parse-Session-Token":V&&V.isAuthenticated()}}).then((function(e){t.setState({isLoading:!1,confirmOpen:!1,completed:!0})})).catch((function(e){console.log(e)}))},t._onRestore=function(){"undefined"!=typeof window&&(window.location.href="/auth/licence_generator/")},t._onSignout=function(e){e.preventDefault(),V&&(V.signout(),setTimeout((function(){Object(o.a)("/auth")}),1e3))},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.state,t=e.errors,n=e.formValid;return V&&!V.isAuthenticated()?(Object(o.a)("/auth"),r.a.createElement("div",null)):r.a.createElement(l.default,null,r.a.createElement(Z,null,r.a.createElement(ee,null,r.a.createElement("a",{onClick:this._onSignout},"Log out")),r.a.createElement(j.a,null,r.a.createElement("p",null,r.a.createElement("img",{className:"top-logos",src:U.a,alt:"FUN with Ruby Rei and Cambridge Exam Preparation logos"})),r.a.createElement("h1",null,"Licence Generation Form"),this.state.completed&&r.a.createElement(te,null,r.a.createElement("p",null,"LICENCES GENERATED SUCCESSFULLY."),r.a.createElement("br",null),r.a.createElement("p",null,"The licences have been sent to the email addresses you provided."),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h3",null,r.a.createElement("b",null,"What would you like to do next?")),r.a.createElement("a",{onClick:this._onRestore},"Generate a new set of licences"),"  |  ",r.a.createElement("a",{onClick:this._onSignout},"Log out"))),!this.state.completed&&r.a.createElement(Q,{onSubmit:this._onSubmit,ref:this.form},r.a.createElement(c.a,{className:"form-group",label:"Which country are you in?"},r.a.createElement(f,{name:"languagePair",ref:this.languagePair,onChange:this._onChange},r.a.createElement("option",null,"Choose a country..."),r.a.createElement("option",{value:"LALEN"},"Mexico"),r.a.createElement("option",{value:"SPLEN"},"Spain"),r.a.createElement("option",{value:"TULEN"},"Turkey")),t.languagePair.length>0&&r.a.createElement(q,null,t.languagePair)),r.a.createElement(c.a,{className:"form-group",label:"School name"},r.a.createElement(E.a,{large:!0,placeholder:"e.g. Cambridge School",name:"purchaserSchool",onBlur:this._onChange}),t.purchaserSchool.length>0&&r.a.createElement(q,null,t.purchaserSchool)),r.a.createElement(c.a,{className:"form-group",label:"Number of logins"},r.a.createElement(E.a,{large:!0,placeholder:"e.g. 64",name:"numberOfLicenses",onBlur:this._onChange}),t.numberOfLicenses.length>0&&r.a.createElement(q,null,t.numberOfLicenses)),r.a.createElement(x,{inline:!0,className:"form-group",label:"Licence type",name:"licenceType",onChange:this._onChange,selectedValue:this.state.licenceType},r.a.createElement(b,{label:"Trial version",value:"demo_v2"}),r.a.createElement(b,{label:"Full version",value:"demo_v1"}),t.licenceType.length>0&&r.a.createElement(q,null,t.licenceType)),r.a.createElement(c.a,{className:"form-group",label:"Teacher or school email address"},r.a.createElement(E.a,{large:!0,placeholder:"e.g. teacher@school.com",name:"purchaserEmail",onBlur:this._onChange}),t.purchaserEmail.length>0&&r.a.createElement(q,null,t.purchaserEmail)),r.a.createElement(c.a,{className:"form-group",label:"Your email address"},r.a.createElement(E.a,{large:!0,placeholder:"e.g. salesrep@acmecorp.com",type:"email",name:"sellerEmail",onBlur:this._onChange}),t.sellerEmail.length>0&&r.a.createElement(q,null,t.sellerEmail)),r.a.createElement(_.a,{large:!0,intent:"success",text:"Generate",type:"submit"}),null!==this.state.errorCount&&this.state.isGenerate?r.a.createElement(J,null,"Form is ",n?"valid ✅":"invalid ❌"):""))),r.a.createElement(M,{onClose:this._onCancelGeneration,title:"Confirm your licence details",isOpen:this.state.confirmOpen,canEscapeKeyClose:!1},r.a.createElement("div",{className:s.a.DIALOG_BODY},r.a.createElement("p",null,r.a.createElement("span",null,"Country: "),ne[this.state.languagePair]),r.a.createElement("p",null,r.a.createElement("span",null,"School name: "),this.state.purchaserSchool),r.a.createElement("p",null,r.a.createElement("span",null,"Number of licences: "),this.state.numberOfLicenses),r.a.createElement("p",null,r.a.createElement("span",null,"Licence type: "),"demo_v2"===this.state.licenceType?"Trial":"Full"),r.a.createElement("p",null,r.a.createElement("span",null,"Teacher/school email address: "),this.state.purchaserEmail),r.a.createElement("p",null,r.a.createElement("span",null,"Your email address: "),this.state.sellerEmail)),r.a.createElement("div",{className:s.a.DIALOG_FOOTER},r.a.createElement("div",{className:s.a.DIALOG_FOOTER_ACTIONS},r.a.createElement(_.a,{disabled:this.state.isLoading,onClick:this._onCancelGeneration},"Cancel"),r.a.createElement(_.a,{intent:"success",disabled:this.state.isLoading,onClick:this._onConfirmGeneration},this.state.isLoading?r.a.createElement(G.a,{size:16}):"Confirm and send licences")))))},a}(r.a.Component);t.default=ae},283:function(e,t,n){var a=n(2),r=n(288)(!1);a(a.S,"Object",{values:function(e){return r(e)}})},284:function(e,t,n){"use strict";n(57),n(9),n(13),n(14),n(3),n(22),n(40),t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(58)),r=l(n(0)),o=l(n(99)),i=n(128);n(285);function l(e){return e&&e.__esModule?e:{default:e}}var s="unmounted";t.UNMOUNTED=s;var c="exited";t.EXITED=c;var u="entering";t.ENTERING=u;var p="entered";t.ENTERED=p;t.EXITING="exiting";var d=function(e){var t,n;function a(t,n){var a;a=e.call(this,t,n)||this;var r,o=n.transitionGroup,i=o&&!o.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=c,a.appearStatus=u):r=p:r=t.unmountOnExit||t.mountOnEnter?s:c,a.state={status:r},a.nextCallback=null,a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(e,t){return e.in&&t.status===s?{status:c}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==u&&n!==p&&(t=u):n!==u&&n!==p||(t="exiting")}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=o.default.findDOMNode(this);t===u?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:s})},i.performEnter=function(e,t){var n=this,a=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,o=this.getTimeouts(),i=r?o.appear:o.enter;t||a?(this.props.onEnter(e,r),this.safeSetState({status:u},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(e,r)}))}))}))):this.safeSetState({status:p},(function(){n.props.onEntered(e)}))},i.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===s)return null;var t=this.props,n=t.children,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return n(e,a);var o=r.default.Children.only(n);return r.default.cloneElement(o,a)},a}(r.default.Component);function m(){}d.contextTypes={transitionGroup:a.object},d.childContextTypes={transitionGroup:function(){}},d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},d.UNMOUNTED=0,d.EXITED=1,d.ENTERING=2,d.ENTERED=3,d.EXITING=4;var h=(0,i.polyfill)(d);t.default=h},285:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var a;(a=n(58))&&a.__esModule;t.timeoutsShape=null;t.classNamesShape=null},286:function(e,t,n){"use strict";n(65),n(34),n(283),n(57),n(23),n(9),n(13),n(14),n(3),n(22),t.__esModule=!0,t.default=void 0;var a=l(n(58)),r=l(n(0)),o=n(128),i=n(295);function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){var t,n;function a(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind(c(c(a)));return a.state={handleExited:r,firstRender:!0},a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},o.componentDidMount=function(){this.appeared=!0,this.mounted=!0},o.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(e,t){var n=t.children,a=t.handleExited;return{children:t.firstRender?(0,i.getInitialChildMapping)(e,a):(0,i.getNextChildMapping)(e,n,a),firstRender:!1}},o.handleExited=function(e,t){var n=(0,i.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=s({},t.children);return delete n[e.key],{children:n}})))},o.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["component","childFactory"]),o=u(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?o:r.default.createElement(t,a,o)},a}(r.default.Component);p.childContextTypes={transitionGroup:a.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var d=(0,o.polyfill)(p);t.default=d,e.exports=t.default},288:function(e,t,n){var a=n(17),r=n(59),o=n(49),i=n(79).f;e.exports=function(e){return function(t){for(var n,l=o(t),s=r(l),c=s.length,u=0,p=[];c>u;)n=s[u++],a&&!i.call(l,n)||p.push(e?[n,l[n]]:l[n]);return p}}},289:function(e,t,n){"use strict";var a=l(n(290)),r=l(n(294)),o=l(n(286)),i=l(n(284));function l(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:i.default,TransitionGroup:o.default,ReplaceTransition:r.default,CSSTransition:a.default}},290:function(e,t,n){"use strict";n(31),n(6),n(57),n(23),n(40),t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}t.default=e}(n(58));var a=l(n(291)),r=l(n(293)),o=l(n(0)),i=l(n(284));n(285);function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},p=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onEnter=function(e,n){var a=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,a),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,a),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.getClassNames("appear").doneClassName,r=t.getClassNames("enter").doneClassName,o=n?a+" "+r:r;t.removeClasses(e,n?"appear":"enter"),c(e,o),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"==typeof n,r=a?(a&&n?n+"-":"")+e:n[e];return{className:r,activeClassName:a?r+"-active":n[e+"Active"],doneClassName:a?r+"-done":n[e+"Done"]}},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.removeClasses=function(e,t){var n=this.getClassNames(t),a=n.className,r=n.activeClassName,o=n.doneClassName;a&&u(e,a),r&&u(e,r),o&&u(e,o)},r.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},r.render=function(){var e=s({},this.props);return delete e.classNames,o.default.createElement(i.default,s({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(o.default.Component);p.defaultProps={classNames:""},p.propTypes={};var d=p;t.default=d,e.exports=t.default},291:function(e,t,n){"use strict";var a=n(37);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var r=a(n(292));e.exports=t.default},292:function(e,t,n){"use strict";n(9),t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},293:function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n(100),n(8),e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}},294:function(e,t,n){"use strict";n(57),n(9),n(13),n(14),n(3),n(22),t.__esModule=!0,t.default=void 0;i(n(58));var a=i(n(0)),r=n(99),o=i(n(286));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t,n;function i(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=i.prototype;return l.handleLifecycle=function(e,t,n){var o,i=this.props.children,l=a.default.Children.toArray(i)[t];l.props[e]&&(o=l.props)[e].apply(o,n),this.props[e]&&this.props[e]((0,r.findDOMNode)(this))},l.render=function(){var e=this.props,t=e.children,n=e.in,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","in"]),i=a.default.Children.toArray(t),l=i[0],s=i[1];return delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,a.default.createElement(o.default,r,n?a.default.cloneElement(l,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):a.default.cloneElement(s,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},i}(a.default.Component);l.propTypes={};var s=l;t.default=s,e.exports=t.default},295:function(e,t,n){"use strict";n(13),n(14),n(3),n(22),n(65),n(34),n(6),n(57),t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=o,t.getInitialChildMapping=function(e,t){return r(e.children,(function(n){return(0,a.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:i(n,"appear",e),enter:i(n,"enter",e),exit:i(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var l=r(e.children),s=o(t,l);return Object.keys(s).forEach((function(r){var o=s[r];if((0,a.isValidElement)(o)){var c=r in t,u=r in l,p=t[r],d=(0,a.isValidElement)(p)&&!p.props.in;!u||c&&!d?u||!c||d?u&&c&&(0,a.isValidElement)(p)&&(s[r]=(0,a.cloneElement)(o,{onExited:n.bind(null,o),in:p.props.in,exit:i(o,"exit",e),enter:i(o,"enter",e)})):s[r]=(0,a.cloneElement)(o,{in:!1}):s[r]=(0,a.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:i(o,"exit",e),enter:i(o,"enter",e)})}})),s};var a=n(0);function r(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,a.isValidElement)(e)?t(e):e}(e)})),n}function o(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var l={};for(var s in t){if(r[s])for(a=0;a<r[s].length;a++){var c=r[s][a];l[r[s][a]]=n(c)}l[s]=n(s)}for(a=0;a<o.length;a++)l[o[a]]=n(o[a]);return l}function i(e,t,n){return null!=n[t]?n[t]:e.props[t]}}}]);
//# sourceMappingURL=component---src-pages-auth-licence-generator-js-2297e87305cd903ecb20.js.map