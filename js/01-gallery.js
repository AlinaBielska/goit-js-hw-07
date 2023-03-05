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

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()

gallery.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    } 
    event.src = event.dataset.source;
}


console.log(galleryItems);
