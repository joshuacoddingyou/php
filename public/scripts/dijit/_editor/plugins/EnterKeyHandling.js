//>>built
define("dijit/_editor/plugins/EnterKeyHandling","dojo/_base/declare dojo/dom-construct dojo/keys dojo/_base/lang dojo/on dojo/sniff dojo/_base/window dojo/window ../_Plugin ../RichText ../range ../../_base/focus".split(" "),function(v,m,w,r,u,p,x,s,y,t,h,z){return v("dijit._editor.plugins.EnterKeyHandling",y,{blockNodeForEnter:"BR",constructor:function(b){b&&("blockNodeForEnter"in b&&(b.blockNodeForEnter=b.blockNodeForEnter.toUpperCase()),r.mixin(this,b))},setEditor:function(b){if(this.editor!==b)if(this.editor=
b,"BR"==this.blockNodeForEnter)this.editor.customUndo=!0,b.onLoadDeferred.then(r.hitch(this,function(a){this.own(u(b.document,"keydown",r.hitch(this,function(a){if(a.keyCode==w.ENTER){var b=r.mixin({},a);b.shiftKey=!0;this.handleEnterKey(b)||(a.stopPropagation(),a.preventDefault())}})));9<=p("ie")&&10>=p("ie")&&this.own(u(b.document,"paste",r.hitch(this,function(a){setTimeout(r.hitch(this,function(){var a=this.editor.document.selection.createRange();a.move("character",-1);a.select();a.move("character",
1);a.select()}),0)})));return a}));else if(this.blockNodeForEnter){var a=r.hitch(this,"handleEnterKey");b.addKeyHandler(13,0,0,a);b.addKeyHandler(13,0,1,a);this.own(this.editor.on("KeyPressed",r.hitch(this,"onKeyPressed")))}},onKeyPressed:function(){if(this._checkListLater){if(x.withGlobal(this.editor.window,"isCollapsed",z)){var b=this.editor.selection.getAncestorElement("LI");if(b){p("mozilla")&&"LI"==b.parentNode.parentNode.nodeName&&(b=b.parentNode.parentNode);var a=b.firstChild;if(a&&1==a.nodeType&&
("UL"==a.nodeName||"OL"==a.nodeName))b.insertBefore(a.ownerDocument.createTextNode("\u00a0"),a),a=h.create(this.editor.window),a.setStart(b.firstChild,0),b=h.getSelection(this.editor.window,!0),b.removeAllRanges(),b.addRange(a)}else t.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter),(b=this.editor.selection.getAncestorElement(this.blockNodeForEnter))?(b.innerHTML=this.bogusHtmlContent,9>=p("ie")&&(b=this.editor.document.selection.createRange(),b.move("character",-1),b.select())):
console.error("onKeyPressed: Cannot find the new block node")}this._checkListLater=!1}this._pressedEnterInBlock&&(this._pressedEnterInBlock.previousSibling&&this.removeTrailingBr(this._pressedEnterInBlock.previousSibling),delete this._pressedEnterInBlock)},bogusHtmlContent:"\x26#160;",blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI)$/,handleEnterKey:function(b){var a,g,d,e,k=this.editor.document,c,f;if(b.shiftKey){b=this.editor.selection.getParentElement();var n=h.getAncestor(b,this.blockNodes);if(n){if("LI"==
n.tagName)return!0;b=h.getSelection(this.editor.window);a=b.getRangeAt(0);a.collapsed||(a.deleteContents(),b=h.getSelection(this.editor.window),a=b.getRangeAt(0));if(h.atBeginningOfContainer(n,a.startContainer,a.startOffset))c=k.createElement("br"),a=h.create(this.editor.window),n.insertBefore(c,n.firstChild),a.setStartAfter(c),b.removeAllRanges(),b.addRange(a);else if(h.atEndOfContainer(n,a.startContainer,a.startOffset))a=h.create(this.editor.window),c=k.createElement("br"),n.appendChild(c),n.appendChild(k.createTextNode("\u00a0")),
a.setStart(n.lastChild,0),b.removeAllRanges(),b.addRange(a);else return(f=a.startContainer)&&3==f.nodeType?(d=f.nodeValue,g=k.createTextNode(d.substring(0,a.startOffset)),d=k.createTextNode(d.substring(a.startOffset)),e=k.createElement("br"),""==d.nodeValue&&p("webkit")&&(d=k.createTextNode("\u00a0")),m.place(g,f,"after"),m.place(e,g,"after"),m.place(d,e,"after"),m.destroy(f),a=h.create(this.editor.window),a.setStart(d,0),b.removeAllRanges(),b.addRange(a),!1):!0}else if(b=h.getSelection(this.editor.window),
b.rangeCount){if((a=b.getRangeAt(0))&&a.startContainer)a.collapsed||(a.deleteContents(),b=h.getSelection(this.editor.window),a=b.getRangeAt(0)),(f=a.startContainer)&&3==f.nodeType?(n=!1,c=a.startOffset,f.length<c&&(d=this._adjustNodeAndOffset(f,c),f=d.node,c=d.offset),d=f.nodeValue,g=k.createTextNode(d.substring(0,c)),d=k.createTextNode(d.substring(c)),e=k.createElement("br"),d.length||(d=k.createTextNode("\u00a0"),n=!0),g.length?m.place(g,f,"after"):g=f,m.place(e,g,"after"),m.place(d,e,"after"),
m.destroy(f),a=h.create(this.editor.window),a.setStart(d,0),a.setEnd(d,d.length),b.removeAllRanges(),b.addRange(a),n&&!p("webkit")?this.editor.selection.remove():this.editor.selection.collapse(!0)):(0<=a.startOffset&&(c=f.childNodes[a.startOffset]),e=k.createElement("br"),d=k.createTextNode("\u00a0"),c?(m.place(e,c,"before"),m.place(d,e,"after")):(f.appendChild(e),f.appendChild(d)),a=h.create(this.editor.window),a.setStart(d,0),a.setEnd(d,d.length),b.removeAllRanges(),b.addRange(a),this.editor.selection.collapse(!0))}else t.prototype.execCommand.call(this.editor,
"inserthtml","\x3cbr\x3e");return!1}var q=!0;b=h.getSelection(this.editor.window);a=b.getRangeAt(0);a.collapsed||(a.deleteContents(),b=h.getSelection(this.editor.window),a=b.getRangeAt(0));c=h.getBlockAncestor(a.endContainer,null,this.editor.editNode);if(this._checkListLater=(e=c.blockNode)&&("LI"==e.nodeName||"LI"==e.parentNode.nodeName))return p("mozilla")&&(this._pressedEnterInBlock=e),/^(\s|&nbsp;|&#160;|\xA0|<span\b[^>]*\bclass=['"]Apple-style-span['"][^>]*>(\s|&nbsp;|&#160;|\xA0)<\/span>)?(<br>)?$/.test(e.innerHTML)&&
(e.innerHTML="",p("webkit")&&(a=h.create(this.editor.window),a.setStart(e,0),b.removeAllRanges(),b.addRange(a)),this._checkListLater=!1),!0;if(!c.blockNode||c.blockNode===this.editor.editNode){try{t.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter)}catch(r){}c={blockNode:this.editor.selection.getAncestorElement(this.blockNodeForEnter),blockContainer:this.editor.editNode};if(c.blockNode){if(c.blockNode!=this.editor.editNode&&!(c.blockNode.textContent||c.blockNode.innerHTML).replace(/^\s+|\s+$/g,
"").length)return this.removeTrailingBr(c.blockNode),!1}else c.blockNode=this.editor.editNode;b=h.getSelection(this.editor.window);a=b.getRangeAt(0)}e=k.createElement(this.blockNodeForEnter);e.innerHTML=this.bogusHtmlContent;this.removeTrailingBr(c.blockNode);var l=a.endOffset,q=a.endContainer;q.length<l&&(d=this._adjustNodeAndOffset(q,l),q=d.node,l=d.offset);if(h.atEndOfContainer(c.blockNode,q,l))c.blockNode===c.blockContainer?c.blockNode.appendChild(e):m.place(e,c.blockNode,"after"),q=!1,a=h.create(this.editor.window),
a.setStart(e,0),b.removeAllRanges(),b.addRange(a),this.editor.height&&s.scrollIntoView(e);else if(h.atBeginningOfContainer(c.blockNode,a.startContainer,a.startOffset))m.place(e,c.blockNode,c.blockNode===c.blockContainer?"first":"before"),e.nextSibling&&this.editor.height&&(a=h.create(this.editor.window),a.setStart(e.nextSibling,0),b.removeAllRanges(),b.addRange(a),s.scrollIntoView(e.nextSibling)),q=!1;else{c.blockNode===c.blockContainer?c.blockNode.appendChild(e):m.place(e,c.blockNode,"after");q=
!1;c.blockNode.style&&(e.style&&c.blockNode.style.cssText)&&(e.style.cssText=c.blockNode.style.cssText);if((f=a.startContainer)&&3==f.nodeType){l=a.endOffset;f.length<l&&(d=this._adjustNodeAndOffset(f,l),f=d.node,l=d.offset);d=f.nodeValue;g=k.createTextNode(d.substring(0,l));d=k.createTextNode(d.substring(l,d.length));m.place(g,f,"before");m.place(d,f,"after");m.destroy(f);for(g=g.parentNode;g!==c.blockNode;){l=k.createElement(g.tagName);g.style&&(l.style&&g.style.cssText)&&(l.style.cssText=g.style.cssText);
"FONT"===g.tagName&&(g.color&&(l.color=g.color),g.face&&(l.face=g.face),g.size&&(l.size=g.size));for(a=d;a;)f=a.nextSibling,l.appendChild(a),a=f;m.place(l,g,"after");d=l;g=g.parentNode}a=d;if(1==a.nodeType||3==a.nodeType&&a.nodeValue)e.innerHTML="";for(g=a;a;)f=a.nextSibling,e.appendChild(a),a=f}a=h.create(this.editor.window);k=g;if("BR"!==this.blockNodeForEnter){for(;k;)n=k,k=f=k.firstChild;n&&n.parentNode?(e=n.parentNode,a.setStart(e,0),b.removeAllRanges(),b.addRange(a),this.editor.height&&s.scrollIntoView(e),
p("mozilla")&&(this._pressedEnterInBlock=c.blockNode)):q=!0}else a.setStart(e,0),b.removeAllRanges(),b.addRange(a),this.editor.height&&s.scrollIntoView(e),p("mozilla")&&(this._pressedEnterInBlock=c.blockNode)}return q},_adjustNodeAndOffset:function(b,a){for(;b.length<a&&b.nextSibling&&3==b.nextSibling.nodeType;)a-=b.length,b=b.nextSibling;return{node:b,offset:a}},removeTrailingBr:function(b){if(b=/P|DIV|LI/i.test(b.tagName)?b:this.editor.selection.getParentOfType(b,["P","DIV","LI"]))b.lastChild&&
(1<b.childNodes.length&&3==b.lastChild.nodeType&&/^[\s\xAD]*$/.test(b.lastChild.nodeValue)||"BR"==b.lastChild.tagName)&&m.destroy(b.lastChild),b.childNodes.length||(b.innerHTML=this.bogusHtmlContent)}})});
//@ sourceMappingURL=EnterKeyHandling.js.map