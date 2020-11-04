/*
    Author: Bryan Nilsen
    Purpose: This module holds the code for rendering a list
    of sneaker cards to the DOM
*/

import { getSneakers, useSneakers } from './SneakerProvider.js'
import { SneakerHTML} from './Sneaker.js'
import './SneakerModal.js' //  Importing here instead of main.js

const eventHub = document.querySelector(".main__container")
const contentTarget = document.getElementById("sneaker__container")

// GET ALL SNEAKERS AND RENDER TO DOM
export const SneakerList = () => {
    getSneakers().then(() => {
        const sneakersArray = useSneakers()
        render(sneakersArray)
    })

}

// ITERATE SNEAKER ARRAY, MAKE HTML REPRESENTATION, AND RENDER TO DOM
const render = (sneakerArray) => {
    const sneakersHTML = sneakerArray.map(sneaker => {
        // can this be shortened??
        return SneakerHTML(sneaker)
    }).join("")
    contentTarget.innerHTML = sneakersHTML
}

// EVENT LISTENER TO REACT TO "sneakerSorted" EVENT, SORT SNEAKER ARRAY, AND RENDER TO DOM
eventHub.addEventListener("sneakersSorted", event => {
    if (event.detail.sortMethod === "0") {
        const sortedSneakers = useSneakers()
        render(sortedSneakers)
    }
    if (event.detail.sortMethod === "price--high-low") {
        const sortedSneakers = useSneakers().sort((a,b) => b.retailPrice - a.retailPrice)
        render(sortedSneakers)
    }
    if (event.detail.sortMethod === "price--low-high") {
        const sortedSneakers = useSneakers().sort((a,b) => a.retailPrice - b.retailPrice)
        render(sortedSneakers)
    }
})


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


// SORTING ALPHABETICALLY EXAMPLE
// if (event.detail.sortMethod === "name--a-z") {
//     const sortedSneakers = useSneakers().map(sneaker => {
//         sneaker.shoe.replace("adidas", "")
//         return sneaker
//     }).sort((a,b) => a.shoe.localeCompare(b.shoe))
//     render(sortedSneakers)
// }
// if (event.detail.sortMethod === "name--z-a") {
//     const sortedSneakers = useSneakers().map(sneaker => {
//         sneaker.shoe.replace("adidas", "")
//         return sneaker
//     }).sort((a,b) => b.shoe.localeCompare(a.shoe))
//     render(sortedSneakers)
// }