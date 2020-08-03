'use strict';
import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const galleryItem = galleryItems.reduce((allItems, item) => {
  allItems += `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}"/></a> </li>`;
  return allItems;
}, "");
galleryList.insertAdjacentHTML("afterbegin", `${galleryItem}`);

const fullImageLightbox = document.querySelector(".lightbox");
const fullImage = document.querySelector(".lightbox__image");

// FULLIMAGE OPEN FUNC
galleryList.addEventListener('click', event => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return
  };
  const imageLink = event.target.dataset.source;
  const imageText = event.target.getAttribute('alt');
  fullImage.setAttribute("src", imageLink);
  fullImage.setAttribute('alt', imageText);
  fullImageLightbox.classList.add('is-open');
});

// FULLIMAGE CLOSE FUNC
function closeFullImageLightbox() {
  fullImageLightbox.classList.remove('is-open');
  fullImage.setAttribute('src', '');
  fullImage.setAttribute('alt', '');
};

// OVERLAY
const fullImageLightboxOverlayClose = document.querySelector('.lightbox__content');
fullImageLightboxOverlayClose.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    return
  }
  closeFullImageLightbox()
});

// BUTTON
const fullImageLightboxButtonClose = document.querySelector('[data-action="close-lightbox"]');
fullImageLightboxButtonClose.addEventListener('click', () => {
  closeFullImageLightbox();
});
