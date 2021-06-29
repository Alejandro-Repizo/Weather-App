import template from "./components/Template.js";
import { getStorageData } from "./utils/storageData.js";
import { deleteStorageData } from "./utils/storageData.js";
import badDataMessageInformation from "./components/badData.js";


/**
 * Seleccionamos los elemntos del HTML
 */
const INPUT = document.querySelector('input')
const BUTTON =  document.querySelector('button')
const APP = document.querySelector('div#app')


/**
 * Funcion que se ejecuta
 * en el evento click
 * del boton
 */
const buttonEventFunction = async () => {
    
    if (INPUT.value === '') {

        badDataMessageInformation('empty')

    } else {

        const RESPONSE = await template(INPUT)

        if (typeof RESPONSE === 'object')
            APP.append(RESPONSE)
    }

    INPUT.value = ''
}


/**
 * Funcion para eliminar
 * las tarjetas
 * 
 * @param {F} ev 
 */
const deleteEventeFunction = (ev) => {

    if (ev.target.classList.contains('absolute')) {

        getStorageData(ev.target.parentNode.id)

    }else if (ev.target.classList.contains('fa-times')) {

        deleteStorageData(ev.path[3].id)
        ev.path[3].remove()

    }
    
}

/**
 * Agregamos el evento click a los elementos
 */
BUTTON.addEventListener('click', buttonEventFunction)
APP.addEventListener('click', deleteEventeFunction)
