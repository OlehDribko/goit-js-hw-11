import { fetchAllImages } from './pixabay-api';

const refs = {
  btnRequest: document.querySelector('.btn-request'),
  input: document.querySelector('.user-request'),
  galery: document.querySelector('.card-list'),
};

export const createMarkup = results => {
  return results.map(item => {
    const { tags, webformatURL, likes, comments, views, downloads } = item;
    const card = `<li class="card">
    <img class="card-img" src="${webformatURL}" alt="${tags}">
    <div class="card-body">
      <ul class="card-value-list">
        <li class="card-value">
          <h3>Likes</h3>
          <p class="likes-value">${likes}</p>
        </li>
        <li class="card-value">
          <h3>Views</h3>
          <p class="views-value">${views}</p>
        </li>
        <li class="card-value">
          <h3>Comments</h3>
          <p class="comments-value">${comments}</p>
        </li>
        <li class="card-value">
          <h3>Downloads</h3>
          <p class="downloads-value">${downloads}</p>
        </li>
      </ul>
    </div>
  </li>`;

    return card;
  }).join('');
};

refs.btnRequest.addEventListener('click', event => {
    const userChoice = refs.input.value.trim();
    
  fetchAllImages(userChoice)
    .then(images => {
      const markup = createMarkup(images);
refs.galery.innerHTML = markup;
    })
    .catch();



});
