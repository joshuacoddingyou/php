//>>built
define("manager/Form",["dojo/_base/declare"],function(g){return g("Manager.Form",[],{id:null,onLoad:new Function,onSubmit:new Function,validators:null,connections:null,constructor:function(a){this.id=a;this.connections=[]},setFocus:function(a){if(""==a){a=null;var d=manager.getElementById(this.id),c=d.getElementsByTagName("input");0==c.length?(c=d.getElementsByTagName("select"),0<c.length&&(a=c[0])):a=c[0]}else a=manager.getElementById(a);null!=a&&a.focus()},getInputs:function(){for(var a={},d=manager.getElementById(this.id),
c=d.getElementsByTagName("input"),e=0,f=c.length;e<f;e++){var b=c[e];if("text"==b.type||"hidden"==b.type)a[b.name]=a[b.name]?a[b.name]+("\x26"+b.value):b.value;"checkbox"==b.type&&b.checked&&(a[b.name]=""==b.value?"on":b.value);"radio"==b.type&&b.checked&&(a[b.name]=b.value)}c=d.getElementsByTagName("select");e=0;for(f=c.length;e<f;e++)b=c[e],a[b.name]=b.options[b.selectedIndex].value;return a},getForm:function(){return manager.getElementById("frm_"+this.id)},setAction:function(a){manager.getElementById("frm_"+
this.id).action=a},getAction:function(){return manager.getElementById("frm_"+this.id).action},init:function(){this.validators=null},submit:function(){return manager.getElementById("frm_"+this.id).submit()},connect:function(a,d,c){(a=dojo.byId(a))&&this.connections.push(dojo.connect(a,d,c))},disconnect:function(){dojo.forEach(this.connections,dojo.disconnect);this.connections.length=0}})});
//@ sourceMappingURL=Form.js.map