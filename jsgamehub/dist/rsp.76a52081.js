const e=document.querySelector(".container"),t=document.querySelector(".user_result img"),c=document.querySelector(".cpu_result img"),r=document.querySelector(".result"),o=document.querySelectorAll(".option_image");o.forEach((n,s)=>{n.addEventListener("click",u=>{n.classList.add("active"),t.src=c.src="img/rock.png",r.textContent="Зачекайте...",o.forEach((e,t)=>{s!==t&&e.classList.remove("active")}),e.classList.add("start"),setTimeout(()=>{e.classList.remove("start"),t.src=u.target.querySelector("img").src;let o=Math.floor(3*Math.random());c.src=["img/rock.png","img/paper.png","img/scissors.png"][o];let n=["R","P","S"][o],i=["R","P","S"][s];r.textContent=i===n?"Нічия!":`${({RR:"Нічия",RP:"ШІ",RS:"Ти",PP:"Нічия",PR:"Ти",PS:"ШІ",SS:"Нічия",SR:"ШІ",SP:"Ти"})[i+n]} \u{43F}\u{435}\u{440}\u{435}\u{43C}\u{456}\u{433}!`},2500)})}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".back-to-games button").addEventListener("click",function(){window.close()})});
//# sourceMappingURL=rsp.76a52081.js.map
