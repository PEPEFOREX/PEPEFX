var Ut=Object.defineProperty;var Yt=(t,e,o)=>e in t?Ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var Te=(t,e,o)=>(Yt(t,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const w of r.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&c(w)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();function Y(){}function Wt(t){return t()}function Mt(){return Object.create(null)}function de(t){t.forEach(Wt)}function Dt(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let we;function v(t,e){return t===e?!0:(we||(we=document.createElement("a")),we.href=e,t===we.href)}function Jt(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function Kt(t,e,o){t.insertBefore(e,o||null)}function zt(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function el(t){return document.createTextNode(t)}function i(){return el(" ")}function h(t,e,o,c){return t.addEventListener(e,o,c),()=>t.removeEventListener(e,o,c)}function n(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function tl(t){return Array.from(t.childNodes)}function u(t,e,o,c){o==null?t.style.removeProperty(e):t.style.setProperty(e,o,c?"important":"")}let Oe;function re(t){Oe=t}const U=[],Bt=[];let Z=[];const Ht=[],ll=Promise.resolve();let Be=!1;function nl(){Be||(Be=!0,ll.then(Gt))}function He(t){Z.push(t)}const Fe=new Set;let Q=0;function Gt(){if(Q!==0)return;const t=Oe;do{try{for(;Q<U.length;){const e=U[Q];Q++,re(e),sl(e.$$)}}catch(e){throw U.length=0,Q=0,e}for(re(null),U.length=0,Q=0;Bt.length;)Bt.pop()();for(let e=0;e<Z.length;e+=1){const o=Z[e];Fe.has(o)||(Fe.add(o),o())}Z.length=0}while(U.length);for(;Ht.length;)Ht.pop()();Be=!1,Fe.clear(),re(t)}function sl(t){if(t.fragment!==null){t.update(),de(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(He)}}function ol(t){const e=[],o=[];Z.forEach(c=>t.indexOf(c)===-1?e.push(c):o.push(c)),o.forEach(c=>c()),Z=e}const il=new Set;function al(t,e){t&&t.i&&(il.delete(t),t.i(e))}function cl(t,e,o){const{fragment:c,after_update:a}=t.$$;c&&c.m(e,o),He(()=>{const r=t.$$.on_mount.map(Wt).filter(Dt);t.$$.on_destroy?t.$$.on_destroy.push(...r):de(r),t.$$.on_mount=[]}),a.forEach(He)}function rl(t,e){const o=t.$$;o.fragment!==null&&(ol(o.after_update),de(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function dl(t,e){t.$$.dirty[0]===-1&&(U.push(t),nl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ul(t,e,o,c,a,r,w=null,p=[-1]){const b=Oe;re(t);const d=t.$$={fragment:null,ctx:[],props:r,update:Y,not_equal:a,bound:Mt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(b?b.$$.context:[])),callbacks:Mt(),dirty:p,skip_bound:!1,root:e.target||b.$$.root};w&&w(d.root);let k=!1;if(d.ctx=o?o(t,e.props||{},(m,$,...J)=>{const P=J.length?J[0]:$;return d.ctx&&a(d.ctx[m],d.ctx[m]=P)&&(!d.skip_bound&&d.bound[m]&&d.bound[m](P),k&&dl(t,m)),$}):[],d.update(),k=!0,de(d.before_update),d.fragment=c?c(d.ctx):!1,e.target){if(e.hydrate){const m=tl(e.target);d.fragment&&d.fragment.l(m),m.forEach(zt)}else d.fragment&&d.fragment.c();e.intro&&al(t.$$.fragment),cl(t,e.target,e.anchor),Gt()}re(b)}class pl{constructor(){Te(this,"$$");Te(this,"$$set")}$destroy(){rl(this,1),this.$destroy=Y}$on(e,o){if(!Dt(o))return Y;const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(o),()=>{const a=c.indexOf(o);a!==-1&&c.splice(a,1)}}$set(e){this.$$set&&!Jt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fl);const Ot="/assets/pepechibi-CFDSqZX-.png",Ae="/assets/pepefxlogo-sunRu22V.png",It="/assets/discordlogo1-BU55Gt5W.png",Xt="/assets/instalogoredi-BE7lx3L8.png",Rt="/assets/redditlogo-kxHnsolr.png",qt="/assets/twitterlogo--3YXrmd7.png",Me="/assets/telegramlogo-DHx_Hw00.png",gl="/assets/pepeimage1-B4PsDH1L.png",ml="/assets/pepebuy-FH8pI-QT.png",vl="/assets/pepetalking-_unF9DeO.png",hl="/assets/money1-B-jLu3Wl.png",bl="/assets/money2-SSrSHDB6.png",yl="/assets/money3-CKfzWKEO.png",xl="/assets/whitepaper-CR1lUnZC.pdf";function _l(t){let e,o,c,a,r,w,p,b,d,k,m,$,J,P,Ie,K,Xe,ee,Re,S,f,ue,qe,T,je,Ne,te,Ve,H,F,We,ke,De,g,le,O,ze,Ge,ne,I,Qe,Ue,se,X,Ye,Ze,oe,R,Je,Ke,ie,q,et,tt,j,lt,nt,$e,st,N,ot,pe,it,V,at,fe,ct,ge,rt,ae,dt,L,y,W,ut,pt,Pe,ft,me,gt,A,mt,x,D,vt,ht,Le,bt,ve,yt,M,xt,_,z,_t,wt,Ee,kt,he,$t,B,Pt,ce,Lt,be,Et,G,Ct,E,ye,C,St,Tt,xe,Ft,_e,Ce,At;return{c(){e=s("main"),o=s("meta"),c=i(),a=s("nav"),r=s("div"),r.innerHTML=`<a href="https://www.pepeforex.com" id="logoanchor" class="svelte-1c79dte"><img src="${Ae}" id="mainpepe" alt="Svelte Logo" class="svelte-1c79dte"/></a>`,w=i(),p=s("div"),b=s("button"),b.textContent="Airdrop",d=i(),k=s("button"),k.textContent="Presale",m=i(),$=s("button"),$.textContent="Buy Now",J=i(),P=s("button"),P.textContent="Whitepaper",Ie=i(),K=s("button"),K.textContent="Tokenomics",Xe=i(),ee=s("button"),ee.textContent="Socials",Re=i(),S=s("div"),f=s("div"),ue=s("h1"),ue.textContent="Welcome to",qe=i(),T=s("img"),Ne=i(),te=s("h3"),te.textContent="PepeForex, interacting with the blockchain",Ve=i(),H=s("div"),F=s("button"),F.textContent="See on Solscan",We=i(),ke=s("button"),De=i(),g=s("div"),le=s("a"),O=s("img"),Ge=i(),ne=s("a"),I=s("img"),Ue=i(),se=s("a"),X=s("img"),Ze=i(),oe=s("a"),R=s("img"),Ke=i(),ie=s("a"),q=s("img"),tt=i(),j=s("img"),nt=i(),$e=s("h1"),$e.textContent="Exchange Platforms coming soon!",st=i(),N=s("div"),N.innerHTML=`<a href="test" class="button-gallery svelte-1c79dte" hidden=""><img src="${It}" alt="logo" class="svelte-1c79dte"/></a> <a href="test" class="button-gallery svelte-1c79dte" hidden=""><img src="${Xt}" alt="logo" class="svelte-1c79dte"/></a> <a href="test" class="button-gallery svelte-1c79dte" hidden=""><img src="${Rt}" alt="logo" class="svelte-1c79dte"/></a> <a href="test" class="button-gallery svelte-1c79dte" hidden=""><img src="${qt}" alt="logo" class="svelte-1c79dte"/></a> <a href="test" class="button-gallery svelte-1c79dte" hidden=""><img src="${Me}" alt="logo" class="svelte-1c79dte"/></a> <a href="test" class="button-gallery svelte-1c79dte" hidden=""><img src="${Me}" alt="logo" class="svelte-1c79dte"/></a>`,ot=i(),pe=s("div"),pe.innerHTML=`<div class="rationale1-left svelte-1c79dte"><img src="${gl}" alt="pepe image" class="svelte-1c79dte"/></div> <div class="rationale1-right svelte-1c79dte"><p class="title svelte-1c79dte">About $PEPEFX</p> <p class="bodytext svelte-1c79dte">Welcome to the world of PepeForex, a revolutionary memecoin designed by Forex traders and
        alike, for Forex traders and all. Inspired by the iconic Pepe meme, PepeForex aims to carve a unique
        niche within the bustling memecoin ecosystem, providing a vibrant, community driven platform for both
        seasoned forex traders and crypto enthusiasts alike. <br/> <br/> At the heart of our vision lies a commitment to
        showcase utility for our Token and bridging the gap between the traditional forex market and the
        dynamic world of cryptocurrency to build a strong bound community, creating a space where the thrill
        of trading meets the cutting edge innovation of blockchain technology.</p> <p class="bodytext svelte-1c79dte"></p></div>`,it=i(),V=s("h1"),V.textContent="Embrace the Memecoin Movement!",at=i(),fe=s("div"),fe.innerHTML=`<div class="rationale2-left"><p class="bodytext bubble svelte-1c79dte">Thanks to $PEPEFX, we are bringing more attention to the bridge between centralized Forex exchange possibilities, and decentralized finance topped by crypto, as we believe that there exist a middle ground between those two polarized milieux. <br/> <br/> - The PepeForex Team</p></div> <div class="rationale2-right svelte-1c79dte"><img src="${vl}" alt="pepe image" class="svelte-1c79dte"/></div>`,ct=i(),ge=s("div"),ge.innerHTML=`<div class="rationale1-left svelte-1c79dte"><img src="${ml}" alt="pepe image" class="svelte-1c79dte"/></div> <div class="rationale1-right svelte-1c79dte"><p id="buy" class="title svelte-1c79dte">How to buy $PEPEFX</p> <p class="bodytext svelte-1c79dte">Participate in the current presale now! To buy $PEPEFX, you must possess a Solana wallet account, such as a Phantom wallet. Exchange platforms are coming soon.</p> <p class="bodytext svelte-1c79dte"></p></div>`,rt=i(),ae=s("h1"),ae.textContent="Get on $PEPEFX Today!",dt=i(),L=s("div"),y=s("div"),W=s("img"),pt=i(),Pe=s("h2"),Pe.textContent="Airdrop",ft=i(),me=s("p"),me.textContent="As one of the early features, you can claim your portion of the early airdrop shares right now!",gt=i(),A=s("button"),A.textContent="Claim Airdrop",mt=i(),x=s("div"),D=s("img"),ht=i(),Le=s("h2"),Le.textContent="Presale",bt=i(),ve=s("p"),ve.textContent="Participate right now in the first bull run of $PEPEFX by buying your share of the presale and profit from the early bird of this presale!",yt=i(),M=s("button"),M.textContent="Buy Presale",xt=i(),_=s("div"),z=s("img"),wt=i(),Ee=s("h2"),Ee.textContent="And More",kt=i(),he=s("p"),he.textContent="Many more features are to come with PepeForex's usage on Solana Blockchain. Stay tuned to be updated on the awaiting functionalities by following our socials!",$t=i(),B=s("button"),B.textContent="Socials",Pt=i(),ce=s("h1"),ce.textContent="Tokenomics",Lt=i(),be=s("div"),be.innerHTML='<div class="token-col-1 svelte-1c79dte"><h2>Symbol:</h2> <p class="bodytext svelte-1c79dte">$PEPEFX</p></div> <div class="token-col-1 svelte-1c79dte"><h2>Token Address:</h2> <p class="bodytext svelte-1c79dte">Coming Soon...</p></div>',Et=i(),G=s("h1"),G.textContent="Frequently Asked Questions",Ct=i(),E=s("div"),ye=s("div"),C=s("img"),Tt=i(),xe=s("div"),xe.innerHTML="$PEPEFX has no association with Matt Furie or his creation Pepe the Frog. <br/> <br/> © PepeForex 2024 - All Rights Reserved",Ft=i(),_e=s("div"),_e.innerHTML=`<img src="${Ot}" id="footpepe" alt="Svelte Logo" class="svelte-1c79dte"/>`,n(o,"name","viewport"),n(o,"content","width=1500,initial-scale=0.2"),n(r,"class","navbar-left svelte-1c79dte"),n(b,"class","navbar-button svelte-1c79dte"),n(k,"class","navbar-button svelte-1c79dte"),n($,"class","navbar-button svelte-1c79dte"),n(P,"class","navbar-button svelte-1c79dte"),n(K,"class","navbar-button svelte-1c79dte"),n(ee,"class","navbar-button svelte-1c79dte"),n(p,"class","navbar-right svelte-1c79dte"),n(a,"class","main-navbar svelte-1c79dte"),n(a,"id","top"),u(a,"margin-bottom","1.6%"),n(ue,"class","text1 svelte-1c79dte"),v(T.src,je=Ae)||n(T,"src",je),n(T,"id","logopepe"),n(T,"alt","Svelte Logo"),n(T,"class","svelte-1c79dte"),n(te,"class","text1 svelte-1c79dte"),u(te,"padding-bottom","40px"),n(F,"class","panel-button svelte-1c79dte"),u(F,"margin-bottom","40px"),n(F,"type","button"),ke.hidden=!0,n(H,"class","first-container-buts svelte-1c79dte"),v(O.src,ze=Xt)||n(O,"src",ze),n(O,"alt","logo"),n(O,"class","svelte-1c79dte"),n(le,"href",wl),n(le,"class","button-gallery simple-logo svelte-1c79dte"),v(I.src,Qe=qt)||n(I,"src",Qe),n(I,"alt","logo"),n(I,"class","svelte-1c79dte"),n(ne,"href",Ll),n(ne,"class","button-gallery simple-logo svelte-1c79dte"),v(X.src,Ye=Me)||n(X,"src",Ye),n(X,"alt","logo"),n(X,"class","svelte-1c79dte"),n(se,"href",$l),n(se,"class","button-gallery simple-logo svelte-1c79dte"),v(R.src,Je=Rt)||n(R,"src",Je),n(R,"alt","logo"),n(R,"class","svelte-1c79dte"),n(oe,"href",Pl),n(oe,"class","button-gallery simple-logo svelte-1c79dte"),v(q.src,et=It)||n(q,"src",et),n(q,"alt","logo"),n(q,"class","svelte-1c79dte"),n(ie,"href",kl),n(ie,"class","button-gallery simple-logo svelte-1c79dte"),n(g,"class","second-container-buts svelte-1c79dte"),n(f,"class","first-container-subs svelte-1c79dte"),v(j.src,lt=Ot)||n(j,"src",lt),n(j,"class","logo pepe svelte-1c79dte"),n(j,"alt","Svelte Logo"),n(S,"class","first-container svelte-1c79dte"),u(S,"margin-bottom","5%"),n(N,"class","button-container svelte-1c79dte"),u(N,"margin-bottom","8%"),N.hidden=!0,n(pe,"class","rationale1 svelte-1c79dte"),u(V,"text-align","center"),u(V,"padding-top","4%"),u(V,"padding-bottom","70px"),n(fe,"class","rationale2 svelte-1c79dte"),n(ge,"class","rationale1 svelte-1c79dte"),u(ae,"padding-top","10%"),n(ae,"id","features"),v(W.src,ut=bl)||n(W,"src",ut),n(W,"alt","money"),n(W,"class","svelte-1c79dte"),n(me,"class","bodytext svelte-1c79dte"),n(A,"class","panel-button svelte-1c79dte"),u(A,"align-self","flex-start"),u(A,"margin-top","100px"),n(y,"class","panel-sub svelte-1c79dte"),v(D.src,vt=hl)||n(D,"src",vt),n(D,"alt","money"),n(D,"class","svelte-1c79dte"),n(ve,"class","bodytext svelte-1c79dte"),n(M,"class","panel-button svelte-1c79dte"),u(M,"align-self","flex-start"),u(M,"margin-top","auto"),n(x,"class","panel-sub svelte-1c79dte"),v(z.src,_t=yl)||n(z,"src",_t),n(z,"alt","money"),n(z,"class","svelte-1c79dte"),n(he,"class","bodytext svelte-1c79dte"),n(B,"class","panel-button svelte-1c79dte"),u(B,"align-self","flex-start"),u(B,"margin-top","auto"),n(_,"class","panel-sub svelte-1c79dte"),n(L,"class","panel svelte-1c79dte"),u(ce,"padding-top","10%"),n(ce,"id","tokenomics"),n(be,"class","token-col svelte-1c79dte"),u(G,"padding-top","10%"),n(G,"id","faq"),G.hidden=!0,v(C.src,St=Ae)||n(C,"src",St),n(C,"id","pepelogofoot"),n(C,"alt","Svelte Logo"),n(C,"class","svelte-1c79dte"),n(ye,"class","footer-leftleft"),n(xe,"class","footer-left svelte-1c79dte"),n(_e,"class","footer-right"),n(E,"class","footer svelte-1c79dte"),n(e,"class","background")},m(Se,Qt){Kt(Se,e,Qt),l(e,o),l(e,c),l(e,a),l(a,r),l(a,w),l(a,p),l(p,b),l(p,d),l(p,k),l(p,m),l(p,$),l(p,J),l(p,P),l(p,Ie),l(p,K),l(p,Xe),l(p,ee),l(e,Re),l(e,S),l(S,f),l(f,ue),l(f,qe),l(f,T),l(f,Ne),l(f,te),l(f,Ve),l(f,H),l(H,F),l(H,We),l(H,ke),l(f,De),l(f,g),l(g,le),l(le,O),l(g,Ge),l(g,ne),l(ne,I),l(g,Ue),l(g,se),l(se,X),l(g,Ze),l(g,oe),l(oe,R),l(g,Ke),l(g,ie),l(ie,q),l(S,tt),l(S,j),l(e,nt),l(e,$e),l(e,st),l(e,N),l(e,ot),l(e,pe),l(e,it),l(e,V),l(e,at),l(e,fe),l(e,ct),l(e,ge),l(e,rt),l(e,ae),l(e,dt),l(e,L),l(L,y),l(y,W),l(y,pt),l(y,Pe),l(y,ft),l(y,me),l(y,gt),l(y,A),l(L,mt),l(L,x),l(x,D),l(x,ht),l(x,Le),l(x,bt),l(x,ve),l(x,yt),l(x,M),l(L,xt),l(L,_),l(_,z),l(_,wt),l(_,Ee),l(_,kt),l(_,he),l(_,$t),l(_,B),l(e,Pt),l(e,ce),l(e,Lt),l(e,be),l(e,Et),l(e,G),l(e,Ct),l(e,E),l(E,ye),l(ye,C),l(E,Tt),l(E,xe),l(E,Ft),l(E,_e),Ce||(At=[h(b,"click",Nt),h(k,"click",Vt),h($,"click",Al),h(P,"click",t[0]),h(K,"click",Bl),h(ee,"click",jt),h(F,"click",Fl),h(A,"click",Nt),h(M,"click",Vt),h(B,"click",jt),h(C,"click",Ml)],Ce=!0)},p:Y,i:Y,o:Y,d(Se){Se&&zt(e),Ce=!1,de(At)}}}let wl="https://www.instagram.com/",kl="https://discord.gg/jAyRGnTvTs",$l="https://t.me/+RkfpOD6bxlQ0M2Vk",Pl="https://www.reddit.com/r/PepeForexSOL/",Ll="https://twitter.com/PepeForexSOL",El="https://linktr.ee/PepeForex",Cl="https://solscan.io/token/6M3AYPUTjEBTRBXJrVd3PHu2v4ERARLRx8Smo9SWkvkJ",Sl="https://solpre.sale/presale/9T9RCQ9gZj9SW72Xrwfp1qdoSFiCVanxVtkaXX5tJCae",Tl="https://forms.gle/Gs2ZvuYnpHjgtd3Y9";function Fl(){window.open(Cl,"_blank")}function jt(){window.open(El,"_blank")}function Nt(){window.open(Tl,"_blank")}function Vt(){window.open(Sl,"_blank")}function Al(){const t=document.getElementById("buy");t&&t.scrollIntoView({behavior:"smooth"})}function Ml(){const t=document.getElementById("top");t&&t.scrollIntoView({behavior:"smooth"})}function Bl(){const t=document.getElementById("tokenomics");t&&t.scrollIntoView({behavior:"smooth"})}function Hl(t){function e(){window.open(xl,"_blank")}return[e]}class Ol extends pl{constructor(e){super(),ul(this,e,Hl,_l,Zt,{})}}new Ol({target:document.getElementById("app")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".question").forEach(function(e){e.addEventListener("click",function(){const o=this.nextElementSibling;o.classList.contains("open")?o.classList.remove("open"):o.classList.add("open")})})});
