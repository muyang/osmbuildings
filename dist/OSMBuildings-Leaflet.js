var OSMBuildings=function(){function va(a,d){var b=a.x-d.x,c=a.y-d.y;return b*b+c*c}function Ra(a){for(var d=Infinity,b=-Infinity,c=Infinity,e=-Infinity,f=0,g=a.length-3;f<g;f+=2)d=N(d,a[f]),b=H(b,a[f]),c=N(c,a[f+1]),e=H(e,a[f+1]);return{x:d+(b-d)/2<<0,y:c+(e-c)/2<<0}}function wa(a,d,b,c){var e=a.x-b.x,f=a.y-b.y,g=d-c,l=e*e+f*f;if(!(l<=g*g)){var l=V(l),e=-e/l,f=-f/l,g=g/l,l=[],j,m,k;j=V(H(0,1-g*g));for(var r=1;-1<=r;r-=2)m=e*g-r*j*f,k=f*g+r*j*e,l.push({x1:a.x+d*m<<0,y1:a.y+d*k<<0,x2:b.x+c*m<<0,y2:b.y+
c*k<<0});return l}}function W(a,d){var b={};a/=O;d/=O;b[Sa]=0>=d?90:1<=d?-90:xa*(2*Ta(Ua(C*(1-2*d)))-ya);b[Va]=360*(1===a?1:(a%1+1)%1)-180;return b}function za(a,d,b){function c(a){if("XDomainRequest"in P&&a!==e.readyState&&(e.readyState=a,e.onreadystatechange))e.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return d[b]||a});var e="XDomainRequest"in P?new XDomainRequest:new XMLHttpRequest;e.onerror=function(){e.status=500;e.statusText="Error";c(4)};e.ontimeout=function(){e.status=
408;e.statusText="Timeout";c(4)};e.onprogress=function(){c(3)};e.onload=function(){e.status=200;e.statusText="Ok";c(4)};e.onreadystatechange=function(){4===e.readyState&&e.status&&!(200>e.status||299<e.status)&&b&&e.responseText&&b(JSON.parse(e.responseText))};c(0);e.open("GET",a);c(1);e.send(null);c(2);return e}function fa(a){Q=R+a.x;S=z+a.y}function Aa(a){B=a.w;z=a.h;R=B/2<<0;ga=z/2<<0;Q=R;S=z;q.setSize(B,z);ha=w-50}function Ba(a){E=a;O=Wa<<E;a=W(u+R,s+ga);ia=-40075040*X(a.latitude)/Ca(2,E+8);v=
Ca(0.9,E-Y);ja=D.alpha(v)+"";ka=Z.alpha(v)+"";$=I.alpha(v)+""}var Da=Da||Array,Ea=Ea||Array,h=Math,Ua=h.exp,Xa=h.log,la=h.sin,X=h.cos,Fa=h.tan,Ta=h.atan,Ga=h.atan2,N=h.min,H=h.max,V=h.sqrt,Ha=h.ceil,Ia=h.floor,Ja=h.random,Ca=h.pow,P=window,ma=document;P.console||(P.console={});var F,na=function(a,d,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(d-a)*b:0.5>b?d:b<2/3?a+6*(d-a)*(2/3-b):a},Ya={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",
bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",
darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",
ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",
mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",
papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",
violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},J=function(a,d,b,c){this.H=a;this.S=d;this.L=b;this.A=c},h=J.prototype;h.toString=function(){var a=Math.min(360,Math.max(0,this.H)),d=Math.min(1,Math.max(0,this.S)),b=Math.min(1,Math.max(0,this.L)),c=Math.min(1,Math.max(0,this.A)),e;if(0===d)a=e=d=b;else{var f=0.5>b?b*(1+d):b+d-b*d,b=2*b-f,a=a/360,d=na(b,f,a+1/3);e=na(b,f,a);a=na(b,f,a-1/3)}d*=255;e*=255;a*=255;return 1===c?"#"+(16777216+
(d<<16)+(e<<8)+a).toString(16).slice(1,7):"rgba("+[Math.round(d),Math.round(e),Math.round(a),c.toFixed(2)].join()+")"};h.hue=function(a){return new J(this.H*a,this.S,this.L,this.A)};h.saturation=function(a){return new J(this.H,this.S*a,this.L,this.A)};h.lightness=function(a){return new J(this.H,this.S,this.L*a,this.A)};h.alpha=function(a){return new J(this.H,this.S,this.L,this.A*a)};F=function(a){var d=0,b=0,c=0,e=1,f;a=(""+a).toLowerCase().replace("grey","gray");a=Ya[a]||a;if(f=a.match(/^#(\w{2})(\w{2})(\w{2})$/))d=
parseInt(f[1],16),b=parseInt(f[2],16),c=parseInt(f[3],16);if(f=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))d=parseInt(f[1],10),b=parseInt(f[2],10),c=parseInt(f[3],10),e=f[4]?parseFloat(f[5]):1;d/=255;b/=255;c/=255;a=Math.max(d,b,c);var g=Math.min(d,b,c),l;f=(a+g)/2;var j=a-g;if(j){g=0.5<f?j/(2-a-g):j/(a+g);switch(a){case d:l=(b-c)/j+(b<c?6:0);break;case b:l=(c-d)/j+2;break;case c:l=(d-b)/j+4}l*=60}else l=g=0;return new J(l,g,f,e)};var Ka,h=Math,oa=h.PI,t=h.sin,x=h.cos,La=h.tan,Ma=h.asin,
Na=h.atan2,G=oa/180,aa=23.4397*G;Ka=function(a,d,b){b=G*-b;d*=G;a=a.valueOf()/864E5-0.5+2440588-2451545;var c=G*(357.5291+0.98560028*a),e=G*(1.9148*t(c)+0.02*t(2*c)+3E-4*t(3*c)),e=c+e+102.9372*G+oa,c=Ma(t(0)*x(aa)+x(0)*t(aa)*t(e)),e=Na(t(e)*x(aa)-La(0)*t(aa),x(e));b=G*(280.16+360.9856235*a)-b-e;return{altitude:Ma(t(d)*t(c)+x(d)*x(c)*x(b)),azimuth:Na(t(b),x(b)*t(d)-La(c)*x(d))-oa/2}};var n={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",
getWinding:function(a){var d,b,c,e,f=0,g,l;g=0;for(l=a.length-3;g<l;g+=2)d=a[g],b=a[g+1],c=a[g+2],e=a[g+3],f+=d*e-c*b;return 0<f/2?this.clockwise:this.counterClockwise},makeWinding:function(a,d){if(this.getWinding(a)===d)return a;for(var b=[],c=a.length-2;0<=c;c-=2)b.push(a[c],a[c+1]);return b},toMeters:function(a){a=""+a;var d=parseFloat(a);return d===a||~a.indexOf("m")?d<<0:~a.indexOf("yd")?d*this.YARD_TO_METER<<0:~a.indexOf("ft")?d*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+
a[1]*this.INCH_TO_METER<<0):d<<0},getRadius:function(a){for(var d=90,b=-90,c=0,e=a.length;c<e;c+=2)d=N(d,a[c]),b=H(b,a[c]);return 6378137*((b-d)/xa)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",
block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||
a]||null}},Oa,Pa=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},qa=function(a){if(a){for(var d=[],b,c=0,e=a.length;c<e;c++)b=pa[a[c]],d.push(b[0],b[1]);d[d.length-2]!==d[0]&&d[d.length-1]!==d[1]&&d.push(d[0],d[1]);if(!(8>d.length))return d}},Za=function(a,d){for(var b in d)a[b]||(a[b]=d[b]);return a},ra=function(a,d){var b={},c=a.tags||{};a.id&&(b.id=a.id);d&&(b.footprint=n.makeWinding(d,n.clockwise));c.height&&(b.height=n.toMeters(c.height));!b.height&&
c["building:height"]&&(b.height=n.toMeters(c["building:height"]));!b.height&&c.levels&&(b.height=c.levels*n.METERS_PER_LEVEL<<0);!b.height&&c["building:levels"]&&(b.height=c["building:levels"]*n.METERS_PER_LEVEL<<0);c.min_height&&(b.minHeight=n.toMeters(c.min_height));!b.minHeight&&c["building:min_height"]&&(b.minHeight=n.toMeters(c["building:min_height"]));!b.minHeight&&c.min_level&&(b.minHeight=c.min_level*n.METERS_PER_LEVEL<<0);!b.minHeight&&c["building:min_level"]&&(b.minHeight=c["building:min_level"]*
n.METERS_PER_LEVEL<<0);c["building:material"]&&(b.wallColor=n.getMaterialColor(c["building:material"]));c["building:facade:material"]&&(b.wallColor=n.getMaterialColor(c["building:facade:material"]));c["building:cladding"]&&(b.wallColor=n.getMaterialColor(c["building:cladding"]));c["building:color"]&&(b.wallColor=c["building:color"]);c["building:colour"]&&(b.wallColor=c["building:colour"]);c["roof:material"]&&(b.roofColor=n.getMaterialColor(c["roof:material"]));c["building:roof:material"]&&(b.roofColor=
n.getMaterialColor(c["building:roof:material"]));c["roof:color"]&&(b.roofColor=c["roof:color"]);c["roof:colour"]&&(b.roofColor=c["roof:colour"]);c["building:roof:color"]&&(b.roofColor=c["building:roof:color"]);c["building:roof:colour"]&&(b.roofColor=c["building:roof:colour"]);b.height=b.height||Qa;if("dome"===c["roof:shape"]||"cylinder"===c["building:shape"]||"sphere"===c["building:shape"])b.shape="cylinder",b.radius=n.getRadius(b.footprint),"dome"===c["roof:shape"]&&c["roof:height"]&&(b.roofShape=
"cylinder",b.roofHeight=n.toMeters(c["roof:height"]),b.height=H(0,b.height-b.roofHeight));return b},pa,T,ba,ca;Oa=function(a,d){pa={};T={};ba=[];ca=d;for(var b,c=0,e=a.length;c<e;c++)switch(b=a[c],b.type){case "node":pa[b.id]=[b.lat,b.lon];break;case "way":if(Pa(b)){var f=void 0,f=void 0;if((f=qa(b.nodes))&&!1!==ca(b))f=ra(b,f),ba.push(f)}else if(f=b.tags,!f||!f.highway&&!f.railway&&!f.landuse)T[b.id]=b;break;case "relation":var g=b,l=void 0,j=void 0;b=[];var m=j=void 0,k=void 0,f=void 0;if(Pa(g)&&
!("multipolygon"!==g.tags.type&&"building"!==g.tags.type||!1===ca(g))){for(var l=g.members,j=m=void 0,k=[],r=0,y=l.length;r<y;r++)m=l[r],"way"===m.type&&T[m.ref]&&(!m.role||"outer"===m.role?j=T[m.ref]:("inner"===m.role||"enclave"===m.role)&&k.push(T[m.ref]));l=j?{outer:j,inner:k}:void 0;if(l&&(m=ra(g),j=l.outer))if((k=qa(j.nodes))&&!1!==ca(j)){j=ra(j,k);g=0;for(k=l.inner.length;g<k;g++)(f=qa(l.inner[g].nodes))&&b.push(n.makeWinding(f,n.counterClockwise));b.length&&(j.holes=b);ba.push(Za(j,m))}}}return ba};
var C=Math.PI,ya=C/2,$a=C/4,xa=180/C,Wa=256,Y=15,Sa="latitude",Va="longitude",B=0,z=0,R=0,ga=0,u=0,s=0,E,O,D=F("rgba(200, 190, 180)"),Z=D.lightness(0.8),I=D.lightness(1.2),ja=""+D,ka=""+Z,$=""+I,K,ia=1,v=1,ha,Qa=5,Q,S,w=450,da,sa={time:new Date,data:{},add:function(a,d){this.data[d]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},
A={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},getPixelFootprint:function(a){for(var d,b,c=new Da(a.length),e=0,f=a.length-1;e<f;e+=2)d=a[e+1],b=N(1,H(0,0.5-Xa(Fa($a+ya*a[e]/180))/C/2)),d=(d/360+0.5)*O<<0,b=b*O<<0,c[e]=d,c[e+1]=b;a=c;c=a.length/2;e=new Ea(c);f=0;d=c-1;var g,l,j,m=[],k=[],r=[];for(e[f]=e[d]=1;d;){g=0;for(b=f+1;b<d;b++){l=a[2*b];var y=a[2*b+1],M=a[2*f],h=a[2*f+1],n=a[2*d],u=a[2*d+1],s=n-M,p=u-h,q=void 0;if(0!==s||0!==p)q=((l-M)*s+(y-h)*p)/
(s*s+p*p),1<q?(M=n,h=u):0<q&&(M+=s*q,h+=p*q);s=l-M;p=y-h;l=s*s+p*p;l>g&&(j=b,g=l)}2<g&&(e[j]=1,m.push(f),k.push(j),m.push(j),k.push(d));f=m.pop();d=k.pop()}for(b=0;b<c;b++)e[b]&&r.push(a[2*b],a[2*b+1]);c=r;if(!(8>c.length))return c},createClosure:function(a){var d=this;return function(b){b=d.parse(b);sa.add(b,a);d.addRenderItems(b,!0)}},parse:function(a){if(!a)return[];if("FeatureCollection"===a.type){a=a.features;var d=this.each,b,c,e,f,g,l,j=[],m,k,r,y,h;b=0;for(c=a.length;b<c;b++)if(e=a[b],"Feature"===
e.type&&(h={},f=e.geometry,m=e.properties,"LineString"===f.type&&(r=k.length-1,k[0][0]===k[r][0]&&k[0][1]===k[r][1]&&(k=f.coordinates)),"Polygon"===f.type&&(k=f.coordinates),"MultiPolygon"===f.type&&(k=f.coordinates[0]),k&&!1!==d(e))){r=k[0];g=[];e=0;for(f=r.length;e<f;e++)g.push(r[e][1],r[e][0]);h.id=m.id||[g[0],g[1],m.height,m.minHeight].join();h.footprint=n.makeWinding(g,n.clockwise);y=[];e=1;for(f=k.length;e<f;e++){r=k[e];y[e-1]=[];g=0;for(l=r.length;g<l;g++)y[e-1].push(r[g][1],r[g][0]);y[e-1]=
n.makeWinding(y[e-1],n.counterClockwise)}y.length&&(h.holes=y);h.height=n.toMeters(m.height)||Qa;m.minHeight&&(h.minHeight=n.toMeters(m.minHeight));if(m.color||m.wallColor)h.wallColor=m.color||m.wallColor;m.roofColor&&(h.roofColor=m.roofColor);j.push(h)}return j}return a.osm3s?Oa(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,d){for(var b=this.scale(a),c=0,e=b.length;c<e;c++)this.currentItemsIndex[b[c].id]||(b[c].scale=d?0:1,this.items.push(b[c]),
this.currentItemsIndex[b[c].id]=1);K||(K=setInterval(function(){for(var a=A.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);q.render();b||(clearInterval(K),K=null)},33))},scale:function(a){var d,b,c,e,f=[],g,l,j,m,k,r,h,n,s,p=3*ia;d=0;for(b=a.length;d<b;d++)if(g=a[d],l=g.height/p,j=isNaN(g.minHeight)?0:g.minHeight/p,!(j>ha)&&(m=this.getPixelFootprint(g.footprint))){n=[];if(g.holes){c=0;for(e=g.holes.length;c<e;c++)(s=this.getPixelFootprint(g.holes[c]))&&
n.push(s)}e=c=null;if(g.wallColor&&(k=F(g.wallColor)))c=k.alpha(v),e=""+c.lightness(0.8),c=""+c;r=null;if(g.roofColor&&(k=F(g.roofColor)))r=""+k.alpha(v);h=g.roofHeight/p;l<=j&&0>=h||f.push({id:g.id,footprint:m,height:N(l,ha),minHeight:j,wallColor:c,altColor:e,roofColor:r,roofShape:g.roofShape,roofHeight:h,center:Ra(m),holes:n.length?n:null,shape:g.shape,radius:g.radius/ia})}return f},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=this.parse(a),!0)},load:function(a){this.url=
a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),za(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(E<Y))if(this.isStatic)this.addRenderItems(this.staticData);
else if(this.url){var a,d,b,c,e=W(u,s);a=W(u+B,s+z);var f=0.0075*Ha(e.latitude/0.0075),g=0.015*Ha(a.longitude/0.015);a=0.0075*Ia(a.latitude/0.0075);for(e=0.015*Ia(e.longitude/0.015);a<=f;a+=0.0075)for(d=e;d<=g;d+=0.015)a=this.cropDecimals(a),d=this.cropDecimals(d),c=a+","+d,(b=sa.get(c))?this.addRenderItems(b):za(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(d+0.015),s:a,w:d},this.createClosure(c));sa.purge()}},each:function(){}},ta={project:function(a,d,b){return{x:(a-Q)*b+Q<<0,y:(d-
S)*b+S<<0}},drawSolid:function(a,d,b,c,e){for(var f={x:0,y:0},g={x:0,y:0},l,j,m=[],k=0,r=a.length-3;k<r;k+=2)f.x=a[k]-u,f.y=a[k+1]-s,g.x=a[k+2]-u,g.y=a[k+3]-s,l=this.project(f.x,f.y,d),j=this.project(g.x,g.y,d),b&&(f=this.project(f.x,f.y,b),g=this.project(g.x,g.y,b)),(g.x-f.x)*(l.y-f.y)>(l.x-f.x)*(g.y-f.y)&&(this.context.fillStyle=f.x<g.x&&f.y<g.y||f.x>g.x&&f.y>g.y?e:c,this.drawFace([g.x,g.y,f.x,f.y,l.x,l.y,j.x,j.y],!0)),m[k]=l.x,m[k+1]=l.y;return m},drawFace:function(a,d,b){if(a.length){var c,e,
f,g;this.context.beginPath();this.context.moveTo(a[0],a[1]);c=2;for(e=a.length;c<e;c+=2)this.context.lineTo(a[c],a[c+1]);if(b){c=0;for(e=b.length;c<e;c++){a=b[c];this.context.moveTo(a[0],a[1]);f=2;for(g=a.length;f<g;f+=2)this.context.lineTo(a[f],a[f+1])}}this.context.closePath();this.context.fill();d&&this.context.stroke()}},drawCircle:function(a,d,b){this.context.beginPath();this.context.arc(a.x,a.y,d,0,2*C);b&&this.context.stroke();this.context.fill()},drawCylinder:function(a,d,b,c,e,f){var g=w/
(w-b);b=this.project(a.x,a.y,g);g*=d;c&&(c=w/(w-c),a=this.project(a.x,a.y,c),d*=c);if(c=wa(a,d,b,g))f||(f=F(e),f=""+f.lightness(0.8)),this.context.fillStyle=e,this.drawFace([c[0].x2,c[0].y2,c[0].x1,c[0].y1,a.x,a.y+d,b.x,b.y+g],!0),this.context.fillStyle=f,this.drawFace([c[1].x2,c[1].y2,c[1].x1,c[1].y1,a.x,a.y+d,b.x,b.y+g],!0),this.context.fillStyle=f,this.drawFace([c[0].x2,c[0].y2,b.x,b.y+g,c[1].x2,c[1].y2,b.x,b.y-g],!0);return{c:b,r:g}},render:function(){this.context.clearRect(0,0,B,z);if(!(E<Y||
da)){var a,d,b,c,e,f,g,l={x:Q+u,y:S+s},j=u,m=u+B,k=s,r=s+z,h,n,p,q,v,t=A.items;t.sort(function(a,b){return a.minHeight-b.minHeight||va(b.center,l)-va(a.center,l)||b.height-a.height});a=0;for(d=t.length;a<d;a++){e=t[a];f=!1;h=e.footprint;b=0;for(c=h.length-1;b<c;b+=2)f||(f=h[b]>j&&h[b]<m&&h[b+1]>k&&h[b+1]<r);if(f)if(b=1>e.scale?e.height*e.scale:e.height,f=w/(w-b),g=c=0,e.minHeight&&(c=1>e.scale?e.minHeight*e.scale:e.minHeight,g=w/(w-c)),p=e.wallColor||ja,q=e.altColor||ka,v=e.roofColor||$,this.context.strokeStyle=
"#000000","cylinder"===e.shape)h=this.drawCylinder({x:e.center.x-u,y:e.center.y-s},e.radius,b,c,p,q),"cylinder"===e.roofShape&&(h=this.drawCylinder({x:e.center.x-u,y:e.center.y-s},e.radius,b+e.roofHeight,b,v));else{h=this.drawSolid(h,f,g,p,q);n=[];if(e.holes){b=0;for(c=e.holes.length;b<c;b++)n[b]=this.drawSolid(e.holes[b],f,g,p,q)}this.context.fillStyle=v;this.drawFace(h,!0,n)}}}}},U={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,d,
b){return{x:a+this.direction.x*b,y:d+this.direction.y*b}},cylinder:function(a,d,b,c){b=this.project(a.x,a.y,b);var e;c&&(a=this.project(a.x,a.y,c));var f=wa(a,d,b,d);f&&(c=Ga(f[0].y1-a.y,f[0].x1-a.x),e=Ga(f[1].y1-a.y,f[1].x1-a.x),this.context.moveTo(f[1].x2,f[1].y2),this.context.arc(b.x,b.y,d,e,c),this.context.arc(a.x,a.y,d,c,e))},render:function(){var a,d,b;this.context.clearRect(0,0,B,z);if(this.enabled&&!(E<Y||da))if(a=W(u+R,s+ga),a=Ka(this.date,a.latitude,a.longitude),!(0>=a.altitude)){d=1/Fa(a.altitude);
b=0.45/d;this.direction.x=X(a.azimuth)*d;this.direction.y=la(a.azimuth)*d;var c,e,f,g,l,j,m,k,h,n,p,q,t,w;a=[];d=[];var x=A.items;this.context.canvas.style.opacity=b/(2*v);this.context.shadowColor=this.blurColor;this.context.shadowBlur=this.blurSize*(v/2);this.context.fillStyle=this.color;this.context.beginPath();b=0;for(c=x.length;b<c;b++){j=x[b];h=!1;m=j.footprint;g=[];e=0;for(f=m.length-1;e<f;e+=2)g[e]=l=m[e]-u,g[e+1]=k=m[e+1]-s,h||(h=0<l&&l<B&&0<k&&k<z);if(h)if(l=1>j.scale?j.height*j.scale:j.height,
m=0,j.minHeight&&(m=1>j.scale?j.minHeight*j.scale:j.minHeight),"cylinder"===j.shape)"cylinder"===j.roofShape&&(l+=j.roofHeight),a.push({shape:j.shape,center:{x:j.center.x-u,y:j.center.y-s},radius:j.radius,h:l,mh:m});else{k=null;e=0;for(f=g.length-3;e<f;e+=2)h=g[e],n=g[e+1],p=g[e+2],q=g[e+3],t=this.project(h,n,l),w=this.project(p,q,l),m&&(n=this.project(h,n,m),q=this.project(p,q,m),h=n.x,n=n.y,p=q.x,q=q.y),(p-h)*(t.y-n)>(t.x-h)*(q-n)?(1===k&&this.context.lineTo(h,n),k=0,e||this.context.moveTo(h,n),
this.context.lineTo(p,q)):(0===k&&this.context.lineTo(t.x,t.y),k=1,e||this.context.moveTo(t.x,t.y),this.context.lineTo(w.x,w.y));m||d.push(g);if(j.holes){e=0;for(f=j.holes.length;e<f;e++){k=j.holes[e];h=[k[0]-u,k[1]-s];this.context.moveTo(h[0],h[1]);g=2;for(l=k.length;g<l;g+=2)h[g]=k[g]-u,h[g+1]=k[g+1]-s,this.context.lineTo(h[g],h[g+1]);m||d.push(h)}}}}b=0;for(c=a.length;b<c;b++)j=a[b],"cylinder"===j.shape&&this.cylinder(j.center,j.radius,j.h,j.mh);this.context.closePath();this.context.fill();this.context.shadowBlur=
null;this.context.globalCompositeOperation="destination-out";this.context.beginPath();b=0;for(c=d.length;b<c;b++){k=d[b];this.context.moveTo(k[0],k[1]);e=2;for(f=k.length;e<f;e+=2)this.context.lineTo(k[e],k[e+1]);this.context.lineTo(k[0],k[1])}b=0;for(c=a.length;b<c;b++)j=a[b],"cylinder"===j.shape&&!j.mh&&(this.context.moveTo(j.center.x+j.radius,j.center.y),this.context.arc(j.center.x,j.center.y,j.radius,0,2*C));this.context.fillStyle="#00ff00";this.context.fill();this.context.globalCompositeOperation=
"source-over"}}},ua=function(a,d,b,c,e){var f=c-d,g=e-b,h=V(f*f+g*g),j=Ja(),m=1.5*Ja()*V(h);d+=f*j;b+=g*j;f=f/h*m;g=g/h*m;a.bezierCurveTo(d+g,b-f,d-g,b+f,c,e)},ea=function(a,d,b,c,e,f){var g=d+X(e)*c;e=b+la(e)*c;d+=X(f)*c;b+=la(f)*c;ua(a,g,e,d,b)},ab={enable:function(a){var d=0,b=0,c=0,e=0,f=a.moveTo,g=a.beginPath,h=a.closePath;a.moveTo=function(g,h){c=d=g;e=b=h;f.call(a,g,h)};a.lineTo=function(b,d){ua(a,c,e,c=b,e=d)};a.beginPath=function(){a.lineWidth=2*Math.random()/(2*v);d=c;b=e;g.call(a)};a.closePath=
function(){ua(a,c,e,d,b);h.call(a)};a.arc=function(b,c,d,e,f,g){var h=C/2;if(g){for(;f-e>h;)ea(a,b,c,d,f,f-h),f-=h;ea(a,b,c,d,f,e)}else{for(;f-e>h;)ea(a,b,c,d,e,e+h),e+=h;ea(a,b,c,d,e,f)}};return a}},q={container:ma.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;U.context=this.createContext();ta.context=this.createContext()},render:function(){U.render();ta.render()},
createContext:function(){var a=ma.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var d=a.getContext("2d");d.lineCap="round";d.lineJoin="round";d.lineWidth=1;d.mozImageSmoothingEnabled=!1;d.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);ab.enable(d);return d},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},
setSize:function(a,d){for(var b=0,c=this.items.length;b<c;b++)this.items[b].width=a,this.items[b].height=d},screenshot:function(){var a=ma.createElement("CANVAS"),d=a.getContext("2d"),b,c,e;a.width=B;a.height=z;clearInterval(K);K=null;e=A.items;b=0;for(c=e.length;b<c;b++)e[b].scale=1;this.render();b=0;for(c=this.items.length;b<c;b++)e=this.items[b],""!==e.style.opacity&&(d.globalAlpha=parseFloat(e.style.opacity)),d.drawImage(e,0,0),d.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,
d){this.container.style.left=a+"px";this.container.style.top=d+"px"}};q.init();var h=function(a){this.offset={x:0,y:0};a.addLayer(this)},p=h.prototype;p.onAdd=function(a){this.map=a;q.appendTo(a._panes.overlayPane);var d=this.getOffset(),b=a.getPixelOrigin();Aa({w:a._size.x,h:a._size.y});var c=b.y-d.y;u=b.x-d.x;s=c;Ba(a._zoom);q.setPosition(-d.x,-d.y);a.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);
if(a.options.zoomAnimation)a.on("zoomanim",this.onZoom,this);a.attributionControl&&a.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');A.update()};p.onRemove=function(){var a=this.map;a.attributionControl&&a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);
a.options.zoomAnimation&&a.off("zoomanim",this.onZoom,this);q.remove()};p.onMove=function(){var a=this.getOffset();fa({x:this.offset.x-a.x,y:this.offset.y-a.y});ta.render()};p.onMoveEnd=function(){if(this.skipMoveEnd)this.skipMoveEnd=!1;else{var a=this.map,d=this.getOffset(),b=a.getPixelOrigin();this.offset=d;q.setPosition(-d.x,-d.y);fa({x:0,y:0});Aa({w:a._size.x,h:a._size.y});a=b.y-d.y;u=b.x-d.x;s=a;q.render();A.update()}};p.onZoomStart=function(){da=!0;q.render()};p.onZoom=function(){};p.onZoomEnd=
function(){var a=this.map,d=this.getOffset(),b=a.getPixelOrigin(),c=b.y-d.y;u=b.x-d.x;s=c;a=a._zoom;da=!1;Ba(a);A.update();q.render();this.skipMoveEnd=!0};p.onResize=function(){};p.onViewReset=function(){var a=this.getOffset();this.offset=a;q.setPosition(-a.x,-a.y);fa({x:0,y:0})};p.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};p.setStyle=function(a){a=a||{};var d;if(d=a.color||a.wallColor)D=F(d),ja=""+D.alpha(v),Z=D.lightness(0.8),ka=""+Z.alpha(v),I=D.lightness(1.2),$=""+I.alpha(v);
a.roofColor&&(I=F(a.roofColor),$=""+I.alpha(v));void 0!==a.shadows&&(U.enabled=!!a.shadows);q.render();return this};p.setDate=function(a){U.date=a;U.render();return this};p.loadData=function(a){A.load(a);return this};p.setData=function(a){A.set(a);return this};p.each=function(a,d){A.each=function(b){return a.call(d,b)};return this};p.screenshot=function(a){var d=q.screenshot();a&&(P.location.href=d.replace("image/png","image/octet-stream"));return d};h.VERSION="0.1.9a";h.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';
return h}();
