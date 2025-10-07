/**
 * Esta funcion obtiene la refencia de la ruta de cada carta en especial
 * @param {<String>} carta llega la carta a buscar ejemplo 2H, JD, ETC 
 * @returns {HTMLImageElement} Retorna la ruta de la carta especifica y añade la referencia al DOM
 */


export const obtenerCartaHtml = (carta)=>{

    if(!carta) throw new Error('La carta es un argumento obligatorio');
    

    const imgCarta = document.createElement('img');
    
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}



