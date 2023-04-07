export let ELEMENTS_API = {
        SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
        API_KEY: '077eaf36aa278ac5ef75f70475ac0cb9',
    }

    export let ERRORS = {
        ERROR_CITY_UNDEFINED : 404,
        ERROR_NO_VALID_KEY_API : 401,
    }

    export let ELEMENTS_FIRST_TAB = {
        DEGREES : document.querySelector('.degrees'),
        ACTIVE_CITY : document.querySelector('.city_now'),
        IMG_CLOUD : document.querySelector('.pic_cloud'),
    }

    export let ELEMENTS_SECOND_TAB = {
        ACTIVE_CITY : document.querySelector('.pic_cloud'),
        TEMP : document.getElementById('temp'),
        FEELS_LIKE : document.getElementById('feels_like'),
        WEATHER_TEXT : document.getElementById('weather'),
        SUNRISE : document.getElementById('sunrise'),
        SUNSET : document.getElementById('sunset'),
    }

    export let ELEMENTS_FOR_SUPPORTING_FUNCTIONS = {
        CONVERSION_KELVIN_TO_DEGREES : 277,
    }

    export let ELEMENTS_FOR_REQUEST = {
        CONTAINER_LIST : document.querySelector('.container'),
        BUTTON_SEARCH : document.getElementById('button-search'),
        BUTTON_LIKE : document.querySelector('.button_like')
    }