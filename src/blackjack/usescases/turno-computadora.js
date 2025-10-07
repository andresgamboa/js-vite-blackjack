import {pedirCarta, valorCarta, obtenerCartaHtml } from './index';
import {puntosHTML,divCartasComputadora,

} from './referencias-HTML'


/**
 * Funcion que activa el turno de la computadora y valida los puntos necesarios para ganar
 * @param {Array<String>} deck recibe el nuevo deck de cartas 
 * @param {Number} puntosMinimos Puntos necesarios para ganar 
 */

export const turnoComputadora = ( deck, puntosMinimos ) => {

    if(!deck) throw new Error('El Deck es necesario para avanzar');
    if(!puntosMinimos) throw new Error('Los puntos minimos son necesarios');

    let puntosComputadora = 0;
    

    do {
        const carta = pedirCarta(deck);


        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        divCartasComputadora.append( obtenerCartaHtml(carta) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador 1 Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

