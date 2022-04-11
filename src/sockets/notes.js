module.exports.listNotes = function (socket) {
        const data = [
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
        socket.emit('client:notes_list', data)
}

module.exports.addNote = function (io, { list, value}) {
    const id = list[list.length - 1].id + 1
    value.id = id
    list.push(value)
   io.emit('client:notes_list', list)
}