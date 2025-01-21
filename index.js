import{S as p,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const i=document.querySelector(".loader"),m=l=>l.map(t=>{const{tags:s,webformatURL:o,likes:e,comments:r,views:a,downloads:u,largeImageURL:d}=t;return`<li class="card">
     <a href="${d}" class="gallery-item">
          <img class="card-img" src="${o}" alt="${s}" />
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
          <p class="downloads-value">${u}</p>
        </li>
      </ul>
    </div>
  </li>`}).join(""),f=new p(".gallery-item",{captionsData:"alt",captionDelay:250}),h=()=>{i.style.display="block"},y=()=>{i.style.display="none",setTimeout(()=>{i.style.display="none"},3e3)},g="https://pixabay.com/api",v="48279024-d4145a4c2f3735ee57c61073f",L=l=>fetch(`${g}/?key=${v}&q=${l}&image_type=photo`).then(t=>{if(!t.ok)throw new Error("404");return t.json()}).then(t=>{const{hits:s}=t;return s}).catch(t=>{console.log(t)}),c={btnRequest:document.querySelector(".searchForm"),input:document.querySelector(".user-request"),gallery:document.querySelector(".card-list")};c.btnRequest.addEventListener("submit",l=>{const t=c.input.value.trim();if(l.preventDefault(),!t){n.show({title:"Не знайдено",message:"Введіть значення",backgroundColor:"red",position:"topRight"});return}c.gallery.innerHTML="",h(),L(t).then(s=>{const o=m(s);o===""&&n.show({title:"Не знайдено",message:"Задані значення відсутні",backgroundColor:"red",position:"topRight"}),c.gallery.innerHTML=o,f.refresh()}).catch(s=>console.error("Помилка:",s)).finally(()=>{y()})});
//# sourceMappingURL=index.js.map
