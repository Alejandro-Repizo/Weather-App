import Swal from "../../_snowpack/pkg/sweetalert2.js"

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

/**
 * Se encarga de mostrar los mensajes de error
 * dependiendo el tipo de error
 * 
 * @param {string} error 
 */
const badDataMessageInformation = (error) => {

    const errorMessage = { 
        'empty': 'You need to enter city',
        'errorCity': 'You need type a valid city',
        'existCity': 'This city already exists'
    }

    const message = errorMessage[error]

    Toast.fire({
        icon: 'error',
        title: message
    })   
}

export default badDataMessageInformation