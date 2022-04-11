//Socket
const socket = io()

//importación de utilitario
import { appendList } from './util.js'

/**
 * SOCKETS
 */

//Listado de notas
let data = []

//Listado de notas
socket.on('client:notes_list', response => {
    data = response
    const li = appendList(response)
    const content = document.querySelector('.content')
    content.innerHTML = `<ul> ${li} </ul>`
})

/**
 * Manipulación de DOM
 */

//Obtener datos de formulario cuando se ejecute el evento 'submit'
document.addEventListener('submit', (e)=> {
    e.preventDefault()
    const note = document.querySelector('#title').value
    const description = document.querySelector('#description').value

    const labels = {
        list : data,
        value: { note, description }
    }
    socket.emit('server:notes_add', labels)
})



