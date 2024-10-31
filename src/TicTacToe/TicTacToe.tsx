import { useState } from 'react'

import { Board } from './Board'

import './TicTacToe.css'

export type SquareValue = 'X' | 'O' | null

export const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))

  const [turn, setTurn] = useState<'X' | 'O'>('X')

  const [winner, setWinner] = useState<SquareValue>(null)

  const calculateWinner = (squares: SquareValue[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }

    return null
  }

  const handleSquareClick = (index: number) => {
    const newSquares = [...squares]
    newSquares[index] = turn
    setSquares(newSquares)

    const winner = calculateWinner(newSquares)

    setWinner(winner)
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', marginTop: 0, marginBottom: '1rem' }}>
        TicTacToe
      </h2>
      <h3 style={{ textAlign: 'center', marginTop: 0, marginBottom: '1rem' }}>
        {winner ? `The winner is ${winner}!` : `${turn}'s turn`}
      </h3>

      <Board squares={squares} onSquareClick={handleSquareClick} />
    </section>
  )
}
