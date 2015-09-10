//>>built
define("dojo/touch","./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "),function(D,r,E,F,G,f,n,p,s,d){function k(a,b,c){return t&&c?function(b,a){return f(b,c,a)}:q?function(c,u){var d=f(c,b,u),e=f(c,a,function(b){(!l||(new Date).getTime()>l+1E3)&&u.call(this,b)});return{remove:function(){d.remove();e.remove()}}}:function(b,c){return f(b,a,c)}}function H(a){do if(void 0!==a.dojoClick)return a.dojoClick;while(a=a.parentNode)}function v(a,
b,c){if(e=!a.target.disabled&&H(a.target))w=a.target,x=a.touches?a.touches[0].pageX:a.clientX,y=a.touches?a.touches[0].pageY:a.clientY,z=("object"==typeof e?e.x:"number"==typeof e?e:0)||4,A=("object"==typeof e?e.y:"number"==typeof e?e:0)||4,B||(B=!0,d.doc.addEventListener(b,function(b){e=e&&b.target==w&&Math.abs((b.touches?b.touches[0].pageX:b.clientX)-x)<=z&&Math.abs((b.touches?b.touches[0].pageY:b.clientY)-y)<=A},!0),d.doc.addEventListener(c,function(b){if(e){C=(new Date).getTime();var a=b.target;
"LABEL"===a.tagName&&(a=E.byId(a.getAttribute("for"))||a);setTimeout(function(){f.emit(a,"click",{bubbles:!0,cancelable:!0,_dojo_click:!0})})}},!0),a=function(b){d.doc.addEventListener(b,function(a){!a._dojo_click&&((new Date).getTime()<=C+1E3&&!("INPUT"==a.target.tagName&&F.contains(a.target,"dijitOffScreen")))&&(a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),"click"==b&&(("INPUT"!=a.target.tagName||"radio"==a.target.type||"checkbox"==a.target.type)&&"TEXTAREA"!=a.target.tagName&&
"AUDIO"!=a.target.tagName&&"VIDEO"!=a.target.tagName)&&a.preventDefault())},!0)},a("click"),a("mousedown"),a("mouseup"))}var q=n("touch"),m=5>n("ios"),t=navigator.pointerEnabled||navigator.msPointerEnabled,g=function(){var a={},b;for(b in{down:1,move:1,up:1,cancel:1,over:1,out:1})a[b]=!navigator.pointerEnabled?"MSPointer"+b.charAt(0).toUpperCase()+b.slice(1):"pointer"+b;return a}(),B,e,w,x,y,z,A,C,l,h;q&&(t?s(function(){d.doc.addEventListener(g.down,function(a){v(a,g.move,g.up)},!0)}):s(function(){function a(a){var c=
G.delegate(a,{bubbles:!0});6<=n("ios")&&(c.touches=a.touches,c.altKey=a.altKey,c.changedTouches=a.changedTouches,c.ctrlKey=a.ctrlKey,c.metaKey=a.metaKey,c.shiftKey=a.shiftKey,c.targetTouches=a.targetTouches);return c}h=d.body();d.doc.addEventListener("touchstart",function(a){l=(new Date).getTime();var c=h;h=a.target;f.emit(c,"dojotouchout",{relatedTarget:h,bubbles:!0});f.emit(h,"dojotouchover",{relatedTarget:c,bubbles:!0});v(a,"touchmove","touchend")},!0);f(d.doc,"touchmove",function(b){l=(new Date).getTime();
var c=d.doc.elementFromPoint(b.pageX-(m?0:d.global.pageXOffset),b.pageY-(m?0:d.global.pageYOffset));c&&(h!==c&&(f.emit(h,"dojotouchout",{relatedTarget:c,bubbles:!0}),f.emit(c,"dojotouchover",{relatedTarget:h,bubbles:!0}),h=c),f.emit(c,"dojotouchmove",a(b))||b.preventDefault())});f(d.doc,"touchend",function(b){l=(new Date).getTime();var c=d.doc.elementFromPoint(b.pageX-(m?0:d.global.pageXOffset),b.pageY-(m?0:d.global.pageYOffset))||d.body();f.emit(c,"dojotouchend",a(b))})}));r={press:k("mousedown",
"touchstart",g.down),move:k("mousemove","dojotouchmove",g.move),release:k("mouseup","dojotouchend",g.up),cancel:k(p.leave,"touchcancel",q?g.cancel:null),over:k("mouseover","dojotouchover",g.over),out:k("mouseout","dojotouchout",g.out),enter:p._eventHandler(k("mouseover","dojotouchover",g.over)),leave:p._eventHandler(k("mouseout","dojotouchout",g.out))};return D.touch=r});
//@ sourceMappingURL=touch.js.map