/**
 * 
 * @param {Array} response respuesta del backend a solicitud de listado de notas
 */
export const  appendList  = (response = []) => {
    let dataCardLi = ''
    response.map(item => dataCardLi = dataCardLi + '<li>' + item.note + '</li>')
    return dataCardLi
}

/**
 * 
 * @param {document} document documento del DOM
 * @param {Array} inputs inputs a limpiar
 */
export const cleanInputs = (document, inputs = []) => {
    inputs.map( element => document.querySelector(element).value = '' )
}