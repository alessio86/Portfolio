import{a as qe,b as Ze}from"./chunk-BLA5JMJB.js";import{a as De}from"./chunk-5KLWBKSK.js";import"./chunk-KZ27YNAW.js";import{a as et,b as tt}from"./chunk-5EUKB7WB.js";import{a as Ke,b as Je}from"./chunk-BPW37R7C.js";import"./chunk-4PVBRFIS.js";import{a as Ye,b as We}from"./chunk-VBYMSYAH.js";import"./chunk-EEQT6XTH.js";import{a as Fe,b as Oe,c as w,e as Be,f as Re,g as ze,h as Ne,i as Ae,j as $e,k as je,l as Ge,m as Xe,n as Qe,o as Ue}from"./chunk-WQKS5WGG.js";import"./chunk-GGQ7LRWG.js";import{E as Ce,Ga as Q,H as ke,I as Se,Ia as Ve,Ja as Te,Ka as He,Pa as Pe,Qa as Ie,Sa as Le,Va as U,_ as xe,j as ve,l as be,m as ye,p as P,pa as ee,qa as Me,s as _e,ua as I,va as te,wa as X,za as Ee}from"./chunk-SFT2U5JN.js";import{c as we,d as W,f as K,h as J}from"./chunk-F2X3VGZZ.js";import{Ab as de,Bb as ce,Db as S,Eb as x,Fb as M,Ga as l,Jb as c,Kb as pe,La as re,Ob as ue,Pb as me,Qb as he,Rb as H,S as ne,Sa as E,Sb as ge,T as B,Ta as A,Tb as Y,U as R,Ub as G,Wa as $,Ya as F,Z as _,a as ie,b as oe,da as u,db as y,ea as m,eb as p,fb as D,g as k,ga as L,gb as j,hb as ae,ib as V,jb as Z,kc as O,lc as fe,ma as z,mb as le,nb as se,ob as a,pb as r,qb as h,sa as N,ub as T,yb as g,zb as d}from"./chunk-2NNAJRAH.js";var st=["container"],dt=["input"],ct=["colorSelector"],pt=["colorHandle"],ut=["hue"],mt=["hueHandle"],ht=(i,v)=>({"p-colorpicker p-component":!0,"p-colorpicker-overlay":i,"p-colorpicker-dragging":v}),gt=i=>({"p-disabled":i}),ft=(i,v)=>({"p-colorpicker-panel":!0,"p-colorpicker-panel-inline":i,"p-disabled":v}),vt=(i,v)=>({showTransitionParams:i,hideTransitionParams:v}),bt=i=>({value:"visible",params:i});function yt(i,v){if(i&1){let e=T();a(0,"input",9,1),g("click",function(){u(e);let t=d();return m(t.onInputClick())})("keydown",function(t){u(e);let n=d();return m(n.onInputKeydown(t))})("focus",function(){u(e);let t=d();return m(t.onInputFocus())}),r()}if(i&2){let e=d();D("background-color",e.inputBgColor),p("ngClass",Y(9,gt,e.disabled))("disabled",e.disabled)("pAutoFocus",e.autofocus),y("tabindex",e.tabindex)("id",e.inputId)("data-pc-section","input")("aria-label",e.ariaLabel)}}function _t(i,v){if(i&1){let e=T();a(0,"div",10),g("click",function(t){u(e);let n=d();return m(n.onOverlayClick(t))})("@overlayAnimation.start",function(t){u(e);let n=d();return m(n.onOverlayAnimationStart(t))})("@overlayAnimation.done",function(t){u(e);let n=d();return m(n.onOverlayAnimationEnd(t))}),a(1,"div",11)(2,"div",12,2),g("touchstart",function(t){u(e);let n=d();return m(n.onColorDragStart(t))})("touchmove",function(t){u(e);let n=d();return m(n.onDrag(t))})("touchend",function(){u(e);let t=d();return m(t.onDragEnd())})("mousedown",function(t){u(e);let n=d();return m(n.onColorMousedown(t))}),a(4,"div",13),h(5,"div",14,3),r()(),a(7,"div",15,4),g("mousedown",function(t){u(e);let n=d();return m(n.onHueMousedown(t))})("touchstart",function(t){u(e);let n=d();return m(n.onHueDragStart(t))})("touchmove",function(t){u(e);let n=d();return m(n.onDrag(t))})("touchend",function(){u(e);let t=d();return m(t.onDragEnd())}),h(9,"div",16,5),r()()()}if(i&2){let e=d();p("ngClass",G(10,ft,e.inline,e.disabled))("@overlayAnimation",Y(16,bt,G(13,vt,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),y("data-pc-section","panel"),l(),y("data-pc-section","content"),l(),y("data-pc-section","selector"),l(2),y("data-pc-section","color"),l(),y("data-pc-section","colorHandle"),l(2),y("data-pc-section","hue"),l(2),y("data-pc-section","hueHandle")}}var wt=({dt:i})=>`
.p-colorpicker {
    display: inline-block;
    position: relative;
}

.p-colorpicker-dragging {
    cursor: pointer;
}

.p-colorpicker-preview {
    width: ${i("colorpicker.preview.width")};
    height: ${i("colorpicker.preview.height")};
    padding: 0;
    border: 0 none;
    border-radius: ${i("colorpicker.preview.border.radius")};
    transition: background ${i("colorpicker.transition.duration")}, color ${i("colorpicker.transition.duration")}, border-color ${i("colorpicker.transition.duration")}, outline-color ${i("colorpicker.transition.duration")}, box-shadow ${i("colorpicker.transition.duration")};
    outline-color: transparent;
    cursor: pointer;
}

.p-colorpicker-preview:enabled:focus-visible {
    border-color: ${i("colorpicker.preview.focus.border.color")};
    box-shadow: ${i("colorpicker.preview.focus.ring.shadow")};
    outline: ${i("colorpicker.preview.focus.ring.width")} ${i("colorpicker.preview.focus.ring.style")} ${i("colorpicker.preview.focus.ring.color")};
    outline-offset: ${i("colorpicker.preview.focus.ring.offset")};
}

.p-colorpicker-panel {
    background: ${i("colorpicker.panel.background")};
    border: 1px solid ${i("colorpicker.panel.border.color")};
    border-radius: ${i("colorpicker.panel.border.radius")};
    box-shadow: ${i("colorpicker.panel.shadow")};
    width: 193px;
    height: 166px;
    position: absolute;
    top: 0;
    left: 0;
}

.p-colorpicker-panel:dir(rtl) {
    left: auto;
    right: 0;
}

.p-colorpicker-panel-inline {
    box-shadow: none;
    position: static;
}

.p-colorpicker-content {
    position: relative;
}

.p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.p-colorpicker-color-selector:dir(rtl) {
    left: auto;
    right: 8px;
}

.p-colorpicker-color-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-color-handle {
    position: absolute;
    top: 0px;
    left: 150px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    margin: -5px 0 0 -5px;
    cursor: pointer;
    opacity: 0.85;
    border-color: ${i("colorpicker.handle.color")};
}

.p-colorpicker-color-handle:dir(rtl) {
    left: auto;
    right: 150px;
    margin: -5px -5px 0 0;
}

.p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: 0.85;
    background: linear-gradient(0deg,
        red 0,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        red);
}

.p-colorpicker-hue:dir(rtl) {
    left: auto;
    right: 167px;
}

.p-colorpicker-hue-handle {
    position: absolute;
    top: 150px;
    left: 0px;
    width: 21px;
    margin-left: -2px;
    margin-top: -5px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    opacity: 0.85;
    cursor: pointer;
    border-color: ${i("colorpicker.handle.color")};
}

.p-colorpicker-hue-handle:dir(rtl) {
    left: auto;
    right: 0px;
    margin-left: 0;
    margin-right: -2px;
}
`,Ct={root:"p-colorpicker p-component",preview:({props:i})=>["p-colorpicker-preview",{"p-disabled":i.disabled}],panel:({props:i})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":i.inline,"p-disabled":i.disabled}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},it=(()=>{class i extends X{name="colorpicker";theme=wt;classes=Ct;static \u0275fac=(()=>{let e;return function(t){return(e||(e=L(i)))(t||i)}})();static \u0275prov=B({token:i,factory:i.\u0275fac})}return i})();var kt={provide:Fe,useExisting:ne(()=>q),multi:!0},q=(()=>{class i extends Q{overlayService;style;styleClass;inline;format="hex";appendTo;disabled;tabindex;inputId;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;onChange=new z;onShow=new z;onHide=new z;containerViewChild;inputViewChild;value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;defaultColor="ff0000";onModelChange=()=>{};onModelTouched=()=>{};documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=_(it);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(te.ARIA)[te.SELECT_COLOR]}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,o){let t=o?o.pageY:e.pageY,n=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,t-n)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,o){let t=o?o.pageX:e.pageX,n=o?o.pageY:e.pageY,s=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),f=s.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),b=s.left+this.document.body.scrollLeft,C=Math.floor(100*Math.max(0,Math.min(150,t-b))/150),lt=Math.floor(100*(150-Math.max(0,Math.min(150,n-f)))/150);this.value=this.validateHSB({h:this.value.h,s:C,b:lt}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&U.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&U.clear(e.element),this.onHide.emit({});break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):Se(this.appendTo,this.overlay))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?Ce(this.overlay,this.inputViewChild?.nativeElement):ke(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",o=>{this.colorDragging&&this.pickColor(o),this.hueDragging&&this.pickHue(o)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){_e(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!xe()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ve(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var o=6-e.length;if(o>0){for(var t=[],n=0;n<o;n++)t.push("0");t.push(e),e=t.join("")}return e}HEXtoRGB(e){let o=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:o>>16,g:(o&65280)>>8,b:o&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var o={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),n=Math.max(e.r,e.g,e.b),s=n-t;return o.b=n,o.s=n!=0?255*s/n:0,o.s!=0?e.r==n?o.h=(e.g-e.b)/s:e.g==n?o.h=2+(e.b-e.r)/s:o.h=4+(e.r-e.g)/s:o.h=-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o}HSBtoRGB(e){var o={r:0,g:0,b:0};let t=e.h,n=e.s*255/100,s=e.b*255/100;if(n==0)o={r:s,g:s,b:s};else{let f=s,b=(255-n)*s/255,C=(f-b)*(t%60)/60;t==360&&(t=0),t<60?(o.r=f,o.b=b,o.g=b+C):t<120?(o.g=f,o.b=b,o.r=f-C):t<180?(o.g=f,o.r=b,o.b=b+C):t<240?(o.b=f,o.r=b,o.g=f-C):t<300?(o.b=f,o.g=b,o.r=b+C):t<360?(o.r=f,o.g=b,o.b=f-C):(o.r=0,o.g=0,o.b=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}}RGBtoHEX(e){var o=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var t in o)o[t].length==1&&(o[t]="0"+o[t]);return o.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngAfterViewInit(){this.inline&&(this.updateColorSelector(),this.updateUI())}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&U.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(o){return new(o||i)(re(Me))};static \u0275cmp=E({type:i,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(o,t){if(o&1&&(S(st,5),S(dt,5),S(ct,5),S(pt,5),S(ut,5),S(mt,5)),o&2){let n;x(n=M())&&(t.containerViewChild=n.first),x(n=M())&&(t.inputViewChild=n.first),x(n=M())&&(t.colorSelector=n.first),x(n=M())&&(t.colorHandle=n.first),x(n=M())&&(t.hue=n.first),x(n=M())&&(t.hueHandle=n.first)}},inputs:{style:"style",styleClass:"styleClass",inline:[2,"inline","inline",O],format:"format",appendTo:"appendTo",disabled:[2,"disabled","disabled",O],tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",O],baseZIndex:[2,"baseZIndex","baseZIndex",fe],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",O]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[H([kt,it]),$],decls:4,vars:11,consts:[["container",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],[3,"ngStyle","ngClass"],["type","text","class","p-colorpicker-preview","readonly","readonly",3,"ngClass","disabled","backgroundColor","pAutoFocus","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview",3,"click","keydown","focus","ngClass","disabled","pAutoFocus"],[3,"click","ngClass"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],[1,"p-colorpicker-color-background"],[1,"p-colorpicker-color-handle"],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],[1,"p-colorpicker-hue-handle"]],template:function(o,t){o&1&&(a(0,"div",6,0),F(2,yt,2,11,"input",7)(3,_t,11,18,"div",8),r()),o&2&&(V(t.styleClass),p("ngStyle",t.style)("ngClass",G(8,ht,!t.inline,t.colorDragging||t.hueDragging)),y("data-pc-name","colorpicker")("data-pc-section","root"),l(2),p("ngIf",!t.inline),l(),p("ngIf",t.inline||t.overlayVisible))},dependencies:[P,ve,be,ye,He,Te,I],encapsulation:2,data:{animation:[we("overlayAnimation",[J(":enter",[K({opacity:0,transform:"scaleY(0.8)"}),W("{{showTransitionParams}}")]),J(":leave",[W("{{hideTransitionParams}}",K({opacity:0}))])])]},changeDetection:0})}return i})(),nt=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=A({type:i});static \u0275inj=R({imports:[q,I,I]})}return i})();var xt=["*"],Mt=({dt:i})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${i("divider.horizontal.margin")};
    padding: ${i("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${i("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${i("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${i("divider.vertical.margin")};
    padding: ${i("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${i("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${i("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${i("divider.content.background")};
    color: ${i("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,Et={root:({props:i})=>({justifyContent:i.layout==="horizontal"?i.align==="center"||i.align===null?"center":i.align==="left"?"flex-start":i.align==="right"?"flex-end":null:null,alignItems:i.layout==="vertical"?i.align==="center"||i.align===null?"center":i.align==="top"?"flex-start":i.align==="bottom"?"flex-end":null:null})},Dt={root:({props:i})=>["p-divider p-component","p-divider-"+i.layout,"p-divider-"+i.type,{"p-divider-left":i.layout==="horizontal"&&(!i.align||i.align==="left")},{"p-divider-center":i.layout==="horizontal"&&i.align==="center"},{"p-divider-right":i.layout==="horizontal"&&i.align==="right"},{"p-divider-top":i.layout==="vertical"&&i.align==="top"},{"p-divider-center":i.layout==="vertical"&&(!i.align||i.align==="center")},{"p-divider-bottom":i.layout==="vertical"&&i.align==="bottom"}],content:"p-divider-content"},rt=(()=>{class i extends X{name="divider";theme=Mt;classes=Dt;inlineStyles=Et;static \u0275fac=(()=>{let e;return function(t){return(e||(e=L(i)))(t||i)}})();static \u0275prov=B({token:i,factory:i.\u0275fac})}return i})();var Vt=(()=>{class i extends Q{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=_(rt);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(t){return(e||(e=L(i)))(t||i)}})();static \u0275cmp=E({type:i,selectors:[["p-divider"]],hostVars:33,hostBindings:function(o,t){o&2&&(y("aria-orientation",t.layout)("data-pc-name","divider")("role","separator"),V(t.hostClass),D("justify-content",t.layout==="horizontal"?t.align==="center"||t.align===void 0?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null)("align-items",t.layout==="vertical"?t.align==="center"||t.align===void 0?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null),j("p-divider",!0)("p-component",!0)("p-divider-horizontal",t.layout==="horizontal")("p-divider-vertical",t.layout==="vertical")("p-divider-solid",t.type==="solid")("p-divider-dashed",t.type==="dashed")("p-divider-dotted",t.type==="dotted")("p-divider-left",t.layout==="horizontal"&&(!t.align||t.align==="left"))("p-divider-center",t.layout==="horizontal"&&t.align==="center"||t.layout==="vertical"&&(!t.align||t.align==="center"))("p-divider-right",t.layout==="horizontal"&&t.align==="right")("p-divider-top",t.layout==="vertical"&&t.align==="top")("p-divider-bottom",t.layout==="vertical"&&t.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[H([rt]),$],ngContentSelectors:xt,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(o,t){o&1&&(de(),a(0,"div",0),ce(1),r())},dependencies:[P,I],encapsulation:2,changeDetection:0})}return i})(),at=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=A({type:i});static \u0275inj=R({imports:[Vt]})}return i})();var Tt=()=>({width:"95vw",maxWidth:"400px"}),Ht=(i,v)=>v.id;function Pt(i,v){if(i&1){let e=T();a(0,"div",32)(1,"span",12),c(2,"7 giorni prima"),r(),a(3,"p-inputSwitch",14),g("onChange",function(t){u(e);let n=d();return m(n.toggleNotif("notifySevenDaysBefore",t.checked))}),r()(),a(4,"div",32)(5,"span",12),c(6,"3 giorni prima"),r(),a(7,"p-inputSwitch",14),g("onChange",function(t){u(e);let n=d();return m(n.toggleNotif("notifyThreeDaysBefore",t.checked))}),r()(),a(8,"div",32)(9,"span",12),c(10,"Il giorno della scadenza"),r(),a(11,"p-inputSwitch",14),g("onChange",function(t){u(e);let n=d();return m(n.toggleNotif("notifyOnDueDate",t.checked))}),r()(),a(12,"div",32)(13,"span",12),c(14,"Pagamenti scaduti"),r(),a(15,"p-inputSwitch",14),g("onChange",function(t){u(e);let n=d();return m(n.toggleNotif("notifyOverdue",t.checked))}),r()(),a(16,"div",32)(17,"span",12),c(18,"Rinnovi abbonamenti"),r(),a(19,"p-inputSwitch",14),g("onChange",function(t){u(e);let n=d();return m(n.toggleNotif("notifyRenewal",t.checked))}),r()()}if(i&2){let e,o,t,n,s,f=d();l(3),p("ngModel",(e=f.notifSettings())==null?null:e.notifySevenDaysBefore),l(4),p("ngModel",(o=f.notifSettings())==null?null:o.notifyThreeDaysBefore),l(4),p("ngModel",(t=f.notifSettings())==null?null:t.notifyOnDueDate),l(4),p("ngModel",(n=f.notifSettings())==null?null:n.notifyOverdue),l(4),p("ngModel",(s=f.notifSettings())==null?null:s.notifyRenewal)}}function It(i,v){if(i&1){let e=T();a(0,"button",37),g("click",function(){u(e);let t=d().$implicit,n=d();return m(n.removeCategory(t))}),r()}}function Lt(i,v){if(i&1&&(a(0,"div",33),h(1,"span",34)(2,"i",35),a(3,"span"),c(4),r(),F(5,It,1,0,"button",36),r()),i&2){let e=v.$implicit;j("system",e.isSystem),l(),D("background",e.color),l(),V(e.icon),l(2),pe(e.name),l(),Z(e.isSystem?-1:5)}}var Ni=(()=>{class i{authStore=_(Ee);authService=_(De);fb=_(je);messageService=_(ee);showCatDialog=N(!1);notifEnabled=N(!0);notifSettings=N(this.authStore.notificationSettings());profileForm=this.fb.nonNullable.group({displayName:["",w.required],email:["",[w.required,w.email]]});passwordForm=this.fb.nonNullable.group({currentPassword:["",w.required],newPassword:["",[w.required,w.minLength(6)]]});catForm=this.fb.nonNullable.group({name:["",w.required],icon:["pi pi-tag",w.required],color:["#3b82f6"]});ngOnInit(){let e=this.authStore.currentUser();e&&(this.profileForm.patchValue({displayName:e.displayName,email:e.email}),this.notifEnabled.set(e.settings.notifications.enabled),this.notifSettings.set(e.settings.notifications))}saveProfile(){return k(this,null,function*(){this.profileForm.invalid||(yield this.authService.updateProfile(this.profileForm.getRawValue()),this.messageService.add({severity:"success",summary:"Salvato",detail:"Profilo aggiornato"}))})}toggleDarkMode(e){return k(this,null,function*(){yield this.authService.updateSettings({darkMode:e})})}toggleNotif(e,o){return k(this,null,function*(){let t=this.authStore.notificationSettings()||{},n=oe(ie({},t),{[e]:o});yield this.authService.updateSettings({notifications:n}),this.notifEnabled.set(n.enabled),this.notifSettings.set(n)})}addCategory(){return k(this,null,function*(){if(this.catForm.invalid)return;let{name:e,icon:o,color:t}=this.catForm.getRawValue(),n=[...this.authStore.categories()],s={id:e.toLowerCase().replace(/\s+/g,"-"),name:e,icon:o,color:typeof t=="string"?t:`#${t}`,isSystem:!1};n.push(s),yield this.authService.updateSettings({categories:n}),this.showCatDialog.set(!1),this.catForm.reset({icon:"pi pi-tag",color:"#3b82f6"}),this.messageService.add({severity:"success",summary:"Aggiunta",detail:"Categoria creata"})})}removeCategory(e){return k(this,null,function*(){let o=this.authStore.categories().filter(t=>t.id!==e.id);yield this.authService.updateSettings({categories:o}),this.messageService.add({severity:"info",summary:"Rimossa",detail:"Categoria eliminata"})})}changePassword(){return k(this,null,function*(){if(this.passwordForm.invalid)return;let{currentPassword:e,newPassword:o}=this.passwordForm.getRawValue(),t=yield this.authService.changePassword(e,o);t.success?(this.passwordForm.reset(),this.messageService.add({severity:"success",summary:"Aggiornata",detail:"Password cambiata"})):this.messageService.add({severity:"error",summary:"Errore",detail:t.error||"Errore"})})}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=E({type:i,selectors:[["app-settings"]],features:[H([ee])],decls:82,vars:17,consts:[[1,"ft-page","ft-animate-in"],[1,"ft-page-title",2,"margin-bottom","1.5rem"],[1,"settings-section"],[1,"pi","pi-user"],[3,"ngSubmit","formGroup"],[1,"settings-row"],[1,"field"],["pInputText","","formControlName","displayName",1,"w-full"],["pInputText","","formControlName","email",1,"w-full"],["pButton","","type","submit","label","Salva profilo","icon","pi pi-check",1,"p-button-sm",3,"disabled"],[1,"pi","pi-palette"],[1,"setting-item"],[1,"setting-label"],[1,"setting-desc"],[3,"onChange","ngModel"],[1,"pi","pi-bell"],[1,"pi","pi-tag"],[1,"categories-grid"],[1,"category-chip",3,"system"],[2,"margin-top","1rem"],["pButton","","label","Aggiungi categoria","icon","pi pi-plus",1,"p-button-sm","p-button-outlined",3,"click"],[1,"pi","pi-lock"],["formControlName","currentPassword","styleClass","w-full","inputStyleClass","w-full",3,"toggleMask","feedback"],["formControlName","newPassword","styleClass","w-full","inputStyleClass","w-full","promptLabel","Nuova password","weakLabel","Debole","mediumLabel","Media","strongLabel","Forte",3,"toggleMask"],["pButton","","type","submit","label","Cambia password","icon","pi pi-lock",1,"p-button-sm","p-button-warning",3,"disabled"],["header","Nuova categoria",3,"visibleChange","visible","modal"],["pInputText","","formControlName","name","placeholder","Nome categoria",1,"w-full"],["pInputText","","formControlName","icon","placeholder","pi pi-star",1,"w-full"],["formControlName","color"],[2,"display","flex","justify-content","flex-end","gap","0.5rem","margin-top","1rem"],["pButton","","type","button","label","Annulla",1,"p-button-text",3,"click"],["pButton","","type","submit","label","Aggiungi","icon","pi pi-check",3,"disabled"],[1,"setting-item","sub"],[1,"category-chip"],[1,"cat-dot"],[2,"font-size","0.875rem"],["pButton","","icon","pi pi-times",1,"p-button-text","p-button-sm","p-button-danger"],["pButton","","icon","pi pi-times",1,"p-button-text","p-button-sm","p-button-danger",3,"click"]],template:function(o,t){o&1&&(a(0,"div",0)(1,"h1",1),c(2,"Impostazioni"),r(),a(3,"div",2)(4,"h3"),h(5,"i",3),c(6," Profilo"),r(),a(7,"form",4),g("ngSubmit",function(){return t.saveProfile()}),a(8,"div",5)(9,"div",6)(10,"label"),c(11,"Nome visualizzato"),r(),h(12,"input",7),r(),a(13,"div",6)(14,"label"),c(15,"Email"),r(),h(16,"input",8),r()(),h(17,"button",9),r()(),a(18,"div",2)(19,"h3"),h(20,"i",10),c(21," Aspetto"),r(),a(22,"div",11)(23,"div")(24,"span",12),c(25,"Dark Mode"),r(),a(26,"span",13),c(27,"Attiva il tema scuro"),r()(),a(28,"p-inputSwitch",14),g("onChange",function(s){return t.toggleDarkMode(s.checked)}),r()()(),a(29,"div",2)(30,"h3"),h(31,"i",15),c(32," Notifiche"),r(),a(33,"div",11)(34,"div")(35,"span",12),c(36,"Abilita notifiche"),r(),a(37,"span",13),c(38,"Ricevi avvisi per pagamenti in scadenza"),r()(),a(39,"p-inputSwitch",14),g("onChange",function(s){return t.toggleNotif("enabled",s.checked)}),r()(),F(40,Pt,20,5),r(),a(41,"div",2)(42,"h3"),h(43,"i",16),c(44," Categorie"),r(),a(45,"div",17),le(46,Lt,6,8,"div",18,Ht),r(),a(48,"div",19)(49,"button",20),g("click",function(){return t.showCatDialog.set(!0)}),r()()(),a(50,"div",2)(51,"h3"),h(52,"i",21),c(53," Cambia Password"),r(),a(54,"form",4),g("ngSubmit",function(){return t.changePassword()}),a(55,"div",6)(56,"label"),c(57,"Password attuale"),r(),h(58,"p-password",22),r(),a(59,"div",6)(60,"label"),c(61,"Nuova password"),r(),h(62,"p-password",23),r(),h(63,"button",24),r()()(),a(64,"p-dialog",25),he("visibleChange",function(s){return me(t.showCatDialog,s)||(t.showCatDialog=s),s}),a(65,"form",4),g("ngSubmit",function(){return t.addCategory()}),a(66,"div",6)(67,"label"),c(68,"Nome"),r(),h(69,"input",26),r(),a(70,"div",6)(71,"label"),c(72,"Icona (classe PrimeIcon)"),r(),h(73,"input",27),r(),a(74,"div",6)(75,"label"),c(76,"Colore"),r(),h(77,"p-colorPicker",28),r(),a(78,"div",29)(79,"button",30),g("click",function(){return t.showCatDialog.set(!1)}),r(),h(80,"button",31),r()()(),h(81,"p-toast")),o&2&&(l(7),p("formGroup",t.profileForm),l(10),p("disabled",t.profileForm.invalid),l(11),p("ngModel",t.authStore.isDarkMode()),l(11),p("ngModel",t.notifEnabled()),l(),Z(t.notifEnabled()?40:-1),l(6),se(t.authStore.categories()),l(8),p("formGroup",t.passwordForm),l(4),p("toggleMask",!0)("feedback",!1),l(4),p("toggleMask",!0),l(),p("disabled",t.passwordForm.invalid),l(),ae(ge(16,Tt)),ue("visible",t.showCatDialog),p("modal",!0),l(),p("formGroup",t.catForm),l(15),p("disabled",t.catForm.invalid))},dependencies:[P,Xe,Ne,Oe,Be,Re,Ae,$e,Ge,ze,Ue,Qe,tt,et,Le,Ie,Ze,qe,We,Ye,nt,q,Je,Ke,Pe,at],styles:[".settings-section[_ngcontent-%COMP%]{background:var(--ft-bg-card);border:1px solid var(--ft-border);border-radius:var(--ft-border-radius);padding:1.5rem;margin-bottom:1.5rem}.settings-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-bottom:1.25rem;font-size:1.125rem}.settings-row[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap}.settings-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{flex:1;min-width:200px}.setting-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.75rem 0;border-bottom:1px solid var(--ft-border)}.setting-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.setting-item.sub[_ngcontent-%COMP%]{padding-left:1.5rem}.setting-label[_ngcontent-%COMP%]{font-weight:500;font-size:.9375rem;display:block}.setting-desc[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--ft-text-secondary)}.categories-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.category-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;background:var(--ft-bg-primary);border-radius:8px;font-size:.875rem}.cat-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%}.field[_ngcontent-%COMP%]{margin-bottom:1rem}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:500;margin-bottom:.5rem;font-size:.875rem;color:var(--ft-text-secondary)}.w-full[_ngcontent-%COMP%]{width:100%}"],changeDetection:0})}return i})();export{Ni as SettingsComponent};
