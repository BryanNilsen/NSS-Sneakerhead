/*
    Author: Bryan Nilsen
    Purpose: This module holds the code for the sneaker sorting
    select component and related event listener
*/

const eventHub = document.querySelector(".main__container")
const contentTarget = document.getElementById("list--modifiers__container")

// CREATE SORT SELECT MENU HTML AND RENDER TO DOM
export const SneakerSort = () => {
    const sortSelectHTML = `
    <select id="sort--sneaker">
        <option value="0">Sort Results</option>
        <option value="price--high-low">Price - High to Low</option>
        <option value="price--low-high">Price - Low to High</option>
        <option value="name--a-z">Name - A to Z</option>
        <option value="name--z-a">Name - Z to A</option>
        </select>
        `
        contentTarget.innerHTML += sortSelectHTML
    }

    // ADD EVENT LISTENER FOR CHANGE EVENT AND SET THE SELECTED SORT METHOD IN DETAIL
    eventHub.addEventListener("change", event => {
        if (event.target.id === "sort--sneaker") {
            const customSortEvent = new CustomEvent("sneakersSorted", {
                detail: {
                    sortMethod: event.target.value
                }
            })
            eventHub.dispatchEvent(customSortEvent)
        }
})