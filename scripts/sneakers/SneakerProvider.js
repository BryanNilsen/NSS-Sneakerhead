/*
    Author: Bryan Nilsen
    Purpose: This module holds the code to get and use
    items from thesneakerdatabase API

    ** changing the query string parameters will alter results
*/

// STORE SNEAKER RESULTS FROM API FETCH CALL
let sneakers = [];

// GET SNEAKERS FROM API
export const getSneakers = () => {
    return fetch("https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=adidas")
    .then(response => response.json())
    .then(parsedData =>{
        sneakers = parsedData.results
        console.log(sneakers)
    })
}

// USE SNEAKERS FROM API
export const useSneakers = () => {
    return sneakers.slice()
}