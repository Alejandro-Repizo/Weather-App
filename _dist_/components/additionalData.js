import Swal from "../../_snowpack/pkg/sweetalert2.js"

/**
 * Crea la tarjeta con
 * la informacion adicional
 * 
 * @param {object} data 
 */
const messageInformation = (data) => {
    Swal.fire({
        imageUrl: '../img/favicon.png',
        title: '<p class="text-2xl font-bold text-yellow-300 uppercase">additional data<p>',
        imageWidth: 29,
        imageHeight: 41,
        showConfirmButton: false,
        allowOutsideClick: true,
        keydownListenerCapture: true,
        html: `
            <div class="grid grid-cols-2 gap-2 tracking-wide mb-8">
                <div class="col-span-2 mx-4 -mt-3 mb-4">
                    <p class="uppercase text-base font-bold text-gray-900">${data.name}</p>
                </div>
                <div>
                    <i class="fas fa-thermometer-full text-yellow-300"></i>
                    <p>Max: ${Math.trunc(data.main.temp_max)}ºC</p>
                </div>
                <div>
                    <i class="fas fa-thermometer-empty text-yellow-300"></i>
                    <p>Min: ${Math.trunc(data.main.temp_max)}ºC</p>
                </div>  
                <div>
                    <i class="far fa-sun text-yellow-300"></i>
                    <p>Feels Like: ${Math.trunc(data.main.feels_like)}ºC</p>
                </div>
                <div>
                    <i class="fab fa-cloudscale text-yellow-300"></i>
                    <p>Pressure: ${data.main.pressure}hPa</p>
                </div>
            </div>
        `
    })   
}

export default messageInformation