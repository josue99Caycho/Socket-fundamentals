const { listNotes } = require('./notes')

module.exports = {
    startConnection : async function (io){
        io.on('connection', function(socket) {
            
            //Listado de notas
            listNotes(socket)
         
            //Mostrar en consola usuarios desconectados
            socket.on('disconnect', function () {
               console.log('A user disconnected');
            });
         });
    }
}