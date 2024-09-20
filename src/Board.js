import { useState } from "react";

export default function Board() {
    const [squareVal, setSquareVal] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');

    function handleSquareClick(id) {
        const valueArray = squareVal.slice();
        if (!valueArray[id] && !winner) {
            valueArray[id] = turn;
            setSquareVal(valueArray);
            turn === 'X' ? setTurn('O') : setTurn('X');
        }
    }

    function calculateWinner() {
        let rules = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        let i = 0;
        for (i = 0; i < rules.length; i++) {
            const [a, b, c] = rules[i];
            if (squareVal[a] && squareVal[a] === squareVal[b] && squareVal[a] === squareVal[c])
                return `Winner is ${squareVal[a]}`;

        }
        return null;
    }

    let winner = calculateWinner();

    return (
        <>
            <div className="title"> Tic Tac Toe </div>
            <div>
                <Square id={0} value={squareVal[0]} onSquareClick={() => handleSquareClick(0)}></Square>
                <Square id={1} value={squareVal[1]} onSquareClick={() => handleSquareClick(1)} />
                <Square id={2} value={squareVal[2]} onSquareClick={() => handleSquareClick(2)} />
            </div>
            <div>
                <Square id={3} value={squareVal[3]} onSquareClick={() => handleSquareClick(3)} />
                <Square id={4} value={squareVal[4]} onSquareClick={() => handleSquareClick(4)} />
                <Square id={5} value={squareVal[5]} onSquareClick={() => handleSquareClick(5)} />
            </div>
            <div>
                <Square id={6} value={squareVal[6]} onSquareClick={() => handleSquareClick(6)} />
                <Square id={7} value={squareVal[7]} onSquareClick={() => handleSquareClick(7)} />
                <Square id={8} value={squareVal[8]} onSquareClick={() => handleSquareClick(8)} />
            </div>
            <div className="winner">{winner ? `${winner}` : (!squareVal.includes(null) ? 'Oops! Try again' : '')}</div>
            <div><button className="reset" onClick={() => setSquareVal(Array(9).fill(null))}>Play again</button></div>
        </>
    );
}

function Square({ value, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}
