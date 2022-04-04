//Socket
const socket = io()

//Listado de notas
const onEventNotesList = function (response) {
    let dataCard = ''

    for (let index = 0; index < response.length; index++) {
        dataCard = dataCard + '<li>' + response[index].note + '</li>'
    }
    //Listar datos hardcoded
    const card = document.querySelector('.content')
    card.innerHTML = '<ul>' + dataCard + '</ul>'
}

//Manipulación de DOM

//Obtener datos de formulario
document.addEventListener('submit', (e)=> {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
})


//SOCKETS
socket.on('client:notes_list', (response) => {
    onEventNotesList(response)
})

