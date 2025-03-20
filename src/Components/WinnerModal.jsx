import { Square } from "./Square.jsx";

export function WinnerModal ({winner, resetGame}){
    //validamos si el juego ya acabo
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganador'

    return(
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Jugar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}