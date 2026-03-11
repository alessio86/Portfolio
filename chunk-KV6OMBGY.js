import{a as Ve}from"./chunk-JS45URP3.js";import{a as Ye,b as We}from"./chunk-BLA5JMJB.js";import{a as De}from"./chunk-5KLWBKSK.js";import"./chunk-KZ27YNAW.js";import{a as it,b as nt}from"./chunk-5EUKB7WB.js";import{a as et,b as tt}from"./chunk-BPW37R7C.js";import"./chunk-4PVBRFIS.js";import{a as Ke,b as Je}from"./chunk-VBYMSYAH.js";import"./chunk-EEQT6XTH.js";import{a as Be,b as Re,c as C,e as ze,f as Ae,g as Ne,h as $e,i as je,j as Ge,k as Xe,l as Qe,m as Ue,n as qe,o as Ze}from"./chunk-WQKS5WGG.js";import"./chunk-GGQ7LRWG.js";import{E as we,Ga as U,H as Se,I as ke,Ia as Te,Ja as Pe,Ka as He,Oa as Ie,Pa as Oe,Qa as Fe,Sa as Le,Va as q,_ as xe,j as ve,l as be,m as _e,p as I,pa as ee,qa as Me,s as ye,ua as O,va as te,wa as Q,za as Ee}from"./chunk-SFT2U5JN.js";import{c as Ce,d as W,f as K,h as J}from"./chunk-F2X3VGZZ.js";import{Ab as de,Bb as ce,Db as M,Eb as E,Fb as D,Ga as l,Jb as s,Kb as pe,La as re,Ob as ue,Pb as me,Qb as he,Rb as H,S as oe,Sa as V,Sb as ge,T as R,Ta as $,Tb as Y,U as z,Ub as X,Wa as j,Ya as k,Z as y,a as ie,b as ne,da as u,db as _,ea as m,eb as h,fb as T,g as S,ga as F,gb as G,hb as ae,ib as P,jb as L,kc as B,lc as fe,ma as A,mb as le,nb as se,ob as a,pb as r,qb as p,sa as N,ub as x,yb as g,zb as d}from"./chunk-2NNAJRAH.js";var ct=["container"],pt=["input"],ut=["colorSelector"],mt=["colorHandle"],ht=["hue"],gt=["hueHandle"],ft=(i,v)=>({"p-colorpicker p-component":!0,"p-colorpicker-overlay":i,"p-colorpicker-dragging":v}),vt=i=>({"p-disabled":i}),bt=(i,v)=>({"p-colorpicker-panel":!0,"p-colorpicker-panel-inline":i,"p-disabled":v}),_t=(i,v)=>({showTransitionParams:i,hideTransitionParams:v}),yt=i=>({value:"visible",params:i});function Ct(i,v){if(i&1){let e=x();a(0,"input",9,1),g("click",function(){u(e);let t=d();return m(t.onInputClick())})("keydown",function(t){u(e);let o=d();return m(o.onInputKeydown(t))})("focus",function(){u(e);let t=d();return m(t.onInputFocus())}),r()}if(i&2){let e=d();T("background-color",e.inputBgColor),h("ngClass",Y(9,vt,e.disabled))("disabled",e.disabled)("pAutoFocus",e.autofocus),_("tabindex",e.tabindex)("id",e.inputId)("data-pc-section","input")("aria-label",e.ariaLabel)}}function wt(i,v){if(i&1){let e=x();a(0,"div",10),g("click",function(t){u(e);let o=d();return m(o.onOverlayClick(t))})("@overlayAnimation.start",function(t){u(e);let o=d();return m(o.onOverlayAnimationStart(t))})("@overlayAnimation.done",function(t){u(e);let o=d();return m(o.onOverlayAnimationEnd(t))}),a(1,"div",11)(2,"div",12,2),g("touchstart",function(t){u(e);let o=d();return m(o.onColorDragStart(t))})("touchmove",function(t){u(e);let o=d();return m(o.onDrag(t))})("touchend",function(){u(e);let t=d();return m(t.onDragEnd())})("mousedown",function(t){u(e);let o=d();return m(o.onColorMousedown(t))}),a(4,"div",13),p(5,"div",14,3),r()(),a(7,"div",15,4),g("mousedown",function(t){u(e);let o=d();return m(o.onHueMousedown(t))})("touchstart",function(t){u(e);let o=d();return m(o.onHueDragStart(t))})("touchmove",function(t){u(e);let o=d();return m(o.onDrag(t))})("touchend",function(){u(e);let t=d();return m(t.onDragEnd())}),p(9,"div",16,5),r()()()}if(i&2){let e=d();h("ngClass",X(10,bt,e.inline,e.disabled))("@overlayAnimation",Y(16,yt,X(13,_t,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),_("data-pc-section","panel"),l(),_("data-pc-section","content"),l(),_("data-pc-section","selector"),l(2),_("data-pc-section","color"),l(),_("data-pc-section","colorHandle"),l(2),_("data-pc-section","hue"),l(2),_("data-pc-section","hueHandle")}}var St=({dt:i})=>`
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
`,kt={root:"p-colorpicker p-component",preview:({props:i})=>["p-colorpicker-preview",{"p-disabled":i.disabled}],panel:({props:i})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":i.inline,"p-disabled":i.disabled}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},ot=(()=>{class i extends Q{name="colorpicker";theme=St;classes=kt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=F(i)))(t||i)}})();static \u0275prov=R({token:i,factory:i.\u0275fac})}return i})();var xt={provide:Be,useExisting:oe(()=>Z),multi:!0},Z=(()=>{class i extends U{overlayService;style;styleClass;inline;format="hex";appendTo;disabled;tabindex;inputId;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;onChange=new A;onShow=new A;onHide=new A;containerViewChild;inputViewChild;value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;defaultColor="ff0000";onModelChange=()=>{};onModelTouched=()=>{};documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=y(ot);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(te.ARIA)[te.SELECT_COLOR]}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,n){let t=n?n.pageY:e.pageY,o=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,t-o)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,n){let t=n?n.pageX:e.pageX,o=n?n.pageY:e.pageY,c=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),f=c.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),b=c.left+this.document.body.scrollLeft,w=Math.floor(100*Math.max(0,Math.min(150,t-b))/150),dt=Math.floor(100*(150-Math.max(0,Math.min(150,o-f)))/150);this.value=this.validateHSB({h:this.value.h,s:w,b:dt}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&q.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&q.clear(e.element),this.onHide.emit({});break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):ke(this.appendTo,this.overlay))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?we(this.overlay,this.inputViewChild?.nativeElement):Se(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",n=>{this.colorDragging&&this.pickColor(n),this.hueDragging&&this.pickHue(n)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){ye(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!xe()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Te(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var n=6-e.length;if(n>0){for(var t=[],o=0;o<n;o++)t.push("0");t.push(e),e=t.join("")}return e}HEXtoRGB(e){let n=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:n>>16,g:(n&65280)>>8,b:n&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var n={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),o=Math.max(e.r,e.g,e.b),c=o-t;return n.b=o,n.s=o!=0?255*c/o:0,n.s!=0?e.r==o?n.h=(e.g-e.b)/c:e.g==o?n.h=2+(e.b-e.r)/c:n.h=4+(e.r-e.g)/c:n.h=-1,n.h*=60,n.h<0&&(n.h+=360),n.s*=100/255,n.b*=100/255,n}HSBtoRGB(e){var n={r:0,g:0,b:0};let t=e.h,o=e.s*255/100,c=e.b*255/100;if(o==0)n={r:c,g:c,b:c};else{let f=c,b=(255-o)*c/255,w=(f-b)*(t%60)/60;t==360&&(t=0),t<60?(n.r=f,n.b=b,n.g=b+w):t<120?(n.g=f,n.b=b,n.r=f-w):t<180?(n.g=f,n.r=b,n.b=b+w):t<240?(n.b=f,n.r=b,n.g=f-w):t<300?(n.b=f,n.g=b,n.r=b+w):t<360?(n.r=f,n.g=b,n.b=f-w):(n.r=0,n.g=0,n.b=0)}return{r:Math.round(n.r),g:Math.round(n.g),b:Math.round(n.b)}}RGBtoHEX(e){var n=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var t in n)n[t].length==1&&(n[t]="0"+n[t]);return n.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngAfterViewInit(){this.inline&&(this.updateColorSelector(),this.updateUI())}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&q.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(n){return new(n||i)(re(Me))};static \u0275cmp=V({type:i,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(n,t){if(n&1&&(M(ct,5),M(pt,5),M(ut,5),M(mt,5),M(ht,5),M(gt,5)),n&2){let o;E(o=D())&&(t.containerViewChild=o.first),E(o=D())&&(t.inputViewChild=o.first),E(o=D())&&(t.colorSelector=o.first),E(o=D())&&(t.colorHandle=o.first),E(o=D())&&(t.hue=o.first),E(o=D())&&(t.hueHandle=o.first)}},inputs:{style:"style",styleClass:"styleClass",inline:[2,"inline","inline",B],format:"format",appendTo:"appendTo",disabled:[2,"disabled","disabled",B],tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",B],baseZIndex:[2,"baseZIndex","baseZIndex",fe],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",B]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[H([xt,ot]),j],decls:4,vars:11,consts:[["container",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],[3,"ngStyle","ngClass"],["type","text","class","p-colorpicker-preview","readonly","readonly",3,"ngClass","disabled","backgroundColor","pAutoFocus","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview",3,"click","keydown","focus","ngClass","disabled","pAutoFocus"],[3,"click","ngClass"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],[1,"p-colorpicker-color-background"],[1,"p-colorpicker-color-handle"],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],[1,"p-colorpicker-hue-handle"]],template:function(n,t){n&1&&(a(0,"div",6,0),k(2,Ct,2,11,"input",7)(3,wt,11,18,"div",8),r()),n&2&&(P(t.styleClass),h("ngStyle",t.style)("ngClass",X(8,ft,!t.inline,t.colorDragging||t.hueDragging)),_("data-pc-name","colorpicker")("data-pc-section","root"),l(2),h("ngIf",!t.inline),l(),h("ngIf",t.inline||t.overlayVisible))},dependencies:[I,ve,be,_e,He,Pe,O],encapsulation:2,data:{animation:[Ce("overlayAnimation",[J(":enter",[K({opacity:0,transform:"scaleY(0.8)"}),W("{{showTransitionParams}}")]),J(":leave",[W("{{hideTransitionParams}}",K({opacity:0}))])])]},changeDetection:0})}return i})(),at=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=$({type:i});static \u0275inj=z({imports:[Z,O,O]})}return i})();var Et=["*"],Dt=({dt:i})=>`
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
`,Vt={root:({props:i})=>({justifyContent:i.layout==="horizontal"?i.align==="center"||i.align===null?"center":i.align==="left"?"flex-start":i.align==="right"?"flex-end":null:null,alignItems:i.layout==="vertical"?i.align==="center"||i.align===null?"center":i.align==="top"?"flex-start":i.align==="bottom"?"flex-end":null:null})},Tt={root:({props:i})=>["p-divider p-component","p-divider-"+i.layout,"p-divider-"+i.type,{"p-divider-left":i.layout==="horizontal"&&(!i.align||i.align==="left")},{"p-divider-center":i.layout==="horizontal"&&i.align==="center"},{"p-divider-right":i.layout==="horizontal"&&i.align==="right"},{"p-divider-top":i.layout==="vertical"&&i.align==="top"},{"p-divider-center":i.layout==="vertical"&&(!i.align||i.align==="center")},{"p-divider-bottom":i.layout==="vertical"&&i.align==="bottom"}],content:"p-divider-content"},lt=(()=>{class i extends Q{name="divider";theme=Dt;classes=Tt;inlineStyles=Vt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=F(i)))(t||i)}})();static \u0275prov=R({token:i,factory:i.\u0275fac})}return i})();var Pt=(()=>{class i extends U{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=y(lt);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(t){return(e||(e=F(i)))(t||i)}})();static \u0275cmp=V({type:i,selectors:[["p-divider"]],hostVars:33,hostBindings:function(n,t){n&2&&(_("aria-orientation",t.layout)("data-pc-name","divider")("role","separator"),P(t.hostClass),T("justify-content",t.layout==="horizontal"?t.align==="center"||t.align===void 0?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null)("align-items",t.layout==="vertical"?t.align==="center"||t.align===void 0?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null),G("p-divider",!0)("p-component",!0)("p-divider-horizontal",t.layout==="horizontal")("p-divider-vertical",t.layout==="vertical")("p-divider-solid",t.type==="solid")("p-divider-dashed",t.type==="dashed")("p-divider-dotted",t.type==="dotted")("p-divider-left",t.layout==="horizontal"&&(!t.align||t.align==="left"))("p-divider-center",t.layout==="horizontal"&&t.align==="center"||t.layout==="vertical"&&(!t.align||t.align==="center"))("p-divider-right",t.layout==="horizontal"&&t.align==="right")("p-divider-top",t.layout==="vertical"&&t.align==="top")("p-divider-bottom",t.layout==="vertical"&&t.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[H([lt]),j],ngContentSelectors:Et,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(n,t){n&1&&(de(),a(0,"div",0),ce(1),r())},dependencies:[I,O],encapsulation:2,changeDetection:0})}return i})(),st=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=$({type:i});static \u0275inj=z({imports:[Pt]})}return i})();var Ht=()=>({width:"95vw",maxWidth:"400px"}),It=(i,v)=>v.id;function Ot(i,v){i&1&&(a(0,"div",33),p(1,"i",34),a(2,"div")(3,"span",12),s(4,"App installata"),r(),a(5,"span",13),s(6,"FinanceTracker \xE8 gi\xE0 installata sul tuo dispositivo"),r()()())}function Ft(i,v){if(i&1){let e=x();a(0,"div",35),p(1,"img",36),a(2,"div",37)(3,"span",12),s(4,"Installa FinanceTracker"),r(),a(5,"span",13),s(6,"Accesso rapido, funziona offline, nessun browser"),r()()(),a(7,"button",38),g("click",function(){u(e);let t=d(2);return m(t.installApp())}),r()}}function Lt(i,v){if(i&1&&(a(0,"div",2)(1,"h3"),p(2,"i",32),s(3," App Mobile"),r(),k(4,Ot,7,0,"div",33)(5,Ft,8,0),r()),i&2){let e=d();l(4),L(e.pwa.isInstalled()?4:5)}}function Bt(i,v){if(i&1){let e=x();a(0,"div",39)(1,"span",12),s(2,"7 giorni prima"),r(),a(3,"p-inputSwitch",14),g("onChange",function(t){u(e);let o=d();return m(o.toggleNotif("notifySevenDaysBefore",t.checked))}),r()(),a(4,"div",39)(5,"span",12),s(6,"3 giorni prima"),r(),a(7,"p-inputSwitch",14),g("onChange",function(t){u(e);let o=d();return m(o.toggleNotif("notifyThreeDaysBefore",t.checked))}),r()(),a(8,"div",39)(9,"span",12),s(10,"Il giorno della scadenza"),r(),a(11,"p-inputSwitch",14),g("onChange",function(t){u(e);let o=d();return m(o.toggleNotif("notifyOnDueDate",t.checked))}),r()(),a(12,"div",39)(13,"span",12),s(14,"Pagamenti scaduti"),r(),a(15,"p-inputSwitch",14),g("onChange",function(t){u(e);let o=d();return m(o.toggleNotif("notifyOverdue",t.checked))}),r()(),a(16,"div",39)(17,"span",12),s(18,"Rinnovi abbonamenti"),r(),a(19,"p-inputSwitch",14),g("onChange",function(t){u(e);let o=d();return m(o.toggleNotif("notifyRenewal",t.checked))}),r()()}if(i&2){let e,n,t,o,c,f=d();l(3),h("ngModel",(e=f.notifSettings())==null?null:e.notifySevenDaysBefore),l(4),h("ngModel",(n=f.notifSettings())==null?null:n.notifyThreeDaysBefore),l(4),h("ngModel",(t=f.notifSettings())==null?null:t.notifyOnDueDate),l(4),h("ngModel",(o=f.notifSettings())==null?null:o.notifyOverdue),l(4),h("ngModel",(c=f.notifSettings())==null?null:c.notifyRenewal)}}function Rt(i,v){if(i&1){let e=x();a(0,"button",44),g("click",function(){u(e);let t=d().$implicit,o=d();return m(o.removeCategory(t))}),r()}}function zt(i,v){if(i&1&&(a(0,"div",40),p(1,"span",41)(2,"i",42),a(3,"span"),s(4),r(),k(5,Rt,1,0,"button",43),r()),i&2){let e=v.$implicit;G("system",e.isSystem),l(),T("background",e.color),l(),P(e.icon),l(2),pe(e.name),l(),L(e.isSystem?-1:5)}}var Ui=(()=>{class i{authStore=y(Ee);authService=y(De);fb=y(Xe);messageService=y(ee);pwa=y(Ve);showCatDialog=N(!1);notifEnabled=N(!0);notifSettings=N(this.authStore.notificationSettings());profileForm=this.fb.nonNullable.group({displayName:["",C.required],email:["",[C.required,C.email]]});passwordForm=this.fb.nonNullable.group({currentPassword:["",C.required],newPassword:["",[C.required,C.minLength(6)]]});catForm=this.fb.nonNullable.group({name:["",C.required],icon:["pi pi-tag",C.required],color:["#3b82f6"]});ngOnInit(){let e=this.authStore.currentUser();e&&(this.profileForm.patchValue({displayName:e.displayName,email:e.email}),this.notifEnabled.set(e.settings.notifications.enabled),this.notifSettings.set(e.settings.notifications))}saveProfile(){return S(this,null,function*(){this.profileForm.invalid||(yield this.authService.updateProfile(this.profileForm.getRawValue()),this.messageService.add({severity:"success",summary:"Salvato",detail:"Profilo aggiornato"}))})}toggleDarkMode(e){return S(this,null,function*(){yield this.authService.updateSettings({darkMode:e})})}toggleNotif(e,n){return S(this,null,function*(){let t=this.authStore.notificationSettings()||{},o=ne(ie({},t),{[e]:n});yield this.authService.updateSettings({notifications:o}),this.notifEnabled.set(o.enabled),this.notifSettings.set(o)})}addCategory(){return S(this,null,function*(){if(this.catForm.invalid)return;let{name:e,icon:n,color:t}=this.catForm.getRawValue(),o=[...this.authStore.categories()],c={id:e.toLowerCase().replace(/\s+/g,"-"),name:e,icon:n,color:typeof t=="string"?t:`#${t}`,isSystem:!1};o.push(c),yield this.authService.updateSettings({categories:o}),this.showCatDialog.set(!1),this.catForm.reset({icon:"pi pi-tag",color:"#3b82f6"}),this.messageService.add({severity:"success",summary:"Aggiunta",detail:"Categoria creata"})})}removeCategory(e){return S(this,null,function*(){let n=this.authStore.categories().filter(t=>t.id!==e.id);yield this.authService.updateSettings({categories:n}),this.messageService.add({severity:"info",summary:"Rimossa",detail:"Categoria eliminata"})})}changePassword(){return S(this,null,function*(){if(this.passwordForm.invalid)return;let{currentPassword:e,newPassword:n}=this.passwordForm.getRawValue(),t=yield this.authService.changePassword(e,n);t.success?(this.passwordForm.reset(),this.messageService.add({severity:"success",summary:"Aggiornata",detail:"Password cambiata"})):this.messageService.add({severity:"error",summary:"Errore",detail:t.error||"Errore"})})}installApp(){return S(this,null,function*(){(yield this.pwa.promptInstall())&&this.messageService.add({severity:"success",summary:"Installato!",detail:"App aggiunta al dispositivo"})})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=V({type:i,selectors:[["app-settings"]],features:[H([ee])],decls:83,vars:18,consts:[[1,"ft-page","ft-animate-in"],[1,"ft-page-title",2,"margin-bottom","1.5rem"],[1,"settings-section"],[1,"pi","pi-user"],[3,"ngSubmit","formGroup"],[1,"settings-row"],[1,"field"],["pInputText","","formControlName","displayName",1,"w-full"],["pInputText","","formControlName","email",1,"w-full"],["pButton","","type","submit","label","Salva profilo","icon","pi pi-check",1,"p-button-sm",3,"disabled"],[1,"pi","pi-palette"],[1,"setting-item"],[1,"setting-label"],[1,"setting-desc"],[3,"onChange","ngModel"],[1,"pi","pi-bell"],[1,"pi","pi-tag"],[1,"categories-grid"],[1,"category-chip",3,"system"],[2,"margin-top","1rem"],["pButton","","label","Aggiungi categoria","icon","pi pi-plus",1,"p-button-sm","p-button-outlined",3,"click"],[1,"pi","pi-lock"],["formControlName","currentPassword","styleClass","w-full","inputStyleClass","w-full",3,"toggleMask","feedback"],["formControlName","newPassword","styleClass","w-full","inputStyleClass","w-full","promptLabel","Nuova password","weakLabel","Debole","mediumLabel","Media","strongLabel","Forte",3,"toggleMask"],["pButton","","type","submit","label","Cambia password","icon","pi pi-lock",1,"p-button-sm","p-button-warning",3,"disabled"],["header","Nuova categoria",3,"visibleChange","visible","modal"],["pInputText","","formControlName","name","placeholder","Nome categoria",1,"w-full"],["pInputText","","formControlName","icon","placeholder","pi pi-star",1,"w-full"],["formControlName","color"],[2,"display","flex","justify-content","flex-end","gap","0.5rem","margin-top","1rem"],["pButton","","type","button","label","Annulla",1,"p-button-text",3,"click"],["pButton","","type","submit","label","Aggiungi","icon","pi pi-check",3,"disabled"],[1,"pi","pi-mobile"],[1,"install-status","installed"],[1,"pi","pi-check-circle"],[1,"install-status"],["src","assets/icons/icon-96x96.png","width","56","height","56","alt","FinanceTracker icon",1,"app-icon"],[1,"install-info"],["pButton","","pRipple","","label","Installa sul dispositivo","icon","pi pi-download",1,"p-button-sm","install-btn",3,"click"],[1,"setting-item","sub"],[1,"category-chip"],[1,"cat-dot"],[2,"font-size","0.875rem"],["pButton","","icon","pi pi-times",1,"p-button-text","p-button-sm","p-button-danger"],["pButton","","icon","pi pi-times",1,"p-button-text","p-button-sm","p-button-danger",3,"click"]],template:function(n,t){n&1&&(a(0,"div",0)(1,"h1",1),s(2,"Impostazioni"),r(),k(3,Lt,6,1,"div",2),a(4,"div",2)(5,"h3"),p(6,"i",3),s(7," Profilo"),r(),a(8,"form",4),g("ngSubmit",function(){return t.saveProfile()}),a(9,"div",5)(10,"div",6)(11,"label"),s(12,"Nome visualizzato"),r(),p(13,"input",7),r(),a(14,"div",6)(15,"label"),s(16,"Email"),r(),p(17,"input",8),r()(),p(18,"button",9),r()(),a(19,"div",2)(20,"h3"),p(21,"i",10),s(22," Aspetto"),r(),a(23,"div",11)(24,"div")(25,"span",12),s(26,"Dark Mode"),r(),a(27,"span",13),s(28,"Attiva il tema scuro"),r()(),a(29,"p-inputSwitch",14),g("onChange",function(c){return t.toggleDarkMode(c.checked)}),r()()(),a(30,"div",2)(31,"h3"),p(32,"i",15),s(33," Notifiche"),r(),a(34,"div",11)(35,"div")(36,"span",12),s(37,"Abilita notifiche"),r(),a(38,"span",13),s(39,"Ricevi avvisi per pagamenti in scadenza"),r()(),a(40,"p-inputSwitch",14),g("onChange",function(c){return t.toggleNotif("enabled",c.checked)}),r()(),k(41,Bt,20,5),r(),a(42,"div",2)(43,"h3"),p(44,"i",16),s(45," Categorie"),r(),a(46,"div",17),le(47,zt,6,8,"div",18,It),r(),a(49,"div",19)(50,"button",20),g("click",function(){return t.showCatDialog.set(!0)}),r()()(),a(51,"div",2)(52,"h3"),p(53,"i",21),s(54," Cambia Password"),r(),a(55,"form",4),g("ngSubmit",function(){return t.changePassword()}),a(56,"div",6)(57,"label"),s(58,"Password attuale"),r(),p(59,"p-password",22),r(),a(60,"div",6)(61,"label"),s(62,"Nuova password"),r(),p(63,"p-password",23),r(),p(64,"button",24),r()()(),a(65,"p-dialog",25),he("visibleChange",function(c){return me(t.showCatDialog,c)||(t.showCatDialog=c),c}),a(66,"form",4),g("ngSubmit",function(){return t.addCategory()}),a(67,"div",6)(68,"label"),s(69,"Nome"),r(),p(70,"input",26),r(),a(71,"div",6)(72,"label"),s(73,"Icona (classe PrimeIcon)"),r(),p(74,"input",27),r(),a(75,"div",6)(76,"label"),s(77,"Colore"),r(),p(78,"p-colorPicker",28),r(),a(79,"div",29)(80,"button",30),g("click",function(){return t.showCatDialog.set(!1)}),r(),p(81,"button",31),r()()(),p(82,"p-toast")),n&2&&(l(3),L(t.pwa.canInstall()||t.pwa.isInstalled()?3:-1),l(5),h("formGroup",t.profileForm),l(10),h("disabled",t.profileForm.invalid),l(11),h("ngModel",t.authStore.isDarkMode()),l(11),h("ngModel",t.notifEnabled()),l(),L(t.notifEnabled()?41:-1),l(6),se(t.authStore.categories()),l(8),h("formGroup",t.passwordForm),l(4),h("toggleMask",!0)("feedback",!1),l(4),h("toggleMask",!0),l(),h("disabled",t.passwordForm.invalid),l(),ae(ge(17,Ht)),ue("visible",t.showCatDialog),h("modal",!0),l(),h("formGroup",t.catForm),l(15),h("disabled",t.catForm.invalid))},dependencies:[I,Ue,$e,Re,ze,Ae,je,Ge,Qe,Ne,Ze,qe,nt,it,Le,Fe,We,Ye,Je,Ke,at,Z,tt,et,Oe,Ie,st],styles:[".settings-section[_ngcontent-%COMP%]{background:var(--ft-bg-card);border:1px solid var(--ft-border);border-radius:var(--ft-border-radius);padding:1.5rem;margin-bottom:1.5rem}.settings-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-bottom:1.25rem;font-size:1.125rem}.settings-row[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap}.settings-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{flex:1;min-width:200px}.setting-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.75rem 0;border-bottom:1px solid var(--ft-border)}.setting-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.setting-item.sub[_ngcontent-%COMP%]{padding-left:1.5rem}.setting-label[_ngcontent-%COMP%]{font-weight:500;font-size:.9375rem;display:block}.setting-desc[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--ft-text-secondary)}.categories-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.category-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;background:var(--ft-bg-primary);border-radius:8px;font-size:.875rem}.cat-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%}.field[_ngcontent-%COMP%]{margin-bottom:1rem}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:500;margin-bottom:.5rem;font-size:.875rem;color:var(--ft-text-secondary)}.w-full[_ngcontent-%COMP%]{width:100%}.install-status[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:.75rem 0;margin-bottom:1rem}.install-status.installed[_ngcontent-%COMP%]{color:var(--ft-success, #22c55e)}.install-status.installed[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem}.app-icon[_ngcontent-%COMP%]{border-radius:16px;box-shadow:var(--ft-shadow)}.install-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.install-btn[_ngcontent-%COMP%]{width:100%;justify-content:center}"],changeDetection:0})}return i})();export{Ui as SettingsComponent};
