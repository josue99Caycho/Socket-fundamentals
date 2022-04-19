const { listNotes, addNote, listById } = require('./notes')

module.exports = {
    startConnection : function (io){
        io.on('connection', function(socket) {
            
            //Listado de notas de forma automatica
            listNotes(socket)

            //Listar notas en respuesta a un evento
            socket.on('server:notes_list', (data) => {
                listNotes(socket, data)
            })

            //Evento para registrar notas
            socket.on('server:notes_add', (data) => {
                addNote(io, data )
            })

            //Evento para buscar una nota
            socket.on('server:notes_filter', (data) => {
                listById(socket, data)
            })
         
            //Mostrar en consola usuarios desconectados
            socket.on('disconnect', function () {
               console.log('A user disconnected');
            });
         });
    }
}