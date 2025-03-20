export const saveGameToStorage = ({board , turn}) =>{
    //aqui guardaremos la partida y el turno actual
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}