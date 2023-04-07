import { signature } from "../main.js";
import { FirstTab } from "./renderTabs.js"
import { render } from "./likeFunctions.js";

export function ButtonRequest() {
    return FirstTab(document.getElementById('search').value)
}

export function requestCityinSignature(e) {
    if(e.target.closest('.cityId')) {
        changeStatus();

        const parentElement = e.target.closest('.cityId');
        const parentElementId = parentElement.id

        const citiesStatus = signature.filter(idnum => idnum.id === parentElementId)
        citiesStatus.find(stat => {
            if(stat.status !== 'true') {
                stat.status = "true"
                localStorage.setItem('cityStorage', JSON.stringify(signature))
                FirstTab(e.target.textContent)
            }
        })
        render();
    }
}

export function changeStatus() {
    const statusCities = document.querySelectorAll('.cityId')
    if(statusCities) {
        signature.forEach(city => {
            city.status = 'false'
        })
    } 
}