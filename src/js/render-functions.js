import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchAllImages } from './pixabay-api';

const refs = {
  btnRequest: document.querySelector('.btn-request'),
  input: document.querySelector('.user-request'),
  gallery: document.querySelector('.card-list'),
  loader: document.querySelector('.loader'),
};

export const createMarkup = results => {
  return results
    .map(item => {
      const {
        tags,
        webformatURL,
        likes,
        comments,
        views,
        downloads,
        largeImageURL,
      } = item;
      const card = `<li class="card">
     <a href="${largeImageURL}" class="gallery-item">
          <img class="card-img" src="${webformatURL}" alt="${tags}" />
        </a>
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
    })
    .join('');
};
//*** SimpleLightbox */
const lightbox = new SimpleLightbox('.gallery-item', {
    captionsData: 'alt',
    captionDelay: 250,
  });

//***   luader ***/

const showLoader = () => {
  refs.loader.style.display = 'block';
};

const hideLoader = () => {
  refs.loader.style.display = 'none';
  setTimeout(() => {
    refs.loader.style.display = 'none';
  }, 3000);
};

// ***** event ****//

refs.btnRequest.addEventListener('click', event => {
  const userChoice = refs.input.value.trim();
  event.preventDefault();

  if (!userChoice) {
    return;
  }
  refs.gallery.innerHTML = '';

  showLoader();

  fetchAllImages(userChoice)

    .then(images => {
      const markup = createMarkup(images);
      refs.gallery.innerHTML = markup;

      

      lightbox.refresh();
    })
    .catch(err => console.error('Помилка:', err)).finally(() =>{
        hideLoader();
    });
});
