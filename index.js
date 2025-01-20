import{S as u}from"./assets/vendor-CWwQENHe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api",p="48279024-d4145a4c2f3735ee57c61073f",f=l=>fetch(`${d}/?key=${p}&q=${l}&image_type=photo`).then(t=>{if(!t.ok)throw new Error("404");return t.json()}).then(t=>{const{hits:s}=t;return s}).catch(t=>{console.log(t)}),o={btnRequest:document.querySelector(".btn-request"),input:document.querySelector(".user-request"),gallery:document.querySelector(".card-list"),loader:document.querySelector(".loader")},m=l=>l.map(t=>{const{tags:s,webformatURL:c,likes:e,comments:r,views:a,downloads:n,largeImageURL:i}=t;return`<li class="card">
     <a href="${i}" class="gallery-item">
          <img class="card-img" src="${c}" alt="${s}" />
        </a>
    <div class="card-body">
      <ul class="card-value-list">
        <li class="card-value">
          <h3>Likes</h3>
          <p class="likes-value">${e}</p>
        </li>
        <li class="card-value">
          <h3>Views</h3>
          <p class="views-value">${a}</p>
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
  </li>`}).join(""),h=new u(".gallery-item",{captionsData:"alt",captionDelay:250}),y=()=>{o.loader.style.display="block"},g=()=>{o.loader.style.display="none",setTimeout(()=>{o.loader.style.display="none"},3e3)};o.btnRequest.addEventListener("click",l=>{const t=o.input.value.trim();l.preventDefault(),t&&(o.gallery.innerHTML="",y(),f(t).then(s=>{const c=m(s);o.gallery.innerHTML=c,h.refresh()}).catch(s=>console.error("Помилка:",s)).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
