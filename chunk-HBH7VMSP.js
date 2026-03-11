import{a as Ot,b as At}from"./chunk-XF345PPZ.js";import{a as Rt}from"./chunk-KNXQFZP3.js";import{a as $t,b as Et}from"./chunk-NZUODPOI.js";import{a as Ht,f as Dt}from"./chunk-5FTE5DN3.js";import{Da as St,Fa as Vt,G as Tt,Ga as it,L as Ct,M as V,N as xt,Na as Ft,O as g,Oa as Pt,Sa as Bt,U as tt,Y as O,j as vt,l as Y,la as wt,m as yt,n as Z,p as B,s as R,ta as et,ua as A,wa as It,za as kt}from"./chunk-SFT2U5JN.js";import{Ab as j,Bb as U,Cb as m,Db as w,Eb as u,Fb as h,Ga as s,Jb as _,Kb as P,Lb as ut,Mb as ht,Nb as _t,Rb as G,S as at,Sa as $,T as ot,Ta as st,Tb as ft,U as rt,Ub as mt,Wa as N,Ya as d,Z as y,Zb as J,_b as X,da as C,db as f,ea as x,eb as b,fb as q,g as nt,ga as H,gb as lt,hb as ct,ib as K,jb as T,kc as I,lb as dt,lc as gt,ma as D,mb as E,nb as F,ob as c,pb as p,qb as v,rb as pt,sa as z,sb as bt,tb as W,ub as k,yb as S,zb as l}from"./chunk-2NNAJRAH.js";var Qt=["content"],Kt=["header"],Wt=["lefticon"],jt=["righticon"],Ut=["closeicon"],Mt=["*"];function Gt(e,o){e&1&&W(0)}function Jt(e,o){if(e&1&&(pt(0),d(1,Gt,1,0,"ng-container",3),bt()),e&2){let t=l(2);s(),b("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)}}function Xt(e,o){if(e&1&&(c(0,"div",1),U(1),d(2,Jt,2,1,"ng-container",2),p()),e&2){let t=l();b("hidden",!t.selected),f("id",t.tabView.getTabContentId(t.id))("aria-hidden",!t.selected)("aria-labelledby",t.tabView.getTabHeaderActionId(t.id))("data-pc-name","tabpanel"),s(2),b("ngIf",(t.contentTemplate||t._contentTemplate)&&(t.cache?t.loaded:t.selected))}}var Yt=["previousicon"],Zt=["nexticon"],te=["navbar"],ee=["prevBtn"],ie=["nextBtn"],ne=["inkbar"],ae=["elementToObserve"],oe=e=>({"p-tablist-viewport":e}),re=(e,o)=>({"p-tab":!0,"p-tab-active":e,"p-disabled":o});function se(e,o){e&1&&v(0,"ChevronLeftIcon"),e&2&&f("aria-hidden",!0)}function le(e,o){}function ce(e,o){e&1&&d(0,le,0,0,"ng-template")}function de(e,o){if(e&1){let t=k();c(0,"button",12,3),S("click",function(){C(t);let n=l();return x(n.navBackward())}),d(2,se,1,1,"ChevronLeftIcon",13)(3,ce,1,0,null,14),p()}if(e&2){let t=l();f("tabindex",t.tabindex)("aria-label",t.prevButtonAriaLabel),s(2),b("ngIf",!t.previousIconTemplate&&!t._previousIconTemplate),s(),b("ngTemplateOutlet",t.previousIconTemplate&&t._previousIconTemplate)}}function pe(e,o){e&1&&W(0)}function be(e,o){if(e&1&&d(0,pe,1,0,"ng-container",14),e&2){let t=l(2).$implicit;b("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function ue(e,o){}function he(e,o){e&1&&d(0,ue,0,0,"ng-template")}function _e(e,o){if(e&1&&d(0,he,1,0,null,14),e&2){let t=l(3).$implicit;b("ngTemplateOutlet",t.leftIconTemplate||t._leftIconTemplate)}}function fe(e,o){if(e&1&&v(0,"span",17),e&2){let t=l(3).$implicit;b("ngClass",t.leftIcon)}}function me(e,o){}function ge(e,o){e&1&&d(0,me,0,0,"ng-template")}function ve(e,o){if(e&1&&d(0,ge,1,0,null,14),e&2){let t=l(3).$implicit;b("ngTemplateOutlet",t.rightIconTemplate||t._rightIconTemplate)}}function ye(e,o){if(e&1&&v(0,"span",18),e&2){let t=l(3).$implicit;b("ngClass",t.rightIcon)}}function Te(e,o){}function Ce(e,o){e&1&&d(0,Te,0,0,"ng-template")}function xe(e,o){if(e&1&&d(0,Ce,1,0,null,14),e&2){let t=l(4).$implicit;b("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function we(e,o){if(e&1){let t=k();c(0,"TimesIcon",19),S("click",function(n){C(t);let a=l(4).$implicit,r=l();return x(r.close(n,a))}),p()}}function Ie(e,o){if(e&1&&d(0,xe,1,1)(1,we,1,0,"TimesIcon"),e&2){let t=l(3).$implicit;T(t.closeIconTemplate||t._closeIconTemplate?0:1)}}function ke(e,o){if(e&1&&(d(0,_e,1,1)(1,fe,1,1,"span",17),_(2),d(3,ve,1,1)(4,ye,1,1,"span",18)(5,Ie,2,1)),e&2){let t=l(2).$implicit;T(t.leftIconTemplate||t._leftIconTemplate?0:t.leftIcon&&!t.leftIconTemplate&&!t._leftIconTemplate?1:-1),s(2),ut(" ",t.header," "),s(),T(t.rightIconTemplate||t._rightIconTemplate?3:t.rightIcon&&!t.rightIconTemplate&&!t._rightIconTemplate?4:-1),s(2),T(t.closable?5:-1)}}function Se(e,o){if(e&1){let t=k();c(0,"button",15),S("click",function(n){C(t);let a=l().$implicit,r=l();return x(r.open(n,a))})("keydown",function(n){C(t);let a=l().$implicit,r=l();return x(r.onTabKeyDown(n,a))}),d(1,be,1,1,"ng-container")(2,ke,6,4),p(),v(3,"span",16,4)}if(e&2){let t=l(),i=t.$implicit,n=t.$index,a=l();K(i.headerStyleClass),b("ngClass",mt(22,re,i.selected,i.disabled))("ngStyle",i.headerStyle)("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass)("disabled",i.disabled),f("role","tab")("id",a.getTabHeaderActionId(i.id))("aria-controls",a.getTabContentId(i.id))("aria-selected",i.selected)("tabindex",i.disabled||!i.selected?"-1":a.tabindex)("aria-disabled",i.disabled)("data-pc-index",n)("data-p-disabled",i.disabled)("data-pc-section","headeraction")("data-p-active",i.selected),s(),T(i.headerTemplate||i._headerTemplate?1:2),s(2),f("aria-hidden",!0)("data-pc-section","inkbar")}}function Ve(e,o){if(e&1&&d(0,Se,5,25),e&2){let t=o.$implicit;T(t.closed?-1:0)}}function $e(e,o){}function Ee(e,o){e&1&&d(0,$e,0,0,"ng-template")}function Fe(e,o){if(e&1&&d(0,Ee,1,0,null,14),e&2){let t=l(2);b("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Pe(e,o){e&1&&v(0,"ChevronRightIcon"),e&2&&f("aria-hidden",!0)}function Be(e,o){if(e&1){let t=k();c(0,"button",20,5),S("click",function(){C(t);let n=l();return x(n.navForward())}),d(2,Fe,1,1)(3,Pe,1,1,"ChevronRightIcon"),p()}if(e&2){let t=l();f("tabindex",t.tabindex)("aria-label",t.nextButtonAriaLabel),s(2),T(t.nextIconTemplate||t._nextIconTemplate?2:3)}}var Oe=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,Ae={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},Q=(()=>{class e extends It{name="tabs";theme=Oe;classes=Ae;static \u0275fac=(()=>{let t;return function(n){return(t||(t=H(e)))(n||e)}})();static \u0275prov=ot({token:e,factory:e.\u0275fac})}return e})();var M=(()=>{class e extends it{closable=!1;get headerStyle(){return this._headerStyle}set headerStyle(t){this._headerStyle=t,this.tabView.cd.markForCheck()}get headerStyleClass(){return this._headerStyleClass}set headerStyleClass(t){this._headerStyleClass=t,this.tabView.cd.markForCheck()}cache=!0;tooltip;tooltipPosition="top";tooltipPositionStyle="absolute";tooltipStyleClass;get selected(){return!!this._selected}set selected(t){this._selected=t,this.loaded||this.cd.detectChanges(),t&&(this.loaded=!0)}get disabled(){return!!this._disabled}set disabled(t){this._disabled=t,this.tabView.cd.markForCheck()}get header(){return this._header}set header(t){this._header=t,Promise.resolve().then(()=>{this.tabView.updateInkBar(),this.tabView.cd.markForCheck()})}get leftIcon(){return this._leftIcon}set leftIcon(t){this._leftIcon=t,this.tabView.cd.markForCheck()}get rightIcon(){return this._rightIcon}set rightIcon(t){this._rightIcon=t,this.tabView.cd.markForCheck()}closed=!1;_headerStyle;_headerStyleClass;_selected;_disabled;_header;_leftIcon;_rightIcon=void 0;loaded=!1;id=wt("pn_id_");contentTemplate;headerTemplate;leftIconTemplate;rightIconTemplate;closeIconTemplate;templates;tabView=y(at(()=>L));_componentStyle=y(Q);_headerTemplate;_contentTemplate;_rightIconTemplate;_leftIconTemplate;_closeIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"righticon":this._rightIconTemplate=t.template;break;case"lefticon":this._leftIconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=H(e)))(n||e)}})();static \u0275cmp=$({type:e,selectors:[["p-tabPanel"],["p-tabpanel"]],contentQueries:function(i,n,a){if(i&1&&(m(a,Qt,5),m(a,Kt,5),m(a,Wt,5),m(a,jt,5),m(a,Ut,5),m(a,et,4)),i&2){let r;u(r=h())&&(n.contentTemplate=r.first),u(r=h())&&(n.headerTemplate=r.first),u(r=h())&&(n.leftIconTemplate=r.first),u(r=h())&&(n.rightIconTemplate=r.first),u(r=h())&&(n.closeIconTemplate=r.first),u(r=h())&&(n.templates=r)}},inputs:{closable:[2,"closable","closable",I],headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:[2,"cache","cache",I],tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},features:[G([Q]),N],ngContentSelectors:Mt,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(j(),d(0,Xt,3,6,"div",0)),i&2&&b("ngIf",!n.closed)},dependencies:[B,Y,Z,A],encapsulation:2})}return e})(),L=(()=>{class e extends it{get hostClass(){return this.styleClass}get hostStyle(){return this.style}style;styleClass;controlClose;scrollable;get activeIndex(){return this._activeIndex}set activeIndex(t){if(this._activeIndex=t,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.tabs&&this.tabs.length&&this._activeIndex!=null&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0,this.updateScrollBar(t))}selectOnFocus=!1;nextButtonAriaLabel;prevButtonAriaLabel;autoHideButtons=!0;tabindex=0;onChange=new D;onClose=new D;activeIndexChange=new D;content;navbar;prevBtn;nextBtn;inkbar;tabPanels;initialized;tabs;_activeIndex;preventActiveIndexPropagation;tabChanged;backwardIsDisabled=!0;forwardIsDisabled=!1;tabChangesSubscription;resizeObserver;container;list;buttonVisible;elementToObserve;previousIconTemplate;nextIconTemplate;_previousIconTemplate;_nextIconTemplate;_componentStyle=y(Q);templates;ngOnInit(){super.ngOnInit(),console.log("TabView component is deprecated as of v18. Use Tabs component instead.")}ngAfterContentInit(){this.initTabs(),this.tabChangesSubscription=this.tabPanels.changes.subscribe(t=>{this.initTabs(),this.refreshButtonState()}),this.templates.forEach(t=>{switch(t.getType()){case"previousicon":this._previousIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),R(this.platformId)&&this.autoHideButtons&&this.bindResizeObserver()}bindResizeObserver(){this.container=V(this.el.nativeElement,'[data-pc-section="navcontent"]'),this.list=V(this.el.nativeElement,'[data-pc-section="nav"]'),this.resizeObserver=new ResizeObserver(()=>{this.list.offsetWidth>=this.container.offsetWidth?this.buttonVisible=!0:this.buttonVisible=!1,this.updateButtonState(),this.cd.detectChanges()}),this.resizeObserver.observe(this.container)}unbindResizeObserver(){this.resizeObserver.unobserve(this.elementToObserve.nativeElement),this.resizeObserver=null}ngAfterViewChecked(){R(this.platformId)&&this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}ngOnDestroy(){this.tabChangesSubscription&&this.tabChangesSubscription.unsubscribe(),this.resizeObserver&&this.unbindResizeObserver(),super.ngOnDestroy()}getTabHeaderActionId(t){return`${t}_header_action`}getTabContentId(t){return`${t}_content`}initTabs(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(this.activeIndex!=null&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}onTabKeyDown(t,i){switch(t.code){case"ArrowLeft":this.onTabArrowLeftKey(t);break;case"ArrowRight":this.onTabArrowRightKey(t);break;case"Home":this.onTabHomeKey(t);break;case"End":this.onTabEndKey(t);break;case"PageDown":this.onTabEndKey(t);break;case"PageUp":this.onTabHomeKey(t);break;case"Enter":case"Space":this.open(t,i);break;default:break}}onTabArrowLeftKey(t){let i=this.findPrevHeaderAction(t.currentTarget),n=g(i,"data-pc-index");i?this.changeFocusedTab(t,i,n):this.onTabEndKey(t),t.preventDefault()}onTabArrowRightKey(t){let i=this.findNextHeaderAction(t.currentTarget),n=g(i,"data-pc-index");i?this.changeFocusedTab(t,i,n):this.onTabHomeKey(t),t.preventDefault()}onTabHomeKey(t){let i=this.findFirstHeaderAction(),n=g(i,"data-pc-index");this.changeFocusedTab(t,i,n),t.preventDefault()}onTabEndKey(t){let i=this.findLastHeaderAction(),n=g(i,"data-pc-index");this.changeFocusedTab(t,i,n),t.preventDefault()}changeFocusedTab(t,i,n){if(i&&(xt(i),i.scrollIntoView({block:"nearest"}),this.selectOnFocus)){let a=this.tabs[n];this.open(t,a)}}findNextHeaderAction(t,i=!1){let n=i?t:t.nextElementSibling;return n?g(n,"data-p-disabled")||g(n,"data-pc-section")==="inkbar"?this.findNextHeaderAction(n):n:null}findPrevHeaderAction(t,i=!1){let n=i?t:t.previousElementSibling;return n?g(n,"data-p-disabled")||g(n,"data-pc-section")==="inkbar"?this.findPrevHeaderAction(n):n:null}findFirstHeaderAction(){let t=this.navbar.nativeElement.firstElementChild;return this.findNextHeaderAction(t,!0)}findLastHeaderAction(){let t=this.navbar.nativeElement.lastElementChild,i=g(t,"data-pc-section")==="inkbar"?t.previousElementSibling:t;return this.findPrevHeaderAction(i,!0)}open(t,i){if(i.disabled){t&&t.preventDefault();return}if(!i.selected){let n=this.findSelectedTab();n&&(n.selected=!1),this.tabChanged=!0,i.selected=!0;let a=this.findTabIndex(i);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(a),this.onChange.emit({originalEvent:t,index:a}),this.updateScrollBar(a)}t&&t.preventDefault()}close(t,i){this.controlClose?this.onClose.emit({originalEvent:t,index:this.findTabIndex(i),close:()=>{this.closeTab(i)}}):(this.closeTab(i),this.onClose.emit({originalEvent:t,index:this.findTabIndex(i)})),t.stopPropagation()}closeTab(t){if(!t.disabled){if(t.selected){this.tabChanged=!0,t.selected=!1;for(let i=0;i<this.tabs.length;i++){let n=this.tabs[i];if(!n.closed&&!t.disabled){n.selected=!0;break}}}t.closed=!0}}findSelectedTab(){for(let t=0;t<this.tabs.length;t++)if(this.tabs[t].selected)return this.tabs[t];return null}findTabIndex(t){let i=-1;for(let n=0;n<this.tabs.length;n++)if(this.tabs[n]==t){i=n;break}return i}getBlockableElement(){return this.el.nativeElement.children[0]}updateInkBar(){if(R(this.platformId)&&this.navbar){let t=V(this.navbar.nativeElement,'[data-pc-section="headeraction"][data-p-active="true"]');if(!t)return;this.inkbar.nativeElement.style.width=Tt(t)+"px",this.inkbar.nativeElement.style.left=tt(t).left-tt(this.navbar.nativeElement).left+"px"}}updateScrollBar(t){let i=Ct(this.navbar.nativeElement,'[data-pc-section="headeraction"]')[t];i&&i.scrollIntoView({block:"nearest"})}updateButtonState(){let t=this.content.nativeElement,{scrollLeft:i,scrollWidth:n}=t,a=O(t);this.backwardIsDisabled=i===0,this.forwardIsDisabled=Math.round(i)===n-a}refreshButtonState(){this.container=V(this.el.nativeElement,'[data-pc-section="navcontent"]'),this.list=V(this.el.nativeElement,'[data-pc-section="nav"]'),this.list.offsetWidth>=this.container.offsetWidth&&(this.list.offsetWidth>=this.container.offsetWidth?this.buttonVisible=!0:this.buttonVisible=!1,this.updateButtonState(),this.cd.markForCheck())}onScroll(t){this.scrollable&&this.updateButtonState(),t.preventDefault()}getVisibleButtonWidths(){return[this.prevBtn?.nativeElement,this.nextBtn?.nativeElement].reduce((t,i)=>i?t+O(i):t,0)}navBackward(){let t=this.content.nativeElement,i=O(t)-this.getVisibleButtonWidths(),n=t.scrollLeft-i;t.scrollLeft=n<=0?0:n}navForward(){let t=this.content.nativeElement,i=O(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i;t.scrollLeft=n>=a?a:n}static \u0275fac=(()=>{let t;return function(n){return(t||(t=H(e)))(n||e)}})();static \u0275cmp=$({type:e,selectors:[["p-tabView"],["p-tabview"]],contentQueries:function(i,n,a){if(i&1&&(m(a,Yt,5),m(a,Zt,5),m(a,M,4),m(a,et,4)),i&2){let r;u(r=h())&&(n.previousIconTemplate=r.first),u(r=h())&&(n.nextIconTemplate=r.first),u(r=h())&&(n.tabPanels=r),u(r=h())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(w(Qt,5),w(te,5),w(ee,5),w(ie,5),w(ne,5),w(ae,5)),i&2){let a;u(a=h())&&(n.content=a.first),u(a=h())&&(n.navbar=a.first),u(a=h())&&(n.prevBtn=a.first),u(a=h())&&(n.nextBtn=a.first),u(a=h())&&(n.inkbar=a.first),u(a=h())&&(n.elementToObserve=a.first)}},hostVars:11,hostBindings:function(i,n){i&2&&(f("data-pc-name","tabview"),ct(n.hostStyle),K(n.hostClass),lt("p-tabs",!0)("p-tabs-scrollable",n.scrollable)("p-component",!0))},inputs:{style:"style",styleClass:"styleClass",controlClose:[2,"controlClose","controlClose",I],scrollable:[2,"scrollable","scrollable",I],activeIndex:"activeIndex",selectOnFocus:[2,"selectOnFocus","selectOnFocus",I],nextButtonAriaLabel:"nextButtonAriaLabel",prevButtonAriaLabel:"prevButtonAriaLabel",autoHideButtons:[2,"autoHideButtons","autoHideButtons",I],tabindex:[2,"tabindex","tabindex",gt]},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},features:[G([Q]),N],ngContentSelectors:Mt,decls:12,vars:7,consts:[["elementToObserve",""],["content",""],["navbar",""],["prevBtn",""],["inkbar",""],["nextBtn",""],[1,"p-tablist"],["class","p-tablist-prev-button p-tablist-nav-button","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["class","p-tablist-next-button p-tablist-nav-button","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabpanels"],["type","button","pRipple","",1,"p-tablist-prev-button","p-tablist-nav-button",3,"click"],[4,"ngIf"],[4,"ngTemplateOutlet"],["pRipple","",3,"click","keydown","ngClass","ngStyle","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","disabled"],["role","presentation",1,"p-tablist-active-bar"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-right-icon",3,"ngClass"],[3,"click"],["type","button","pRipple","",1,"p-tablist-next-button","p-tablist-nav-button",3,"click"]],template:function(i,n){if(i&1){let a=k();j(),c(0,"div",6,0),d(2,de,4,4,"button",7),c(3,"div",8,1),S("scroll",function(Nt){return C(a),x(n.onScroll(Nt))}),c(5,"div",9,2),E(7,Ve,1,1,null,null,dt),p()(),d(9,Be,4,3,"button",10),p(),c(10,"div",11),U(11),p()}i&2&&(s(2),b("ngIf",n.scrollable&&!n.backwardIsDisabled&&n.autoHideButtons),s(),b("ngClass",ft(5,oe,n.scrollable)),f("data-pc-section","navcontent"),s(2),f("data-pc-section","nav"),s(2),F(n.tabs),s(2),b("ngIf",n.scrollable&&!n.forwardIsDisabled&&n.buttonVisible))},dependencies:[B,vt,Y,Z,yt,A,At,Ot,Pt,Ft,$t,Et],encapsulation:2,changeDetection:0})}return e})(),Lt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=st({type:e});static \u0275inj=rt({imports:[L,M,A,A]})}return e})();var zt=(e,o)=>o.id;function De(e,o){if(e&1&&(c(0,"div",5)(1,"div",8),v(2,"div",9),c(3,"div",10)(4,"span",11),_(5),p(),c(6,"span",12),_(7),p()()(),c(8,"span",13),_(9),J(10,"euroCurrency"),p()()),e&2){let t=o.$implicit,i=l();s(2),q("background",i.getCategoryColor(t.categoryId)),s(3),P(t.recurringPaymentName),s(2),_t(" Pagato il ",i.formatDate(t.paidDate)," \xB7 Scadenza ",i.formatDate(t.dueDate)," \xB7 ",i.getCategoryName(t.categoryId)," "),s(2),P(X(10,7,t.amount))}}function Re(e,o){e&1&&(c(0,"p",6),_(1,"Nessun pagamento nello storico"),p())}function Qe(e,o){if(e&1&&(c(0,"div",5)(1,"div",8),v(2,"div",9),c(3,"div",10)(4,"span",11),_(5),p(),c(6,"span",12),_(7),p()()(),c(8,"span",13),_(9),J(10,"euroCurrency"),p()()),e&2){let t=o.$implicit,i=l();s(2),q("background",i.getCategoryColor(t.categoryId)),s(3),P(t.description),s(2),ht(" ",i.formatDate(t.date)," \xB7 ",i.getCategoryName(t.categoryId)," "),s(2),P(X(10,6,t.amount))}}function Me(e,o){e&1&&(c(0,"p",6),_(1,"Nessuna spesa registrata"),p())}var yi=(()=>{class e{authStore=y(kt);recurringRepo=y(Vt);expenseRepo=y(St);recurringHistory=z([]);allExpenses=z([]);ngOnInit(){return nt(this,null,function*(){let t=this.authStore.userId();if(!t)return;let i=yield this.recurringRepo.getHistory(t);this.recurringHistory.set(i);let n=yield this.expenseRepo.getAll(t);this.allExpenses.set(n)})}getCategoryName(t){return this.authStore.categories().find(i=>i.id===t)?.name||t}getCategoryColor(t){return this.authStore.categories().find(i=>i.id===t)?.color||"#64748b"}formatDate(t){return Dt(t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=$({type:e,selectors:[["app-history"]],decls:15,vars:2,consts:[[1,"ft-page","ft-animate-in"],[1,"ft-page-header"],[1,"ft-page-title"],["header","Pagamenti pagati"],[1,"history-list"],[1,"history-item"],[1,"empty-text"],["header","Tutte le spese"],[1,"history-left"],[1,"history-dot"],[1,"history-info"],[1,"history-name"],[1,"history-meta"],[1,"history-amount"]],template:function(i,n){i&1&&(c(0,"div",0)(1,"div",1)(2,"h1",2),_(3,"Storico"),p()(),c(4,"p-tabView")(5,"p-tabPanel",3)(6,"div",4),E(7,De,11,9,"div",5,zt,!1,Re,2,0,"p",6),p()(),c(10,"p-tabPanel",7)(11,"div",4),E(12,Qe,11,8,"div",5,zt,!1,Me,2,0,"p",6),p()()()()),i&2&&(s(7),F(n.recurringHistory()),s(5),F(n.allExpenses()))},dependencies:[B,Ht,Lt,L,M,Bt,Rt],styles:[".history-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;padding-top:.5rem}.history-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.75rem 1rem;background:var(--ft-bg-primary);border-radius:8px;transition:var(--ft-transition)}.history-item[_ngcontent-%COMP%]:hover{background:var(--ft-bg-card-hover)}.history-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;flex:1;min-width:0}.history-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;flex-shrink:0}.history-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.history-name[_ngcontent-%COMP%]{font-weight:600;font-size:.9375rem}.history-meta[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--ft-text-secondary)}.history-amount[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap}.empty-text[_ngcontent-%COMP%]{color:var(--ft-text-muted);padding:2rem 0;text-align:center}"],changeDetection:0})}return e})();export{yi as HistoryComponent};
