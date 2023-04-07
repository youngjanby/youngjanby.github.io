import { ELEMENTS_FOR_REQUEST } from "./modules/variableValue.js";
import { ButtonRequest } from "./modules/Requests.js";
import { requestCityinSignature } from "./modules/Requests.js";
import { LikeAddList } from "./modules/likeFunctions.js";
import { deleteCity } from "./modules/likeFunctions.js";
import { render } from "./modules/likeFunctions.js";
import { saveActiveCity } from "./modules/likeFunctions.js";

export let signature = JSON.parse(localStorage.getItem('cityStorage')) || []

ELEMENTS_FOR_REQUEST.BUTTON_SEARCH.addEventListener('click', ButtonRequest)
ELEMENTS_FOR_REQUEST.BUTTON_LIKE.addEventListener('click', LikeAddList)
ELEMENTS_FOR_REQUEST.CONTAINER_LIST.addEventListener('click', requestCityinSignature)
document.addEventListener("click", deleteCity);

render()
saveActiveCity()