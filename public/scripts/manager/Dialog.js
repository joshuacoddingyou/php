//>>built
require({cache:{"url:manager/templates/Dialog.html":'\x3cdiv class\x3d"mBoxPaneDialog mElement" role\x3d"dialog" aria-labelledby\x3d"${id}_title"  cleanContent\x3d"true"\x3e\n    \x3cdiv \x3e\n\t\x3cspan\x3e\x3c/span\x3e\n\t\x3cspan dojoAttachPoint\x3d"closeButtonNode"\x3e\x3c/span\x3e\n    \x3c/div\x3e  \n\x3cdiv  id\x3d"${id}_container" dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("manager/Dialog","dojo/_base/declare dojo/_base/window dojo/_base/lang dojo/aspect dojo/dom-geometry dojo/query dojo/has dojo/topic dojo/dom-class dojo/dom-style dijit/Dialog dojo/dnd/Moveable manager/ElementPane dojo/text!./templates/Dialog.html".split(" "),function(c,p,d,e,q,f,g,r,h,s,k,l,m,n){return c("Manager.Dialog",[k,m],{widgetsInTemplate:!0,templateString:n,enableDrag:function(){var a=this.domNode,b=f(" \x3e form div div *",this.containerNode.id).shift();b&&this.draggable?(this._moveable=
new (6==g("ie")?TimedMoveable:l)(a,{handle:b}),e.after(this._moveable,"onMoveStop",d.hitch(this,"_endDrag"),!0)):h.add(a,"dijitDialogFixed")}})});
//@ sourceMappingURL=Dialog.js.map