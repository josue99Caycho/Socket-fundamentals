//Socket
const socket = io()

//Utilitario
import { appendList, cleanInputs } from './util.js'

/**
 ****SOCKETS****
 */

//Listado de notas
let data = []
//Listado temporal
let temp = []

//Listado de notas
socket.on('client:notes_list', (response = []) => {
    data = response
    temp = response
    const li = appendList(response)
    const content = document.querySelector('.content')
    content.innerHTML = `<ul> ${li} </ul>`
})

/**
 * *********FORMULARIO*********
 */

//-------AGREGAR NOTA--------
//Obtener datos de formulario cuando se ejecute el evento 'submit'
document.getElementById('form-action').addEventListener('submit', (e) => {
    e.preventDefault()
    //Obtener datos del formulario
    const note = document.querySelector('#title').value
    const description = document.querySelector('#description').value

    //Preparar datos obtenidos para enviarlos al backend
    const labels = {
        list: data,
        value: { note, description }
    }
    //Emitir datos
    socket.emit('server:notes_add', labels)
    //Resetear variable temporal
    data = []
    //Limpiar cajas de texto
    cleanInputs(document,['#title','#description'])
})

//------BUSCAR NOTA (por título o descripcion)------
document.getElementById('search-button').addEventListener('click', (e)=> {
    e.preventDefault()
    const inputSearch = document.querySelector('#search-item').value

    if(inputSearch.trim() === ''){
       alert('Ingresa un titlo o descripcion para buscar')
       return
    }
    const data = {
        input: inputSearch,
        list: temp
    }
    socket.emit('server:notes_filter', data)
}, false)

//-------LIMPIAR CAJA DE TEXTO Y LISTAR NOTAS--------
document.getElementById('search-clean').addEventListener('click', (e) => {
    e.preventDefault()
    socket.emit('server:notes_list', temp)
}, false)

