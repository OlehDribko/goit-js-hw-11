

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
