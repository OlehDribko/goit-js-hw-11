
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createMarkup } from './render-functions'


const refs = {
  btnRequest: document.querySelector('.searchForm'),
  input: document.querySelector('.user-request'),
  gallery: document.querySelector('.card-list'),
  loader: document.querySelector('.loader'),
};
//   ---------------//



const BASE_URL = 'https://pixabay.com/api'
const APIKAY = '48279024-d4145a4c2f3735ee57c61073f';



export const fetchAllImages = (userChoice) => {
  return fetch(`${BASE_URL}/?key=${APIKAY}&q=${userChoice}&image_type=photo`)
    .then(response => {
      
      if (!response.ok) {
         throw new Error('404');
      }
      return response.json();
    })
    .then(data => {
        const {hits} = data;
    return hits;
    })
    .catch(err => {
      console.log(err);
    });
};

// ---------------//


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

refs.btnRequest.addEventListener('submit', event => {
  const userChoice = refs.input.value.trim();
  
  event.preventDefault();

  if (!userChoice) {
    iziToast.show({
      title: 'Не знайдено',
      message: 'Введіть значення',
      backgroundColor: 'red',
      position: 'topRight',
      
    })
    return;
  }
  refs.gallery.innerHTML = '';

  showLoader();

  fetchAllImages(userChoice)

    .then(images => {
      const markup = createMarkup(images);
      if(markup === ''){
        iziToast.show({
          title: 'Не знайдено',
          message: 'Задані значення відсутні',
          backgroundColor: 'red',
          position: 'topRight',
          
        })
      };
      refs.gallery.innerHTML = markup;

      

      lightbox.refresh();
    })
    .catch(err => console.error('Помилка:', err)).finally(() =>{
        hideLoader();
    });
});
