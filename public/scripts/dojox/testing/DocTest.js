//>>built
define("dojox/testing/DocTest",["dojo/string"],function(){return dojo.declare("dojox.testing.DocTest",null,{errors:[],getTests:function(a){a=dojo.moduleUrl(a).path;a=a.substring(0,a.length-1)+".js";dojo.xhrGet({url:a,handleAs:"text"});a=dojo._getText(a);return this._getTestsFromString(a,!0)},getTestsFromString:function(a){return this._getTestsFromString(a,!1)},_getTestsFromString:function(a,d){for(var b=dojo.hitch(dojo.string,"trim"),f=a.split("\n"),l=f.length,k=[],e=[],g=[],h=null,m=0;m<l+1;m++){var c=
b(f[m]||"");d&&c.match(/^\/\/\s+>>>\s.*/)||c.match(/^\s*>>>\s.*/)?(h||(h=m+1),0<g.length&&(k.push({commands:e,expectedResult:g.join("\n"),line:h}),e=[],g=[],h=m+1),c=d?b(c).substring(2,c.length):c,c=b(c).substring(3,c.length),e.push(b(c))):(!d||c.match(/^\/\/\s+.*/))&&e.length&&0==g.length?(c=d?b(c).substring(3,c.length):c,g.push(b(c))):0<e.length&&g.length&&((!d||c.match(/^\/\/\s*$/))&&k.push({commands:e,expectedResult:g.join("\n"),line:h}),d&&!c.match(/^\/\//)&&k.push({commands:e,expectedResult:g.join("\n"),
line:h}),e=[],g=[],h=0)}return k},run:function(a){this.errors=[];(a=this.getTests(a))&&this._run(a)},_run:function(a){var d=a.length;this.tests=d;for(var b=0;b<d;b++){var f=a[b],l=this.runTest(f.commands,f.expectedResult),k="Test "+(b+1)+": ",e=f.commands.join(" "),e=50<e.length?e.substr(0,50)+"...":e;l.success||(this.errors.push({commands:f.commands,actual:l.actualResult,expected:f.expectedResult}),console.error(k+"Failed: "+e,{commands:f.commands,actualResult:l.actualResult,expectedResult:f.expectedResult}))}},
runTest:function(a,d){var b={success:!1,actualResult:null},f=a.join("\n");b.actualResult=eval(f);if(String(b.actualResult)==d||dojo.toJson(b.actualResult)==d||'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&String(b.actualResult)==d.substring(1,d.length-1))b.success=!0;return b}})});
//@ sourceMappingURL=DocTest.js.map