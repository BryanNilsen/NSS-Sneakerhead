/*
    Author: Bryan Nilsen
    Purpose: This module holds the code for converting a
    sneaker object into an HTML Representation
*/

const eventHub = document.querySelector(".main__container")

export const SneakerHTML = (sneakerObj) => {
    return `
    <div class="sneaker--card">
        <img src="${sneakerObj.media.imageUrl}" class="sneaker--thumb"/>
        <div class="sneaker--shoe">${sneakerObj.shoe.replace("adidas", "")}</div>
        <div>${sneakerObj.name}</div>
        <div class="sneaker--price">$${sneakerObj.retailPrice ? sneakerObj.retailPrice : " --" }</div>
    </div>
    `
}


// EVENT LISTENER FOR THUMBNAIL IMAGE CLICK EVENT AND DISPATCH "thumbnailClicked" CUSTOM EVENT
// >> MODAL COMPONENT WILL LISTEN
eventHub.addEventListener("click", (event) => {
    if(event.target.classList.contains("sneaker--thumb")) {
        const thumbnailClickedEvent = new CustomEvent("thumbnailClicked", {
            detail: {
                imgUrl: event.target.src
            }
        })
        eventHub.dispatchEvent(thumbnailClickedEvent)
    }
})