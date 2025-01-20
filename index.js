import"./assets/vendor-Bgfrje-I.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a="https://pixabay.com/api",u="48279024-d4145a4c2f3735ee57c61073f",d=o=>fetch(`${a}/?key=${u}&q=${o}&image_type=photo`).then(t=>{if(!t.ok)throw new Error("404");return t.json()}).then(t=>{const{hits:s}=t;return s}).catch(t=>{console.log(t)}),i={btnRequest:document.querySelector(".btn-request"),input:document.querySelector(".user-request"),galery:document.querySelector(".card-list")},p=o=>o.map(t=>{const{tags:s,webformatURL:c,likes:e,comments:r,views:l,downloads:n}=t;return`<li class="card">
    <img class="card-img" src="${c}" alt="${s}">
    <div class="card-body">
      <ul class="card-value-list">
        <li class="card-value">
          <h3>Likes</h3>
          <p class="likes-value">${e}</p>
        </li>
        <li class="card-value">
          <h3>Views</h3>
          <p class="views-value">${l}</p>
        </li>
        <li class="card-value">
          <h3>Comments</h3>
          <p class="comments-value">${r}</p>
        </li>
        <li class="card-value">
          <h3>Downloads</h3>
          <p class="downloads-value">${n}</p>
        </li>
      </ul>
    </div>
  </li>`}).join("");i.btnRequest.addEventListener("click",o=>{const t=i.input.value.trim();d(t).then(s=>{const c=p(s);i.galery.innerHTML=c}).catch()});
//# sourceMappingURL=index.js.map
