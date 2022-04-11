/**
 * 
 * @param {Array} response respuesta del backend a solicitud de listado de notas
 */
export const  appendList  = (response = []) => {
    let dataCardLi = ''
    response.map(item => dataCardLi = dataCardLi + '<li>' + item.note + '</li>')
    return dataCardLi
}