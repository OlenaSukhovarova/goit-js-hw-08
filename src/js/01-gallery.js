import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href='${original}'>
    <img class = "gallery__image" src = '${preview}' alt = '${description}' data-source='${original}'/>
    </a>
    </div>`;
  })
  .join('');
galleryContainer.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
