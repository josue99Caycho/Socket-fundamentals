module.exports.listNotes = function (socket, data = []) {
    //Listado hardcoded
        const dataHardcode = [
            {
                id: 1,
                note: 'hola Mundo1',
                description: 'Primera nota registrada'
            },
            {
                id: 2,
                note: 'hola Mundo2',
                description: 'Segunda nota registrada'
            },
            {
                id: 3,
                note: 'hola Mundo3',
                description: 'Tercera nota registrada'
            }
        ]
        //Si el arreglo de datos está vacío tomar los datos hardcodeds
        data = data.length > 0 ? data: dataHardcode
        //Emitir listados hardcoded
        socket.emit('client:notes_list', data)
}

module.exports.addNote = function (io, { list, value}) {
    //Asignar ID a registro
    const id = list[list.length - 1].id + 1
    value.id = id
    //Agregar elemento dentro de la lista
    list.push(value)
    //Emitir lista
   io.emit('client:notes_list', list)
}

module.exports.listById = function(socket, { input, list = [] }){
    //Filtrar nota por nombre o descripcion
    const noteFiltered = list.filter( element => element.note.includes(input) || element.description.includes(input) )
    //Emitir nota(s) filtrada(s)
    socket.emit('client:notes_list', noteFiltered)
}