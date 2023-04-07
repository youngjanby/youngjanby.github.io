import { signature } from "../main.js"
import { ELEMENTS_FOR_REQUEST } from "./variableValue.js"
import { FirstTab } from "./renderTabs.js"

export function LikeAddList() {
    let activeCity = document.querySelector('.city_now')
    signature.push({name : activeCity.textContent, id : activeCity.id, status : 'false'})
    localStorage.setItem('cityStorage', JSON.stringify(signature))
    render()
}

export function render() {
    deleteAllRenderedCities()
    signature.forEach((cityName) => {
        let htmlCodeFromCreatedCityList = `<li class="signatureCityList"><span class="cityId" id ="${cityName.id}">${cityName.name}</span><img id="${cityName.id}" class="deleteCityIcon" src="icons/close-icon.svg"></li>`
        ELEMENTS_FOR_REQUEST.CONTAINER_LIST.insertAdjacentHTML("beforeend", htmlCodeFromCreatedCityList);
    })
}


export function deleteAllRenderedCities() {
    const cityFromArray = document.querySelector(".signatureCityList")
    if(!cityFromArray) return;
    cityFromArray.remove()
    deleteAllRenderedCities()
}

document.querySelector('.button_like').addEventListener('click', LikeAddList)

export function deleteCity(e) {
    if (e.target.classList.contains("deleteCityIcon")) {
        const id = e.target.parentNode.querySelector('.cityId').textContent
        let thisIndex = signature.findIndex(city => city.name === id)
        signature.splice(thisIndex, 1)
        localStorage.setItem('cityStorage', JSON.stringify(signature))
        render();
    }
}

export function saveActiveCity() {
    signature.find(stat => {
        if(stat.status === 'true') {
            FirstTab(stat.name)
        }
    })
}