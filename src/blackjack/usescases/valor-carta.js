/**
 * Funcion que obtiene el valor numerico de la carta para los calculos
 * @param {String} carta 
 * @returns {Number} Retorna el valor de la carta como dato numerico para los calculos
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}