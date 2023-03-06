import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

//tworzenie galerii obrazków
const allItems = galleryItems.map((galleryItem) => {
    const item = `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}" />
        </a>
        </div>`;
    return item; 
})
    .join('');


//dodano galerie obrazków
gallery.innerHTML = allItems;


gallery.addEventListener("click", event => {
    event.preventDefault();
    const elem = event.target;
    if (elem.nodeName !== 'IMG') {
        return;
    } 
    elem.src = elem.dataset.source;


const instance = basicLightbox.create(elem.outerHTML);
instance.show(keyDown());

function keyDown() {
    document.addEventListener('keydown', onModalCloseWithKeyDown);
}

function onModalCloseWithKeyDown(event) {
    if (event.code === 'Escape') {
      modal.close();
      document.removeEventListener('keydown', onModalCloseWithKeyDown);
    }
  }

});

