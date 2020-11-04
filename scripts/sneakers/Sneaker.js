/*
    Author: Bryan Nilsen
    Purpose: This module holds the code for converting a
    sneaker object into an HTML Representation
*/

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