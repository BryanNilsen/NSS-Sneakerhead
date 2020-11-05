/*
    Author: Bryan Nilsen
    Purpose: This module holds the code for the sneaker modal
    component and related event listeners
*/

import {useSneakers} from './SneakerProvider.js'

const eventHub = document.querySelector(".main__container")
const modalContainer = document.querySelector("#modal__container")


// LISTEN FOR "sneakerCardClicked" EVENT AND REACT BY OPENING MODAL
eventHub.addEventListener("sneakerCardClicked", event => {
    const sneakerId = event.detail.sneakerId
    const currentSneaker = useSneakers().find(sneaker => sneaker.id === sneakerId)
    openSneakerModal(currentSneaker)
})

// FUNCTION TO OPEN SNEAKER MODAL (TAKES IMAGE URL AS ARGUMENT)
const openSneakerModal = (sneakerObj) => {
    modalContainer.innerHTML += `
    <div id="sneaker__modal" class="modal--parent">
        <div class="modal--content">
            <div class="image--wrapper"><img src="${sneakerObj.media.imageUrl}"/></div>
            <button id="modal--close">close</button>
        </div>
    </div>
    `
}


// LISTEN FOR CLICK EVENT WITH ID OF "modal--close" AND REACT BY CLOSING MODAL
eventHub.addEventListener("click", (event) => {
    if (event.target.id === "modal--close") {
        closeSneakerModal()
    }
})

// FUNCTION TO CLOSE SNEAKER MODAL AND CLEAR CONTAINER
const closeSneakerModal = () => {
    modalContainer.innerHTML = ""
}


// HOW WOULD YOU REFACTOR THIS CODE TO DISPLAY MORE DETAIL INFORMATION IN THE MODAL; e.g., the releaseDate and colorway properties??