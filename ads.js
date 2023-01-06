const Cookie={get:e=>(e=document.cookie.match(RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[\]\\/+^])/g,"$1")+"=([^;]*)")))?decodeURIComponent(e[1]):void 0,set(e,o,i={}){(i={path:"/",...i}).expires instanceof Date&&(i.expires=i.expires.toUTCString());let t=unescape(encodeURIComponent(e))+"="+unescape(encodeURIComponent(o));for(var r in i){t+="; "+r;var a=i[r];!0!==a&&(t+="="+a)}document.cookie=t},rem(e){Cookie.set(e,"",{"max-age":-1})}};
/* Anti bomb config */
const antiBombSet = {
timeOut: 3600, /* Timeout in seconds, when to ads appear after maximum clicks */
maxClick: 2, /* No of maximum clicks */
cookieKey: "MAX_CLICKED", /* Cookie key to set */
adsSelectors: "ins.adsbygoogle", /* Ads selectors */
iframeSelectors: "ins.adsbygoogle iframe", /* Ads iframe selectors */
callback: () => {
/* Runs only one time if/when clicked maximum times on ads */
if (antiBombSet.executed === undefined){antiBombSet.executed = !0;
/* Prevent clicks on ads placement with pointer-events:none | You can also try display:none */
if (document.getElementById("mxAds_stl") == null) {var stl = document.createElement("style");stl.id = "mxAds_stl";stl.innerHTML = (antiBombSet.adsSelectors || ".adsbygoogle") + "{pointer-events:none}";document.head.appendChild(stl);}
/* Add your js below to execute if/when clicked maximum times on ads */
console.warn("Max Ads Clicked, Dear! Spam Protector Activated!.");
alert("Max Ads Clicked, Dear!");}}};
if (Cookie.get(antiBombSet.cookieKey || "ADS_CLICK") != undefined && parseInt(Cookie.get(antiBombSet.cookieKey || "ADS_CLICK")) >= (antiBombSet.maxClick || 3)) {antiBombSet.callback()};
!function(){function e(e,l){return null!=(e=Cookie.get(e))&&parseInt(e)>=l}var l=antiBombSet.cookieKey||"ADS_CLICK",t=antiBombSet.adsSelectors||".adsbygoogle",a=antiBombSet.timeOut||7200,r=antiBombSet.maxClick||3;0<document.querySelectorAll(t).length&&document.querySelectorAll(t).forEach(t=>{t.addEventListener("click",function(){var t,c;e(l,r)?antiBombSet.callback():(t=l,null!=(c=Cookie.get(t))?(c=parseInt(c)+1,Cookie.set(t,c.toString(),{secure:!0,"max-age":a})):Cookie.set(t,"1",{secure:!0,"max-age":a}))})}),window.addEventListener("blur",function(){e(l,r)&&antiBombSet.callback();for(var t,c,n=document.querySelectorAll(antiBombSet.iframeSelectors||".adsbygoogle iframe"),o=0;o<n.length;o++)document.activeElement==n[o]&&(e(l,r)?antiBombSet.callback():(t=l,null!=(c=Cookie.get(t))?(c=parseInt(c)+1,Cookie.set(t,c.toString(),{secure:!0,"max-age":a})):Cookie.set(t,"1",{secure:!0,"max-age":a})))})}();
