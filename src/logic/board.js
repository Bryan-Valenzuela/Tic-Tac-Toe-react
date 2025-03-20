import {WINNER_COMBOS} from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    //comprobamos que en cada combo ganador tenga el mismo contenido X o O
    for (const combo of WINNER_COMBOS) {
        const [a,b,c] = combo
        if (
            boardToCheck[a] && 
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]  
        ){
            return boardToCheck[a]
        }
    }

    //si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    //revisamos si hay empate y que no queden espacios libres
    return newBoard.every((square) => square !== null)
}