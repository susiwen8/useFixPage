"use strict";var o=require("react"),e=void 0!==window.pageYOffset,t="CSS1Compat"===(document.compatMode||"");module.exports=function(n){var u=o.useState(null!=n&&n),r=u[0],c=u[1],d=document.body.style,s=o.useRef(0);return o.useLayoutEffect((function(){r?(s.current=e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop,d.position="fixed",d.top=-s.current+"px"):(d.position="",d.top="",window.scrollTo(0,s.current))}),[d,r]),[r,c]};