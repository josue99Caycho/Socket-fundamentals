const { listNotes, addNote, listById } = require('./notes')

module.exports = {
    startConnection : async function (io){
        io.on('connection', function(socket) {
            
            //Listado de notas
            listNotes(socket)

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