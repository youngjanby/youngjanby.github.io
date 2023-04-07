import { ELEMENTS_API, ERRORS, ELEMENTS_FIRST_TAB, ELEMENTS_FOR_SUPPORTING_FUNCTIONS, ELEMENTS_SECOND_TAB } from "./variableValue.js";
import { stampToTime } from "./supportFunctions.js";

export async function FirstTab(cityName) {
    let data = await fetch(`${ELEMENTS_API.SERVER_URL}?q=${cityName}&appid=${ELEMENTS_API.API_KEY}`)
    let json = await data.json();

    if(data.ok) {
            let degrees = Math.round(json.main.temp - ELEMENTS_FOR_SUPPORTING_FUNCTIONS.CONVERSION_KELVIN_TO_DEGREES)
            let imgSrc = json.weather[0].icon
            let ThisCity = json.name
            let id = json.id
            let sunrise = json.sys.sunrise
            let sunset = json.sys.sunset

            ELEMENTS_FIRST_TAB.DEGREES.textContent = `${degrees} °`
            ELEMENTS_FIRST_TAB.ACTIVE_CITY.textContent = `${ThisCity}`
            ELEMENTS_FIRST_TAB.ACTIVE_CITY.id = id
            ELEMENTS_FIRST_TAB.IMG_CLOUD.src = `icons/${imgSrc}.png`
            return SecondTab(json)
        } else if(data.status === ERRORS.ERROR_CITY_UNDEFINED) {
            alert('This city is undefined');
        } else if(data.status === ERRORS.ERROR_NO_VALID_KEY_API) {
            alert('This API key no valid')
        } else {
            alert(`Error HTTP: ${data.status}`)
        }
}

export async function SecondTab(json) {
    let ThisCity = json.name
    let degrees = Math.round(json.main.temp - ELEMENTS_FOR_SUPPORTING_FUNCTIONS.CONVERSION_KELVIN_TO_DEGREES)
    let feelsLike = Math.round(json.main.feels_like - ELEMENTS_FOR_SUPPORTING_FUNCTIONS.CONVERSION_KELVIN_TO_DEGREES)
    let weather = json.weather[0].main
    let sunrise = json.sys.sunrise
    let sunset = json.sys.sunset

    ELEMENTS_SECOND_TAB.ACTIVE_CITY.textContent = ThisCity
    ELEMENTS_SECOND_TAB.TEMP.textContent = `Temperature: ${degrees}°`
    ELEMENTS_SECOND_TAB.FEELS_LIKE.textContent = `Feels like: ${feelsLike}°`
    ELEMENTS_SECOND_TAB.WEATHER_TEXT.textContent = `Weather: ${weather}`
    ELEMENTS_SECOND_TAB.SUNRISE.textContent = `Sunrise: ${stampToTime(sunrise)}`
    ELEMENTS_SECOND_TAB.SUNSET.textContent = `Sunset: ${stampToTime(sunset)}`
}