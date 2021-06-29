import { checkStorageData } from "./storageData.js"

const API_KEY = '21d807407fc08f0dca752a98c2c9b2d1'
const API_BASE = 'https://api.openweathermap.org'
const API_URL = `${API_BASE}/data/2.5/weather?q=:city&units=metric&appid=${API_KEY}`


/**
 * Obtiene los datos desde la API
 * 
 * @param {object} input 
 */
const fetchData = async (input) => {

    const response = await fetch(API_URL.replace(':city', input.value))
    const responseToJson = await response.json()
    const { name, sys, main, weather, id } = responseToJson

    if (responseToJson.cod != '200') {

        return 'errorCity'

    } else {

        return checkStorageData(responseToJson)
    }

}

export default fetchData