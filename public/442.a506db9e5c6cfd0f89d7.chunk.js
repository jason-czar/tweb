"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[442,437,774],{4425:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(2897);class n{constructor(e,t){this.passwordInputField=e,this.size=t,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=s.Z.loadAnimationAsAsset({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"TwoFactorSetupMonkeyPeek").then((e=>(this.animation=e,this.animation.addEventListener("enterFrame",(e=>{(1===this.animation.direction&&e>=this.needFrame||-1===this.animation.direction&&e<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())})),this.passwordInputField.onVisibilityClickAdditional=()=>{this.passwordInputField.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},s.Z.waitForFirstFrame(e))))}remove(){this.animation&&this.animation.remove()}}},6830:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(3910),n=i(503);class a extends n.Z{constructor(e={}){super(Object.assign({plainText:!0},e)),this.passwordVisible=!1,this.onVisibilityClick=e=>{(0,s.d)(e),this.passwordVisible=!this.passwordVisible,this.toggleVisible.classList.toggle("eye-hidden",this.passwordVisible),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional&&this.onVisibilityClickAdditional()};const t=this.input;t.type="password",t.setAttribute("required",""),t.name="notsearch_password",t.autocomplete="off";const i=document.createElement("input");i.classList.add("stealthy"),i.tabIndex=-1,i.type="password",t.parentElement.prepend(i),t.parentElement.insertBefore(i.cloneNode(),t.nextSibling);const n=this.toggleVisible=document.createElement("span");n.classList.add("toggle-visible","tgico"),this.container.classList.add("input-field-password"),this.container.append(n),n.addEventListener("click",this.onVisibilityClick),n.addEventListener("touchend",this.onVisibilityClick)}}},2614:(e,t,i)=>{function s(e){const t=document.createElement("span");return t.innerHTML=e,t}i.d(t,{Z:()=>s})},1656:(e,t,i)=>{function s(e,t){return t?e.forEach((e=>e.setAttribute("disabled","true"))):e.forEach((e=>e.removeAttribute("disabled"))),()=>s(e,!t)}i.d(t,{Z:()=>s})},634:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(410),n=i(9518);const a=new class{getState(){return n.Z.invokeApi("account.getPassword").then((e=>e))}updateSettings(e={}){return this.getState().then((t=>{let i,s;const a={password:null,new_settings:{_:"account.passwordInputSettings",hint:e.hint,email:e.email}};i=e.currentPassword?n.Z.invokeCrypto("computeSRP",e.currentPassword,t,!1):Promise.resolve({_:"inputCheckPasswordEmpty"});const r=t.new_algo,o=new Uint8Array(r.salt1.length+32);return o.randomize(),o.set(r.salt1,0),r.salt1=o,s=e.newPassword?n.Z.invokeCrypto("computeSRP",e.newPassword,t,!0):Promise.resolve(new Uint8Array),Promise.all([i,s]).then((e=>(a.password=e[0],a.new_settings.new_algo=r,a.new_settings.new_password_hash=e[1],n.Z.invokeApi("account.updatePasswordSettings",a))))}))}check(e,t,i={}){return n.Z.invokeCrypto("computeSRP",e,t,!1).then((e=>n.Z.invokeApi("auth.checkPassword",{password:e},i).then((e=>("auth.authorization"===e._&&n.Z.setUser(e.user),e)))))}confirmPasswordEmail(e){return n.Z.invokeApi("account.confirmPasswordEmail",{code:e})}resendPasswordEmail(){return n.Z.invokeApi("account.resendPasswordEmail")}cancelPasswordEmail(){return n.Z.invokeApi("account.cancelPasswordEmail")}};s.GO.passwordManager=a;const r=a},2582:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(4727);class n{constructor(e){this.element=document.body.querySelector("."+e.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),e.titleLangKey&&this.title.append((0,s.i18n)(e.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",e.subtitleLangKey&&this.subtitle.append((0,s.i18n)(e.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),e.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},9437:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var s=i(6858),n=i(4755),a=i(4687),r=i(634),o=i(4874),l=i(4494),d=i(6830),c=i(4425),p=i(8598),h=i(4727),u=i(2582),m=i(3910),w=i(2738),b=i(2614),g=i(5565),v=i(1656);let y;const k=new o.Z("page-password",!0,(()=>{const e=new u.Z({className:"page-password",withInputWrapper:!0,titleLangKey:"Login.Password.Title",subtitleLangKey:"Login.Password.Subtitle"}),t=(0,l.Z)("btn-primary btn-color-primary"),a=new h.default.IntlElement({key:"Login.Next"});t.append(a.element);const o=new d.Z({label:"LoginPassword",name:"password"});let k;y=o.input,e.inputWrapper.append(o.container,t);let P,Z=()=>(k||(k=window.setInterval(Z,1e4)),r.Z.getState().then((e=>{P=e,P.hint?(0,g.Z)(o.label,(0,b.Z)(p.Z.wrapEmojiText(P.hint))):o.setLabel()})));const E=e=>{if(e&&(0,m.d)(e),!y.value.length)return void y.classList.add("error");const n=(0,v.Z)([y,t],!0);let l=y.value;a.update({key:"PleaseWait"});const d=(0,s.y7)(t);o.setValueSilently(""+Math.random()),o.setValueSilently(l),r.Z.check(l,P).then((e=>{"auth.authorization"===e._?(clearInterval(k),i.e(781).then(i.bind(i,5436)).then((e=>{e.default.mount()})),S&&S.remove()):(t.removeAttribute("disabled"),a.update({key:e._}),d.remove())})).catch((e=>{n(),o.input.classList.add("error"),e.type,a.update({key:"PASSWORD_HASH_INVALID"}),y.select(),d.remove(),Z()}))};(0,w.fc)(t,E),y.addEventListener("keypress",(function(e){if(this.classList.remove("error"),a.update({key:"Login.Next"}),"Enter"===e.key)return E()}));const L=n.ZP.isMobile?100:166,S=new c.Z(o,L);return e.imageDiv.append(S.container),Promise.all([S.load(),Z()])}),null,(()=>{y.focus(),a.default.pushToState("authState",{_:"authStatePassword"})}))}}]);
//# sourceMappingURL=442.a506db9e5c6cfd0f89d7.chunk.js.map