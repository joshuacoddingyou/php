//>>built
define("dojox/app/View","require dojo/when dojo/on dojo/_base/declare dojo/_base/lang dojo/Deferred dijit/Destroyable dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./ViewBase ./utils/nls".split(" "),function(h,f,l,m,d,g,n,p,q,r,s){return m("dojox.app.View",[p,q,n,r],{constructor:function(a){},connect:function(a,c,b){return this.own(l(a,c,d.hitch(this,b)))[0]},_loadTemplate:function(){if(this.templateString)return!0;var a=this.template,c=this.dependencies?this.dependencies:[];a&&(0==a.indexOf("./")&&
(a="app/"+a),c=c.concat(["dojo/text!"+a]));var b=new g;if(0<c.length){var e;try{e=h.on("error",d.hitch(this,function(a){!b.isResolved()&&!b.isRejected()&&(a.info[0]&&0<=a.info[0].indexOf(this.template))&&(b.resolve(!1),e.remove())})),h(c,function(){b.resolve.call(b,arguments);e.remove()})}catch(t){b.resolve(!1),e&&e.remove()}}else b.resolve(!0);var k=new g;f(b,d.hitch(this,function(a){this.templateString=this.template?a[a.length-1]:"\x3cdiv\x3e\x3c/div\x3e";k.resolve(this)}));return k},load:function(){var a=
new g,c=this.inherited(arguments),b=s(this);f(c,d.hitch(this,function(){f(b,d.hitch(this,function(b){this.nls=d.mixin({},this.parent.nls);b&&d.mixin(this.nls,b);f(this._loadTemplate(),function(b){a.resolve(b)})}))}));return a},_startup:function(){this.buildRendering();this.inherited(arguments)}})});
//@ sourceMappingURL=View.js.map