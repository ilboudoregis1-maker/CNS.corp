(function(){var b=document.createElement("div");b.id="cnsbar";document.body.appendChild(b);
var els=document.querySelectorAll(".card,h2");els.forEach(function(e){e.classList.add("rv")});
var io=new IntersectionObserver(function(l){l.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
els.forEach(function(e){io.observe(e)});
var links=document.querySelectorAll(".cns-nav a[href^='#']");
function f(){var h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);b.style.width=(p*100)+"%";
var cur="";links.forEach(function(a){var t=document.querySelector(a.getAttribute("href"));if(t&&t.getBoundingClientRect().top<140)cur=a.getAttribute("href")});
links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")===cur)})}
addEventListener("scroll",f,{passive:true});f()})();
