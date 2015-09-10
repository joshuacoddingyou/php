//>>built
function md5_array(h){for(i=0;i<h;i++)this[i]=0;this.length=h}
define("manager/MD5",["dojo/_base/declare"],function(h){return h("Manager.MD5",[],{constructor:function(){},array:function(c){for(i=0;i<c;i++);},integer:function(c){return c%4294967296},shr:function(c,f){c=this.integer(c);f=this.integer(f);0<=c-2147483648?(c=c%2147483648>>f,c+=1073741824>>f-1):c>>=f;return c},shl1:function(c){c%=2147483648;c&1?(c=2*(c-1073741824),c+=2147483648):c*=2;return c},shl:function(c,f){c=this.integer(c);f=this.integer(f);for(var a=0;a<f;a++)c=this.shl1(c);return c},and:function(c,
f){c=this.integer(c);f=this.integer(f);var a=c-2147483648,b=f-2147483648;return 0<=a?0<=b?(a&b)+2147483648:a&f:0<=b?c&b:c&f},or:function(c,f){c=this.integer(c);f=this.integer(f);var a=c-2147483648,b=f-2147483648;return 0<=a?0<=b?(a|b)+2147483648:(a|f)+2147483648:0<=b?(c|b)+2147483648:c|f},xor:function(c,f){c=this.integer(c);f=this.integer(f);var a=c-2147483648,b=f-2147483648;return 0<=a?0<=b?a^b:(a^f)+2147483648:0<=b?(c^b)+2147483648:c^f},not:function(c){c=this.integer(c);return 4294967295-c},state:new md5_array(4),
count:new md5_array(2),buffer:new md5_array(64),transformBuffer:new md5_array(16),digestBits:new md5_array(16),S11:7,S12:12,S13:17,S14:22,S21:5,S22:9,S23:14,S24:20,S31:4,S32:11,S33:16,S34:23,S41:6,S42:10,S43:15,S44:21,F:function(c,f,a){return this.or(this.and(c,f),this.and(this.not(c),a))},G:function(c,f,a){return this.or(this.and(c,a),this.and(f,this.not(a)))},H:function(c,f,a){return this.xor(this.xor(c,f),a)},I:function(c,f,a){return this.xor(f,this.or(c,this.not(a)))},rotateLeft:function(c,f){return this.or(this.shl(c,
f),this.shr(c,32-f))},FF:function(c,f,a,b,d,e,g){c=c+this.F(f,a,b)+d+g;c=this.rotateLeft(c,e);return c+f},GG:function(c,f,a,b,d,e,g){c=c+this.G(f,a,b)+d+g;c=this.rotateLeft(c,e);return c+f},HH:function(c,f,a,b,d,e,g){c=c+this.H(f,a,b)+d+g;c=this.rotateLeft(c,e);return c+f},II:function(c,f,a,b,d,e,g){c=c+this.I(f,a,b)+d+g;c=this.rotateLeft(c,e);return c+f},transform:function(c,f){var a=0,b=0,d=0,e=0,g=this.transformBuffer,a=this.state[0],b=this.state[1],d=this.state[2],e=this.state[3];for(i=0;16>i;i++){g[i]=
this.and(c[4*i+f],255);for(j=1;4>j;j++)g[i]+=this.shl(this.and(c[4*i+j+f],255),8*j)}a=this.FF(a,b,d,e,g[0],this.S11,3614090360);e=this.FF(e,a,b,d,g[1],this.S12,3905402710);d=this.FF(d,e,a,b,g[2],this.S13,606105819);b=this.FF(b,d,e,a,g[3],this.S14,3250441966);a=this.FF(a,b,d,e,g[4],this.S11,4118548399);e=this.FF(e,a,b,d,g[5],this.S12,1200080426);d=this.FF(d,e,a,b,g[6],this.S13,2821735955);b=this.FF(b,d,e,a,g[7],this.S14,4249261313);a=this.FF(a,b,d,e,g[8],this.S11,1770035416);e=this.FF(e,a,b,d,g[9],
this.S12,2336552879);d=this.FF(d,e,a,b,g[10],this.S13,4294925233);b=this.FF(b,d,e,a,g[11],this.S14,2304563134);a=this.FF(a,b,d,e,g[12],this.S11,1804603682);e=this.FF(e,a,b,d,g[13],this.S12,4254626195);d=this.FF(d,e,a,b,g[14],this.S13,2792965006);b=this.FF(b,d,e,a,g[15],this.S14,1236535329);a=this.GG(a,b,d,e,g[1],this.S21,4129170786);e=this.GG(e,a,b,d,g[6],this.S22,3225465664);d=this.GG(d,e,a,b,g[11],this.S23,643717713);b=this.GG(b,d,e,a,g[0],this.S24,3921069994);a=this.GG(a,b,d,e,g[5],this.S21,3593408605);
e=this.GG(e,a,b,d,g[10],this.S22,38016083);d=this.GG(d,e,a,b,g[15],this.S23,3634488961);b=this.GG(b,d,e,a,g[4],this.S24,3889429448);a=this.GG(a,b,d,e,g[9],this.S21,568446438);e=this.GG(e,a,b,d,g[14],this.S22,3275163606);d=this.GG(d,e,a,b,g[3],this.S23,4107603335);b=this.GG(b,d,e,a,g[8],this.S24,1163531501);a=this.GG(a,b,d,e,g[13],this.S21,2850285829);e=this.GG(e,a,b,d,g[2],this.S22,4243563512);d=this.GG(d,e,a,b,g[7],this.S23,1735328473);b=this.GG(b,d,e,a,g[12],this.S24,2368359562);a=this.HH(a,b,d,
e,g[5],this.S31,4294588738);e=this.HH(e,a,b,d,g[8],this.S32,2272392833);d=this.HH(d,e,a,b,g[11],this.S33,1839030562);b=this.HH(b,d,e,a,g[14],this.S34,4259657740);a=this.HH(a,b,d,e,g[1],this.S31,2763975236);e=this.HH(e,a,b,d,g[4],this.S32,1272893353);d=this.HH(d,e,a,b,g[7],this.S33,4139469664);b=this.HH(b,d,e,a,g[10],this.S34,3200236656);a=this.HH(a,b,d,e,g[13],this.S31,681279174);e=this.HH(e,a,b,d,g[0],this.S32,3936430074);d=this.HH(d,e,a,b,g[3],this.S33,3572445317);b=this.HH(b,d,e,a,g[6],this.S34,
76029189);a=this.HH(a,b,d,e,g[9],this.S31,3654602809);e=this.HH(e,a,b,d,g[12],this.S32,3873151461);d=this.HH(d,e,a,b,g[15],this.S33,530742520);b=this.HH(b,d,e,a,g[2],this.S34,3299628645);a=this.II(a,b,d,e,g[0],this.S41,4096336452);e=this.II(e,a,b,d,g[7],this.S42,1126891415);d=this.II(d,e,a,b,g[14],this.S43,2878612391);b=this.II(b,d,e,a,g[5],this.S44,4237533241);a=this.II(a,b,d,e,g[12],this.S41,1700485571);e=this.II(e,a,b,d,g[3],this.S42,2399980690);d=this.II(d,e,a,b,g[10],this.S43,4293915773);b=this.II(b,
d,e,a,g[1],this.S44,2240044497);a=this.II(a,b,d,e,g[8],this.S41,1873313359);e=this.II(e,a,b,d,g[15],this.S42,4264355552);d=this.II(d,e,a,b,g[6],this.S43,2734768916);b=this.II(b,d,e,a,g[13],this.S44,1309151649);a=this.II(a,b,d,e,g[4],this.S41,4149444226);e=this.II(e,a,b,d,g[11],this.S42,3174756917);d=this.II(d,e,a,b,g[2],this.S43,718787259);b=this.II(b,d,e,a,g[9],this.S44,3951481745);this.state[0]+=a;this.state[1]+=b;this.state[2]+=d;this.state[3]+=e},init:function(){this.count[0]=this.count[1]=0;
this.state[0]=1732584193;this.state[1]=4023233417;this.state[2]=2562383102;this.state[3]=271733878;for(i=0;i<this.digestBits.length;i++)this.digestBits[i]=0},update:function(c){var f;f=this.and(this.shr(this.count[0],3),63);4294967288>this.count[0]||(this.count[1]++,this.count[0]-=4294967296);this.count[0]+=8;this.buffer[f]=this.and(c,255);63<=f&&this.transform(this.buffer,0)},finish:function(){for(var c=new md5_array(8),f,a=0,b=f=0,a=0;4>a;a++)c[a]=this.and(this.shr(this.count[0],8*a),255);for(a=
0;4>a;a++)c[a+4]=this.and(this.shr(this.count[1],8*a),255);f=this.and(this.shr(this.count[0],3),63);b=56>f?56-f:120-f;f=new md5_array(64);f[0]=128;for(a=0;a<b;a++)this.update(f[a]);for(a=0;8>a;a++)this.update(c[a]);for(a=0;4>a;a++)for(j=0;4>j;j++)this.digestBits[4*a+j]=this.and(this.shr(this.state[a],8*j),255)},hexa:function(c){var f="";for(hexa_i=0;8>hexa_i;hexa_i++)f="0123456789abcdef".charAt(Math.abs(c)%16)+f,c=Math.floor(c/16);return f},ascii:"01234567890123456789012345678901 !\"#$%\x26'()*+,-./0123456789:;\x3c\x3d\x3e?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
MD5:function(c){var f,a,b;this.init();for(a=0;a<c.length;a++)f=c.charAt(a),this.update(this.ascii.lastIndexOf(f));this.finish();for(i=c=f=a=b=0;4>i;i++)c+=this.shl(this.digestBits[15-i],8*i);for(i=4;8>i;i++)f+=this.shl(this.digestBits[15-i],8*(i-4));for(i=8;12>i;i++)a+=this.shl(this.digestBits[15-i],8*(i-8));for(i=12;16>i;i++)b+=this.shl(this.digestBits[15-i],8*(i-12));return this.hexa(b)+this.hexa(a)+this.hexa(f)+this.hexa(c)}})});
//@ sourceMappingURL=MD5.js.map