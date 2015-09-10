//>>built
define("dgrid/editor","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/on dojo/aspect dojo/has ./Grid put-selector/put dojo/_base/sniff".split(" "),function(C,v,D,w,k,h,s,x,q){function t(a,c){a.value=c;if("radio"==a.type||"checkbox"==a.type)a.checked=a.defaultChecked=!!c}function y(a,c){if("number"==typeof c)a=isNaN(a)?a:parseFloat(a);else if("boolean"==typeof c)a="true"==a?!0:"false"==a?!1:a;else if(c instanceof Date){var b=new Date(a);a=isNaN(b.getTime())?a:b}return a}
function E(a,c,b,g,f){var d,e,l;if((b&&b.valueOf())!=(g&&g.valueOf())&&(d=a.cell(c),e=d.row,l=d.column,l.field&&e))if(d={grid:a,cell:d,rowId:e.id,oldValue:b,value:g,bubbles:!0,cancelable:!0},f&&f.type&&(d.parentType=f.type),k.emit(c,"dgrid-datachange",d))a.updateDirty&&(a.updateDirty(e.id,l.field,g),l.autoSave&&setTimeout(function(){a._trackError("save")},0));else{var m;(m=c.widget)?(m._dgridIgnoreChange=!0,m.set("value",b),setTimeout(function(){m._dgridIgnoreChange=!1},0)):(m=c.input)&&t(m,b);return b}return g}
function u(a,c,b,g){if(!b.isValid||b.isValid()){c=E;var f=(b.domNode||b).parentNode,d=n?p:b._dgridLastValue,e;e="function"==typeof b.get?y(b.get("value")):y(b["checkbox"==b.type||"radio"==b.type?"checked":"value"]);a=c(a,f,d,e,g);n?p=a:b._dgridLastValue=a}}function z(a){var c=a.editor,b=a.editOn,g=a.grid,f="string"!=typeof c,d,e,l;d=a.editorArgs||{};"function"==typeof d&&(d=d.call(g,a));if(f)e=new c(d),f=e.focusNode||e.domNode,f.className+=" dgrid-input",e.connect(e,b?"onBlur":"onChange",function(){e._dgridIgnoreChange||
u(g,a,this,{type:"widget"})});else if(l=function(b){var e=b.target;"_dgridLastValue"in e&&-1<e.className.indexOf("dgrid-input")&&u(g,a,e,b)},a.grid._hasInputListener||(g._hasInputListener=!0,g.on("change",function(a){l(a)})),e=f=q(("textarea"==c?"textarea":"input[type\x3d"+c+"]")+".dgrid-input",v.mixin({name:a.field,tabIndex:isNaN(a.tabIndex)?-1:a.tabIndex},d)),9>s("ie")||s("ie")&&s("quirks"))"radio"==c||"checkbox"==c?k(e,"click",function(a){l(a)}):k(e,"change",function(a){l(a)});k(f,"mousedown",
function(a){a.stopPropagation()});return e}function F(a,c){var b=z(a),g=a.grid,f=b.domNode||b,d=b.focusNode||f,e=b.domNode?function(){b.set("value",b._dgridLastValue)}:function(){t(b,b._dgridLastValue);u(a.grid,a,b)};k(d,"keydown",function(c){c=c.keyCode||c.which;27==c?(e(),p=b._dgridLastValue,d.blur()):13==c&&!1!==a.dismissOnEnter&&d.blur()});(a._editorBlurHandle=k.pausable(b,"blur",function(){var e=f.parentNode,c=e.children.length-1,d={alreadyHooked:!0},h=g.cell(f);k.emit(h.element,"dgrid-editor-hide",
{grid:g,cell:h,column:a,editor:b,bubbles:!0,cancelable:!1});e.removeChild(f);for(q(h.element,"!dgrid-cell-editing");c--;)q(e.firstChild,"!");x.appendIfNode(e,a.renderCell(a.grid.row(e).data,p,e,r?v.delegate(d,r):d));n=p=r=null;a._editorBlurHandle.pause()})).pause();return b}function A(a,c,b,g){var f=a.domNode,d=c.grid;f||t(a,g);b.innerHTML="";q(b,".dgrid-cell-editing");q(b,a.domNode||a);f&&(a._started||a.startup(),a._dgridIgnoreChange=!0,a.set("value",g),setTimeout(function(){a._dgridIgnoreChange=
!1},0));a._dgridLastValue=g;n&&(p=g,k.emit(b,"dgrid-editor-show",{grid:d,cell:d.cell(b),column:c,editor:a,bubbles:!0,cancelable:!1}))}function B(a){var c,b,g,f,d,e;a.column||(a=this.cell(a));if(!a||!a.element)return null;c=a.column;f=c.field;b=a.element.contents||a.element;if(d=c.editorInstance){if(n!=b&&(!c.canEdit||c.canEdit(a.row.data,g)))return n=b,a=a.row,g=(g=this.dirty&&this.dirty[a.id])&&f in g?g[f]:c.get?c.get(a.data):a.data[f],A(c.editorInstance,c,b,g),e=new w,setTimeout(function(){d.focus&&
d.focus();c._editorBlurHandle&&c._editorBlurHandle.resume();e.resolve(d)},0),e.promise}else if(c.editor&&(d=b.widget||b.input))return e=new w,d.focus&&d.focus(),e.resolve(d),e.promise;return null}var n,p,r;return function(a,c,b){var g=a.renderCell||x.defaultRenderCell,f=[],d;a||(a={});a.editor=c=c||a.editor||"text";a.editOn=b=b||a.editOn;d="string"!=typeof c;a.widgetArgs&&(C.deprecated("column.widgetArgs","use column.editorArgs instead","dgrid 1.0"),a.editorArgs=a.widgetArgs);h.after(a,"init",b?function(){var b=
a.grid;b.edit||(b.edit=B);a.editorInstance=F(a,g)}:function(){var b=a.grid;b.edit||(b.edit=B);d&&f.push(h.before(b,"removeRow",function(c){c=b.cell(c,a.id).element;(c=(c.contents||c).widget)&&c.destroyRecursive()}))});h.after(a,"destroy",function(){D.forEach(f,function(a){a.remove()});a._editorBlurHandle&&a._editorBlurHandle.remove();b&&d&&a.editorInstance.destroyRecursive()});a.renderCell=b?function(c,d,f,h){if(!h||!h.alreadyHooked)k("TD"==f.tagName?f:f.parentNode,b,function(){r=h;a.grid.edit(this)});
return g.call(a,c,d,f,h)}:function(b,c,f,h){if(!a.canEdit||a.canEdit(b,c))b=z(a),A(b,a,f,c),f[d?"widget":"input"]=b;else return g.call(a,b,c,f,h)};return a}});
//@ sourceMappingURL=editor.js.map