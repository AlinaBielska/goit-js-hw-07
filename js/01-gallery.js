import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const allItems = galleryItems.map((galleryItem) => {
    const item = `<div class="gallery_element">
        <a class="gallery_link" href="${galleryItem.original}">
        <img class="gallery-img" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}" />
        </a>
        </div>`;
    return item; 
})
    .join('');

gallery.innerHTML = allItems;




console.log(galleryItems);
