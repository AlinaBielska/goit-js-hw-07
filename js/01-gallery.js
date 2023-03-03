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


// gallery.addEventListener("click") => {
//     if (event.target.nodeName !== "IMG") {
//         return;
//     } {const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_1280.jpg" width="800" height="600">`)

// instance.show()}
// }



console.log(galleryItems);
