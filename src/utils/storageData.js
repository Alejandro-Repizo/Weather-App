import messageInformation from "./additionalData"

const dataArray = []

/**
 * Obtiene los datos de las
 * ciudades almacenadas en
 * el array
 * 
 * @param {string} id 
 */
export const getStorageData = (id) => {

    dataArray.forEach( (city) => {

        if (city.id == id) 
            messageInformation(city)
        
    })

}


/**
 * Almacena las ciudades
 * en un array
 * 
 * @param {object} city 
 */
export const setStorageData = (city) => {

    if (dataArray.length > 0) {
      
        let nextElement = 0
       
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i].id == city.id) 
                nextElement++ 
        }

        if (nextElement === 0)
            dataArray.push(city) 
    }

    if (dataArray.length === 0)
        dataArray.push(city)


}

/**
 * Elimina la ciudad
 * almacenada en el 
 * array
 * 
 * @param {string} id 
 */
export const deleteStorageData = (id) => {

    dataArray.forEach( (city) => {

        if (city.id == id) {
            let key = dataArray.indexOf(city) 
            dataArray.splice(key, 1)
        }
    
    } )

}

/**
 * Comprueba si la ciudad ya 
 * esta en el array o no
 * 
 * @param {object} data 
 * @returns existCity || data
 */
export const checkStorageData = (data) => {

    let messageCheck = 0

    dataArray.forEach( (city) => {

        if (city.id == data.id) 
            messageCheck++

    } )

    if (messageCheck != 0) {

        return 'existCity'

    }else {

        setStorageData(data)
        return data
    }

}



