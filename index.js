import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://pixabay.com/api",m="48279024-d4145a4c2f3735ee57c61073f",f=a=>fetch(`${p}/?key=${m}&q=${a}&image_type=photo`).then(t=>{if(!t.ok)throw new Error("404");return t.json()}).then(t=>{const{hits:o}=t;return o}).catch(t=>{console.log(t)}),l={btnRequest:document.querySelector(".searchForm"),input:document.querySelector(".user-request"),gallery:document.querySelector(".card-list"),loader:document.querySelector(".loader")},h=a=>a.map(t=>{const{tags:o,webformatURL:s,likes:e,comments:r,views:i,downloads:n,largeImageURL:u}=t;return`<li class="card">
     <a href="${u}" class="gallery-item">
          <img class="card-img" src="${s}" alt="${o}" />
        </a>
    <div class="card-body">
      <ul class="card-value-list">
        <li class="card-value">
          <h3>Likes</h3>
          <p class="likes-value">${e}</p>
        </li>
        <li class="card-value">
          <h3>Views</h3>
          <p class="views-value">${i}</p>
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
  </li>`}).join(""),y=new d(".gallery-item",{captionsData:"alt",captionDelay:250}),g=()=>{l.loader.style.display="block"},v=()=>{l.loader.style.display="none",setTimeout(()=>{l.loader.style.display="none"},3e3)};l.btnRequest.addEventListener("submit",a=>{const t=l.input.value.trim();if(a.preventDefault(),!t){c.show({title:"Не знайдено",message:"Введіть значення",backgroundColor:"red",position:"topRight"});return}l.gallery.innerHTML="",g(),f(t).then(o=>{const s=h(o);s===""&&c.show({title:"Не знайдено",message:"Задані значення відсутні",backgroundColor:"red",position:"topRight"}),l.gallery.innerHTML=s,y.refresh()}).catch(o=>console.error("Помилка:",o)).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
