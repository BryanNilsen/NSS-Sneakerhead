/*
    Author: Bryan Nilsen
    Purpose: This module holds the code for converting a
    sneaker object into an HTML Representation
*/

import './SneakerModal.js' //  Why import here instead of main.js?? pros/cons??

const eventHub = document.querySelector(".main__container")

export const SneakerHTML = (sneakerObj) => {
    return `
    <div id="sneakerId--${sneakerObj.id}" class="sneaker--card">
        <img src="${sneakerObj.media.thumbUrl}" class="sneaker--thumb"/>
        <div class="sneaker--shoe">${sneakerObj.shoe.replace("adidas", "")}</div>
        <div>${sneakerObj.name}</div>
        <div class="sneaker--price">$${sneakerObj.retailPrice ? sneakerObj.retailPrice : " --" }</div>
    </div>
    `
}


// EVENT LISTENER FOR THUMBNAIL IMAGE CLICK EVENT AND DISPATCH "sneakerCardClicked" CUSTOM EVENT
// >> MODAL COMPONENT WILL LISTEN FOR THIS EVENT
eventHub.addEventListener("click", (event) => {
    if(event.target.parentElement.id.includes("sneakerId")) {
        // get sneakerID from target
        const [prefix, sneakerId] = event.target.parentElement.id.split("--")
        const sneakerCardClickedEvent = new CustomEvent("sneakerCardClicked", {
            detail: {
                sneakerId: sneakerId
            }
        })
        console.log('sneakerCardClickedEvent: ', sneakerCardClickedEvent);
        eventHub.dispatchEvent(sneakerCardClickedEvent)
    }
})