//>>built
define("manager/ComboBox",["dojo/_base/declare"],function(e){return e("Manager.ComboBox",[],{constructor:function(c){this.name=c},onTextChange:function(c,a,b){a=dijit.byId(a);b=dijit.byId(b);var d=a.value;b.valueNode.value=d;""==b.textbox.value&&(alert("!!! ATEN\u00c7\u00c3O!!!\n\n\u00e3o existe uma op\u00e7\u00e3o correspondente ao valor '"+d+"'\ndo campo '"+c+"'!"),a.value="",a.focus())},onSelectionChange:function(c,a,b){c=dijit.byId(b);a=dijit.byId(a);b=a.selectedIndex;-1!=b&&(c.value=String(a.options[b].value))}})});
//@ sourceMappingURL=ComboBox.js.map