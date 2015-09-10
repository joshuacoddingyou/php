//>>built
define("dojox/mobile/_IconItemPane",["dojo/_base/declare","dojo/dom-construct","./Pane","./iconUtils","./sniff"],function(c,b,d,e,f){return c("dojox.mobile._IconItemPane",d,{iconPos:"",closeIconRole:"",closeIconTitle:"",label:"",closeIcon:"mblDomButtonBlueMinus",baseClass:"mblIconItemPane",tabIndex:"0",_setTabIndexAttr:"closeIconNode",buildRendering:function(){this.inherited(arguments);this.hide();this.closeHeaderNode=b.create("h2",{className:"mblIconItemPaneHeading"},this.domNode);this.closeIconNode=
b.create("div",{className:"mblIconItemPaneIcon",role:this.closeIconRole,title:this.closeIconTitle},this.closeHeaderNode);this.labelNode=b.create("span",{className:"mblIconItemPaneTitle"},this.closeHeaderNode);this.containerNode=b.create("div",{className:"mblContent"},this.domNode)},show:function(){this.domNode.style.display=""},hide:function(){this.domNode.style.display="none"},isOpen:function(a){return"none"!==this.domNode.style.display},_setLabelAttr:function(a){this._set("label",a);this.labelNode.innerHTML=
this._cv?this._cv(a):a},_setCloseIconAttr:function(a){this._set("closeIcon",a);this.closeIconNode=e.setIcon(a,this.iconPos,this.closeIconNode,null,this.closeHeaderNode);f("windows-theme")&&""!==this.closeIconTitle&&(this.closeButtonNode=b.create("span",{className:"mblButton mblCloseButton",innerHTML:this.closeIconTitle,style:{display:"none"}},this.closeIconNode))}})});
//@ sourceMappingURL=_IconItemPane.js.map