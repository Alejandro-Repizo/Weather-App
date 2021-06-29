import fetchData from "../fetchData"
import badDataMessageInformation from './badData.js'

/**
 * Realiza la creacion 
 * de las tarjetas
 * 
 * @param {string} city 
 */
const template = async (city) => {

    const data = await fetchData(city)
    
    if (typeof data === 'object') {

        //Informacion principal
        const img = document.createElement('img')
        img.className = 'w-28 m-4'
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        const country = document.createElement('span')
        country.className = 'bg-yellow-300 group-hover:bg-yellow-600 text-xs font-extrabold text-white rounded absolute -top-1 px-1 ml-1'
        country.textContent = data.sys.country

        const title = document.createElement('h1')
        title.className = 'uppercase font-bold relative tracking-wide text-gray-900 group-hover:text-white'
        title.textContent = data.name
        title.insertAdjacentElement('beforeend', country)

        const titleContainer = document.createElement('div')
        titleContainer.className = 'flex flex-col items-center'
        titleContainer.append(title, img)

        //Porcentaje de agua y velocidad de viento 
        const iconPercentWater = document.createElement('i')
        iconPercentWater.className = 'fas fa-tint mr-1 text-yellow-300 group-hover:text-yellow-600'

        const percentWater = document.createElement('p')
        percentWater.textContent = `${data.main.humidity}%`
        percentWater.insertAdjacentElement('afterbegin', iconPercentWater)

        const iconWind = document.createElement('i')
        iconWind.className = 'fas fa-wind mr-1 text-yellow-300 group-hover:text-yellow-600'

        const wind = document.createElement('p')
        wind.textContent = `${data.wind.speed}km/h`
        wind.insertAdjacentElement('afterbegin', iconWind)

        const waterAndWindContent = document.createElement('div')
        waterAndWindContent.className = 'flex items-center justify-between mt-8 text-gray-600  group-hover:text-white tracking-widest'
        waterAndWindContent.append(percentWater, wind)

        //Grados y tipo de clima
        const weatherTitle = document.createElement('p')
        weatherTitle.className = 'capitalize text-gray-600 group-hover:text-white tracking-wider'
        weatherTitle.textContent = data.weather[0].description

        const degree = document.createElement('p')
        degree.className = 'text-4xl font-bold text-gray-900 mt-2 group-hover:text-white'
        degree.textContent = `${Math.trunc(data.main.temp)}ºC`

        const weatherAndDegreeContent = document.createElement('div')
        weatherAndDegreeContent.className = 'flex flex-col items-center justify-center'
        weatherAndDegreeContent.append(weatherTitle, degree)

        const infoSecondary = document.createElement('div')
        infoSecondary.className = 'w-full'
        infoSecondary.append(weatherAndDegreeContent, waterAndWindContent)

        //Boton para eliminar tarjeta
        const deleteButton = document.createElement('i')
        deleteButton.className = 'fas fa-times'

        const deleteButtonContent = document.createElement('div')
        deleteButtonContent.className = 'text-gray-300 absolute top-3 left-4 group-hover:text-yellow-600'
        deleteButtonContent.append(deleteButton)

        //Contenedor covertor
        const shadow = document.createElement('div')
        shadow.className = 'absolute w-full h-full'
        shadow.append(deleteButtonContent)

        //Contenedor principal
        const content = document.createElement('div')
        content.className = 'relative w-64 flex flex-col items-center justify-center p-6 cursor-pointer rounded-md border shadow-md group hover:bg-yellow-400'
        content.id = `${data.id}`
        content.append(titleContainer, infoSecondary, shadow)

        return content

    } else {
        
        badDataMessageInformation(data)

    }
}

export default template