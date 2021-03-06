/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

//>>built
(function(_1,_2){
var _3=function(){
},_4=function(it){
for(var p in it){
return 0;
}
return 1;
},_5={}.toString,_6=function(it){
return _5.call(it)=="[object Function]";
},_7=function(it){
return _5.call(it)=="[object String]";
},_8=function(it){
return _5.call(it)=="[object Array]";
},_9=function(_a,_b){
if(_a){
for(var i=0;i<_a.length;){
_b(_a[i++]);
}
}
},_c=function(_d,_e){
for(var p in _e){
_d[p]=_e[p];
}
return _d;
},_f=function(_10,_11){
return _c(new Error(_10),{src:"dojoLoader",info:_11});
},_12=1,uid=function(){
return "_"+_12++;
},req=function(_13,_14,_15){
return _16(_13,_14,_15,0,req);
},_17=this,doc=_17.document,_18=doc&&doc.createElement("DiV"),has=req.has=function(_19){
return _6(_1a[_19])?(_1a[_19]=_1a[_19](_17,doc,_18)):_1a[_19];
},_1a=has.cache=_2.hasCache;
has.add=function(_1b,_1c,now,_1d){
(_1a[_1b]===undefined||_1d)&&(_1a[_1b]=_1c);
return now&&has(_1b);
};
0&&has.add("host-node",_1.has&&"host-node" in _1.has?_1.has["host-node"]:(typeof process=="object"&&process.versions&&process.versions.node&&process.versions.v8));
if(0){
require("./_base/configNode.js").config(_2);
_2.loaderPatch.nodeRequire=require;
}
0&&has.add("host-rhino",_1.has&&"host-rhino" in _1.has?_1.has["host-rhino"]:(typeof load=="function"&&(typeof Packages=="function"||typeof Packages=="object")));
if(0){
for(var _1e=_1.baseUrl||".",arg,_1f=this.arguments,i=0;i<_1f.length;){
arg=(_1f[i++]+"").split("=");
if(arg[0]=="baseUrl"){
_1e=arg[1];
break;
}
}
load(_1e+"/_base/configRhino.js");
rhinoDojoConfig(_2,_1e,_1f);
}
for(var p in _1.has){
has.add(p,_1.has[p],0,1);
}
var _20=1,_21=2,_22=3,_23=4,_24=5;
if(0){
_20="requested";
_21="arrived";
_22="not-a-module";
_23="executing";
_24="executed";
}
var _25=0,_26="sync",xd="xd",_27=[],_28=0,_29=_3,_2a=_3,_2b;
if(1){
req.isXdUrl=_3;
req.initSyncLoader=function(_2c,_2d,_2e){
if(!_28){
_28=_2c;
_29=_2d;
_2a=_2e;
}
return {sync:_26,requested:_20,arrived:_21,nonmodule:_22,executing:_23,executed:_24,syncExecStack:_27,modules:_2f,execQ:_30,getModule:_31,injectModule:_32,setArrived:_33,signal:_34,finishExec:_35,execModule:_36,dojoRequirePlugin:_28,getLegacyMode:function(){
return _25;
},guardCheckComplete:_37};
};
if(1){
var _38=location.protocol,_39=location.host;
req.isXdUrl=function(url){
if(/^\./.test(url)){
return false;
}
if(/^\/\//.test(url)){
return true;
}
var _3a=url.match(/^([^\/\:]+\:)\/+([^\/]+)/);
return _3a&&(_3a[1]!=_38||(_39&&_3a[2]!=_39));
};
1||has.add("dojo-xhr-factory",1);
has.add("dojo-force-activex-xhr",1&&!doc.addEventListener&&window.location.protocol=="file:");
has.add("native-xhr",typeof XMLHttpRequest!="undefined");
if(has("native-xhr")&&!has("dojo-force-activex-xhr")){
_2b=function(){
return new XMLHttpRequest();
};
}else{
for(var _3b=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],_3c,i=0;i<3;){
try{
_3c=_3b[i++];
if(new ActiveXObject(_3c)){
break;
}
}
catch(e){
}
}
_2b=function(){
return new ActiveXObject(_3c);
};
}
req.getXhr=_2b;
has.add("dojo-gettext-api",1);
req.getText=function(url,_3d,_3e){
var xhr=_2b();
xhr.open("GET",_3f(url),false);
xhr.send(null);
if(xhr.status==200||(!location.host&&!xhr.status)){
if(_3e){
_3e(xhr.responseText,_3d);
}
}else{
throw _f("xhrFailed",xhr.status);
}
return xhr.responseText;
};
}
}else{
req.async=1;
}
var _40=new Function("return eval(arguments[0]);");
req.eval=function(_41,_42){
return _40(_41+"\r\n////@ sourceURL="+_42);
};
var _43={},_44="error",_34=req.signal=function(_45,_46){
var _47=_43[_45];
_9(_47&&_47.slice(0),function(_48){
_48.apply(null,_8(_46)?_46:[_46]);
});
},on=req.on=function(_49,_4a){
var _4b=_43[_49]||(_43[_49]=[]);
_4b.push(_4a);
return {remove:function(){
for(var i=0;i<_4b.length;i++){
if(_4b[i]===_4a){
_4b.splice(i,1);
return;
}
}
}};
};
var _4c=[],_4d={},_4e=[],_4f={},map=req.map={},_50=[],_2f={},_51="",_52={},_53="url:",_54={},_55={},_56=0;
if(1){
var _57=function(_58){
var p,_59,_5a,now,m;
for(p in _54){
_59=_54[p];
_5a=p.match(/^url\:(.+)/);
if(_5a){
_52[_53+_5b(_5a[1],_58)]=_59;
}else{
if(p=="*now"){
now=_59;
}else{
if(p!="*noref"){
m=_5c(p,_58,true);
_52[m.mid]=_52[_53+m.url]=_59;
}
}
}
}
if(now){
now(_5d(_58));
}
_54={};
},_5e=function(s){
return s.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(c){
return "\\"+c;
});
},_5f=function(map,_60){
_60.splice(0,_60.length);
for(var p in map){
_60.push([p,map[p],new RegExp("^"+_5e(p)+"(/|$)"),p.length]);
}
_60.sort(function(lhs,rhs){
return rhs[3]-lhs[3];
});
return _60;
},_61=function(_62,_63){
_9(_62,function(_64){
_63.push([_7(_64[0])?new RegExp("^"+_5e(_64[0])+"$"):_64[0],_64[1]]);
});
},_65=function(_66){
var _67=_66.name;
if(!_67){
_67=_66;
_66={name:_67};
}
_66=_c({main:"main"},_66);
_66.location=_66.location?_66.location:_67;
if(_66.packageMap){
map[_67]=_66.packageMap;
}
if(!_66.main.indexOf("./")){
_66.main=_66.main.substring(2);
}
_4f[_67]=_66;
},_68=[],_69=function(_6a,_6b,_6c){
for(var p in _6a){
if(p=="waitSeconds"){
req.waitms=(_6a[p]||0)*1000;
}
if(p=="cacheBust"){
_51=_6a[p]?(_7(_6a[p])?_6a[p]:(new Date()).getTime()+""):"";
}
if(p=="baseUrl"||p=="combo"){
req[p]=_6a[p];
}
if(1&&p=="async"){
var _6d=_6a[p];
req.legacyMode=_25=(_7(_6d)&&/sync|legacyAsync/.test(_6d)?_6d:(!_6d?_26:false));
req.async=!_25;
}
if(_6a[p]!==_1a){
req.rawConfig[p]=_6a[p];
p!="has"&&has.add("config-"+p,_6a[p],0,_6b);
}
}
if(!req.baseUrl){
req.baseUrl="./";
}
if(!/\/$/.test(req.baseUrl)){
req.baseUrl+="/";
}
for(p in _6a.has){
has.add(p,_6a.has[p],0,_6b);
}
_9(_6a.packages,_65);
for(_1e in _6a.packagePaths){
_9(_6a.packagePaths[_1e],function(_6e){
var _6f=_1e+"/"+_6e;
if(_7(_6e)){
_6e={name:_6e};
}
_6e.location=_6f;
_65(_6e);
});
}
_5f(_c(map,_6a.map),_50);
_9(_50,function(_70){
_70[1]=_5f(_70[1],[]);
if(_70[0]=="*"){
_50.star=_70;
}
});
_5f(_c(_4d,_6a.paths),_4e);
_61(_6a.aliases,_4c);
if(_6b){
_68.push({config:_6a.config});
}else{
for(p in _6a.config){
var _71=_31(p,_6c);
_71.config=_c(_71.config||{},_6a.config[p]);
}
}
if(_6a.cache){
_57();
_54=_6a.cache;
if(_6a.cache["*noref"]){
_57();
}
}
_34("config",[_6a,req.rawConfig]);
};
if(has("dojo-cdn")||1){
var _72=doc.getElementsByTagName("script"),i=0,_73,_74,src,_75;
while(i<_72.length){
_73=_72[i++];
if((src=_73.getAttribute("src"))&&(_75=src.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))){
_74=_75[3]||"";
_2.baseUrl=_2.baseUrl||_74;
_56=_73;
}
if((src=(_73.getAttribute("data-dojo-config")||_73.getAttribute("djConfig")))){
_55=req.eval("({ "+src+" })","data-dojo-config");
_56=_73;
}
if(0){
if((src=_73.getAttribute("data-main"))){
_55.deps=_55.deps||[src];
}
}
}
}
if(0){
try{
if(window.parent!=window&&window.parent.require){
var doh=window.parent.require("doh");
doh&&_c(_55,doh.testConfig);
}
}
catch(e){
}
}
req.rawConfig={};
_69(_2,1);
if(has("dojo-cdn")){
_4f.dojo.location=_74;
if(_74){
_74+="/";
}
_4f.dijit.location=_74+"../dijit/";
_4f.dojox.location=_74+"../dojox/";
}
_69(_1,1);
_69(_55,1);
}else{
_4d=_2.paths;
_4e=_2.pathsMapProg;
_4f=_2.packs;
_4c=_2.aliases;
_50=_2.mapProgs;
_2f=_2.modules;
_52=_2.cache;
_51=_2.cacheBust;
req.rawConfig=_2;
}
if(0){
req.combo=req.combo||{add:_3};
var _76=0,_77=[],_78=null;
}
var _79=function(_7a){
_37(function(){
_9(_7a.deps,_32);
if(0&&_76&&!_78){
_78=setTimeout(function(){
_76=0;
_78=null;
req.combo.done(function(_7b,url){
var _7c=function(){
_7d(0,_7b);
_7e();
};
_77.push(_7b);
_7f=_7b;
req.injectUrl(url,_7c,_7b);
_7f=0;
},req);
},0);
}
});
},_16=function(a1,a2,a3,_80,_81){
var _82,_83;
if(_7(a1)){
_82=_31(a1,_80,true);
if(_82&&_82.executed){
return _82.result;
}
throw _f("undefinedModule",a1);
}
if(!_8(a1)){
_69(a1,0,_80);
a1=a2;
a2=a3;
}
if(_8(a1)){
if(!a1.length){
a2&&a2();
}else{
_83="require*"+uid();
for(var mid,_84=[],i=0;i<a1.length;){
mid=a1[i++];
_84.push(_31(mid,_80));
}
_82=_c(_85("",_83,0,""),{injected:_21,deps:_84,def:a2||_3,require:_80?_80.require:req,gc:1});
_2f[_82.mid]=_82;
_79(_82);
var _86=_87&&_25!=_26;
_37(function(){
_36(_82,_86);
});
if(!_82.executed){
_30.push(_82);
}
_7e();
}
}
return _81;
},_5d=function(_88){
if(!_88){
return req;
}
var _89=_88.require;
if(!_89){
_89=function(a1,a2,a3){
return _16(a1,a2,a3,_88,_89);
};
_88.require=_c(_89,req);
_89.module=_88;
_89.toUrl=function(_8a){
return _5b(_8a,_88);
};
_89.toAbsMid=function(mid){
return _b8(mid,_88);
};
if(0){
_89.undef=function(mid){
req.undef(mid,_88);
};
}
if(1){
_89.syncLoadNls=function(mid){
var _8b=_5c(mid,_88),_8c=_2f[_8b.mid];
if(!_8c||!_8c.executed){
_8d=_52[_8b.mid]||_52[_53+_8b.url];
if(_8d){
_8e(_8d);
_8c=_2f[_8b.mid];
}
}
return _8c&&_8c.executed&&_8c.result;
};
}
}
return _89;
},_30=[],_8f=[],_90={},_91=function(_92){
_92.injected=_20;
_90[_92.mid]=1;
if(_92.url){
_90[_92.url]=_92.pack||1;
}
_93();
},_33=function(_94){
_94.injected=_21;
delete _90[_94.mid];
if(_94.url){
delete _90[_94.url];
}
if(_4(_90)){
_95();
1&&_25==xd&&(_25=_26);
}
},_96=req.idle=function(){
return !_8f.length&&_4(_90)&&!_30.length&&!_87;
},_97=function(_98,map){
if(map){
for(var i=0;i<map.length;i++){
if(map[i][2].test(_98)){
return map[i];
}
}
}
return 0;
},_99=function(_9a){
var _9b=[],_9c,_9d;
_9a=_9a.replace(/\\/g,"/").split("/");
while(_9a.length){
_9c=_9a.shift();
if(_9c==".."&&_9b.length&&_9d!=".."){
_9b.pop();
_9d=_9b[_9b.length-1];
}else{
if(_9c!="."){
_9b.push(_9d=_9c);
}
}
}
return _9b.join("/");
},_85=function(pid,mid,_9e,url){
if(1){
var xd=req.isXdUrl(url);
return {pid:pid,mid:mid,pack:_9e,url:url,executed:0,def:0,isXd:xd,isAmd:!!(xd||(_4f[pid]&&_4f[pid].isAmd))};
}else{
return {pid:pid,mid:mid,pack:_9e,url:url,executed:0,def:0};
}
},_9f=function(mid,_a0,_a1,_a2,_a3,_a4,_a5,_a6,_a7){
var pid,_a8,_a9,_aa,url,_ab,_ac,_ad;
_ad=mid;
_ac=/^\./.test(mid);
if(/(^\/)|(\:)|(\.js$)/.test(mid)||(_ac&&!_a0)){
return _85(0,mid,0,mid);
}else{
mid=_99(_ac?(_a0.mid+"/../"+mid):mid);
if(/^\./.test(mid)){
throw _f("irrationalPath",mid);
}
if(_a0){
_aa=_97(_a0.mid,_a4);
}
_aa=_aa||_a4.star;
_aa=_aa&&_97(mid,_aa[1]);
if(_aa){
mid=_aa[1]+mid.substring(_aa[3]);
}
_75=mid.match(/^([^\/]+)(\/(.+))?$/);
pid=_75?_75[1]:"";
if((_a8=_a1[pid])){
mid=pid+"/"+(_a9=(_75[3]||_a8.main));
}else{
pid="";
}
var _ae=0,_af=0;
_9(_a6,function(_b0){
var _b1=mid.match(_b0[0]);
if(_b1&&_b1.length>_ae){
_af=_6(_b0[1])?mid.replace(_b0[0],_b0[1]):_b0[1];
}
});
if(_af){
return _9f(_af,0,_a1,_a2,_a3,_a4,_a5,_a6,_a7);
}
_ab=_a2[mid];
if(_ab){
return _a7?_85(_ab.pid,_ab.mid,_ab.pack,_ab.url):_a2[mid];
}
}
_aa=_97(mid,_a5);
if(_aa){
url=_aa[1]+mid.substring(_aa[3]);
}else{
if(pid){
url=_a8.location+"/"+_a9;
}else{
if(has("config-tlmSiblingOfDojo")){
url="../"+mid;
}else{
url=mid;
}
}
}
if(!(/(^\/)|(\:)/.test(url))){
url=_a3+url;
}
url+=".js";
return _85(pid,mid,_a8,_99(url));
},_5c=function(mid,_b2,_b3){
return _9f(mid,_b2,_4f,_2f,req.baseUrl,_b3?[]:_50,_b3?[]:_4e,_b3?[]:_4c);
},_b4=function(_b5,_b6,_b7){
return _b5.normalize?_b5.normalize(_b6,function(mid){
return _b8(mid,_b7);
}):_b8(_b6,_b7);
},_b9=0,_31=function(mid,_ba,_bb){
var _bc,_bd,_be,_bf;
_bc=mid.match(/^(.+?)\!(.*)$/);
if(_bc){
_bd=_31(_bc[1],_ba,_bb);
if(1&&_25==_26&&!_bd.executed){
_32(_bd);
if(_bd.injected===_21&&!_bd.executed){
_37(function(){
_36(_bd);
});
}
if(_bd.executed){
_c0(_bd);
}else{
_30.unshift(_bd);
}
}
if(_bd.executed===_24&&!_bd.load){
_c0(_bd);
}
if(_bd.load){
_be=_b4(_bd,_bc[2],_ba);
mid=(_bd.mid+"!"+(_bd.dynamic?++_b9+"!":"")+_be);
}else{
_be=_bc[2];
mid=_bd.mid+"!"+(++_b9)+"!waitingForPlugin";
}
_bf={plugin:_bd,mid:mid,req:_5d(_ba),prid:_be};
}else{
_bf=_5c(mid,_ba);
}
return _2f[_bf.mid]||(!_bb&&(_2f[_bf.mid]=_bf));
},_b8=req.toAbsMid=function(mid,_c1){
return _5c(mid,_c1).mid;
},_5b=req.toUrl=function(_c2,_c3){
var _c4=_5c(_c2+"/x",_c3),url=_c4.url;
return _3f(_c4.pid===0?_c2:url.substring(0,url.length-5));
},_c5={injected:_21,executed:_24,def:_22,result:_22},_c6=function(mid){
return _2f[mid]=_c({mid:mid},_c5);
},_c7=_c6("require"),_c8=_c6("exports"),_c9=_c6("module"),_ca=function(_cb,_cc){
req.trace("loader-run-factory",[_cb.mid]);
var _cd=_cb.def,_ce;
1&&_27.unshift(_cb);
if(has("config-dojo-loader-catches")){
try{
_ce=_6(_cd)?_cd.apply(null,_cc):_cd;
}
catch(e){
_34(_44,_cb.result=_f("factoryThrew",[_cb,e]));
}
}else{
_ce=_6(_cd)?_cd.apply(null,_cc):_cd;
}
_cb.result=_ce===undefined&&_cb.cjs?_cb.cjs.exports:_ce;
1&&_27.shift(_cb);
},_cf={},_d0=0,_c0=function(_d1){
var _d2=_d1.result;
_d1.dynamic=_d2.dynamic;
_d1.normalize=_d2.normalize;
_d1.load=_d2.load;
return _d1;
},_d3=function(_d4){
var map={};
_9(_d4.loadQ,function(_d5){
var _d6=_b4(_d4,_d5.prid,_d5.req.module),mid=_d4.dynamic?_d5.mid.replace(/waitingForPlugin$/,_d6):(_d4.mid+"!"+_d6),_d7=_c(_c({},_d5),{mid:mid,prid:_d6,injected:0});
if(!_2f[mid]){
_e9(_2f[mid]=_d7);
}
map[_d5.mid]=_2f[mid];
_33(_d5);
delete _2f[_d5.mid];
});
_d4.loadQ=0;
var _d8=function(_d9){
for(var _da,_db=_d9.deps||[],i=0;i<_db.length;i++){
_da=map[_db[i].mid];
if(_da){
_db[i]=_da;
}
}
};
for(var p in _2f){
_d8(_2f[p]);
}
_9(_30,_d8);
},_35=function(_dc){
req.trace("loader-finish-exec",[_dc.mid]);
_dc.executed=_24;
_dc.defOrder=_d0++;
1&&_9(_dc.provides,function(cb){
cb();
});
if(_dc.loadQ){
_c0(_dc);
_d3(_dc);
}
for(i=0;i<_30.length;){
if(_30[i]===_dc){
_30.splice(i,1);
}else{
i++;
}
}
if(/^require\*/.test(_dc.mid)){
delete _2f[_dc.mid];
}
},_dd=[],_36=function(_de,_df){
if(_de.executed===_23){
req.trace("loader-circular-dependency",[_dd.concat(_de.mid).join("->")]);
return (!_de.def||_df)?_cf:(_de.cjs&&_de.cjs.exports);
}
if(!_de.executed){
if(!_de.def){
return _cf;
}
var mid=_de.mid,_e0=_de.deps||[],arg,_e1,_e2=[],i=0;
if(0){
_dd.push(mid);
req.trace("loader-exec-module",["exec",_dd.length,mid]);
}
_de.executed=_23;
while((arg=_e0[i++])){
_e1=((arg===_c7)?_5d(_de):((arg===_c8)?_de.cjs.exports:((arg===_c9)?_de.cjs:_36(arg,_df))));
if(_e1===_cf){
_de.executed=0;
req.trace("loader-exec-module",["abort",mid]);
0&&_dd.pop();
return _cf;
}
_e2.push(_e1);
}
_ca(_de,_e2);
_35(_de);
0&&_dd.pop();
}
return _de.result;
},_87=0,_37=function(_e3){
try{
_87++;
_e3();
}
finally{
_87--;
}
if(_96()){
_34("idle",[]);
}
},_7e=function(){
if(_87){
return;
}
_37(function(){
_29();
for(var _e4,_e5,i=0;i<_30.length;){
_e4=_d0;
_e5=_30[i];
_36(_e5);
if(_e4!=_d0){
_29();
i=0;
}else{
i++;
}
}
});
};
if(0){
req.undef=function(_e6,_e7){
var _e8=_31(_e6,_e7);
_33(_e8);
_c(_e8,{def:0,executed:0,injected:0,node:0});
};
}
if(1){
if(has("dojo-loader-eval-hint-url")===undefined){
has.add("dojo-loader-eval-hint-url",1);
}
var _3f=function(url){
url+="";
return url+(_51?((/\?/.test(url)?"&":"?")+_51):"");
},_e9=function(_ea){
var _eb=_ea.plugin;
if(_eb.executed===_24&&!_eb.load){
_c0(_eb);
}
var _ec=function(def){
_ea.result=def;
_33(_ea);
_35(_ea);
_7e();
};
if(_eb.load){
_eb.load(_ea.prid,_ea.req,_ec);
}else{
if(_eb.loadQ){
_eb.loadQ.push(_ea);
}else{
_eb.loadQ=[_ea];
_30.unshift(_eb);
_32(_eb);
}
}
},_8d=0,_7f=0,_ed=0,_8e=function(_ee,_ef){
if(has("config-stripStrict")){
_ee=_ee.replace(/"use strict"/g,"");
}
_ed=1;
if(has("config-dojo-loader-catches")){
try{
if(_ee===_8d){
_8d.call(null);
}else{
req.eval(_ee,has("dojo-loader-eval-hint-url")?_ef.url:_ef.mid);
}
}
catch(e){
_34(_44,_f("evalModuleThrew",_ef));
}
}else{
if(_ee===_8d){
_8d.call(null);
}else{
req.eval(_ee,has("dojo-loader-eval-hint-url")?_ef.url:_ef.mid);
}
}
_ed=0;
},_32=function(_f0){
var mid=_f0.mid,url=_f0.url;
if(_f0.executed||_f0.injected||_90[mid]||(_f0.url&&((_f0.pack&&_90[_f0.url]===_f0.pack)||_90[_f0.url]==1))){
return;
}
_91(_f0);
if(0){
var _f1=0;
if(_f0.plugin&&_f0.plugin.isCombo){
req.combo.add(_f0.plugin.mid,_f0.prid,0,req);
_f1=1;
}else{
if(!_f0.plugin){
_f1=req.combo.add(0,_f0.mid,_f0.url,req);
}
}
if(_f1){
_76=1;
return;
}
}
if(_f0.plugin){
_e9(_f0);
return;
}
var _f2=function(){
_7d(_f0);
if(_f0.injected!==_21){
if(has("dojo-enforceDefine")){
_34(_44,_f("noDefine",_f0));
return;
}
_33(_f0);
_c(_f0,_c5);
req.trace("loader-define-nonmodule",[_f0.url]);
}
if(1&&_25){
!_27.length&&_7e();
}else{
_7e();
}
};
_8d=_52[mid]||_52[_53+_f0.url];
if(_8d){
req.trace("loader-inject",["cache",_f0.mid,url]);
_8e(_8d,_f0);
_f2();
return;
}
if(1&&_25){
if(_f0.isXd){
_25==_26&&(_25=xd);
}else{
if(_f0.isAmd&&_25!=_26){
}else{
var _f3=function(_f4){
if(_25==_26){
_27.unshift(_f0);
_8e(_f4,_f0);
_27.shift();
_7d(_f0);
if(!_f0.cjs){
_33(_f0);
_35(_f0);
}
if(_f0.finish){
var _f5=mid+"*finish",_f6=_f0.finish;
delete _f0.finish;
def(_f5,["dojo",("dojo/require!"+_f6.join(",")).replace(/\./g,"/")],function(_f7){
_9(_f6,function(mid){
_f7.require(mid);
});
});
_30.unshift(_31(_f5));
}
_f2();
}else{
_f4=_2a(_f0,_f4);
if(_f4){
_8e(_f4,_f0);
_f2();
}else{
_7f=_f0;
req.injectUrl(_3f(url),_f2,_f0);
_7f=0;
}
}
};
req.trace("loader-inject",["xhr",_f0.mid,url,_25!=_26]);
if(has("config-dojo-loader-catches")){
try{
req.getText(url,_25!=_26,_f3);
}
catch(e){
_34(_44,_f("xhrInjectFailed",[_f0,e]));
}
}else{
req.getText(url,_25!=_26,_f3);
}
return;
}
}
}
req.trace("loader-inject",["script",_f0.mid,url]);
_7f=_f0;
req.injectUrl(_3f(url),_f2,_f0);
_7f=0;
},_f8=function(_f9,_fa,def){
req.trace("loader-define-module",[_f9.mid,_fa]);
if(0&&_f9.plugin&&_f9.plugin.isCombo){
_f9.result=_6(def)?def():def;
_33(_f9);
_35(_f9);
return _f9;
}
var mid=_f9.mid;
if(_f9.injected===_21){
_34(_44,_f("multipleDefine",_f9));
return _f9;
}
_c(_f9,{deps:_fa,def:def,cjs:{id:_f9.mid,uri:_f9.url,exports:(_f9.result={}),setExports:function(_fb){
_f9.cjs.exports=_fb;
},config:function(){
return _f9.config;
}}});
for(var i=0;_fa[i];i++){
_fa[i]=_31(_fa[i],_f9);
}
if(1&&_25&&!_90[mid]){
_79(_f9);
_30.push(_f9);
_7e();
}
_33(_f9);
if(!_6(def)&&!_fa.length){
_f9.result=def;
_35(_f9);
}
return _f9;
},_7d=function(_fc,_fd){
var _fe=[],_ff,args;
while(_8f.length){
args=_8f.shift();
_fd&&(args[0]=_fd.shift());
_ff=(args[0]&&_31(args[0]))||_fc;
_fe.push([_ff,args[1],args[2]]);
}
_57(_fc);
_9(_fe,function(args){
_79(_f8.apply(null,args));
});
};
}
var _100=0,_95=_3,_93=_3;
if(1){
_95=function(){
_100&&clearTimeout(_100);
_100=0;
};
_93=function(){
_95();
if(req.waitms){
_100=window.setTimeout(function(){
_95();
_34(_44,_f("timeout",_90));
},req.waitms);
}
};
}
if(1){
has.add("ie-event-behavior",doc.attachEvent&&typeof Windows==="undefined"&&(typeof opera==="undefined"||opera.toString()!="[object Opera]"));
}
if(1&&(1||1)){
var _101=function(node,_102,_103,_104){
if(!has("ie-event-behavior")){
node.addEventListener(_102,_104,false);
return function(){
node.removeEventListener(_102,_104,false);
};
}else{
node.attachEvent(_103,_104);
return function(){
node.detachEvent(_103,_104);
};
}
},_105=_101(window,"load","onload",function(){
req.pageLoaded=1;
doc.readyState!="complete"&&(doc.readyState="complete");
_105();
});
if(1){
var _72=doc.getElementsByTagName("script"),i=0,_73;
while(!_56){
if(!/^dojo/.test((_73=_72[i++])&&_73.type)){
_56=_73;
}
}
req.injectUrl=function(url,_106,_107){
var node=_107.node=doc.createElement("script"),_108=function(e){
e=e||window.event;
var node=e.target||e.srcElement;
if(e.type==="load"||/complete|loaded/.test(node.readyState)){
_109();
_10a();
_106&&_106();
}
},_109=_101(node,"load","onreadystatechange",_108),_10a=_101(node,"error","onerror",function(e){
_109();
_10a();
_34(_44,_f("scriptError",[url,e]));
});
node.type="text/javascript";
node.charset="utf-8";
node.src=url;
_56.parentNode.insertBefore(node,_56);
return node;
};
}
}
if(1){
req.log=function(){
try{
for(var i=0;i<arguments.length;i++){
}
}
catch(e){
}
};
}else{
req.log=_3;
}
if(0){
var _10b=req.trace=function(_10c,args){
if(_10b.on&&_10b.group[_10c]){
_34("trace",[_10c,args]);
for(var arg,dump=[],text="trace:"+_10c+(args.length?(":"+args[0]):""),i=1;i<args.length;){
arg=args[i++];
if(_7(arg)){
text+=", "+arg;
}else{
dump.push(arg);
}
}
req.log(text);
dump.length&&dump.push(".");
req.log.apply(req,dump);
}
};
_c(_10b,{on:1,group:{},set:function(_10d,_10e){
if(_7(_10d)){
_10b.group[_10d]=_10e;
}else{
_c(_10b.group,_10d);
}
}});
_10b.set(_c(_c(_c({},_2.trace),_1.trace),_55.trace));
on("config",function(_10f){
_10f.trace&&_10b.set(_10f.trace);
});
}else{
req.trace=_3;
}
var def=function(mid,_110,_111){
var _112=arguments.length,_113=["require","exports","module"],args=[0,mid,_110];
if(_112==1){
args=[0,(_6(mid)?_113:[]),mid];
}else{
if(_112==2&&_7(mid)){
args=[mid,(_6(_110)?_113:[]),_110];
}else{
if(_112==3){
args=[mid,_110,_111];
}
}
}
if(0&&args[1]===_113){
args[2].toString().replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,"").replace(/require\(["']([\w\!\-_\.\/]+)["']\)/g,function(_114,dep){
args[1].push(dep);
});
}
req.trace("loader-define",args.slice(0,2));
var _115=args[0]&&_31(args[0]),_116;
if(_115&&!_90[_115.mid]){
_79(_f8(_115,args[1],args[2]));
}else{
if(!has("ie-event-behavior")||!1||_ed){
_8f.push(args);
}else{
_115=_115||_7f;
if(!_115){
for(mid in _90){
_116=_2f[mid];
if(_116&&_116.node&&_116.node.readyState==="interactive"){
_115=_116;
break;
}
}
if(0&&!_115){
for(var i=0;i<_77.length;i++){
_115=_77[i];
if(_115.node&&_115.node.readyState==="interactive"){
break;
}
_115=0;
}
}
}
if(0&&_8(_115)){
_79(_f8(_31(_115.shift()),args[1],args[2]));
if(!_115.length){
_77.splice(i,1);
}
}else{
if(_115){
_57(_115);
_79(_f8(_115,args[1],args[2]));
}else{
_34(_44,_f("ieDefineFailed",args[0]));
}
}
_7e();
}
}
};
def.amd={vendor:"dojotoolkit.org"};
if(0){
req.def=def;
}
_c(_c(req,_2.loaderPatch),_1.loaderPatch);
on(_44,function(arg){
try{
console.error(arg);
if(arg instanceof Error){
for(var p in arg){
}
}
}
catch(e){
}
});
_c(req,{uid:uid,cache:_52,packs:_4f});
if(0){
_c(req,{paths:_4d,aliases:_4c,modules:_2f,legacyMode:_25,execQ:_30,defQ:_8f,waiting:_90,packs:_4f,mapProgs:_50,pathsMapProg:_4e,listenerQueues:_43,computeMapProg:_5f,computeAliases:_61,runMapProg:_97,compactPath:_99,getModuleInfo:_9f});
}
if(_17.define){
if(1){
_34(_44,_f("defineAlreadyDefined",0));
}
return;
}else{
_17.define=def;
_17.require=req;
if(0){
require=req;
}
}
if(0&&req.combo&&req.combo.plugins){
var _117=req.combo.plugins,_118;
for(_118 in _117){
_c(_c(_31(_118),_117[_118]),{isCombo:1,executed:"executed",load:1});
}
}
if(1){
_9(_68,function(c){
_69(c);
});
var _119=_55.deps||_1.deps||_2.deps,_11a=_55.callback||_1.callback||_2.callback;
req.boot=(_119||_11a)?[_119||[],_11a]:0;
}
if(!1){
!req.async&&req(["dojo"]);
req.boot&&req.apply(null,req.boot);
}
})(this.dojoConfig||this.djConfig||this.require||{},{async:0,hasCache:{"config-selectorEngine":"lite","config-tlmSiblingOfDojo":1,"dojo-built":1,"dojo-loader":1,dom:1,"host-browser":1},packages:[{location:"../dojox",name:"dojox"},{location:"../dgrid",main:"OnDemandGrid",name:"dgrid"},{location:"../dijit",name:"dijit"},{location:"../xstyle",main:"css",name:"xstyle"},{location:".",name:"dojo"},{location:"../put-selector",main:"put",name:"put-selector"}]});
require({cache:{"dojo/_base/fx":function(){
define(["./kernel","./config","./lang","../Evented","./Color","../aspect","../sniff","../dom","../dom-style"],function(dojo,_11b,lang,_11c,_11d,_11e,has,dom,_11f){
var _120=lang.mixin;
var _121={};
var _122=_121._Line=function(_123,end){
this.start=_123;
this.end=end;
};
_122.prototype.getValue=function(n){
return ((this.end-this.start)*n)+this.start;
};
var _124=_121.Animation=function(args){
_120(this,args);
if(lang.isArray(this.curve)){
this.curve=new _122(this.curve[0],this.curve[1]);
}
};
_124.prototype=new _11c();
lang.extend(_124,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){
var _125=this._percent,_126=this.easing;
return _126?_126(_125):_125;
},_fire:function(evt,args){
var a=args||[];
if(this[evt]){
if(_11b.debugAtAllCosts){
this[evt].apply(this,a);
}else{
try{
this[evt].apply(this,a);
}
catch(e){
console.error("exception in animation handler for:",evt);
console.error(e);
}
}
}
return this;
},play:function(_127,_128){
var _129=this;
if(_129._delayTimer){
_129._clearTimer();
}
if(_128){
_129._stopTimer();
_129._active=_129._paused=false;
_129._percent=0;
}else{
if(_129._active&&!_129._paused){
return _129;
}
}
_129._fire("beforeBegin",[_129.node]);
var de=_127||_129.delay,_12a=lang.hitch(_129,"_play",_128);
if(de>0){
_129._delayTimer=setTimeout(_12a,de);
return _129;
}
_12a();
return _129;
},_play:function(_12b){
var _12c=this;
if(_12c._delayTimer){
_12c._clearTimer();
}
_12c._startTime=new Date().valueOf();
if(_12c._paused){
_12c._startTime-=_12c.duration*_12c._percent;
}
_12c._active=true;
_12c._paused=false;
var _12d=_12c.curve.getValue(_12c._getStep());
if(!_12c._percent){
if(!_12c._startRepeatCount){
_12c._startRepeatCount=_12c.repeat;
}
_12c._fire("onBegin",[_12d]);
}
_12c._fire("onPlay",[_12d]);
_12c._cycle();
return _12c;
},pause:function(){
var _12e=this;
if(_12e._delayTimer){
_12e._clearTimer();
}
_12e._stopTimer();
if(!_12e._active){
return _12e;
}
_12e._paused=true;
_12e._fire("onPause",[_12e.curve.getValue(_12e._getStep())]);
return _12e;
},gotoPercent:function(_12f,_130){
var _131=this;
_131._stopTimer();
_131._active=_131._paused=true;
_131._percent=_12f;
if(_130){
_131.play();
}
return _131;
},stop:function(_132){
var _133=this;
if(_133._delayTimer){
_133._clearTimer();
}
if(!_133._timer){
return _133;
}
_133._stopTimer();
if(_132){
_133._percent=1;
}
_133._fire("onStop",[_133.curve.getValue(_133._getStep())]);
_133._active=_133._paused=false;
return _133;
},status:function(){
if(this._active){
return this._paused?"paused":"playing";
}
return "stopped";
},_cycle:function(){
var _134=this;
if(_134._active){
var curr=new Date().valueOf();
var step=_134.duration===0?1:(curr-_134._startTime)/(_134.duration);
if(step>=1){
step=1;
}
_134._percent=step;
if(_134.easing){
step=_134.easing(step);
}
_134._fire("onAnimate",[_134.curve.getValue(step)]);
if(_134._percent<1){
_134._startTimer();
}else{
_134._active=false;
if(_134.repeat>0){
_134.repeat--;
_134.play(null,true);
}else{
if(_134.repeat==-1){
_134.play(null,true);
}else{
if(_134._startRepeatCount){
_134.repeat=_134._startRepeatCount;
_134._startRepeatCount=0;
}
}
}
_134._percent=0;
_134._fire("onEnd",[_134.node]);
!_134.repeat&&_134._stopTimer();
}
}
return _134;
},_clearTimer:function(){
clearTimeout(this._delayTimer);
delete this._delayTimer;
}});
var ctr=0,_135=null,_136={run:function(){
}};
lang.extend(_124,{_startTimer:function(){
if(!this._timer){
this._timer=_11e.after(_136,"run",lang.hitch(this,"_cycle"),true);
ctr++;
}
if(!_135){
_135=setInterval(lang.hitch(_136,"run"),this.rate);
}
},_stopTimer:function(){
if(this._timer){
this._timer.remove();
this._timer=null;
ctr--;
}
if(ctr<=0){
clearInterval(_135);
_135=null;
ctr=0;
}
}});
var _137=has("ie")?function(node){
var ns=node.style;
if(!ns.width.length&&_11f.get(node,"width")=="auto"){
ns.width="auto";
}
}:function(){
};
_121._fade=function(args){
args.node=dom.byId(args.node);
var _138=_120({properties:{}},args),_139=(_138.properties.opacity={});
_139.start=!("start" in _138)?function(){
return +_11f.get(_138.node,"opacity")||0;
}:_138.start;
_139.end=_138.end;
var anim=_121.animateProperty(_138);
_11e.after(anim,"beforeBegin",lang.partial(_137,_138.node),true);
return anim;
};
_121.fadeIn=function(args){
return _121._fade(_120({end:1},args));
};
_121.fadeOut=function(args){
return _121._fade(_120({end:0},args));
};
_121._defaultEasing=function(n){
return 0.5+((Math.sin((n+1.5)*Math.PI))/2);
};
var _13a=function(_13b){
this._properties=_13b;
for(var p in _13b){
var prop=_13b[p];
if(prop.start instanceof _11d){
prop.tempColor=new _11d();
}
}
};
_13a.prototype.getValue=function(r){
var ret={};
for(var p in this._properties){
var prop=this._properties[p],_13c=prop.start;
if(_13c instanceof _11d){
ret[p]=_11d.blendColors(_13c,prop.end,r,prop.tempColor).toCss();
}else{
if(!lang.isArray(_13c)){
ret[p]=((prop.end-_13c)*r)+_13c+(p!="opacity"?prop.units||"px":0);
}
}
}
return ret;
};
_121.animateProperty=function(args){
var n=args.node=dom.byId(args.node);
if(!args.easing){
args.easing=dojo._defaultEasing;
}
var anim=new _124(args);
_11e.after(anim,"beforeBegin",lang.hitch(anim,function(){
var pm={};
for(var p in this.properties){
if(p=="width"||p=="height"){
this.node.display="block";
}
var prop=this.properties[p];
if(lang.isFunction(prop)){
prop=prop(n);
}
prop=pm[p]=_120({},(lang.isObject(prop)?prop:{end:prop}));
if(lang.isFunction(prop.start)){
prop.start=prop.start(n);
}
if(lang.isFunction(prop.end)){
prop.end=prop.end(n);
}
var _13d=(p.toLowerCase().indexOf("color")>=0);
function _13e(node,p){
var v={height:node.offsetHeight,width:node.offsetWidth}[p];
if(v!==undefined){
return v;
}
v=_11f.get(node,p);
return (p=="opacity")?+v:(_13d?v:parseFloat(v));
};
if(!("end" in prop)){
prop.end=_13e(n,p);
}else{
if(!("start" in prop)){
prop.start=_13e(n,p);
}
}
if(_13d){
prop.start=new _11d(prop.start);
prop.end=new _11d(prop.end);
}else{
prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);
}
}
this.curve=new _13a(pm);
}),true);
_11e.after(anim,"onAnimate",lang.hitch(_11f,"set",anim.node),true);
return anim;
};
_121.anim=function(node,_13f,_140,_141,_142,_143){
return _121.animateProperty({node:node,duration:_140||_124.prototype.duration,properties:_13f,easing:_141,onEnd:_142}).play(_143||0);
};
if(1){
_120(dojo,_121);
dojo._Animation=_124;
}
return _121;
});
},"dojo/dom-form":function(){
define(["./_base/lang","./dom","./io-query","./json"],function(lang,dom,ioq,json){
function _144(obj,name,_145){
if(_145===null){
return;
}
var val=obj[name];
if(typeof val=="string"){
obj[name]=[val,_145];
}else{
if(lang.isArray(val)){
val.push(_145);
}else{
obj[name]=_145;
}
}
};
var _146="file|submit|image|reset|button";
var form={fieldToObject:function fieldToObject(_147){
var ret=null;
_147=dom.byId(_147);
if(_147){
var _148=_147.name,type=(_147.type||"").toLowerCase();
if(_148&&type&&!_147.disabled){
if(type=="radio"||type=="checkbox"){
if(_147.checked){
ret=_147.value;
}
}else{
if(_147.multiple){
ret=[];
var _149=[_147.firstChild];
while(_149.length){
for(var node=_149.pop();node;node=node.nextSibling){
if(node.nodeType==1&&node.tagName.toLowerCase()=="option"){
if(node.selected){
ret.push(node.value);
}
}else{
if(node.nextSibling){
_149.push(node.nextSibling);
}
if(node.firstChild){
_149.push(node.firstChild);
}
break;
}
}
}
}else{
ret=_147.value;
}
}
}
}
return ret;
},toObject:function formToObject(_14a){
var ret={},_14b=dom.byId(_14a).elements;
for(var i=0,l=_14b.length;i<l;++i){
var item=_14b[i],_14c=item.name,type=(item.type||"").toLowerCase();
if(_14c&&type&&_146.indexOf(type)<0&&!item.disabled){
_144(ret,_14c,form.fieldToObject(item));
if(type=="image"){
ret[_14c+".x"]=ret[_14c+".y"]=ret[_14c].x=ret[_14c].y=0;
}
}
}
return ret;
},toQuery:function formToQuery(_14d){
return ioq.objectToQuery(form.toObject(_14d));
},toJson:function formToJson(_14e,_14f){
return json.stringify(form.toObject(_14e),null,_14f?4:0);
}};
return form;
});
},"dojo/promise/tracer":function(){
define(["../_base/lang","./Promise","../Evented"],function(lang,_150,_151){
"use strict";
var _152=new _151;
var emit=_152.emit;
_152.emit=null;
function _153(args){
setTimeout(function(){
emit.apply(_152,args);
},0);
};
_150.prototype.trace=function(){
var args=lang._toArray(arguments);
this.then(function(_154){
_153(["resolved",_154].concat(args));
},function(_155){
_153(["rejected",_155].concat(args));
},function(_156){
_153(["progress",_156].concat(args));
});
return this;
};
_150.prototype.traceRejected=function(){
var args=lang._toArray(arguments);
this.otherwise(function(_157){
_153(["rejected",_157].concat(args));
});
return this;
};
return _152;
});
},"dojo/errors/RequestError":function(){
define(["./create"],function(_158){
return _158("RequestError",function(_159,_15a){
this.response=_15a;
});
});
},"dojo/_base/html":function(){
define(["./kernel","../dom","../dom-style","../dom-attr","../dom-prop","../dom-class","../dom-construct","../dom-geometry"],function(dojo,dom,_15b,attr,prop,cls,ctr,geom){
dojo.byId=dom.byId;
dojo.isDescendant=dom.isDescendant;
dojo.setSelectable=dom.setSelectable;
dojo.getAttr=attr.get;
dojo.setAttr=attr.set;
dojo.hasAttr=attr.has;
dojo.removeAttr=attr.remove;
dojo.getNodeProp=attr.getNodeProp;
dojo.attr=function(node,name,_15c){
if(arguments.length==2){
return attr[typeof name=="string"?"get":"set"](node,name);
}
return attr.set(node,name,_15c);
};
dojo.hasClass=cls.contains;
dojo.addClass=cls.add;
dojo.removeClass=cls.remove;
dojo.toggleClass=cls.toggle;
dojo.replaceClass=cls.replace;
dojo._toDom=dojo.toDom=ctr.toDom;
dojo.place=ctr.place;
dojo.create=ctr.create;
dojo.empty=function(node){
ctr.empty(node);
};
dojo._destroyElement=dojo.destroy=function(node){
ctr.destroy(node);
};
dojo._getPadExtents=dojo.getPadExtents=geom.getPadExtents;
dojo._getBorderExtents=dojo.getBorderExtents=geom.getBorderExtents;
dojo._getPadBorderExtents=dojo.getPadBorderExtents=geom.getPadBorderExtents;
dojo._getMarginExtents=dojo.getMarginExtents=geom.getMarginExtents;
dojo._getMarginSize=dojo.getMarginSize=geom.getMarginSize;
dojo._getMarginBox=dojo.getMarginBox=geom.getMarginBox;
dojo.setMarginBox=geom.setMarginBox;
dojo._getContentBox=dojo.getContentBox=geom.getContentBox;
dojo.setContentSize=geom.setContentSize;
dojo._isBodyLtr=dojo.isBodyLtr=geom.isBodyLtr;
dojo._docScroll=dojo.docScroll=geom.docScroll;
dojo._getIeDocumentElementOffset=dojo.getIeDocumentElementOffset=geom.getIeDocumentElementOffset;
dojo._fixIeBiDiScrollLeft=dojo.fixIeBiDiScrollLeft=geom.fixIeBiDiScrollLeft;
dojo.position=geom.position;
dojo.marginBox=function marginBox(node,box){
return box?geom.setMarginBox(node,box):geom.getMarginBox(node);
};
dojo.contentBox=function contentBox(node,box){
return box?geom.setContentSize(node,box):geom.getContentBox(node);
};
dojo.coords=function(node,_15d){
dojo.deprecated("dojo.coords()","Use dojo.position() or dojo.marginBox().");
node=dom.byId(node);
var s=_15b.getComputedStyle(node),mb=geom.getMarginBox(node,s);
var abs=geom.position(node,_15d);
mb.x=abs.x;
mb.y=abs.y;
return mb;
};
dojo.getProp=prop.get;
dojo.setProp=prop.set;
dojo.prop=function(node,name,_15e){
if(arguments.length==2){
return prop[typeof name=="string"?"get":"set"](node,name);
}
return prop.set(node,name,_15e);
};
dojo.getStyle=_15b.get;
dojo.setStyle=_15b.set;
dojo.getComputedStyle=_15b.getComputedStyle;
dojo.__toPixelValue=dojo.toPixelValue=_15b.toPixelValue;
dojo.style=function(node,name,_15f){
switch(arguments.length){
case 1:
return _15b.get(node);
case 2:
return _15b[typeof name=="string"?"get":"set"](node,name);
}
return _15b.set(node,name,_15f);
};
return dojo;
});
},"dojo/_base/kernel":function(){
define(["../has","./config","require","module"],function(has,_160,_161,_162){
var i,p,_163={},_164={},dojo={config:_160,global:this,dijit:_163,dojox:_164};
var _165={dojo:["dojo",dojo],dijit:["dijit",_163],dojox:["dojox",_164]},_166=(_161.map&&_161.map[_162.id.match(/[^\/]+/)[0]]),item;
for(p in _166){
if(_165[p]){
_165[p][0]=_166[p];
}else{
_165[p]=[_166[p],{}];
}
}
for(p in _165){
item=_165[p];
item[1]._scopeName=item[0];
if(!_160.noGlobals){
this[item[0]]=item[1];
}
}
dojo.scopeMap=_165;
dojo.baseUrl=dojo.config.baseUrl=_161.baseUrl;
dojo.isAsync=!1||_161.async;
dojo.locale=_160.locale;
var rev="$Rev: f774568 $".match(/[0-9a-f]{7,}/);
dojo.version={major:1,minor:9,patch:2,flag:"",revision:rev?rev[0]:NaN,toString:function(){
var v=dojo.version;
return v.major+"."+v.minor+"."+v.patch+v.flag+" ("+v.revision+")";
}};
1||has.add("extend-dojo",1);
(Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}"))(dojo);
if(0){
dojo.exit=function(_167){
quit(_167);
};
}else{
dojo.exit=function(){
};
}
1||has.add("dojo-guarantee-console",1);
if(1){
typeof console!="undefined"||(console={});
var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];
var tn;
i=0;
while((tn=cn[i++])){
if(!console[tn]){
(function(){
var tcn=tn+"";
console[tcn]=("log" in console)?function(){
var a=Array.apply({},arguments);
a.unshift(tcn+":");
console["log"](a.join(" "));
}:function(){
};
console[tcn]._fake=true;
})();
}
}
}
has.add("dojo-debug-messages",!!_160.isDebug);
dojo.deprecated=dojo.experimental=function(){
};
if(has("dojo-debug-messages")){
dojo.deprecated=function(_168,_169,_16a){
var _16b="DEPRECATED: "+_168;
if(_169){
_16b+=" "+_169;
}
if(_16a){
_16b+=" -- will be removed in version: "+_16a;
}
console.warn(_16b);
};
dojo.experimental=function(_16c,_16d){
var _16e="EXPERIMENTAL: "+_16c+" -- APIs subject to change without notice.";
if(_16d){
_16e+=" "+_16d;
}
console.warn(_16e);
};
}
1||has.add("dojo-modulePaths",1);
if(1){
if(_160.modulePaths){
dojo.deprecated("dojo.modulePaths","use paths configuration");
var _16f={};
for(p in _160.modulePaths){
_16f[p.replace(/\./g,"/")]=_160.modulePaths[p];
}
_161({paths:_16f});
}
}
1||has.add("dojo-moduleUrl",1);
if(1){
dojo.moduleUrl=function(_170,url){
dojo.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");
var _171=null;
if(_170){
_171=_161.toUrl(_170.replace(/\./g,"/")+(url?("/"+url):"")+"/*.*").replace(/\/\*\.\*/,"")+(url?"":"/");
}
return _171;
};
}
dojo._hasResource={};
return dojo;
});
},"dojo/io-query":function(){
define(["./_base/lang"],function(lang){
var _172={};
return {objectToQuery:function objectToQuery(map){
var enc=encodeURIComponent,_173=[];
for(var name in map){
var _174=map[name];
if(_174!=_172[name]){
var _175=enc(name)+"=";
if(lang.isArray(_174)){
for(var i=0,l=_174.length;i<l;++i){
_173.push(_175+enc(_174[i]));
}
}else{
_173.push(_175+enc(_174));
}
}
}
return _173.join("&");
},queryToObject:function queryToObject(str){
var dec=decodeURIComponent,qp=str.split("&"),ret={},name,val;
for(var i=0,l=qp.length,item;i<l;++i){
item=qp[i];
if(item.length){
var s=item.indexOf("=");
if(s<0){
name=dec(item);
val="";
}else{
name=dec(item.slice(0,s));
val=dec(item.slice(s+1));
}
if(typeof ret[name]=="string"){
ret[name]=[ret[name]];
}
if(lang.isArray(ret[name])){
ret[name].push(val);
}else{
ret[name]=val;
}
}
}
return ret;
}};
});
},"dojo/_base/Deferred":function(){
define(["./kernel","../Deferred","../promise/Promise","../errors/CancelError","../has","./lang","../when"],function(dojo,_176,_177,_178,has,lang,when){
var _179=function(){
};
var _17a=Object.freeze||function(){
};
var _17b=dojo.Deferred=function(_17c){
var _17d,_17e,_17f,_180,_181,head,_182;
var _183=(this.promise=new _177());
function _184(_185){
if(_17e){
throw new Error("This deferred has already been resolved");
}
_17d=_185;
_17e=true;
_186();
};
function _186(){
var _187;
while(!_187&&_182){
var _188=_182;
_182=_182.next;
if((_187=(_188.progress==_179))){
_17e=false;
}
var func=(_181?_188.error:_188.resolved);
if(has("config-useDeferredInstrumentation")){
if(_181&&_176.instrumentRejected){
_176.instrumentRejected(_17d,!!func);
}
}
if(func){
try{
var _189=func(_17d);
if(_189&&typeof _189.then==="function"){
_189.then(lang.hitch(_188.deferred,"resolve"),lang.hitch(_188.deferred,"reject"),lang.hitch(_188.deferred,"progress"));
continue;
}
var _18a=_187&&_189===undefined;
if(_187&&!_18a){
_181=_189 instanceof Error;
}
_188.deferred[_18a&&_181?"reject":"resolve"](_18a?_17d:_189);
}
catch(e){
_188.deferred.reject(e);
}
}else{
if(_181){
_188.deferred.reject(_17d);
}else{
_188.deferred.resolve(_17d);
}
}
}
};
this.isResolved=_183.isResolved=function(){
return _180==0;
};
this.isRejected=_183.isRejected=function(){
return _180==1;
};
this.isFulfilled=_183.isFulfilled=function(){
return _180>=0;
};
this.isCanceled=_183.isCanceled=function(){
return _17f;
};
this.resolve=this.callback=function(_18b){
this.fired=_180=0;
this.results=[_18b,null];
_184(_18b);
};
this.reject=this.errback=function(_18c){
_181=true;
this.fired=_180=1;
if(has("config-useDeferredInstrumentation")){
if(_176.instrumentRejected){
_176.instrumentRejected(_18c,!!_182);
}
}
_184(_18c);
this.results=[null,_18c];
};
this.progress=function(_18d){
var _18e=_182;
while(_18e){
var _18f=_18e.progress;
_18f&&_18f(_18d);
_18e=_18e.next;
}
};
this.addCallbacks=function(_190,_191){
this.then(_190,_191,_179);
return this;
};
_183.then=this.then=function(_192,_193,_194){
var _195=_194==_179?this:new _17b(_183.cancel);
var _196={resolved:_192,error:_193,progress:_194,deferred:_195};
if(_182){
head=head.next=_196;
}else{
_182=head=_196;
}
if(_17e){
_186();
}
return _195.promise;
};
var _197=this;
_183.cancel=this.cancel=function(){
if(!_17e){
var _198=_17c&&_17c(_197);
if(!_17e){
if(!(_198 instanceof Error)){
_198=new _178(_198);
}
_198.log=false;
_197.reject(_198);
}
}
_17f=true;
};
_17a(_183);
};
lang.extend(_17b,{addCallback:function(_199){
return this.addCallbacks(lang.hitch.apply(dojo,arguments));
},addErrback:function(_19a){
return this.addCallbacks(null,lang.hitch.apply(dojo,arguments));
},addBoth:function(_19b){
var _19c=lang.hitch.apply(dojo,arguments);
return this.addCallbacks(_19c,_19c);
},fired:-1});
_17b.when=dojo.when=when;
return _17b;
});
},"dojo/NodeList-dom":function(){
define(["./_base/kernel","./query","./_base/array","./_base/lang","./dom-class","./dom-construct","./dom-geometry","./dom-attr","./dom-style"],function(dojo,_19d,_19e,lang,_19f,_1a0,_1a1,_1a2,_1a3){
var _1a4=function(a){
return a.length==1&&(typeof a[0]=="string");
};
var _1a5=function(node){
var p=node.parentNode;
if(p){
p.removeChild(node);
}
};
var _1a6=_19d.NodeList,awc=_1a6._adaptWithCondition,aafe=_1a6._adaptAsForEach,aam=_1a6._adaptAsMap;
function _1a7(_1a8){
return function(node,name,_1a9){
if(arguments.length==2){
return _1a8[typeof name=="string"?"get":"set"](node,name);
}
return _1a8.set(node,name,_1a9);
};
};
lang.extend(_1a6,{_normalize:function(_1aa,_1ab){
var _1ac=_1aa.parse===true;
if(typeof _1aa.template=="string"){
var _1ad=_1aa.templateFunc||(dojo.string&&dojo.string.substitute);
_1aa=_1ad?_1ad(_1aa.template,_1aa):_1aa;
}
var type=(typeof _1aa);
if(type=="string"||type=="number"){
_1aa=_1a0.toDom(_1aa,(_1ab&&_1ab.ownerDocument));
if(_1aa.nodeType==11){
_1aa=lang._toArray(_1aa.childNodes);
}else{
_1aa=[_1aa];
}
}else{
if(!lang.isArrayLike(_1aa)){
_1aa=[_1aa];
}else{
if(!lang.isArray(_1aa)){
_1aa=lang._toArray(_1aa);
}
}
}
if(_1ac){
_1aa._runParse=true;
}
return _1aa;
},_cloneNode:function(node){
return node.cloneNode(true);
},_place:function(ary,_1ae,_1af,_1b0){
if(_1ae.nodeType!=1&&_1af=="only"){
return;
}
var _1b1=_1ae,_1b2;
var _1b3=ary.length;
for(var i=_1b3-1;i>=0;i--){
var node=(_1b0?this._cloneNode(ary[i]):ary[i]);
if(ary._runParse&&dojo.parser&&dojo.parser.parse){
if(!_1b2){
_1b2=_1b1.ownerDocument.createElement("div");
}
_1b2.appendChild(node);
dojo.parser.parse(_1b2);
node=_1b2.firstChild;
while(_1b2.firstChild){
_1b2.removeChild(_1b2.firstChild);
}
}
if(i==_1b3-1){
_1a0.place(node,_1b1,_1af);
}else{
_1b1.parentNode.insertBefore(node,_1b1);
}
_1b1=node;
}
},position:aam(_1a1.position),attr:awc(_1a7(_1a2),_1a4),style:awc(_1a7(_1a3),_1a4),addClass:aafe(_19f.add),removeClass:aafe(_19f.remove),toggleClass:aafe(_19f.toggle),replaceClass:aafe(_19f.replace),empty:aafe(_1a0.empty),removeAttr:aafe(_1a2.remove),marginBox:aam(_1a1.getMarginBox),place:function(_1b4,_1b5){
var item=_19d(_1b4)[0];
return this.forEach(function(node){
_1a0.place(node,item,_1b5);
});
},orphan:function(_1b6){
return (_1b6?_19d._filterResult(this,_1b6):this).forEach(_1a5);
},adopt:function(_1b7,_1b8){
return _19d(_1b7).place(this[0],_1b8)._stash(this);
},query:function(_1b9){
if(!_1b9){
return this;
}
var ret=new _1a6;
this.map(function(node){
_19d(_1b9,node).forEach(function(_1ba){
if(_1ba!==undefined){
ret.push(_1ba);
}
});
});
return ret._stash(this);
},filter:function(_1bb){
var a=arguments,_1bc=this,_1bd=0;
if(typeof _1bb=="string"){
_1bc=_19d._filterResult(this,a[0]);
if(a.length==1){
return _1bc._stash(this);
}
_1bd=1;
}
return this._wrap(_19e.filter(_1bc,a[_1bd],a[_1bd+1]),this);
},addContent:function(_1be,_1bf){
_1be=this._normalize(_1be,this[0]);
for(var i=0,node;(node=this[i]);i++){
if(_1be.length){
this._place(_1be,node,_1bf,i>0);
}else{
_1a0.empty(node);
}
}
return this;
}});
return _1a6;
});
},"dojo/query":function(){
define(["./_base/kernel","./has","./dom","./on","./_base/array","./_base/lang","./selector/_loader","./selector/_loader!default"],function(dojo,has,dom,on,_1c0,lang,_1c1,_1c2){
"use strict";
has.add("array-extensible",function(){
return lang.delegate([],{length:1}).length==1&&!has("bug-for-in-skips-shadowed");
});
var ap=Array.prototype,aps=ap.slice,apc=ap.concat,_1c3=_1c0.forEach;
var tnl=function(a,_1c4,_1c5){
var _1c6=new (_1c5||this._NodeListCtor||nl)(a);
return _1c4?_1c6._stash(_1c4):_1c6;
};
var _1c7=function(f,a,o){
a=[0].concat(aps.call(a,0));
o=o||dojo.global;
return function(node){
a[0]=node;
return f.apply(o,a);
};
};
var _1c8=function(f,o){
return function(){
this.forEach(_1c7(f,arguments,o));
return this;
};
};
var _1c9=function(f,o){
return function(){
return this.map(_1c7(f,arguments,o));
};
};
var _1ca=function(f,o){
return function(){
return this.filter(_1c7(f,arguments,o));
};
};
var _1cb=function(f,g,o){
return function(){
var a=arguments,body=_1c7(f,a,o);
if(g.call(o||dojo.global,a)){
return this.map(body);
}
this.forEach(body);
return this;
};
};
var _1cc=function(_1cd){
var _1ce=this instanceof nl&&has("array-extensible");
if(typeof _1cd=="number"){
_1cd=Array(_1cd);
}
var _1cf=(_1cd&&"length" in _1cd)?_1cd:arguments;
if(_1ce||!_1cf.sort){
var _1d0=_1ce?this:[],l=_1d0.length=_1cf.length;
for(var i=0;i<l;i++){
_1d0[i]=_1cf[i];
}
if(_1ce){
return _1d0;
}
_1cf=_1d0;
}
lang._mixin(_1cf,nlp);
_1cf._NodeListCtor=function(_1d1){
return nl(_1d1);
};
return _1cf;
};
var nl=_1cc,nlp=nl.prototype=has("array-extensible")?[]:{};
nl._wrap=nlp._wrap=tnl;
nl._adaptAsMap=_1c9;
nl._adaptAsForEach=_1c8;
nl._adaptAsFilter=_1ca;
nl._adaptWithCondition=_1cb;
_1c3(["slice","splice"],function(name){
var f=ap[name];
nlp[name]=function(){
return this._wrap(f.apply(this,arguments),name=="slice"?this:null);
};
});
_1c3(["indexOf","lastIndexOf","every","some"],function(name){
var f=_1c0[name];
nlp[name]=function(){
return f.apply(dojo,[this].concat(aps.call(arguments,0)));
};
});
lang.extend(_1cc,{constructor:nl,_NodeListCtor:nl,toString:function(){
return this.join(",");
},_stash:function(_1d2){
this._parent=_1d2;
return this;
},on:function(_1d3,_1d4){
var _1d5=this.map(function(node){
return on(node,_1d3,_1d4);
});
_1d5.remove=function(){
for(var i=0;i<_1d5.length;i++){
_1d5[i].remove();
}
};
return _1d5;
},end:function(){
if(this._parent){
return this._parent;
}else{
return new this._NodeListCtor(0);
}
},concat:function(item){
var t=aps.call(this,0),m=_1c0.map(arguments,function(a){
return aps.call(a,0);
});
return this._wrap(apc.apply(t,m),this);
},map:function(func,obj){
return this._wrap(_1c0.map(this,func,obj),this);
},forEach:function(_1d6,_1d7){
_1c3(this,_1d6,_1d7);
return this;
},filter:function(_1d8){
var a=arguments,_1d9=this,_1da=0;
if(typeof _1d8=="string"){
_1d9=_1db._filterResult(this,a[0]);
if(a.length==1){
return _1d9._stash(this);
}
_1da=1;
}
return this._wrap(_1c0.filter(_1d9,a[_1da],a[_1da+1]),this);
},instantiate:function(_1dc,_1dd){
var c=lang.isFunction(_1dc)?_1dc:lang.getObject(_1dc);
_1dd=_1dd||{};
return this.forEach(function(node){
new c(_1dd,node);
});
},at:function(){
var t=new this._NodeListCtor(0);
_1c3(arguments,function(i){
if(i<0){
i=this.length+i;
}
if(this[i]){
t.push(this[i]);
}
},this);
return t._stash(this);
}});
function _1de(_1df,_1e0){
var _1e1=function(_1e2,root){
if(typeof root=="string"){
root=dom.byId(root);
if(!root){
return new _1e0([]);
}
}
var _1e3=typeof _1e2=="string"?_1df(_1e2,root):_1e2?(_1e2.end&&_1e2.on)?_1e2:[_1e2]:[];
if(_1e3.end&&_1e3.on){
return _1e3;
}
return new _1e0(_1e3);
};
_1e1.matches=_1df.match||function(node,_1e4,root){
return _1e1.filter([node],_1e4,root).length>0;
};
_1e1.filter=_1df.filter||function(_1e5,_1e6,root){
return _1e1(_1e6,root).filter(function(node){
return _1c0.indexOf(_1e5,node)>-1;
});
};
if(typeof _1df!="function"){
var _1e7=_1df.search;
_1df=function(_1e8,root){
return _1e7(root||document,_1e8);
};
}
return _1e1;
};
var _1db=_1de(_1c2,_1cc);
dojo.query=_1de(_1c2,function(_1e9){
return _1cc(_1e9);
});
_1db.load=function(id,_1ea,_1eb){
_1c1.load(id,_1ea,function(_1ec){
_1eb(_1de(_1ec,_1cc));
});
};
dojo._filterQueryResult=_1db._filterResult=function(_1ed,_1ee,root){
return new _1cc(_1db.filter(_1ed,_1ee,root));
};
dojo.NodeList=_1db.NodeList=_1cc;
return _1db;
});
},"dojo/has":function(){
define(["require","module"],function(_1ef,_1f0){
var has=_1ef.has||function(){
};
if(!1){
var _1f1=typeof window!="undefined"&&typeof location!="undefined"&&typeof document!="undefined"&&window.location==location&&window.document==document,_1f2=this,doc=_1f1&&document,_1f3=doc&&doc.createElement("DiV"),_1f4=(_1f0.config&&_1f0.config())||{};
has=function(name){
return typeof _1f4[name]=="function"?(_1f4[name]=_1f4[name](_1f2,doc,_1f3)):_1f4[name];
};
has.cache=_1f4;
has.add=function(name,test,now,_1f5){
(typeof _1f4[name]=="undefined"||_1f5)&&(_1f4[name]=test);
return now&&has(name);
};
1||has.add("host-browser",_1f1);
1||has.add("dom",_1f1);
1||has.add("dojo-dom-ready-api",1);
1||has.add("dojo-sniff",1);
}
if(1){
has.add("dom-addeventlistener",!!document.addEventListener);
has.add("touch","ontouchstart" in document||window.navigator.msMaxTouchPoints>0);
has.add("device-width",screen.availWidth||innerWidth);
var form=document.createElement("form");
has.add("dom-attributes-explicit",form.attributes.length==0);
has.add("dom-attributes-specified-flag",form.attributes.length>0&&form.attributes.length<40);
}
has.clearElement=function(_1f6){
_1f6.innerHTML="";
return _1f6;
};
has.normalize=function(id,_1f7){
var _1f8=id.match(/[\?:]|[^:\?]*/g),i=0,get=function(skip){
var term=_1f8[i++];
if(term==":"){
return 0;
}else{
if(_1f8[i++]=="?"){
if(!skip&&has(term)){
return get();
}else{
get(true);
return get(skip);
}
}
return term||0;
}
};
id=get();
return id&&_1f7(id);
};
has.load=function(id,_1f9,_1fa){
if(id){
_1f9([id],_1fa);
}else{
_1fa();
}
};
return has;
});
},"dojo/_base/loader":function(){
define(["./kernel","../has","require","module","../json","./lang","./array"],function(dojo,has,_1fb,_1fc,json,lang,_1fd){
if(!1){
console.error("cannot load the Dojo v1.x loader with a foreign loader");
return 0;
}
1||has.add("dojo-fast-sync-require",1);
var _1fe=function(id){
return {src:_1fc.id,id:id};
},_1ff=function(name){
return name.replace(/\./g,"/");
},_200=/\/\/>>built/,_201=[],_202=[],_203=function(mid,_204,_205){
_201.push(_205);
_1fd.forEach(mid.split(","),function(mid){
var _206=_207(mid,_204.module);
_202.push(_206);
_208(_206);
});
_209();
},_209=(1?function(){
var _20a,mid;
for(mid in _20b){
_20a=_20b[mid];
if(_20a.noReqPluginCheck===undefined){
_20a.noReqPluginCheck=/loadInit\!/.test(mid)||/require\!/.test(mid)?1:0;
}
if(!_20a.executed&&!_20a.noReqPluginCheck&&_20a.injected==_20c){
return;
}
}
_20d(function(){
var _20e=_201;
_201=[];
_1fd.forEach(_20e,function(cb){
cb(1);
});
});
}:(function(){
var _20f,_210=function(m){
_20f[m.mid]=1;
for(var t,_211,deps=m.deps||[],i=0;i<deps.length;i++){
_211=deps[i];
if(!(t=_20f[_211.mid])){
if(t===0||!_210(_211)){
_20f[m.mid]=0;
return false;
}
}
}
return true;
};
return function(){
var _212,mid;
_20f={};
for(mid in _20b){
_212=_20b[mid];
if(_212.executed||_212.noReqPluginCheck){
_20f[mid]=1;
}else{
if(_212.noReqPluginCheck!==0){
_212.noReqPluginCheck=/loadInit\!/.test(mid)||/require\!/.test(mid)?1:0;
}
if(_212.noReqPluginCheck){
_20f[mid]=1;
}else{
if(_212.injected!==_23e){
_20f[mid]=0;
}
}
}
}
for(var t,i=0,end=_202.length;i<end;i++){
_212=_202[i];
if(!(t=_20f[_212.mid])){
if(t===0||!_210(_212)){
return;
}
}
}
_20d(function(){
var _213=_201;
_201=[];
_1fd.forEach(_213,function(cb){
cb(1);
});
});
};
})()),_214=function(mid,_215,_216){
_215([mid],function(_217){
_215(_217.names,function(){
for(var _218="",args=[],i=0;i<arguments.length;i++){
_218+="var "+_217.names[i]+"= arguments["+i+"]; ";
args.push(arguments[i]);
}
eval(_218);
var _219=_215.module,_21a=[],_21b,_21c={provide:function(_21d){
_21d=_1ff(_21d);
var _21e=_207(_21d,_219);
if(_21e!==_219){
_244(_21e);
}
},require:function(_21f,_220){
_21f=_1ff(_21f);
_220&&(_207(_21f,_219).result=_23f);
_21a.push(_21f);
},requireLocalization:function(_221,_222,_223){
if(!_21b){
_21b=["dojo/i18n"];
}
_223=(_223||dojo.locale).toLowerCase();
_221=_1ff(_221)+"/nls/"+(/root/i.test(_223)?"":_223+"/")+_1ff(_222);
if(_207(_221,_219).isXd){
_21b.push("dojo/i18n!"+_221);
}
},loadInit:function(f){
f();
}},hold={},p;
try{
for(p in _21c){
hold[p]=dojo[p];
dojo[p]=_21c[p];
}
_217.def.apply(null,args);
}
catch(e){
_224("error",[_1fe("failedDojoLoadInit"),e]);
}
finally{
for(p in _21c){
dojo[p]=hold[p];
}
}
if(_21b){
_21a=_21a.concat(_21b);
}
if(_21a.length){
_203(_21a.join(","),_215,_216);
}else{
_216();
}
});
});
},_225=function(text,_226,_227){
var _228=/\(|\)/g,_229=1,_22a;
_228.lastIndex=_226;
while((_22a=_228.exec(text))){
if(_22a[0]==")"){
_229-=1;
}else{
_229+=1;
}
if(_229==0){
break;
}
}
if(_229!=0){
throw "unmatched paren around character "+_228.lastIndex+" in: "+text;
}
return [dojo.trim(text.substring(_227,_228.lastIndex))+";\n",_228.lastIndex];
},_22b=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,_22c=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,_22d=/(^|\s)(require|define)\s*\(/m,_22e=function(text,_22f){
var _230,_231,_232,_233,_234=[],_235=[],_236=[];
_22f=_22f||text.replace(_22b,function(_237){
_22c.lastIndex=_22d.lastIndex=0;
return (_22c.test(_237)||_22d.test(_237))?"":_237;
});
while((_230=_22c.exec(_22f))){
_231=_22c.lastIndex;
_232=_231-_230[0].length;
_233=_225(_22f,_231,_232);
if(_230[2]=="loadInit"){
_234.push(_233[0]);
}else{
_235.push(_233[0]);
}
_22c.lastIndex=_233[1];
}
_236=_234.concat(_235);
if(_236.length||!_22d.test(_22f)){
return [text.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 && dojo.loadInit("),_236.join(""),_236];
}else{
return 0;
}
},_238=function(_239,text){
var _23a,id,_23b=[],_23c=[];
if(_200.test(text)||!(_23a=_22e(text))){
return 0;
}
id=_239.mid+"-*loadInit";
for(var p in _207("dojo",_239).result.scopeMap){
_23b.push(p);
_23c.push("\""+p+"\"");
}
return "// xdomain rewrite of "+_239.mid+"\n"+"define('"+id+"',{\n"+"\tnames:"+json.stringify(_23b)+",\n"+"\tdef:function("+_23b.join(",")+"){"+_23a[1]+"}"+"});\n\n"+"define("+json.stringify(_23b.concat(["dojo/loadInit!"+id]))+", function("+_23b.join(",")+"){\n"+_23a[0]+"});";
},_23d=_1fb.initSyncLoader(_203,_209,_238),sync=_23d.sync,_20c=_23d.requested,_23e=_23d.arrived,_23f=_23d.nonmodule,_240=_23d.executing,_241=_23d.executed,_242=_23d.syncExecStack,_20b=_23d.modules,_243=_23d.execQ,_207=_23d.getModule,_208=_23d.injectModule,_244=_23d.setArrived,_224=_23d.signal,_245=_23d.finishExec,_246=_23d.execModule,_247=_23d.getLegacyMode,_20d=_23d.guardCheckComplete;
_203=_23d.dojoRequirePlugin;
dojo.provide=function(mid){
var _248=_242[0],_249=lang.mixin(_207(_1ff(mid),_1fb.module),{executed:_240,result:lang.getObject(mid,true)});
_244(_249);
if(_248){
(_248.provides||(_248.provides=[])).push(function(){
_249.result=lang.getObject(mid);
delete _249.provides;
_249.executed!==_241&&_245(_249);
});
}
return _249.result;
};
has.add("config-publishRequireResult",1,0,0);
dojo.require=function(_24a,_24b){
function _24c(mid,_24d){
var _24e=_207(_1ff(mid),_1fb.module);
if(_242.length&&_242[0].finish){
_242[0].finish.push(mid);
return undefined;
}
if(_24e.executed){
return _24e.result;
}
_24d&&(_24e.result=_23f);
var _24f=_247();
_208(_24e);
_24f=_247();
if(_24e.executed!==_241&&_24e.injected===_23e){
_23d.guardCheckComplete(function(){
_246(_24e);
});
}
if(_24e.executed){
return _24e.result;
}
if(_24f==sync){
if(_24e.cjs){
_243.unshift(_24e);
}else{
_242.length&&(_242[0].finish=[mid]);
}
}else{
_243.push(_24e);
}
return undefined;
};
var _250=_24c(_24a,_24b);
if(has("config-publishRequireResult")&&!lang.exists(_24a)&&_250!==undefined){
lang.setObject(_24a,_250);
}
return _250;
};
dojo.loadInit=function(f){
f();
};
dojo.registerModulePath=function(_251,_252){
var _253={};
_253[_251.replace(/\./g,"/")]=_252;
_1fb({paths:_253});
};
dojo.platformRequire=function(_254){
var _255=(_254.common||[]).concat(_254[dojo._name]||_254["default"]||[]),temp;
while(_255.length){
if(lang.isArray(temp=_255.shift())){
dojo.require.apply(dojo,temp);
}else{
dojo.require(temp);
}
}
};
dojo.requireIf=dojo.requireAfterIf=function(_256,_257,_258){
if(_256){
dojo.require(_257,_258);
}
};
dojo.requireLocalization=function(_259,_25a,_25b){
_1fb(["../i18n"],function(i18n){
i18n.getLocalization(_259,_25a,_25b);
});
};
return {extractLegacyApiApplications:_22e,require:_203,loadInit:_214};
});
},"dojo/json":function(){
define(["./has"],function(has){
"use strict";
var _25c=typeof JSON!="undefined";
has.add("json-parse",_25c);
has.add("json-stringify",_25c&&JSON.stringify({a:0},function(k,v){
return v||1;
})=="{\"a\":1}");
if(has("json-stringify")){
return JSON;
}else{
var _25d=function(str){
return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
};
return {parse:has("json-parse")?JSON.parse:function(str,_25e){
if(_25e&&!/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(str)){
throw new SyntaxError("Invalid characters in JSON");
}
return eval("("+str+")");
},stringify:function(_25f,_260,_261){
var _262;
if(typeof _260=="string"){
_261=_260;
_260=null;
}
function _263(it,_264,key){
if(_260){
it=_260(key,it);
}
var val,_265=typeof it;
if(_265=="number"){
return isFinite(it)?it+"":"null";
}
if(_265=="boolean"){
return it+"";
}
if(it===null){
return "null";
}
if(typeof it=="string"){
return _25d(it);
}
if(_265=="function"||_265=="undefined"){
return _262;
}
if(typeof it.toJSON=="function"){
return _263(it.toJSON(key),_264,key);
}
if(it instanceof Date){
return "\"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z\"".replace(/\{(\w+)(\+)?\}/g,function(t,prop,plus){
var num=it["getUTC"+prop]()+(plus?1:0);
return num<10?"0"+num:num;
});
}
if(it.valueOf()!==it){
return _263(it.valueOf(),_264,key);
}
var _266=_261?(_264+_261):"";
var sep=_261?" ":"";
var _267=_261?"\n":"";
if(it instanceof Array){
var itl=it.length,res=[];
for(key=0;key<itl;key++){
var obj=it[key];
val=_263(obj,_266,key);
if(typeof val!="string"){
val="null";
}
res.push(_267+_266+val);
}
return "["+res.join(",")+_267+_264+"]";
}
var _268=[];
for(key in it){
var _269;
if(it.hasOwnProperty(key)){
if(typeof key=="number"){
_269="\""+key+"\"";
}else{
if(typeof key=="string"){
_269=_25d(key);
}else{
continue;
}
}
val=_263(it[key],_266,key);
if(typeof val!="string"){
continue;
}
_268.push(_267+_266+_269+":"+sep+val);
}
}
return "{"+_268.join(",")+_267+_264+"}";
};
return _263(_25f,"","");
}};
}
});
},"dojo/_base/declare":function(){
define(["./kernel","../has","./lang"],function(dojo,has,lang){
var mix=lang.mixin,op=Object.prototype,opts=op.toString,xtor=new Function,_26a=0,_26b="constructor";
function err(msg,cls){
throw new Error("declare"+(cls?" "+cls:"")+": "+msg);
};
function _26c(_26d,_26e){
var _26f=[],_270=[{cls:0,refs:[]}],_271={},_272=1,l=_26d.length,i=0,j,lin,base,top,_273,rec,name,refs;
for(;i<l;++i){
base=_26d[i];
if(!base){
err("mixin #"+i+" is unknown. Did you use dojo.require to pull it in?",_26e);
}else{
if(opts.call(base)!="[object Function]"){
err("mixin #"+i+" is not a callable constructor.",_26e);
}
}
lin=base._meta?base._meta.bases:[base];
top=0;
for(j=lin.length-1;j>=0;--j){
_273=lin[j].prototype;
if(!_273.hasOwnProperty("declaredClass")){
_273.declaredClass="uniqName_"+(_26a++);
}
name=_273.declaredClass;
if(!_271.hasOwnProperty(name)){
_271[name]={count:0,refs:[],cls:lin[j]};
++_272;
}
rec=_271[name];
if(top&&top!==rec){
rec.refs.push(top);
++top.count;
}
top=rec;
}
++top.count;
_270[0].refs.push(top);
}
while(_270.length){
top=_270.pop();
_26f.push(top.cls);
--_272;
while(refs=top.refs,refs.length==1){
top=refs[0];
if(!top||--top.count){
top=0;
break;
}
_26f.push(top.cls);
--_272;
}
if(top){
for(i=0,l=refs.length;i<l;++i){
top=refs[i];
if(!--top.count){
_270.push(top);
}
}
}
}
if(_272){
err("can't build consistent linearization",_26e);
}
base=_26d[0];
_26f[0]=base?base._meta&&base===_26f[_26f.length-base._meta.bases.length]?base._meta.bases.length:1:0;
return _26f;
};
function _274(args,a,f){
var name,_275,_276,_277,meta,base,_278,opf,pos,_279=this._inherited=this._inherited||{};
if(typeof args=="string"){
name=args;
args=a;
a=f;
}
f=0;
_277=args.callee;
name=name||_277.nom;
if(!name){
err("can't deduce a name to call inherited()",this.declaredClass);
}
meta=this.constructor._meta;
_276=meta.bases;
pos=_279.p;
if(name!=_26b){
if(_279.c!==_277){
pos=0;
base=_276[0];
meta=base._meta;
if(meta.hidden[name]!==_277){
_275=meta.chains;
if(_275&&typeof _275[name]=="string"){
err("calling chained method with inherited: "+name,this.declaredClass);
}
do{
meta=base._meta;
_278=base.prototype;
if(meta&&(_278[name]===_277&&_278.hasOwnProperty(name)||meta.hidden[name]===_277)){
break;
}
}while(base=_276[++pos]);
pos=base?pos:-1;
}
}
base=_276[++pos];
if(base){
_278=base.prototype;
if(base._meta&&_278.hasOwnProperty(name)){
f=_278[name];
}else{
opf=op[name];
do{
_278=base.prototype;
f=_278[name];
if(f&&(base._meta?_278.hasOwnProperty(name):f!==opf)){
break;
}
}while(base=_276[++pos]);
}
}
f=base&&f||op[name];
}else{
if(_279.c!==_277){
pos=0;
meta=_276[0]._meta;
if(meta&&meta.ctor!==_277){
_275=meta.chains;
if(!_275||_275.constructor!=="manual"){
err("calling chained constructor with inherited",this.declaredClass);
}
while(base=_276[++pos]){
meta=base._meta;
if(meta&&meta.ctor===_277){
break;
}
}
pos=base?pos:-1;
}
}
while(base=_276[++pos]){
meta=base._meta;
f=meta?meta.ctor:base;
if(f){
break;
}
}
f=base&&f;
}
_279.c=f;
_279.p=pos;
if(f){
return a===true?f:f.apply(this,a||args);
}
};
function _27a(name,args){
if(typeof name=="string"){
return this.__inherited(name,args,true);
}
return this.__inherited(name,true);
};
function _27b(args,a1,a2){
var f=this.getInherited(args,a1);
if(f){
return f.apply(this,a2||a1||args);
}
};
var _27c=dojo.config.isDebug?_27b:_274;
function _27d(cls){
var _27e=this.constructor._meta.bases;
for(var i=0,l=_27e.length;i<l;++i){
if(_27e[i]===cls){
return true;
}
}
return this instanceof cls;
};
function _27f(_280,_281){
for(var name in _281){
if(name!=_26b&&_281.hasOwnProperty(name)){
_280[name]=_281[name];
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _282=lang._extraNames,i=_282.length;i;){
name=_282[--i];
if(name!=_26b&&_281.hasOwnProperty(name)){
_280[name]=_281[name];
}
}
}
};
function _283(_284,_285){
var name,t;
for(name in _285){
t=_285[name];
if((t!==op[name]||!(name in op))&&name!=_26b){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_284[name]=t;
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _286=lang._extraNames,i=_286.length;i;){
name=_286[--i];
t=_285[name];
if((t!==op[name]||!(name in op))&&name!=_26b){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_284[name]=t;
}
}
}
return _284;
};
function _287(_288){
_289.safeMixin(this.prototype,_288);
return this;
};
function _28a(_28b,_28c){
return _289([this].concat(_28b),_28c||{});
};
function _28d(_28e,_28f){
return function(){
var a=arguments,args=a,a0=a[0],f,i,m,l=_28e.length,_290;
if(!(this instanceof a.callee)){
return _291(a);
}
if(_28f&&(a0&&a0.preamble||this.preamble)){
_290=new Array(_28e.length);
_290[0]=a;
for(i=0;;){
a0=a[0];
if(a0){
f=a0.preamble;
if(f){
a=f.apply(this,a)||a;
}
}
f=_28e[i].prototype;
f=f.hasOwnProperty("preamble")&&f.preamble;
if(f){
a=f.apply(this,a)||a;
}
if(++i==l){
break;
}
_290[i]=a;
}
}
for(i=l-1;i>=0;--i){
f=_28e[i];
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,_290?_290[i]:a);
}
}
f=this.postscript;
if(f){
f.apply(this,args);
}
};
};
function _292(ctor,_293){
return function(){
var a=arguments,t=a,a0=a[0],f;
if(!(this instanceof a.callee)){
return _291(a);
}
if(_293){
if(a0){
f=a0.preamble;
if(f){
t=f.apply(this,t)||t;
}
}
f=this.preamble;
if(f){
f.apply(this,t);
}
}
if(ctor){
ctor.apply(this,a);
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _294(_295){
return function(){
var a=arguments,i=0,f,m;
if(!(this instanceof a.callee)){
return _291(a);
}
for(;f=_295[i];++i){
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,a);
break;
}
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _296(name,_297,_298){
return function(){
var b,m,f,i=0,step=1;
if(_298){
i=_297.length-1;
step=-1;
}
for(;b=_297[i];i+=step){
m=b._meta;
f=(m?m.hidden:b.prototype)[name];
if(f){
f.apply(this,arguments);
}
}
};
};
function _299(ctor){
xtor.prototype=ctor.prototype;
var t=new xtor;
xtor.prototype=null;
return t;
};
function _291(args){
var ctor=args.callee,t=_299(ctor);
ctor.apply(t,args);
return t;
};
function _289(_29a,_29b,_29c){
if(typeof _29a!="string"){
_29c=_29b;
_29b=_29a;
_29a="";
}
_29c=_29c||{};
var _29d,i,t,ctor,name,_29e,_29f,_2a0=1,_2a1=_29b;
if(opts.call(_29b)=="[object Array]"){
_29e=_26c(_29b,_29a);
t=_29e[0];
_2a0=_29e.length-t;
_29b=_29e[_2a0];
}else{
_29e=[0];
if(_29b){
if(opts.call(_29b)=="[object Function]"){
t=_29b._meta;
_29e=_29e.concat(t?t.bases:_29b);
}else{
err("base class is not a callable constructor.",_29a);
}
}else{
if(_29b!==null){
err("unknown base class. Did you use dojo.require to pull it in?",_29a);
}
}
}
if(_29b){
for(i=_2a0-1;;--i){
_29d=_299(_29b);
if(!i){
break;
}
t=_29e[i];
(t._meta?_27f:mix)(_29d,t.prototype);
ctor=new Function;
ctor.superclass=_29b;
ctor.prototype=_29d;
_29b=_29d.constructor=ctor;
}
}else{
_29d={};
}
_289.safeMixin(_29d,_29c);
t=_29c.constructor;
if(t!==op.constructor){
t.nom=_26b;
_29d.constructor=t;
}
for(i=_2a0-1;i;--i){
t=_29e[i]._meta;
if(t&&t.chains){
_29f=mix(_29f||{},t.chains);
}
}
if(_29d["-chains-"]){
_29f=mix(_29f||{},_29d["-chains-"]);
}
t=!_29f||!_29f.hasOwnProperty(_26b);
_29e[0]=ctor=(_29f&&_29f.constructor==="manual")?_294(_29e):(_29e.length==1?_292(_29c.constructor,t):_28d(_29e,t));
ctor._meta={bases:_29e,hidden:_29c,chains:_29f,parents:_2a1,ctor:_29c.constructor};
ctor.superclass=_29b&&_29b.prototype;
ctor.extend=_287;
ctor.createSubclass=_28a;
ctor.prototype=_29d;
_29d.constructor=ctor;
_29d.getInherited=_27a;
_29d.isInstanceOf=_27d;
_29d.inherited=_27c;
_29d.__inherited=_274;
if(_29a){
_29d.declaredClass=_29a;
lang.setObject(_29a,ctor);
}
if(_29f){
for(name in _29f){
if(_29d[name]&&typeof _29f[name]=="string"&&name!=_26b){
t=_29d[name]=_296(name,_29e,_29f[name]==="after");
t.nom=name;
}
}
}
return ctor;
};
dojo.safeMixin=_289.safeMixin=_283;
dojo.declare=_289;
return _289;
});
},"dojo/dom":function(){
define(["./sniff","./_base/window"],function(has,win){
if(has("ie")<=7){
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
}
var dom={};
if(has("ie")){
dom.byId=function(id,doc){
if(typeof id!="string"){
return id;
}
var _2a2=doc||win.doc,te=id&&_2a2.getElementById(id);
if(te&&(te.attributes.id.value==id||te.id==id)){
return te;
}else{
var eles=_2a2.all[id];
if(!eles||eles.nodeName){
eles=[eles];
}
var i=0;
while((te=eles[i++])){
if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){
return te;
}
}
}
};
}else{
dom.byId=function(id,doc){
return ((typeof id=="string")?(doc||win.doc).getElementById(id):id)||null;
};
}
dom.isDescendant=function(node,_2a3){
try{
node=dom.byId(node);
_2a3=dom.byId(_2a3);
while(node){
if(node==_2a3){
return true;
}
node=node.parentNode;
}
}
catch(e){
}
return false;
};
has.add("css-user-select",function(_2a4,doc,_2a5){
if(!_2a5){
return false;
}
var _2a6=_2a5.style;
var _2a7=["Khtml","O","ms","Moz","Webkit"],i=_2a7.length,name="userSelect",_2a8;
do{
if(typeof _2a6[name]!=="undefined"){
return name;
}
}while(i--&&(name=_2a7[i]+"UserSelect"));
return false;
});
var _2a9=has("css-user-select");
dom.setSelectable=_2a9?function(node,_2aa){
dom.byId(node).style[_2a9]=_2aa?"":"none";
}:function(node,_2ab){
node=dom.byId(node);
var _2ac=node.getElementsByTagName("*"),i=_2ac.length;
if(_2ab){
node.removeAttribute("unselectable");
while(i--){
_2ac[i].removeAttribute("unselectable");
}
}else{
node.setAttribute("unselectable","on");
while(i--){
_2ac[i].setAttribute("unselectable","on");
}
}
};
return dom;
});
},"dojo/_base/browser":function(){
if(require.has){
require.has.add("config-selectorEngine","acme");
}
define(["../ready","./kernel","./connect","./unload","./window","./event","./html","./NodeList","../query","./xhr","./fx"],function(dojo){
return dojo;
});
},"dojo/errors/RequestTimeoutError":function(){
define(["./create","./RequestError"],function(_2ad,_2ae){
return _2ad("RequestTimeoutError",null,_2ae,{dojoType:"timeout"});
});
},"dojo/dom-style":function(){
define(["./sniff","./dom"],function(has,dom){
var _2af,_2b0={};
if(has("webkit")){
_2af=function(node){
var s;
if(node.nodeType==1){
var dv=node.ownerDocument.defaultView;
s=dv.getComputedStyle(node,null);
if(!s&&node.style){
node.style.display="";
s=dv.getComputedStyle(node,null);
}
}
return s||{};
};
}else{
if(has("ie")&&(has("ie")<9||has("quirks"))){
_2af=function(node){
return node.nodeType==1&&node.currentStyle?node.currentStyle:{};
};
}else{
_2af=function(node){
return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};
};
}
}
_2b0.getComputedStyle=_2af;
var _2b1;
if(!has("ie")){
_2b1=function(_2b2,_2b3){
return parseFloat(_2b3)||0;
};
}else{
_2b1=function(_2b4,_2b5){
if(!_2b5){
return 0;
}
if(_2b5=="medium"){
return 4;
}
if(_2b5.slice&&_2b5.slice(-2)=="px"){
return parseFloat(_2b5);
}
var s=_2b4.style,rs=_2b4.runtimeStyle,cs=_2b4.currentStyle,_2b6=s.left,_2b7=rs.left;
rs.left=cs.left;
try{
s.left=_2b5;
_2b5=s.pixelLeft;
}
catch(e){
_2b5=0;
}
s.left=_2b6;
rs.left=_2b7;
return _2b5;
};
}
_2b0.toPixelValue=_2b1;
var astr="DXImageTransform.Microsoft.Alpha";
var af=function(n,f){
try{
return n.filters.item(astr);
}
catch(e){
return f?{}:null;
}
};
var _2b8=has("ie")<9||(has("ie")<10&&has("quirks"))?function(node){
try{
return af(node).Opacity/100;
}
catch(e){
return 1;
}
}:function(node){
return _2af(node).opacity;
};
var _2b9=has("ie")<9||(has("ie")<10&&has("quirks"))?function(node,_2ba){
if(_2ba===""){
_2ba=1;
}
var ov=_2ba*100,_2bb=_2ba===1;
if(_2bb){
node.style.zoom="";
if(af(node)){
node.style.filter=node.style.filter.replace(new RegExp("\\s*progid:"+astr+"\\([^\\)]+?\\)","i"),"");
}
}else{
node.style.zoom=1;
if(af(node)){
af(node,1).Opacity=ov;
}else{
node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";
}
af(node,1).Enabled=true;
}
if(node.tagName.toLowerCase()=="tr"){
for(var td=node.firstChild;td;td=td.nextSibling){
if(td.tagName.toLowerCase()=="td"){
_2b9(td,_2ba);
}
}
}
return _2ba;
}:function(node,_2bc){
return node.style.opacity=_2bc;
};
var _2bd={left:true,top:true};
var _2be=/margin|padding|width|height|max|min|offset/;
function _2bf(node,type,_2c0){
type=type.toLowerCase();
if(has("ie")){
if(_2c0=="auto"){
if(type=="height"){
return node.offsetHeight;
}
if(type=="width"){
return node.offsetWidth;
}
}
if(type=="fontweight"){
switch(_2c0){
case 700:
return "bold";
case 400:
default:
return "normal";
}
}
}
if(!(type in _2bd)){
_2bd[type]=_2be.test(type);
}
return _2bd[type]?_2b1(node,_2c0):_2c0;
};
var _2c1={cssFloat:1,styleFloat:1,"float":1};
_2b0.get=function getStyle(node,name){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
if(l==2&&op){
return _2b8(n);
}
name=_2c1[name]?"cssFloat" in n.style?"cssFloat":"styleFloat":name;
var s=_2b0.getComputedStyle(n);
return (l==1)?s:_2bf(n,name,s[name]||n.style[name]);
};
_2b0.set=function setStyle(node,name,_2c2){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
name=_2c1[name]?"cssFloat" in n.style?"cssFloat":"styleFloat":name;
if(l==3){
return op?_2b9(n,_2c2):n.style[name]=_2c2;
}
for(var x in name){
_2b0.set(node,x,name[x]);
}
return _2b0.getComputedStyle(n);
};
return _2b0;
});
},"dojo/dom-geometry":function(){
define(["./sniff","./_base/window","./dom","./dom-style"],function(has,win,dom,_2c3){
var geom={};
geom.boxModel="content-box";
if(has("ie")){
geom.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";
}
geom.getPadExtents=function getPadExtents(node,_2c4){
node=dom.byId(node);
var s=_2c4||_2c3.getComputedStyle(node),px=_2c3.toPixelValue,l=px(node,s.paddingLeft),t=px(node,s.paddingTop),r=px(node,s.paddingRight),b=px(node,s.paddingBottom);
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
var none="none";
geom.getBorderExtents=function getBorderExtents(node,_2c5){
node=dom.byId(node);
var px=_2c3.toPixelValue,s=_2c5||_2c3.getComputedStyle(node),l=s.borderLeftStyle!=none?px(node,s.borderLeftWidth):0,t=s.borderTopStyle!=none?px(node,s.borderTopWidth):0,r=s.borderRightStyle!=none?px(node,s.borderRightWidth):0,b=s.borderBottomStyle!=none?px(node,s.borderBottomWidth):0;
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getPadBorderExtents=function getPadBorderExtents(node,_2c6){
node=dom.byId(node);
var s=_2c6||_2c3.getComputedStyle(node),p=geom.getPadExtents(node,s),b=geom.getBorderExtents(node,s);
return {l:p.l+b.l,t:p.t+b.t,r:p.r+b.r,b:p.b+b.b,w:p.w+b.w,h:p.h+b.h};
};
geom.getMarginExtents=function getMarginExtents(node,_2c7){
node=dom.byId(node);
var s=_2c7||_2c3.getComputedStyle(node),px=_2c3.toPixelValue,l=px(node,s.marginLeft),t=px(node,s.marginTop),r=px(node,s.marginRight),b=px(node,s.marginBottom);
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getMarginBox=function getMarginBox(node,_2c8){
node=dom.byId(node);
var s=_2c8||_2c3.getComputedStyle(node),me=geom.getMarginExtents(node,s),l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode,px=_2c3.toPixelValue,pcs;
if(has("mozilla")){
var sl=parseFloat(s.left),st=parseFloat(s.top);
if(!isNaN(sl)&&!isNaN(st)){
l=sl;
t=st;
}else{
if(p&&p.style){
pcs=_2c3.getComputedStyle(p);
if(pcs.overflow!="visible"){
l+=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t+=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
}else{
if(has("opera")||(has("ie")==8&&!has("quirks"))){
if(p){
pcs=_2c3.getComputedStyle(p);
l-=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t-=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};
};
geom.getContentBox=function getContentBox(node,_2c9){
node=dom.byId(node);
var s=_2c9||_2c3.getComputedStyle(node),w=node.clientWidth,h,pe=geom.getPadExtents(node,s),be=geom.getBorderExtents(node,s);
if(!w){
w=node.offsetWidth;
h=node.offsetHeight;
}else{
h=node.clientHeight;
be.w=be.h=0;
}
if(has("opera")){
pe.l+=be.l;
pe.t+=be.t;
}
return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};
};
function _2ca(node,l,t,w,h,u){
u=u||"px";
var s=node.style;
if(!isNaN(l)){
s.left=l+u;
}
if(!isNaN(t)){
s.top=t+u;
}
if(w>=0){
s.width=w+u;
}
if(h>=0){
s.height=h+u;
}
};
function _2cb(node){
return node.tagName.toLowerCase()=="button"||node.tagName.toLowerCase()=="input"&&(node.getAttribute("type")||"").toLowerCase()=="button";
};
function _2cc(node){
return geom.boxModel=="border-box"||node.tagName.toLowerCase()=="table"||_2cb(node);
};
geom.setContentSize=function setContentSize(node,box,_2cd){
node=dom.byId(node);
var w=box.w,h=box.h;
if(_2cc(node)){
var pb=geom.getPadBorderExtents(node,_2cd);
if(w>=0){
w+=pb.w;
}
if(h>=0){
h+=pb.h;
}
}
_2ca(node,NaN,NaN,w,h);
};
var _2ce={l:0,t:0,w:0,h:0};
geom.setMarginBox=function setMarginBox(node,box,_2cf){
node=dom.byId(node);
var s=_2cf||_2c3.getComputedStyle(node),w=box.w,h=box.h,pb=_2cc(node)?_2ce:geom.getPadBorderExtents(node,s),mb=geom.getMarginExtents(node,s);
if(has("webkit")){
if(_2cb(node)){
var ns=node.style;
if(w>=0&&!ns.width){
ns.width="4px";
}
if(h>=0&&!ns.height){
ns.height="4px";
}
}
}
if(w>=0){
w=Math.max(w-pb.w-mb.w,0);
}
if(h>=0){
h=Math.max(h-pb.h-mb.h,0);
}
_2ca(node,box.l,box.t,w,h);
};
geom.isBodyLtr=function isBodyLtr(doc){
doc=doc||win.doc;
return (win.body(doc).dir||doc.documentElement.dir||"ltr").toLowerCase()=="ltr";
};
geom.docScroll=function docScroll(doc){
doc=doc||win.doc;
var node=win.doc.parentWindow||win.doc.defaultView;
return "pageXOffset" in node?{x:node.pageXOffset,y:node.pageYOffset}:(node=has("quirks")?win.body(doc):doc.documentElement)&&{x:geom.fixIeBiDiScrollLeft(node.scrollLeft||0,doc),y:node.scrollTop||0};
};
if(has("ie")){
geom.getIeDocumentElementOffset=function getIeDocumentElementOffset(doc){
doc=doc||win.doc;
var de=doc.documentElement;
if(has("ie")<8){
var r=de.getBoundingClientRect(),l=r.left,t=r.top;
if(has("ie")<7){
l+=de.clientLeft;
t+=de.clientTop;
}
return {x:l<0?0:l,y:t<0?0:t};
}else{
return {x:0,y:0};
}
};
}
geom.fixIeBiDiScrollLeft=function fixIeBiDiScrollLeft(_2d0,doc){
doc=doc||win.doc;
var ie=has("ie");
if(ie&&!geom.isBodyLtr(doc)){
var qk=has("quirks"),de=qk?win.body(doc):doc.documentElement,pwin=win.global;
if(ie==6&&!qk&&pwin.frameElement&&de.scrollHeight>de.clientHeight){
_2d0+=de.clientLeft;
}
return (ie<8||qk)?(_2d0+de.clientWidth-de.scrollWidth):-_2d0;
}
return _2d0;
};
geom.position=function(node,_2d1){
node=dom.byId(node);
var db=win.body(node.ownerDocument),ret=node.getBoundingClientRect();
ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};
if(has("ie")<9){
var _2d2=geom.getIeDocumentElementOffset(node.ownerDocument);
ret.x-=_2d2.x+(has("quirks")?db.clientLeft+db.offsetLeft:0);
ret.y-=_2d2.y+(has("quirks")?db.clientTop+db.offsetTop:0);
}
if(_2d1){
var _2d3=geom.docScroll(node.ownerDocument);
ret.x+=_2d3.x;
ret.y+=_2d3.y;
}
return ret;
};
geom.getMarginSize=function getMarginSize(node,_2d4){
node=dom.byId(node);
var me=geom.getMarginExtents(node,_2d4||_2c3.getComputedStyle(node));
var size=node.getBoundingClientRect();
return {w:(size.right-size.left)+me.w,h:(size.bottom-size.top)+me.h};
};
geom.normalizeEvent=function(_2d5){
if(!("layerX" in _2d5)){
_2d5.layerX=_2d5.offsetX;
_2d5.layerY=_2d5.offsetY;
}
if(!has("dom-addeventlistener")){
var se=_2d5.target;
var doc=(se&&se.ownerDocument)||document;
var _2d6=has("quirks")?doc.body:doc.documentElement;
var _2d7=geom.getIeDocumentElementOffset(doc);
_2d5.pageX=_2d5.clientX+geom.fixIeBiDiScrollLeft(_2d6.scrollLeft||0,doc)-_2d7.x;
_2d5.pageY=_2d5.clientY+(_2d6.scrollTop||0)-_2d7.y;
}
};
return geom;
});
},"dojo/dom-prop":function(){
define(["exports","./_base/kernel","./sniff","./_base/lang","./dom","./dom-style","./dom-construct","./_base/connect"],function(_2d8,dojo,has,lang,dom,_2d9,ctr,conn){
var _2da={},_2db=0,_2dc=dojo._scopeName+"attrid";
_2d8.names={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"};
_2d8.get=function getProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_2dd=_2d8.names[lc]||name;
return node[_2dd];
};
_2d8.set=function setProp(node,name,_2de){
node=dom.byId(node);
var l=arguments.length;
if(l==2&&typeof name!="string"){
for(var x in name){
_2d8.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_2df=_2d8.names[lc]||name;
if(_2df=="style"&&typeof _2de!="string"){
_2d9.set(node,_2de);
return node;
}
if(_2df=="innerHTML"){
if(has("ie")&&node.tagName.toLowerCase() in {col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1}){
ctr.empty(node);
node.appendChild(ctr.toDom(_2de,node.ownerDocument));
}else{
node[_2df]=_2de;
}
return node;
}
if(lang.isFunction(_2de)){
var _2e0=node[_2dc];
if(!_2e0){
_2e0=_2db++;
node[_2dc]=_2e0;
}
if(!_2da[_2e0]){
_2da[_2e0]={};
}
var h=_2da[_2e0][_2df];
if(h){
conn.disconnect(h);
}else{
try{
delete node[_2df];
}
catch(e){
}
}
if(_2de){
_2da[_2e0][_2df]=conn.connect(node,_2df,_2de);
}else{
node[_2df]=null;
}
return node;
}
node[_2df]=_2de;
return node;
};
});
},"dojo/when":function(){
define(["./Deferred","./promise/Promise"],function(_2e1,_2e2){
"use strict";
return function when(_2e3,_2e4,_2e5,_2e6){
var _2e7=_2e3&&typeof _2e3.then==="function";
var _2e8=_2e7&&_2e3 instanceof _2e2;
if(!_2e7){
if(arguments.length>1){
return _2e4?_2e4(_2e3):_2e3;
}else{
return new _2e1().resolve(_2e3);
}
}else{
if(!_2e8){
var _2e9=new _2e1(_2e3.cancel);
_2e3.then(_2e9.resolve,_2e9.reject,_2e9.progress);
_2e3=_2e9.promise;
}
}
if(_2e4||_2e5||_2e6){
return _2e3.then(_2e4,_2e5,_2e6);
}
return _2e3;
};
});
},"dojo/dom-attr":function(){
define(["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(_2ea,has,lang,dom,_2eb,prop){
var _2ec={innerHTML:1,className:1,htmlFor:has("ie"),value:1},_2ed={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};
function _2ee(node,name){
var attr=node.getAttributeNode&&node.getAttributeNode(name);
return attr&&attr.specified;
};
_2ea.has=function hasAttr(node,name){
var lc=name.toLowerCase();
return _2ec[prop.names[lc]||name]||_2ee(dom.byId(node),_2ed[lc]||name);
};
_2ea.get=function getAttr(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_2ef=prop.names[lc]||name,_2f0=_2ec[_2ef],_2f1=node[_2ef];
if(_2f0&&typeof _2f1!="undefined"){
return _2f1;
}
if(_2ef!="href"&&(typeof _2f1=="boolean"||lang.isFunction(_2f1))){
return _2f1;
}
var _2f2=_2ed[lc]||name;
return _2ee(node,_2f2)?node.getAttribute(_2f2):null;
};
_2ea.set=function setAttr(node,name,_2f3){
node=dom.byId(node);
if(arguments.length==2){
for(var x in name){
_2ea.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_2f4=prop.names[lc]||name,_2f5=_2ec[_2f4];
if(_2f4=="style"&&typeof _2f3!="string"){
_2eb.set(node,_2f3);
return node;
}
if(_2f5||typeof _2f3=="boolean"||lang.isFunction(_2f3)){
return prop.set(node,name,_2f3);
}
node.setAttribute(_2ed[lc]||name,_2f3);
return node;
};
_2ea.remove=function removeAttr(node,name){
dom.byId(node).removeAttribute(_2ed[name.toLowerCase()]||name);
};
_2ea.getNodeProp=function getNodeProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_2f6=prop.names[lc]||name;
if((_2f6 in node)&&_2f6!="href"){
return node[_2f6];
}
var _2f7=_2ed[lc]||name;
return _2ee(node,_2f7)?node.getAttribute(_2f7):null;
};
});
},"dojo/dom-construct":function(){
define(["exports","./_base/kernel","./sniff","./_base/window","./dom","./dom-attr"],function(_2f8,dojo,has,win,dom,attr){
var _2f9={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_2fa=/<\s*([\w\:]+)/,_2fb={},_2fc=0,_2fd="__"+dojo._scopeName+"ToDomId";
for(var _2fe in _2f9){
if(_2f9.hasOwnProperty(_2fe)){
var tw=_2f9[_2fe];
tw.pre=_2fe=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";
tw.post="</"+tw.reverse().join("></")+">";
}
}
var _2ff;
if(has("ie")<=8){
_2ff=function(doc){
doc.__dojo_html5_tested="yes";
var div=_300("div",{innerHTML:"<nav>a</nav>",style:{visibility:"hidden"}},doc.body);
if(div.childNodes.length!==1){
("abbr article aside audio canvas details figcaption figure footer header "+"hgroup mark meter nav output progress section summary time video").replace(/\b\w+\b/g,function(n){
doc.createElement(n);
});
}
_301(div);
};
}
function _302(node,ref){
var _303=ref.parentNode;
if(_303){
_303.insertBefore(node,ref);
}
};
function _304(node,ref){
var _305=ref.parentNode;
if(_305){
if(_305.lastChild==ref){
_305.appendChild(node);
}else{
_305.insertBefore(node,ref.nextSibling);
}
}
};
_2f8.toDom=function toDom(frag,doc){
doc=doc||win.doc;
var _306=doc[_2fd];
if(!_306){
doc[_2fd]=_306=++_2fc+"";
_2fb[_306]=doc.createElement("div");
}
if(has("ie")<=8){
if(!doc.__dojo_html5_tested&&doc.body){
_2ff(doc);
}
}
frag+="";
var _307=frag.match(_2fa),tag=_307?_307[1].toLowerCase():"",_308=_2fb[_306],wrap,i,fc,df;
if(_307&&_2f9[tag]){
wrap=_2f9[tag];
_308.innerHTML=wrap.pre+frag+wrap.post;
for(i=wrap.length;i;--i){
_308=_308.firstChild;
}
}else{
_308.innerHTML=frag;
}
if(_308.childNodes.length==1){
return _308.removeChild(_308.firstChild);
}
df=doc.createDocumentFragment();
while((fc=_308.firstChild)){
df.appendChild(fc);
}
return df;
};
_2f8.place=function place(node,_309,_30a){
_309=dom.byId(_309);
if(typeof node=="string"){
node=/^\s*</.test(node)?_2f8.toDom(node,_309.ownerDocument):dom.byId(node);
}
if(typeof _30a=="number"){
var cn=_309.childNodes;
if(!cn.length||cn.length<=_30a){
_309.appendChild(node);
}else{
_302(node,cn[_30a<0?0:_30a]);
}
}else{
switch(_30a){
case "before":
_302(node,_309);
break;
case "after":
_304(node,_309);
break;
case "replace":
_309.parentNode.replaceChild(node,_309);
break;
case "only":
_2f8.empty(_309);
_309.appendChild(node);
break;
case "first":
if(_309.firstChild){
_302(node,_309.firstChild);
break;
}
default:
_309.appendChild(node);
}
}
return node;
};
var _300=_2f8.create=function _300(tag,_30b,_30c,pos){
var doc=win.doc;
if(_30c){
_30c=dom.byId(_30c);
doc=_30c.ownerDocument;
}
if(typeof tag=="string"){
tag=doc.createElement(tag);
}
if(_30b){
attr.set(tag,_30b);
}
if(_30c){
_2f8.place(tag,_30c,pos);
}
return tag;
};
function _30d(node){
if(node.canHaveChildren){
try{
node.innerHTML="";
return;
}
catch(e){
}
}
for(var c;c=node.lastChild;){
_30e(c,node);
}
};
_2f8.empty=function empty(node){
_30d(dom.byId(node));
};
function _30e(node,_30f){
if(node.firstChild){
_30d(node);
}
if(_30f){
has("ie")&&_30f.canHaveChildren&&"removeNode" in node?node.removeNode(false):_30f.removeChild(node);
}
};
var _301=_2f8.destroy=function _301(node){
node=dom.byId(node);
if(!node){
return;
}
_30e(node,node.parentNode);
};
});
},"dojo/request/xhr":function(){
define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(_310,_311,_312,util,has){
has.add("native-xhr",function(){
return typeof XMLHttpRequest!=="undefined";
});
has.add("dojo-force-activex-xhr",function(){
return has("activex")&&!document.addEventListener&&window.location.protocol==="file:";
});
has.add("native-xhr2",function(){
if(!has("native-xhr")){
return;
}
var x=new XMLHttpRequest();
return typeof x["addEventListener"]!=="undefined"&&(typeof opera==="undefined"||typeof x["upload"]!=="undefined");
});
has.add("native-formdata",function(){
return typeof FormData==="function";
});
function _313(_314,_315){
var _316=_314.xhr;
_314.status=_314.xhr.status;
_314.text=_316.responseText;
if(_314.options.handleAs==="xml"){
_314.data=_316.responseXML;
}
if(!_315){
try{
_312(_314);
}
catch(e){
_315=e;
}
}
if(_315){
this.reject(_315);
}else{
if(util.checkStatus(_316.status)){
this.resolve(_314);
}else{
_315=new _310("Unable to load "+_314.url+" status: "+_316.status,_314);
this.reject(_315);
}
}
};
var _317,_318,_319,_31a;
if(has("native-xhr2")){
_317=function(_31b){
return !this.isFulfilled();
};
_31a=function(dfd,_31c){
_31c.xhr.abort();
};
_319=function(_31d,dfd,_31e){
function _31f(evt){
dfd.handleResponse(_31e);
};
function _320(evt){
var _321=evt.target;
var _322=new _310("Unable to load "+_31e.url+" status: "+_321.status,_31e);
dfd.handleResponse(_31e,_322);
};
function _323(evt){
if(evt.lengthComputable){
_31e.loaded=evt.loaded;
_31e.total=evt.total;
dfd.progress(_31e);
}
};
_31d.addEventListener("load",_31f,false);
_31d.addEventListener("error",_320,false);
_31d.addEventListener("progress",_323,false);
return function(){
_31d.removeEventListener("load",_31f,false);
_31d.removeEventListener("error",_320,false);
_31d.removeEventListener("progress",_323,false);
_31d=null;
};
};
}else{
_317=function(_324){
return _324.xhr.readyState;
};
_318=function(_325){
return 4===_325.xhr.readyState;
};
_31a=function(dfd,_326){
var xhr=_326.xhr;
var _327=typeof xhr.abort;
if(_327==="function"||_327==="object"||_327==="unknown"){
xhr.abort();
}
};
}
function _328(_329){
return this.xhr.getResponseHeader(_329);
};
var _32a,_32b={data:null,query:null,sync:false,method:"GET"};
function xhr(url,_32c,_32d){
var _32e=util.parseArgs(url,util.deepCreate(_32b,_32c),has("native-formdata")&&_32c&&_32c.data&&_32c.data instanceof FormData);
url=_32e.url;
_32c=_32e.options;
var _32f,last=function(){
_32f&&_32f();
};
var dfd=util.deferred(_32e,_31a,_317,_318,_313,last);
var _330=_32e.xhr=xhr._create();
if(!_330){
dfd.cancel(new _310("XHR was not created"));
return _32d?dfd:dfd.promise;
}
_32e.getHeader=_328;
if(_319){
_32f=_319(_330,dfd,_32e);
}
var data=_32c.data,_331=!_32c.sync,_332=_32c.method;
try{
_330.open(_332,url,_331,_32c.user||_32a,_32c.password||_32a);
if(_32c.withCredentials){
_330.withCredentials=_32c.withCredentials;
}
var _333=_32c.headers,_334="application/x-www-form-urlencoded";
if(_333){
for(var hdr in _333){
if(hdr.toLowerCase()==="content-type"){
_334=_333[hdr];
}else{
if(_333[hdr]){
_330.setRequestHeader(hdr,_333[hdr]);
}
}
}
}
if(_334&&_334!==false){
_330.setRequestHeader("Content-Type",_334);
}
if(!_333||!("X-Requested-With" in _333)){
_330.setRequestHeader("X-Requested-With","XMLHttpRequest");
}
if(util.notify){
util.notify.emit("send",_32e,dfd.promise.cancel);
}
_330.send(data);
}
catch(e){
dfd.reject(e);
}
_311(dfd);
_330=null;
return _32d?dfd:dfd.promise;
};
xhr._create=function(){
throw new Error("XMLHTTP not available");
};
if(has("native-xhr")&&!has("dojo-force-activex-xhr")){
xhr._create=function(){
return new XMLHttpRequest();
};
}else{
if(has("activex")){
try{
new ActiveXObject("Msxml2.XMLHTTP");
xhr._create=function(){
return new ActiveXObject("Msxml2.XMLHTTP");
};
}
catch(e){
try{
new ActiveXObject("Microsoft.XMLHTTP");
xhr._create=function(){
return new ActiveXObject("Microsoft.XMLHTTP");
};
}
catch(e){
}
}
}
}
util.addCommonMethods(xhr);
return xhr;
});
},"dojo/keys":function(){
define(["./_base/kernel","./sniff"],function(dojo,has){
return dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:has("webkit")?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,UP_DPAD:175,DOWN_DPAD:176,LEFT_DPAD:177,RIGHT_DPAD:178,copyKey:has("mac")&&!has("air")?(has("safari")?91:224):17};
});
},"dojo/domReady":function(){
define(["./has"],function(has){
var _335=this,doc=document,_336={"loaded":1,"complete":1},_337=typeof doc.readyState!="string",_338=!!_336[doc.readyState],_339=[],_33a;
function _33b(_33c){
_339.push(_33c);
if(_338){
_33d();
}
};
_33b.load=function(id,req,load){
_33b(load);
};
_33b._Q=_339;
_33b._onQEmpty=function(){
};
if(_337){
doc.readyState="loading";
}
function _33d(){
if(_33a){
return;
}
_33a=true;
while(_339.length){
try{
(_339.shift())(doc);
}
catch(err){
}
}
_33a=false;
_33b._onQEmpty();
};
if(!_338){
var _33e=[],_33f=function(evt){
evt=evt||_335.event;
if(_338||(evt.type=="readystatechange"&&!_336[doc.readyState])){
return;
}
if(_337){
doc.readyState="complete";
}
_338=1;
_33d();
},on=function(node,_340){
node.addEventListener(_340,_33f,false);
_339.push(function(){
node.removeEventListener(_340,_33f,false);
});
};
if(!has("dom-addeventlistener")){
on=function(node,_341){
_341="on"+_341;
node.attachEvent(_341,_33f);
_339.push(function(){
node.detachEvent(_341,_33f);
});
};
var div=doc.createElement("div");
try{
if(div.doScroll&&_335.frameElement===null){
_33e.push(function(){
try{
div.doScroll("left");
return 1;
}
catch(e){
}
});
}
}
catch(e){
}
}
on(doc,"DOMContentLoaded");
on(_335,"load");
if("onreadystatechange" in doc){
on(doc,"readystatechange");
}else{
if(!_337){
_33e.push(function(){
return _336[doc.readyState];
});
}
}
if(_33e.length){
var _342=function(){
if(_338){
return;
}
var i=_33e.length;
while(i--){
if(_33e[i]()){
_33f("poller");
return;
}
}
setTimeout(_342,30);
};
_342();
}
}
return _33b;
});
},"dojo/_base/lang":function(){
define(["./kernel","../has","../sniff"],function(dojo,has){
has.add("bug-for-in-skips-shadowed",function(){
for(var i in {toString:1}){
return 0;
}
return 1;
});
var _343=has("bug-for-in-skips-shadowed")?"hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."):[],_344=_343.length,_345=function(_346,_347,_348){
var p,i=0,_349=dojo.global;
if(!_348){
if(!_346.length){
return _349;
}else{
p=_346[i++];
try{
_348=dojo.scopeMap[p]&&dojo.scopeMap[p][1];
}
catch(e){
}
_348=_348||(p in _349?_349[p]:(_347?_349[p]={}:undefined));
}
}
while(_348&&(p=_346[i++])){
_348=(p in _348?_348[p]:(_347?_348[p]={}:undefined));
}
return _348;
},opts=Object.prototype.toString,_34a=function(obj,_34b,_34c){
return (_34c||[]).concat(Array.prototype.slice.call(obj,_34b||0));
},_34d=/\{([^\}]+)\}/g;
var lang={_extraNames:_343,_mixin:function(dest,_34e,_34f){
var name,s,i,_350={};
for(name in _34e){
s=_34e[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _350)||_350[name]!==s))){
dest[name]=_34f?_34f(s):s;
}
}
if(has("bug-for-in-skips-shadowed")){
if(_34e){
for(i=0;i<_344;++i){
name=_343[i];
s=_34e[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _350)||_350[name]!==s))){
dest[name]=_34f?_34f(s):s;
}
}
}
}
return dest;
},mixin:function(dest,_351){
if(!dest){
dest={};
}
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(dest,arguments[i]);
}
return dest;
},setObject:function(name,_352,_353){
var _354=name.split("."),p=_354.pop(),obj=_345(_354,true,_353);
return obj&&p?(obj[p]=_352):undefined;
},getObject:function(name,_355,_356){
return _345(name.split("."),_355,_356);
},exists:function(name,obj){
return lang.getObject(name,false,obj)!==undefined;
},isString:function(it){
return (typeof it=="string"||it instanceof String);
},isArray:function(it){
return it&&(it instanceof Array||typeof it=="array");
},isFunction:function(it){
return opts.call(it)==="[object Function]";
},isObject:function(it){
return it!==undefined&&(it===null||typeof it=="object"||lang.isArray(it)||lang.isFunction(it));
},isArrayLike:function(it){
return it&&it!==undefined&&!lang.isString(it)&&!lang.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(lang.isArray(it)||isFinite(it.length));
},isAlien:function(it){
return it&&!lang.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));
},extend:function(ctor,_357){
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(ctor.prototype,arguments[i]);
}
return ctor;
},_hitchArgs:function(_358,_359){
var pre=lang._toArray(arguments,2);
var _35a=lang.isString(_359);
return function(){
var args=lang._toArray(arguments);
var f=_35a?(_358||dojo.global)[_359]:_359;
return f&&f.apply(_358||this,pre.concat(args));
};
},hitch:function(_35b,_35c){
if(arguments.length>2){
return lang._hitchArgs.apply(dojo,arguments);
}
if(!_35c){
_35c=_35b;
_35b=null;
}
if(lang.isString(_35c)){
_35b=_35b||dojo.global;
if(!_35b[_35c]){
throw (["lang.hitch: scope[\"",_35c,"\"] is null (scope=\"",_35b,"\")"].join(""));
}
return function(){
return _35b[_35c].apply(_35b,arguments||[]);
};
}
return !_35b?_35c:function(){
return _35c.apply(_35b,arguments||[]);
};
},delegate:(function(){
function TMP(){
};
return function(obj,_35d){
TMP.prototype=obj;
var tmp=new TMP();
TMP.prototype=null;
if(_35d){
lang._mixin(tmp,_35d);
}
return tmp;
};
})(),_toArray:has("ie")?(function(){
function slow(obj,_35e,_35f){
var arr=_35f||[];
for(var x=_35e||0;x<obj.length;x++){
arr.push(obj[x]);
}
return arr;
};
return function(obj){
return ((obj.item)?slow:_34a).apply(this,arguments);
};
})():_34a,partial:function(_360){
var arr=[null];
return lang.hitch.apply(dojo,arr.concat(lang._toArray(arguments)));
},clone:function(src){
if(!src||typeof src!="object"||lang.isFunction(src)){
return src;
}
if(src.nodeType&&"cloneNode" in src){
return src.cloneNode(true);
}
if(src instanceof Date){
return new Date(src.getTime());
}
if(src instanceof RegExp){
return new RegExp(src);
}
var r,i,l;
if(lang.isArray(src)){
r=[];
for(i=0,l=src.length;i<l;++i){
if(i in src){
r.push(lang.clone(src[i]));
}
}
}else{
r=src.constructor?new src.constructor():{};
}
return lang._mixin(r,src,lang.clone);
},trim:String.prototype.trim?function(str){
return str.trim();
}:function(str){
return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
},replace:function(tmpl,map,_361){
return tmpl.replace(_361||_34d,lang.isFunction(map)?map:function(_362,k){
return lang.getObject(k,false,map);
});
}};
1&&lang.mixin(dojo,lang);
return lang;
});
},"dojo/request/util":function(){
define(["exports","../errors/RequestError","../errors/CancelError","../Deferred","../io-query","../_base/array","../_base/lang","../promise/Promise"],function(_363,_364,_365,_366,_367,_368,lang,_369){
_363.deepCopy=function deepCopy(_36a,_36b){
for(var name in _36b){
var tval=_36a[name],sval=_36b[name];
if(tval!==sval){
if(tval&&typeof tval==="object"&&sval&&typeof sval==="object"){
_363.deepCopy(tval,sval);
}else{
_36a[name]=sval;
}
}
}
return _36a;
};
_363.deepCreate=function deepCreate(_36c,_36d){
_36d=_36d||{};
var _36e=lang.delegate(_36c),name,_36f;
for(name in _36c){
_36f=_36c[name];
if(_36f&&typeof _36f==="object"){
_36e[name]=_363.deepCreate(_36f,_36d[name]);
}
}
return _363.deepCopy(_36e,_36d);
};
var _370=Object.freeze||function(obj){
return obj;
};
function _371(_372){
return _370(_372);
};
function _373(_374){
return _374.data||_374.text;
};
_363.deferred=function deferred(_375,_376,_377,_378,_379,last){
var def=new _366(function(_37a){
_376&&_376(def,_375);
if(!_37a||!(_37a instanceof _364)&&!(_37a instanceof _365)){
return new _365("Request canceled",_375);
}
return _37a;
});
def.response=_375;
def.isValid=_377;
def.isReady=_378;
def.handleResponse=_379;
function _37b(_37c){
_37c.response=_375;
throw _37c;
};
var _37d=def.then(_371).otherwise(_37b);
if(_363.notify){
_37d.then(lang.hitch(_363.notify,"emit","load"),lang.hitch(_363.notify,"emit","error"));
}
var _37e=_37d.then(_373);
var _37f=new _369();
for(var prop in _37e){
if(_37e.hasOwnProperty(prop)){
_37f[prop]=_37e[prop];
}
}
_37f.response=_37d;
_370(_37f);
if(last){
def.then(function(_380){
last.call(def,_380);
},function(_381){
last.call(def,_375,_381);
});
}
def.promise=_37f;
def.then=_37f.then;
return def;
};
_363.addCommonMethods=function addCommonMethods(_382,_383){
_368.forEach(_383||["GET","POST","PUT","DELETE"],function(_384){
_382[(_384==="DELETE"?"DEL":_384).toLowerCase()]=function(url,_385){
_385=lang.delegate(_385||{});
_385.method=_384;
return _382(url,_385);
};
});
};
_363.parseArgs=function parseArgs(url,_386,_387){
var data=_386.data,_388=_386.query;
if(data&&!_387){
if(typeof data==="object"){
_386.data=_367.objectToQuery(data);
}
}
if(_388){
if(typeof _388==="object"){
_388=_367.objectToQuery(_388);
}
if(_386.preventCache){
_388+=(_388?"&":"")+"request.preventCache="+(+(new Date));
}
}else{
if(_386.preventCache){
_388="request.preventCache="+(+(new Date));
}
}
if(url&&_388){
url+=(~url.indexOf("?")?"&":"?")+_388;
}
return {url:url,options:_386,getHeader:function(_389){
return null;
}};
};
_363.checkStatus=function(stat){
stat=stat||0;
return (stat>=200&&stat<300)||stat===304||stat===1223||!stat;
};
});
},"dojo/Evented":function(){
define(["./aspect","./on"],function(_38a,on){
"use strict";
var _38b=_38a.after;
function _38c(){
};
_38c.prototype={on:function(type,_38d){
return on.parse(this,type,_38d,function(_38e,type){
return _38b(_38e,"on"+type,_38d,true);
});
},emit:function(type,_38f){
var args=[this];
args.push.apply(args,arguments);
return on.emit.apply(on,args);
}};
return _38c;
});
},"dojo/mouse":function(){
define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(dojo,on,has,dom,win){
has.add("dom-quirks",win.doc&&win.doc.compatMode=="BackCompat");
has.add("events-mouseenter",win.doc&&"onmouseenter" in win.doc.createElement("div"));
has.add("events-mousewheel",win.doc&&"onmousewheel" in win.doc);
var _390;
if((has("dom-quirks")&&has("ie"))||!has("dom-addeventlistener")){
_390={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_391){
return e.button&_391;
},isLeft:function(e){
return e.button&1;
},isMiddle:function(e){
return e.button&4;
},isRight:function(e){
return e.button&2;
}};
}else{
_390={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_392){
return e.button==_392;
},isLeft:function(e){
return e.button==0;
},isMiddle:function(e){
return e.button==1;
},isRight:function(e){
return e.button==2;
}};
}
dojo.mouseButtons=_390;
function _393(type,_394){
var _395=function(node,_396){
return on(node,type,function(evt){
if(_394){
return _394(evt,_396);
}
if(!dom.isDescendant(evt.relatedTarget,node)){
return _396.call(this,evt);
}
});
};
_395.bubble=function(_397){
return _393(type,function(evt,_398){
var _399=_397(evt.target);
var _39a=evt.relatedTarget;
if(_399&&(_399!=(_39a&&_39a.nodeType==1&&_397(_39a)))){
return _398.call(_399,evt);
}
});
};
return _395;
};
var _39b;
if(has("events-mousewheel")){
_39b="mousewheel";
}else{
_39b=function(node,_39c){
return on(node,"DOMMouseScroll",function(evt){
evt.wheelDelta=-evt.detail;
_39c.call(this,evt);
});
};
}
return {_eventHandler:_393,enter:_393("mouseover"),leave:_393("mouseout"),wheel:_39b,isLeft:_390.isLeft,isMiddle:_390.isMiddle,isRight:_390.isRight};
});
},"dojo/topic":function(){
define(["./Evented"],function(_39d){
var hub=new _39d;
return {publish:function(_39e,_39f){
return hub.emit.apply(hub,arguments);
},subscribe:function(_3a0,_3a1){
return hub.on.apply(hub,arguments);
}};
});
},"dojo/_base/xhr":function(){
define(["./kernel","./sniff","require","../io-query","../dom","../dom-form","./Deferred","./config","./json","./lang","./array","../on","../aspect","../request/watch","../request/xhr","../request/util"],function(dojo,has,_3a2,ioq,dom,_3a3,_3a4,_3a5,json,lang,_3a6,on,_3a7,_3a8,_3a9,util){
dojo._xhrObj=_3a9._create;
var cfg=dojo.config;
dojo.objectToQuery=ioq.objectToQuery;
dojo.queryToObject=ioq.queryToObject;
dojo.fieldToObject=_3a3.fieldToObject;
dojo.formToObject=_3a3.toObject;
dojo.formToQuery=_3a3.toQuery;
dojo.formToJson=_3a3.toJson;
dojo._blockAsync=false;
var _3aa=dojo._contentHandlers=dojo.contentHandlers={"text":function(xhr){
return xhr.responseText;
},"json":function(xhr){
return json.fromJson(xhr.responseText||null);
},"json-comment-filtered":function(xhr){
if(!_3a5.useCommentedJson){
console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");
}
var _3ab=xhr.responseText;
var _3ac=_3ab.indexOf("/*");
var _3ad=_3ab.lastIndexOf("*/");
if(_3ac==-1||_3ad==-1){
throw new Error("JSON was not comment filtered");
}
return json.fromJson(_3ab.substring(_3ac+2,_3ad));
},"javascript":function(xhr){
return dojo.eval(xhr.responseText);
},"xml":function(xhr){
var _3ae=xhr.responseXML;
if(_3ae&&has("dom-qsa2.1")&&!_3ae.querySelectorAll&&has("dom-parser")){
_3ae=new DOMParser().parseFromString(xhr.responseText,"application/xml");
}
if(has("ie")){
if((!_3ae||!_3ae.documentElement)){
var ms=function(n){
return "MSXML"+n+".DOMDocument";
};
var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];
_3a6.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(xhr.responseText);
_3ae=dom;
}
catch(e){
return false;
}
return true;
});
}
}
return _3ae;
},"json-comment-optional":function(xhr){
if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){
return _3aa["json-comment-filtered"](xhr);
}else{
return _3aa["json"](xhr);
}
}};
dojo._ioSetArgs=function(args,_3af,_3b0,_3b1){
var _3b2={args:args,url:args.url};
var _3b3=null;
if(args.form){
var form=dom.byId(args.form);
var _3b4=form.getAttributeNode("action");
_3b2.url=_3b2.url||(_3b4?_3b4.value:null);
_3b3=_3a3.toObject(form);
}
var _3b5=[{}];
if(_3b3){
_3b5.push(_3b3);
}
if(args.content){
_3b5.push(args.content);
}
if(args.preventCache){
_3b5.push({"dojo.preventCache":new Date().valueOf()});
}
_3b2.query=ioq.objectToQuery(lang.mixin.apply(null,_3b5));
_3b2.handleAs=args.handleAs||"text";
var d=new _3a4(function(dfd){
dfd.canceled=true;
_3af&&_3af(dfd);
var err=dfd.ioArgs.error;
if(!err){
err=new Error("request cancelled");
err.dojoType="cancel";
dfd.ioArgs.error=err;
}
return err;
});
d.addCallback(_3b0);
var ld=args.load;
if(ld&&lang.isFunction(ld)){
d.addCallback(function(_3b6){
return ld.call(args,_3b6,_3b2);
});
}
var err=args.error;
if(err&&lang.isFunction(err)){
d.addErrback(function(_3b7){
return err.call(args,_3b7,_3b2);
});
}
var _3b8=args.handle;
if(_3b8&&lang.isFunction(_3b8)){
d.addBoth(function(_3b9){
return _3b8.call(args,_3b9,_3b2);
});
}
d.addErrback(function(_3ba){
return _3b1(_3ba,d);
});
if(cfg.ioPublish&&dojo.publish&&_3b2.args.ioPublish!==false){
d.addCallbacks(function(res){
dojo.publish("/dojo/io/load",[d,res]);
return res;
},function(res){
dojo.publish("/dojo/io/error",[d,res]);
return res;
});
d.addBoth(function(res){
dojo.publish("/dojo/io/done",[d,res]);
return res;
});
}
d.ioArgs=_3b2;
return d;
};
var _3bb=function(dfd){
var ret=_3aa[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);
return ret===undefined?null:ret;
};
var _3bc=function(_3bd,dfd){
if(!dfd.ioArgs.args.failOk){
console.error(_3bd);
}
return _3bd;
};
var _3be=function(dfd){
if(_3bf<=0){
_3bf=0;
if(cfg.ioPublish&&dojo.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){
dojo.publish("/dojo/io/stop");
}
}
};
var _3bf=0;
_3a7.after(_3a8,"_onAction",function(){
_3bf-=1;
});
_3a7.after(_3a8,"_onInFlight",_3be);
dojo._ioCancelAll=_3a8.cancelAll;
dojo._ioNotifyStart=function(dfd){
if(cfg.ioPublish&&dojo.publish&&dfd.ioArgs.args.ioPublish!==false){
if(!_3bf){
dojo.publish("/dojo/io/start");
}
_3bf+=1;
dojo.publish("/dojo/io/send",[dfd]);
}
};
dojo._ioWatch=function(dfd,_3c0,_3c1,_3c2){
var args=dfd.ioArgs.options=dfd.ioArgs.args;
lang.mixin(dfd,{response:dfd.ioArgs,isValid:function(_3c3){
return _3c0(dfd);
},isReady:function(_3c4){
return _3c1(dfd);
},handleResponse:function(_3c5){
return _3c2(dfd);
}});
_3a8(dfd);
_3be(dfd);
};
var _3c6="application/x-www-form-urlencoded";
dojo._ioAddQueryToUrl=function(_3c7){
if(_3c7.query.length){
_3c7.url+=(_3c7.url.indexOf("?")==-1?"?":"&")+_3c7.query;
_3c7.query=null;
}
};
dojo.xhr=function(_3c8,args,_3c9){
var rDfd;
var dfd=dojo._ioSetArgs(args,function(dfd){
rDfd&&rDfd.cancel();
},_3bb,_3bc);
var _3ca=dfd.ioArgs;
if("postData" in args){
_3ca.query=args.postData;
}else{
if("putData" in args){
_3ca.query=args.putData;
}else{
if("rawBody" in args){
_3ca.query=args.rawBody;
}else{
if((arguments.length>2&&!_3c9)||"POST|PUT".indexOf(_3c8.toUpperCase())===-1){
dojo._ioAddQueryToUrl(_3ca);
}
}
}
}
var _3cb={method:_3c8,handleAs:"text",timeout:args.timeout,withCredentials:args.withCredentials,ioArgs:_3ca};
if(typeof args.headers!=="undefined"){
_3cb.headers=args.headers;
}
if(typeof args.contentType!=="undefined"){
if(!_3cb.headers){
_3cb.headers={};
}
_3cb.headers["Content-Type"]=args.contentType;
}
if(typeof _3ca.query!=="undefined"){
_3cb.data=_3ca.query;
}
if(typeof args.sync!=="undefined"){
_3cb.sync=args.sync;
}
dojo._ioNotifyStart(dfd);
try{
rDfd=_3a9(_3ca.url,_3cb,true);
}
catch(e){
dfd.cancel();
return dfd;
}
dfd.ioArgs.xhr=rDfd.response.xhr;
rDfd.then(function(){
dfd.resolve(dfd);
}).otherwise(function(_3cc){
_3ca.error=_3cc;
if(_3cc.response){
_3cc.status=_3cc.response.status;
_3cc.responseText=_3cc.response.text;
_3cc.xhr=_3cc.response.xhr;
}
dfd.reject(_3cc);
});
return dfd;
};
dojo.xhrGet=function(args){
return dojo.xhr("GET",args);
};
dojo.rawXhrPost=dojo.xhrPost=function(args){
return dojo.xhr("POST",args,true);
};
dojo.rawXhrPut=dojo.xhrPut=function(args){
return dojo.xhr("PUT",args,true);
};
dojo.xhrDelete=function(args){
return dojo.xhr("DELETE",args);
};
dojo._isDocumentOk=function(x){
return util.checkStatus(x.status);
};
dojo._getText=function(url){
var _3cd;
dojo.xhrGet({url:url,sync:true,load:function(text){
_3cd=text;
}});
return _3cd;
};
lang.mixin(dojo.xhr,{_xhrObj:dojo._xhrObj,fieldToObject:_3a3.fieldToObject,formToObject:_3a3.toObject,objectToQuery:ioq.objectToQuery,formToQuery:_3a3.toQuery,formToJson:_3a3.toJson,queryToObject:ioq.queryToObject,contentHandlers:_3aa,_ioSetArgs:dojo._ioSetArgs,_ioCancelAll:dojo._ioCancelAll,_ioNotifyStart:dojo._ioNotifyStart,_ioWatch:dojo._ioWatch,_ioAddQueryToUrl:dojo._ioAddQueryToUrl,_isDocumentOk:dojo._isDocumentOk,_getText:dojo._getText,get:dojo.xhrGet,post:dojo.xhrPost,put:dojo.xhrPut,del:dojo.xhrDelete});
return dojo.xhr;
});
},"dojo/_base/unload":function(){
define(["./kernel","./lang","../on"],function(dojo,lang,on){
var win=window;
var _3ce={addOnWindowUnload:function(obj,_3cf){
if(!dojo.windowUnloaded){
on(win,"unload",(dojo.windowUnloaded=function(){
}));
}
on(win,"unload",lang.hitch(obj,_3cf));
},addOnUnload:function(obj,_3d0){
on(win,"beforeunload",lang.hitch(obj,_3d0));
}};
dojo.addOnWindowUnload=_3ce.addOnWindowUnload;
dojo.addOnUnload=_3ce.addOnUnload;
return _3ce;
});
},"dojo/Deferred":function(){
define(["./has","./_base/lang","./errors/CancelError","./promise/Promise","./promise/instrumentation"],function(has,lang,_3d1,_3d2,_3d3){
"use strict";
var _3d4=0,_3d5=1,_3d6=2;
var _3d7="This deferred has already been fulfilled.";
var _3d8=Object.freeze||function(){
};
var _3d9=function(_3da,type,_3db,_3dc,_3dd){
if(1){
if(type===_3d6&&_3de.instrumentRejected&&_3da.length===0){
_3de.instrumentRejected(_3db,false,_3dc,_3dd);
}
}
for(var i=0;i<_3da.length;i++){
_3df(_3da[i],type,_3db,_3dc);
}
};
var _3df=function(_3e0,type,_3e1,_3e2){
var func=_3e0[type];
var _3e3=_3e0.deferred;
if(func){
try{
var _3e4=func(_3e1);
if(type===_3d4){
if(typeof _3e4!=="undefined"){
_3e5(_3e3,type,_3e4);
}
}else{
if(_3e4&&typeof _3e4.then==="function"){
_3e0.cancel=_3e4.cancel;
_3e4.then(_3e6(_3e3,_3d5),_3e6(_3e3,_3d6),_3e6(_3e3,_3d4));
return;
}
_3e5(_3e3,_3d5,_3e4);
}
}
catch(error){
_3e5(_3e3,_3d6,error);
}
}else{
_3e5(_3e3,type,_3e1);
}
if(1){
if(type===_3d6&&_3de.instrumentRejected){
_3de.instrumentRejected(_3e1,!!func,_3e2,_3e3.promise);
}
}
};
var _3e6=function(_3e7,type){
return function(_3e8){
_3e5(_3e7,type,_3e8);
};
};
var _3e5=function(_3e9,type,_3ea){
if(!_3e9.isCanceled()){
switch(type){
case _3d4:
_3e9.progress(_3ea);
break;
case _3d5:
_3e9.resolve(_3ea);
break;
case _3d6:
_3e9.reject(_3ea);
break;
}
}
};
var _3de=function(_3eb){
var _3ec=this.promise=new _3d2();
var _3ed=this;
var _3ee,_3ef,_3f0;
var _3f1=false;
var _3f2=[];
if(1&&Error.captureStackTrace){
Error.captureStackTrace(_3ed,_3de);
Error.captureStackTrace(_3ec,_3de);
}
this.isResolved=_3ec.isResolved=function(){
return _3ee===_3d5;
};
this.isRejected=_3ec.isRejected=function(){
return _3ee===_3d6;
};
this.isFulfilled=_3ec.isFulfilled=function(){
return !!_3ee;
};
this.isCanceled=_3ec.isCanceled=function(){
return _3f1;
};
this.progress=function(_3f3,_3f4){
if(!_3ee){
_3d9(_3f2,_3d4,_3f3,null,_3ed);
return _3ec;
}else{
if(_3f4===true){
throw new Error(_3d7);
}else{
return _3ec;
}
}
};
this.resolve=function(_3f5,_3f6){
if(!_3ee){
_3d9(_3f2,_3ee=_3d5,_3ef=_3f5,null,_3ed);
_3f2=null;
return _3ec;
}else{
if(_3f6===true){
throw new Error(_3d7);
}else{
return _3ec;
}
}
};
var _3f7=this.reject=function(_3f8,_3f9){
if(!_3ee){
if(1&&Error.captureStackTrace){
Error.captureStackTrace(_3f0={},_3f7);
}
_3d9(_3f2,_3ee=_3d6,_3ef=_3f8,_3f0,_3ed);
_3f2=null;
return _3ec;
}else{
if(_3f9===true){
throw new Error(_3d7);
}else{
return _3ec;
}
}
};
this.then=_3ec.then=function(_3fa,_3fb,_3fc){
var _3fd=[_3fc,_3fa,_3fb];
_3fd.cancel=_3ec.cancel;
_3fd.deferred=new _3de(function(_3fe){
return _3fd.cancel&&_3fd.cancel(_3fe);
});
if(_3ee&&!_3f2){
_3df(_3fd,_3ee,_3ef,_3f0);
}else{
_3f2.push(_3fd);
}
return _3fd.deferred.promise;
};
this.cancel=_3ec.cancel=function(_3ff,_400){
if(!_3ee){
if(_3eb){
var _401=_3eb(_3ff);
_3ff=typeof _401==="undefined"?_3ff:_401;
}
_3f1=true;
if(!_3ee){
if(typeof _3ff==="undefined"){
_3ff=new _3d1();
}
_3f7(_3ff);
return _3ff;
}else{
if(_3ee===_3d6&&_3ef===_3ff){
return _3ff;
}
}
}else{
if(_400===true){
throw new Error(_3d7);
}
}
};
_3d8(_3ec);
};
_3de.prototype.toString=function(){
return "[object Deferred]";
};
if(_3d3){
_3d3(_3de);
}
return _3de;
});
},"dojo/_base/NodeList":function(){
define(["./kernel","../query","./array","./html","../NodeList-dom"],function(dojo,_402,_403){
var _404=_402.NodeList,nlp=_404.prototype;
nlp.connect=_404._adaptAsForEach(function(){
return dojo.connect.apply(this,arguments);
});
nlp.coords=_404._adaptAsMap(dojo.coords);
_404.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];
_403.forEach(_404.events,function(evt){
var _405="on"+evt;
nlp[_405]=function(a,b){
return this.connect(_405,a,b);
};
});
dojo.NodeList=_404;
return _404;
});
},"dojo/_base/Color":function(){
define(["./kernel","./lang","./array","./config"],function(dojo,lang,_406,_407){
var _408=dojo.Color=function(_409){
if(_409){
this.setColor(_409);
}
};
_408.named={"black":[0,0,0],"silver":[192,192,192],"gray":[128,128,128],"white":[255,255,255],"maroon":[128,0,0],"red":[255,0,0],"purple":[128,0,128],"fuchsia":[255,0,255],"green":[0,128,0],"lime":[0,255,0],"olive":[128,128,0],"yellow":[255,255,0],"navy":[0,0,128],"blue":[0,0,255],"teal":[0,128,128],"aqua":[0,255,255],"transparent":_407.transparentColor||[0,0,0,0]};
lang.extend(_408,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){
var t=this;
t.r=r;
t.g=g;
t.b=b;
t.a=a;
},setColor:function(_40a){
if(lang.isString(_40a)){
_408.fromString(_40a,this);
}else{
if(lang.isArray(_40a)){
_408.fromArray(_40a,this);
}else{
this._set(_40a.r,_40a.g,_40a.b,_40a.a);
if(!(_40a instanceof _408)){
this.sanitize();
}
}
}
return this;
},sanitize:function(){
return this;
},toRgb:function(){
var t=this;
return [t.r,t.g,t.b];
},toRgba:function(){
var t=this;
return [t.r,t.g,t.b,t.a];
},toHex:function(){
var arr=_406.map(["r","g","b"],function(x){
var s=this[x].toString(16);
return s.length<2?"0"+s:s;
},this);
return "#"+arr.join("");
},toCss:function(_40b){
var t=this,rgb=t.r+", "+t.g+", "+t.b;
return (_40b?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";
},toString:function(){
return this.toCss(true);
}});
_408.blendColors=dojo.blendColors=function(_40c,end,_40d,obj){
var t=obj||new _408();
_406.forEach(["r","g","b","a"],function(x){
t[x]=_40c[x]+(end[x]-_40c[x])*_40d;
if(x!="a"){
t[x]=Math.round(t[x]);
}
});
return t.sanitize();
};
_408.fromRgb=dojo.colorFromRgb=function(_40e,obj){
var m=_40e.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
return m&&_408.fromArray(m[1].split(/\s*,\s*/),obj);
};
_408.fromHex=dojo.colorFromHex=function(_40f,obj){
var t=obj||new _408(),bits=(_40f.length==4)?4:8,mask=(1<<bits)-1;
_40f=Number("0x"+_40f.substr(1));
if(isNaN(_40f)){
return null;
}
_406.forEach(["b","g","r"],function(x){
var c=_40f&mask;
_40f>>=bits;
t[x]=bits==4?17*c:c;
});
t.a=1;
return t;
};
_408.fromArray=dojo.colorFromArray=function(a,obj){
var t=obj||new _408();
t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));
if(isNaN(t.a)){
t.a=1;
}
return t.sanitize();
};
_408.fromString=dojo.colorFromString=function(str,obj){
var a=_408.named[str];
return a&&_408.fromArray(a,obj)||_408.fromRgb(str,obj)||_408.fromHex(str,obj);
};
return _408;
});
},"dojo/promise/instrumentation":function(){
define(["./tracer","../has","../_base/lang","../_base/array"],function(_410,has,lang,_411){
function _412(_413,_414,_415){
var _416="";
if(_413&&_413.stack){
_416+=_413.stack;
}
if(_414&&_414.stack){
_416+="\n    ----------------------------------------\n    rejected"+_414.stack.split("\n").slice(1).join("\n").replace(/^\s+/," ");
}
if(_415&&_415.stack){
_416+="\n    ----------------------------------------\n"+_415.stack;
}
console.error(_413,_416);
};
function _417(_418,_419,_41a,_41b){
if(!_419){
_412(_418,_41a,_41b);
}
};
var _41c=[];
var _41d=false;
var _41e=1000;
function _41f(_420,_421,_422,_423){
if(_421){
_411.some(_41c,function(obj,ix){
if(obj.error===_420){
_41c.splice(ix,1);
return true;
}
});
}else{
if(!_411.some(_41c,function(obj){
return obj.error===_420;
})){
_41c.push({error:_420,rejection:_422,deferred:_423,timestamp:new Date().getTime()});
}
}
if(!_41d){
_41d=setTimeout(_424,_41e);
}
};
function _424(){
var now=new Date().getTime();
var _425=now-_41e;
_41c=_411.filter(_41c,function(obj){
if(obj.timestamp<_425){
_412(obj.error,obj.rejection,obj.deferred);
return false;
}
return true;
});
if(_41c.length){
_41d=setTimeout(_424,_41c[0].timestamp+_41e-now);
}else{
_41d=false;
}
};
return function(_426){
var _427=has("config-useDeferredInstrumentation");
if(_427){
_410.on("resolved",lang.hitch(console,"log","resolved"));
_410.on("rejected",lang.hitch(console,"log","rejected"));
_410.on("progress",lang.hitch(console,"log","progress"));
var args=[];
if(typeof _427==="string"){
args=_427.split(",");
_427=args.shift();
}
if(_427==="report-rejections"){
_426.instrumentRejected=_417;
}else{
if(_427==="report-unhandled-rejections"||_427===true||_427===1){
_426.instrumentRejected=_41f;
_41e=parseInt(args[0],10)||_41e;
}else{
throw new Error("Unsupported instrumentation usage <"+_427+">");
}
}
}
};
});
},"dojo/selector/_loader":function(){
define(["../has","require"],function(has,_428){
"use strict";
var _429=document.createElement("div");
has.add("dom-qsa2.1",!!_429.querySelectorAll);
has.add("dom-qsa3",function(){
try{
_429.innerHTML="<p class='TEST'></p>";
return _429.querySelectorAll(".TEST:empty").length==1;
}
catch(e){
}
});
var _42a;
var acme="./acme",lite="./lite";
return {load:function(id,_42b,_42c,_42d){
var req=_428;
id=id=="default"?has("config-selectorEngine")||"css3":id;
id=id=="css2"||id=="lite"?lite:id=="css2.1"?has("dom-qsa2.1")?lite:acme:id=="css3"?has("dom-qsa3")?lite:acme:id=="acme"?acme:(req=_42b)&&id;
if(id.charAt(id.length-1)=="?"){
id=id.substring(0,id.length-1);
var _42e=true;
}
if(_42e&&(has("dom-compliant-qsa")||_42a)){
return _42c(_42a);
}
req([id],function(_42f){
if(id!="./lite"){
_42a=_42f;
}
_42c(_42f);
});
}};
});
},"dojo/promise/Promise":function(){
define(["../_base/lang"],function(lang){
"use strict";
function _430(){
throw new TypeError("abstract");
};
return lang.extend(function Promise(){
},{then:function(_431,_432,_433){
_430();
},cancel:function(_434,_435){
_430();
},isResolved:function(){
_430();
},isRejected:function(){
_430();
},isFulfilled:function(){
_430();
},isCanceled:function(){
_430();
},always:function(_436){
return this.then(_436,_436);
},otherwise:function(_437){
return this.then(null,_437);
},trace:function(){
return this;
},traceRejected:function(){
return this;
},toString:function(){
return "[object Promise]";
}});
});
},"dojo/request/watch":function(){
define(["./util","../errors/RequestTimeoutError","../errors/CancelError","../_base/array","../_base/window","../has!host-browser?dom-addeventlistener?:../on:"],function(util,_438,_439,_43a,win,on){
var _43b=null,_43c=[];
function _43d(){
var now=+(new Date);
for(var i=0,dfd;i<_43c.length&&(dfd=_43c[i]);i++){
var _43e=dfd.response,_43f=_43e.options;
if((dfd.isCanceled&&dfd.isCanceled())||(dfd.isValid&&!dfd.isValid(_43e))){
_43c.splice(i--,1);
_440._onAction&&_440._onAction();
}else{
if(dfd.isReady&&dfd.isReady(_43e)){
_43c.splice(i--,1);
dfd.handleResponse(_43e);
_440._onAction&&_440._onAction();
}else{
if(dfd.startTime){
if(dfd.startTime+(_43f.timeout||0)<now){
_43c.splice(i--,1);
dfd.cancel(new _438("Timeout exceeded",_43e));
_440._onAction&&_440._onAction();
}
}
}
}
}
_440._onInFlight&&_440._onInFlight(dfd);
if(!_43c.length){
clearInterval(_43b);
_43b=null;
}
};
function _440(dfd){
if(dfd.response.options.timeout){
dfd.startTime=+(new Date);
}
if(dfd.isFulfilled()){
return;
}
_43c.push(dfd);
if(!_43b){
_43b=setInterval(_43d,50);
}
if(dfd.response.options.sync){
_43d();
}
};
_440.cancelAll=function cancelAll(){
try{
_43a.forEach(_43c,function(dfd){
try{
dfd.cancel(new _439("All requests canceled."));
}
catch(e){
}
});
}
catch(e){
}
};
if(win&&on&&win.doc.attachEvent){
on(win.global,"unload",function(){
_440.cancelAll();
});
}
return _440;
});
},"dojo/on":function(){
define(["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(_441,dojo,has){
"use strict";
if(1){
var _442=window.ScriptEngineMajorVersion;
has.add("jscript",_442&&(_442()+ScriptEngineMinorVersion()/10));
has.add("event-orientationchange",has("touch")&&!has("android"));
has.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation);
has.add("event-focusin",function(_443,doc,_444){
return "onfocusin" in _444||(_444.addEventListener&&(function(){
var _445=false;
function _446(){
_445=true;
};
try{
var _447=doc.createElement("input"),_448=doc.activeElement;
_447.style.position="fixed";
_447.addEventListener("focusin",_446,false);
doc.body.appendChild(_447);
_447.focus();
doc.body.removeChild(_447);
_447.removeEventListener("focusin",_446,false);
_448.focus();
}
catch(e){
}
return _445;
})());
});
}
var on=function(_449,type,_44a,_44b){
if(typeof _449.on=="function"&&typeof type!="function"&&!_449.nodeType){
return _449.on(type,_44a);
}
return on.parse(_449,type,_44a,_44c,_44b,this);
};
on.pausable=function(_44d,type,_44e,_44f){
var _450;
var _451=on(_44d,type,function(){
if(!_450){
return _44e.apply(this,arguments);
}
},_44f);
_451.pause=function(){
_450=true;
};
_451.resume=function(){
_450=false;
};
return _451;
};
on.once=function(_452,type,_453,_454){
var _455=on(_452,type,function(){
_455.remove();
return _453.apply(this,arguments);
});
return _455;
};
on.parse=function(_456,type,_457,_458,_459,_45a){
if(type.call){
return type.call(_45a,_456,_457);
}
if(type.indexOf(",")>-1){
var _45b=type.split(/\s*,\s*/);
var _45c=[];
var i=0;
var _45d;
while(_45d=_45b[i++]){
_45c.push(_458(_456,_45d,_457,_459,_45a));
}
_45c.remove=function(){
for(var i=0;i<_45c.length;i++){
_45c[i].remove();
}
};
return _45c;
}
return _458(_456,type,_457,_459,_45a);
};
var _45e=/^touch/;
function _44c(_45f,type,_460,_461,_462){
var _463=type.match(/(.*):(.*)/);
if(_463){
type=_463[2];
_463=_463[1];
return on.selector(_463,type).call(_462,_45f,_460);
}
if(has("touch")){
if(_45e.test(type)){
_460=_464(_460);
}
if(!has("event-orientationchange")&&(type=="orientationchange")){
type="resize";
_45f=window;
_460=_464(_460);
}
}
if(_465){
_460=_465(_460);
}
if(_45f.addEventListener){
var _466=type in _467,_468=_466?_467[type]:type;
_45f.addEventListener(_468,_460,_466);
return {remove:function(){
_45f.removeEventListener(_468,_460,_466);
}};
}
type="on"+type;
if(_469&&_45f.attachEvent){
return _469(_45f,type,_460);
}
throw new Error("Target must be an event emitter");
};
on.selector=function(_46a,_46b,_46c){
return function(_46d,_46e){
var _46f=typeof _46a=="function"?{matches:_46a}:this,_470=_46b.bubble;
function _471(_472){
_46f=_46f&&_46f.matches?_46f:dojo.query;
while(!_46f.matches(_472,_46a,_46d)){
if(_472==_46d||_46c===false||!(_472=_472.parentNode)||_472.nodeType!=1){
return;
}
}
return _472;
};
if(_470){
return on(_46d,_470(_471),_46e);
}
return on(_46d,_46b,function(_473){
var _474=_471(_473.target);
return _474&&_46e.call(_474,_473);
});
};
};
function _475(){
this.cancelable=false;
this.defaultPrevented=true;
};
function _476(){
this.bubbles=false;
};
var _477=[].slice,_478=on.emit=function(_479,type,_47a){
var args=_477.call(arguments,2);
var _47b="on"+type;
if("parentNode" in _479){
var _47c=args[0]={};
for(var i in _47a){
_47c[i]=_47a[i];
}
_47c.preventDefault=_475;
_47c.stopPropagation=_476;
_47c.target=_479;
_47c.type=type;
_47a=_47c;
}
do{
_479[_47b]&&_479[_47b].apply(_479,args);
}while(_47a&&_47a.bubbles&&(_479=_479.parentNode));
return _47a&&_47a.cancelable&&_47a;
};
var _467=has("event-focusin")?{}:{focusin:"focus",focusout:"blur"};
if(!has("event-stopimmediatepropagation")){
var _47d=function(){
this.immediatelyStopped=true;
this.modified=true;
};
var _465=function(_47e){
return function(_47f){
if(!_47f.immediatelyStopped){
_47f.stopImmediatePropagation=_47d;
return _47e.apply(this,arguments);
}
};
};
}
if(has("dom-addeventlistener")){
on.emit=function(_480,type,_481){
if(_480.dispatchEvent&&document.createEvent){
var _482=_480.ownerDocument.createEvent("HTMLEvents");
_482.initEvent(type,!!_481.bubbles,!!_481.cancelable);
for(var i in _481){
if(!(i in _482)){
_482[i]=_481[i];
}
}
return _480.dispatchEvent(_482)&&_482;
}
return _478.apply(on,arguments);
};
}else{
on._fixEvent=function(evt,_483){
if(!evt){
var w=_483&&(_483.ownerDocument||_483.document||_483).parentWindow||window;
evt=w.event;
}
if(!evt){
return evt;
}
try{
if(_484&&evt.type==_484.type&&evt.srcElement==_484.target){
evt=_484;
}
}
catch(e){
}
if(!evt.target){
evt.target=evt.srcElement;
evt.currentTarget=(_483||evt.srcElement);
if(evt.type=="mouseover"){
evt.relatedTarget=evt.fromElement;
}
if(evt.type=="mouseout"){
evt.relatedTarget=evt.toElement;
}
if(!evt.stopPropagation){
evt.stopPropagation=_485;
evt.preventDefault=_486;
}
switch(evt.type){
case "keypress":
var c=("charCode" in evt?evt.charCode:evt.keyCode);
if(c==10){
c=0;
evt.keyCode=13;
}else{
if(c==13||c==27){
c=0;
}else{
if(c==3){
c=99;
}
}
}
evt.charCode=c;
_487(evt);
break;
}
}
return evt;
};
var _484,_488=function(_489){
this.handle=_489;
};
_488.prototype.remove=function(){
delete _dojoIEListeners_[this.handle];
};
var _48a=function(_48b){
return function(evt){
evt=on._fixEvent(evt,this);
var _48c=_48b.call(this,evt);
if(evt.modified){
if(!_484){
setTimeout(function(){
_484=null;
});
}
_484=evt;
}
return _48c;
};
};
var _469=function(_48d,type,_48e){
_48e=_48a(_48e);
if(((_48d.ownerDocument?_48d.ownerDocument.parentWindow:_48d.parentWindow||_48d.window||window)!=top||has("jscript")<5.8)&&!has("config-_allow_leaks")){
if(typeof _dojoIEListeners_=="undefined"){
_dojoIEListeners_=[];
}
var _48f=_48d[type];
if(!_48f||!_48f.listeners){
var _490=_48f;
_48f=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
_48f.listeners=[];
_48d[type]=_48f;
_48f.global=this;
if(_490){
_48f.listeners.push(_dojoIEListeners_.push(_490)-1);
}
}
var _491;
_48f.listeners.push(_491=(_48f.global._dojoIEListeners_.push(_48e)-1));
return new _488(_491);
}
return _441.after(_48d,type,_48e,true);
};
var _487=function(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _485=function(){
this.cancelBubble=true;
};
var _486=on._preventDefault=function(){
this.bubbledKeyCode=this.keyCode;
if(this.ctrlKey){
try{
this.keyCode=0;
}
catch(e){
}
}
this.defaultPrevented=true;
this.returnValue=false;
this.modified=true;
};
}
if(has("touch")){
var _492=function(){
};
var _493=window.orientation;
var _464=function(_494){
return function(_495){
var _496=_495.corrected;
if(!_496){
var type=_495.type;
try{
delete _495.type;
}
catch(e){
}
if(_495.type){
if(has("mozilla")){
var _496={};
for(var name in _495){
_496[name]=_495[name];
}
}else{
_492.prototype=_495;
var _496=new _492;
}
_496.preventDefault=function(){
_495.preventDefault();
};
_496.stopPropagation=function(){
_495.stopPropagation();
};
}else{
_496=_495;
_496.type=type;
}
_495.corrected=_496;
if(type=="resize"){
if(_493==window.orientation){
return null;
}
_493=window.orientation;
_496.type="orientationchange";
return _494.call(this,_496);
}
if(!("rotation" in _496)){
_496.rotation=0;
_496.scale=1;
}
var _497=_496.changedTouches[0];
for(var i in _497){
delete _496[i];
_496[i]=_497[i];
}
}
return _494.call(this,_496);
};
};
}
return on;
});
},"dojo/_base/sniff":function(){
define(["./kernel","./lang","../sniff"],function(dojo,lang,has){
if(!1){
return has;
}
dojo._name="browser";
lang.mixin(dojo,{isBrowser:true,isFF:has("ff"),isIE:has("ie"),isKhtml:has("khtml"),isWebKit:has("webkit"),isMozilla:has("mozilla"),isMoz:has("mozilla"),isOpera:has("opera"),isSafari:has("safari"),isChrome:has("chrome"),isMac:has("mac"),isIos:has("ios"),isAndroid:has("android"),isWii:has("wii"),isQuirks:has("quirks"),isAir:has("air")});
return has;
});
},"dojo/errors/create":function(){
define(["../_base/lang"],function(lang){
return function(name,ctor,base,_498){
base=base||Error;
var _499=function(_49a){
if(base===Error){
if(Error.captureStackTrace){
Error.captureStackTrace(this,_499);
}
var err=Error.call(this,_49a),prop;
for(prop in err){
if(err.hasOwnProperty(prop)){
this[prop]=err[prop];
}
}
this.message=_49a;
this.stack=err.stack;
}else{
base.apply(this,arguments);
}
if(ctor){
ctor.apply(this,arguments);
}
};
_499.prototype=lang.delegate(base.prototype,_498);
_499.prototype.name=name;
_499.prototype.constructor=_499;
return _499;
};
});
},"dojo/_base/array":function(){
define(["./kernel","../has","./lang"],function(dojo,has,lang){
var _49b={},u;
function _49c(fn){
return _49b[fn]=new Function("item","index","array",fn);
};
function _49d(some){
var _49e=!some;
return function(a,fn,o){
var i=0,l=a&&a.length||0,_49f;
if(l&&typeof a=="string"){
a=a.split("");
}
if(typeof fn=="string"){
fn=_49b[fn]||_49c(fn);
}
if(o){
for(;i<l;++i){
_49f=!fn.call(o,a[i],i,a);
if(some^_49f){
return !_49f;
}
}
}else{
for(;i<l;++i){
_49f=!fn(a[i],i,a);
if(some^_49f){
return !_49f;
}
}
}
return _49e;
};
};
function _4a0(up){
var _4a1=1,_4a2=0,_4a3=0;
if(!up){
_4a1=_4a2=_4a3=-1;
}
return function(a,x,from,last){
if(last&&_4a1>0){
return _4a4.lastIndexOf(a,x,from);
}
var l=a&&a.length||0,end=up?l+_4a3:_4a2,i;
if(from===u){
i=up?_4a2:l+_4a3;
}else{
if(from<0){
i=l+from;
if(i<0){
i=_4a2;
}
}else{
i=from>=l?l+_4a3:from;
}
}
if(l&&typeof a=="string"){
a=a.split("");
}
for(;i!=end;i+=_4a1){
if(a[i]==x){
return i;
}
}
return -1;
};
};
var _4a4={every:_49d(false),some:_49d(true),indexOf:_4a0(true),lastIndexOf:_4a0(false),forEach:function(arr,_4a5,_4a6){
var i=0,l=arr&&arr.length||0;
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _4a5=="string"){
_4a5=_49b[_4a5]||_49c(_4a5);
}
if(_4a6){
for(;i<l;++i){
_4a5.call(_4a6,arr[i],i,arr);
}
}else{
for(;i<l;++i){
_4a5(arr[i],i,arr);
}
}
},map:function(arr,_4a7,_4a8,Ctr){
var i=0,l=arr&&arr.length||0,out=new (Ctr||Array)(l);
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _4a7=="string"){
_4a7=_49b[_4a7]||_49c(_4a7);
}
if(_4a8){
for(;i<l;++i){
out[i]=_4a7.call(_4a8,arr[i],i,arr);
}
}else{
for(;i<l;++i){
out[i]=_4a7(arr[i],i,arr);
}
}
return out;
},filter:function(arr,_4a9,_4aa){
var i=0,l=arr&&arr.length||0,out=[],_4ab;
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _4a9=="string"){
_4a9=_49b[_4a9]||_49c(_4a9);
}
if(_4aa){
for(;i<l;++i){
_4ab=arr[i];
if(_4a9.call(_4aa,_4ab,i,arr)){
out.push(_4ab);
}
}
}else{
for(;i<l;++i){
_4ab=arr[i];
if(_4a9(_4ab,i,arr)){
out.push(_4ab);
}
}
}
return out;
},clearCache:function(){
_49b={};
}};
1&&lang.mixin(dojo,_4a4);
return _4a4;
});
},"dojo/_base/json":function(){
define(["./kernel","../json"],function(dojo,json){
dojo.fromJson=function(js){
return eval("("+js+")");
};
dojo._escapeString=json.stringify;
dojo.toJsonIndentStr="\t";
dojo.toJson=function(it,_4ac){
return json.stringify(it,function(key,_4ad){
if(_4ad){
var tf=_4ad.__json__||_4ad.json;
if(typeof tf=="function"){
return tf.call(_4ad);
}
}
return _4ad;
},_4ac&&dojo.toJsonIndentStr);
};
return dojo;
});
},"dojo/_base/window":function(){
define(["./kernel","./lang","../sniff"],function(dojo,lang,has){
var ret={global:dojo.global,doc:this["document"]||null,body:function(doc){
doc=doc||dojo.doc;
return doc.body||doc.getElementsByTagName("body")[0];
},setContext:function(_4ae,_4af){
dojo.global=ret.global=_4ae;
dojo.doc=ret.doc=_4af;
},withGlobal:function(_4b0,_4b1,_4b2,_4b3){
var _4b4=dojo.global;
try{
dojo.global=ret.global=_4b0;
return ret.withDoc.call(null,_4b0.document,_4b1,_4b2,_4b3);
}
finally{
dojo.global=ret.global=_4b4;
}
},withDoc:function(_4b5,_4b6,_4b7,_4b8){
var _4b9=ret.doc,oldQ=has("quirks"),_4ba=has("ie"),isIE,mode,pwin;
try{
dojo.doc=ret.doc=_4b5;
dojo.isQuirks=has.add("quirks",dojo.doc.compatMode=="BackCompat",true,true);
if(has("ie")){
if((pwin=_4b5.parentWindow)&&pwin.navigator){
isIE=parseFloat(pwin.navigator.appVersion.split("MSIE ")[1])||undefined;
mode=_4b5.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
dojo.isIE=has.add("ie",isIE,true,true);
}
}
if(_4b7&&typeof _4b6=="string"){
_4b6=_4b7[_4b6];
}
return _4b6.apply(_4b7,_4b8||[]);
}
finally{
dojo.doc=ret.doc=_4b9;
dojo.isQuirks=has.add("quirks",oldQ,true,true);
dojo.isIE=has.add("ie",_4ba,true,true);
}
}};
1&&lang.mixin(dojo,ret);
return ret;
});
},"dojo/dom-class":function(){
define(["./_base/lang","./_base/array","./dom"],function(lang,_4bb,dom){
var _4bc="className";
var cls,_4bd=/\s+/,a1=[""];
function _4be(s){
if(typeof s=="string"||s instanceof String){
if(s&&!_4bd.test(s)){
a1[0]=s;
return a1;
}
var a=s.split(_4bd);
if(a.length&&!a[0]){
a.shift();
}
if(a.length&&!a[a.length-1]){
a.pop();
}
return a;
}
if(!s){
return [];
}
return _4bb.filter(s,function(x){
return x;
});
};
var _4bf={};
cls={contains:function containsClass(node,_4c0){
return ((" "+dom.byId(node)[_4bc]+" ").indexOf(" "+_4c0+" ")>=0);
},add:function addClass(node,_4c1){
node=dom.byId(node);
_4c1=_4be(_4c1);
var cls=node[_4bc],_4c2;
cls=cls?" "+cls+" ":" ";
_4c2=cls.length;
for(var i=0,len=_4c1.length,c;i<len;++i){
c=_4c1[i];
if(c&&cls.indexOf(" "+c+" ")<0){
cls+=c+" ";
}
}
if(_4c2<cls.length){
node[_4bc]=cls.substr(1,cls.length-2);
}
},remove:function removeClass(node,_4c3){
node=dom.byId(node);
var cls;
if(_4c3!==undefined){
_4c3=_4be(_4c3);
cls=" "+node[_4bc]+" ";
for(var i=0,len=_4c3.length;i<len;++i){
cls=cls.replace(" "+_4c3[i]+" "," ");
}
cls=lang.trim(cls);
}else{
cls="";
}
if(node[_4bc]!=cls){
node[_4bc]=cls;
}
},replace:function replaceClass(node,_4c4,_4c5){
node=dom.byId(node);
_4bf[_4bc]=node[_4bc];
cls.remove(_4bf,_4c5);
cls.add(_4bf,_4c4);
if(node[_4bc]!==_4bf[_4bc]){
node[_4bc]=_4bf[_4bc];
}
},toggle:function toggleClass(node,_4c6,_4c7){
node=dom.byId(node);
if(_4c7===undefined){
_4c6=_4be(_4c6);
for(var i=0,len=_4c6.length,c;i<len;++i){
c=_4c6[i];
cls[cls.contains(node,c)?"remove":"add"](node,c);
}
}else{
cls[_4c7?"add":"remove"](node,_4c6);
}
return _4c7;
}};
return cls;
});
},"dojo/_base/config":function(){
define(["../has","require"],function(has,_4c8){
var _4c9={};
if(1){
var src=_4c8.rawConfig,p;
for(p in src){
_4c9[p]=src[p];
}
}else{
var _4ca=function(_4cb,_4cc,_4cd){
for(p in _4cb){
p!="has"&&has.add(_4cc+p,_4cb[p],0,_4cd);
}
};
_4c9=1?_4c8.rawConfig:this.dojoConfig||this.djConfig||{};
_4ca(_4c9,"config",1);
_4ca(_4c9.has,"",1);
}
if(!_4c9.locale&&typeof navigator!="undefined"){
_4c9.locale=(navigator.language||navigator.userLanguage).toLowerCase();
}
return _4c9;
});
},"dojo/_base/event":function(){
define(["./kernel","../on","../has","../dom-geometry"],function(dojo,on,has,dom){
if(on._fixEvent){
var _4ce=on._fixEvent;
on._fixEvent=function(evt,se){
evt=_4ce(evt,se);
if(evt){
dom.normalizeEvent(evt);
}
return evt;
};
}
var ret={fix:function(evt,_4cf){
if(on._fixEvent){
return on._fixEvent(evt,_4cf);
}
return evt;
},stop:function(evt){
if(has("dom-addeventlistener")||(evt&&evt.preventDefault)){
evt.preventDefault();
evt.stopPropagation();
}else{
evt=evt||window.event;
evt.cancelBubble=true;
on._preventDefault.call(evt);
}
}};
if(1){
dojo.fixEvent=ret.fix;
dojo.stopEvent=ret.stop;
}
return ret;
});
},"dojo/main":function(){
define(["./_base/kernel","./has","require","./sniff","./_base/lang","./_base/array","./_base/config","./ready","./_base/declare","./_base/connect","./_base/Deferred","./_base/json","./_base/Color","./has!dojo-firebug?./_firebug/firebug","./_base/browser","./_base/loader"],function(_4d0,has,_4d1,_4d2,lang,_4d3,_4d4,_4d5){
if(_4d4.isDebug){
_4d1(["./_firebug/firebug"]);
}
1||has.add("dojo-config-require",1);
if(1){
var deps=_4d4.require;
if(deps){
deps=_4d3.map(lang.isArray(deps)?deps:[deps],function(item){
return item.replace(/\./g,"/");
});
if(_4d0.isAsync){
_4d1(deps);
}else{
_4d5(1,function(){
_4d1(deps);
});
}
}
}
return _4d0;
});
},"dojo/sniff":function(){
define(["./has"],function(has){
if(1){
var n=navigator,dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);
has.add("air",dua.indexOf("AdobeAIR")>=0);
has.add("msapp",parseFloat(dua.split("MSAppHost/")[1])||undefined);
has.add("khtml",dav.indexOf("Konqueror")>=0?tv:undefined);
has.add("webkit",parseFloat(dua.split("WebKit/")[1])||undefined);
has.add("chrome",parseFloat(dua.split("Chrome/")[1])||undefined);
has.add("safari",dav.indexOf("Safari")>=0&&!has("chrome")?parseFloat(dav.split("Version/")[1]):undefined);
has.add("mac",dav.indexOf("Macintosh")>=0);
has.add("quirks",document.compatMode=="BackCompat");
if(dua.match(/(iPhone|iPod|iPad)/)){
var p=RegExp.$1.replace(/P/,"p");
var v=dua.match(/OS ([\d_]+)/)?RegExp.$1:"1";
var os=parseFloat(v.replace(/_/,".").replace(/_/g,""));
has.add(p,os);
has.add("ios",os);
}
has.add("android",parseFloat(dua.split("Android ")[1])||undefined);
has.add("bb",(dua.indexOf("BlackBerry")>=0||dua.indexOf("BB10")>=0)&&parseFloat(dua.split("Version/")[1])||undefined);
has.add("trident",parseFloat(dav.split("Trident/")[1])||undefined);
has.add("svg",typeof SVGAngle!=="undefined");
if(!has("webkit")){
if(dua.indexOf("Opera")>=0){
has.add("opera",tv>=9.8?parseFloat(dua.split("Version/")[1])||tv:tv);
}
if(dua.indexOf("Gecko")>=0&&!has("khtml")&&!has("webkit")&&!has("trident")){
has.add("mozilla",tv);
}
if(has("mozilla")){
has.add("ff",parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined);
}
if(document.all&&!has("opera")){
var isIE=parseFloat(dav.split("MSIE ")[1])||undefined;
var mode=document.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
has.add("ie",isIE);
}
has.add("wii",typeof opera!="undefined"&&opera.wiiremote);
}
}
return has;
});
},"dojo/request/handlers":function(){
define(["../json","../_base/kernel","../_base/array","../has","../selector/_loader"],function(JSON,_4d6,_4d7,has){
has.add("activex",typeof ActiveXObject!=="undefined");
has.add("dom-parser",function(_4d8){
return "DOMParser" in _4d8;
});
var _4d9;
if(has("activex")){
var dp=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML.DOMDocument"];
_4d9=function(_4da){
var _4db=_4da.data;
if(_4db&&has("dom-qsa2.1")&&!_4db.querySelectorAll&&has("dom-parser")){
_4db=new DOMParser().parseFromString(_4da.text,"application/xml");
}
if(!_4db||!_4db.documentElement){
var text=_4da.text;
_4d7.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(text);
_4db=dom;
}
catch(e){
return false;
}
return true;
});
}
return _4db;
};
}
var _4dc={"javascript":function(_4dd){
return _4d6.eval(_4dd.text||"");
},"json":function(_4de){
return JSON.parse(_4de.text||null);
},"xml":_4d9};
function _4df(_4e0){
var _4e1=_4dc[_4e0.options.handleAs];
_4e0.data=_4e1?_4e1(_4e0):(_4e0.data||_4e0.text);
return _4e0;
};
_4df.register=function(name,_4e2){
_4dc[name]=_4e2;
};
return _4df;
});
},"dojo/ready":function(){
define(["./_base/kernel","./has","require","./domReady","./_base/lang"],function(dojo,has,_4e3,_4e4,lang){
var _4e5=0,_4e6=[],_4e7=0,_4e8=function(){
_4e5=1;
dojo._postLoad=dojo.config.afterOnLoad=true;
_4e9();
},_4e9=function(){
if(_4e7){
return;
}
_4e7=1;
while(_4e5&&(!_4e4||_4e4._Q.length==0)&&(_4e3.idle?_4e3.idle():true)&&_4e6.length){
var f=_4e6.shift();
try{
f();
}
catch(e){
e.info=e.message;
if(_4e3.signal){
_4e3.signal("error",e);
}else{
throw e;
}
}
}
_4e7=0;
};
_4e3.on&&_4e3.on("idle",_4e9);
if(_4e4){
_4e4._onQEmpty=_4e9;
}
var _4ea=dojo.ready=dojo.addOnLoad=function(_4eb,_4ec,_4ed){
var _4ee=lang._toArray(arguments);
if(typeof _4eb!="number"){
_4ed=_4ec;
_4ec=_4eb;
_4eb=1000;
}else{
_4ee.shift();
}
_4ed=_4ed?lang.hitch.apply(dojo,_4ee):function(){
_4ec();
};
_4ed.priority=_4eb;
for(var i=0;i<_4e6.length&&_4eb>=_4e6[i].priority;i++){
}
_4e6.splice(i,0,_4ed);
_4e9();
};
1||has.add("dojo-config-addOnLoad",1);
if(1){
var dca=dojo.config.addOnLoad;
if(dca){
_4ea[(lang.isArray(dca)?"apply":"call")](dojo,dca);
}
}
if(1&&dojo.config.parseOnLoad&&!dojo.isAsync){
_4ea(99,function(){
if(!dojo.parser){
dojo.deprecated("Add explicit require(['dojo/parser']);","","2.0");
_4e3(["dojo/parser"]);
}
});
}
if(_4e4){
_4e4(_4e8);
}else{
_4e8();
}
return _4ea;
});
},"dojo/aspect":function(){
define([],function(){
"use strict";
var _4ef,_4f0=0;
function _4f1(_4f2,type,_4f3,_4f4){
var _4f5=_4f2[type];
var _4f6=type=="around";
var _4f7;
if(_4f6){
var _4f8=_4f3(function(){
return _4f5.advice(this,arguments);
});
_4f7={remove:function(){
if(_4f8){
_4f8=_4f2=_4f3=null;
}
},advice:function(_4f9,args){
return _4f8?_4f8.apply(_4f9,args):_4f5.advice(_4f9,args);
}};
}else{
_4f7={remove:function(){
if(_4f7.advice){
var _4fa=_4f7.previous;
var next=_4f7.next;
if(!next&&!_4fa){
delete _4f2[type];
}else{
if(_4fa){
_4fa.next=next;
}else{
_4f2[type]=next;
}
if(next){
next.previous=_4fa;
}
}
_4f2=_4f3=_4f7.advice=null;
}
},id:_4f0++,advice:_4f3,receiveArguments:_4f4};
}
if(_4f5&&!_4f6){
if(type=="after"){
while(_4f5.next&&(_4f5=_4f5.next)){
}
_4f5.next=_4f7;
_4f7.previous=_4f5;
}else{
if(type=="before"){
_4f2[type]=_4f7;
_4f7.next=_4f5;
_4f5.previous=_4f7;
}
}
}else{
_4f2[type]=_4f7;
}
return _4f7;
};
function _4fb(type){
return function(_4fc,_4fd,_4fe,_4ff){
var _500=_4fc[_4fd],_501;
if(!_500||_500.target!=_4fc){
_4fc[_4fd]=_501=function(){
var _502=_4f0;
var args=arguments;
var _503=_501.before;
while(_503){
args=_503.advice.apply(this,args)||args;
_503=_503.next;
}
if(_501.around){
var _504=_501.around.advice(this,args);
}
var _505=_501.after;
while(_505&&_505.id<_502){
if(_505.receiveArguments){
var _506=_505.advice.apply(this,args);
_504=_506===_4ef?_504:_506;
}else{
_504=_505.advice.call(this,_504,args);
}
_505=_505.next;
}
return _504;
};
if(_500){
_501.around={advice:function(_507,args){
return _500.apply(_507,args);
}};
}
_501.target=_4fc;
}
var _508=_4f1((_501||_500),type,_4fe,_4ff);
_4fe=null;
return _508;
};
};
var _509=_4fb("after");
var _50a=_4fb("before");
var _50b=_4fb("around");
return {before:_50a,around:_50b,after:_509};
});
},"dojo/_base/connect":function(){
define(["./kernel","../on","../topic","../aspect","./event","../mouse","./sniff","./lang","../keys"],function(dojo,on,hub,_50c,_50d,_50e,has,lang){
has.add("events-keypress-typed",function(){
var _50f={charCode:0};
try{
_50f=document.createEvent("KeyboardEvent");
(_50f.initKeyboardEvent||_50f.initKeyEvent).call(_50f,"keypress",true,true,null,false,false,false,false,9,3);
}
catch(e){
}
return _50f.charCode==0&&!has("opera");
});
function _510(obj,_511,_512,_513,_514){
_513=lang.hitch(_512,_513);
if(!obj||!(obj.addEventListener||obj.attachEvent)){
return _50c.after(obj||dojo.global,_511,_513,true);
}
if(typeof _511=="string"&&_511.substring(0,2)=="on"){
_511=_511.substring(2);
}
if(!obj){
obj=dojo.global;
}
if(!_514){
switch(_511){
case "keypress":
_511=_515;
break;
case "mouseenter":
_511=_50e.enter;
break;
case "mouseleave":
_511=_50e.leave;
break;
}
}
return on(obj,_511,_513,_514);
};
var _516={106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39,229:113};
var _517=has("mac")?"metaKey":"ctrlKey";
var _518=function(evt,_519){
var faux=lang.mixin({},evt,_519);
_51a(faux);
faux.preventDefault=function(){
evt.preventDefault();
};
faux.stopPropagation=function(){
evt.stopPropagation();
};
return faux;
};
function _51a(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _515;
if(has("events-keypress-typed")){
var _51b=function(e,code){
try{
return (e.keyCode=code);
}
catch(e){
return 0;
}
};
_515=function(_51c,_51d){
var _51e=on(_51c,"keydown",function(evt){
var k=evt.keyCode;
var _51f=(k!=13)&&k!=32&&(k!=27||!has("ie"))&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222)&&k!=229;
if(_51f||evt.ctrlKey){
var c=_51f?0:k;
if(evt.ctrlKey){
if(k==3||k==13){
return _51d.call(evt.currentTarget,evt);
}else{
if(c>95&&c<106){
c-=48;
}else{
if((!evt.shiftKey)&&(c>=65&&c<=90)){
c+=32;
}else{
c=_516[c]||c;
}
}
}
}
var faux=_518(evt,{type:"keypress",faux:true,charCode:c});
_51d.call(evt.currentTarget,faux);
if(has("ie")){
_51b(evt,faux.keyCode);
}
}
});
var _520=on(_51c,"keypress",function(evt){
var c=evt.charCode;
c=c>=32?c:0;
evt=_518(evt,{charCode:c,faux:true});
return _51d.call(this,evt);
});
return {remove:function(){
_51e.remove();
_520.remove();
}};
};
}else{
if(has("opera")){
_515=function(_521,_522){
return on(_521,"keypress",function(evt){
var c=evt.which;
if(c==3){
c=99;
}
c=c<32&&!evt.shiftKey?0:c;
if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){
c+=32;
}
return _522.call(this,_518(evt,{charCode:c}));
});
};
}else{
_515=function(_523,_524){
return on(_523,"keypress",function(evt){
_51a(evt);
return _524.call(this,evt);
});
};
}
}
var _525={_keypress:_515,connect:function(obj,_526,_527,_528,_529){
var a=arguments,args=[],i=0;
args.push(typeof a[0]=="string"?null:a[i++],a[i++]);
var a1=a[i+1];
args.push(typeof a1=="string"||typeof a1=="function"?a[i++]:null,a[i++]);
for(var l=a.length;i<l;i++){
args.push(a[i]);
}
return _510.apply(this,args);
},disconnect:function(_52a){
if(_52a){
_52a.remove();
}
},subscribe:function(_52b,_52c,_52d){
return hub.subscribe(_52b,lang.hitch(_52c,_52d));
},publish:function(_52e,args){
return hub.publish.apply(hub,[_52e].concat(args));
},connectPublisher:function(_52f,obj,_530){
var pf=function(){
_525.publish(_52f,arguments);
};
return _530?_525.connect(obj,_530,pf):_525.connect(obj,pf);
},isCopyKey:function(e){
return e[_517];
}};
_525.unsubscribe=_525.disconnect;
1&&lang.mixin(dojo,_525);
return _525;
});
},"dojo/errors/CancelError":function(){
define(["./create"],function(_531){
return _531("CancelError",null,null,{dojoType:"cancel"});
});
}}});
(function(){
var _532=this.require;
_532({cache:{}});
!_532.async&&_532(["dojo"]);
_532.boot&&_532.apply(null,_532.boot);
})();
