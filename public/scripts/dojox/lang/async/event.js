//>>built
define("dojox/lang/async/event",["dijit","dojo","dojox"],function(k,b,h){b.provide("dojox.lang.async.event");(function(){var g=h.lang.async.event;g.from=function(e,f){return function(){var a,c=function(){a&&(b.disconnect(a),a=null)},d=new b.Deferred(c);a=b.connect(e,f,function(a){c();d.callback(a)});return d}};g.failOn=function(e,f){return function(){var a,c=function(){a&&(b.disconnect(a),a=null)},d=new b.Deferred(c);a=b.connect(e,f,function(a){c();d.errback(Error(a))});return d}}})()});
//@ sourceMappingURL=event.js.map