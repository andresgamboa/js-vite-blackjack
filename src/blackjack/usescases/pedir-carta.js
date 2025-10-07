
/**
 * Esta funcion pide una nueva carta del deck
 * @param {Array<String>} deck Arreglo de strings con las cartas del maso
 * @returns {String} Retorna el ultimo elemento del Deck en forma de String
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}

