import { useState } from 'react'

import './TicTacToe.css'

type BoardRow = (null | 'x' | 'o')[]

type Board = BoardRow[]

const initialBoard: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Board>(initialBoard)

  const [turn, setTurn] = useState<'x' | 'o'>('x')

  const calculateWinner = (board: Board) => {
    const winningRow = board.findIndex((row) => {
      const firstValue = row[0]
      const isWinner = firstValue && row.every((value) => value === firstValue)

      return isWinner
    })

    const winningCol = board.findIndex((_, i) => {
      const col = board.map((row) => {
        return row[i]
      })
      const firstValue = col[0]
      const isWinner = firstValue && col.every((value) => value === firstValue)

      return isWinner
    })

    const winningDiagonalLtr =
      board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]
    const winningDiagonalRtl =
      board[2][0] && board[2][0] === board[1][1] && board[1][1] === board[0][2]

    console.log({
      winningRow,
      winningCol,
      winningDiagonalLtr,
      winningDiagonalRtl,
    })

    return !!winningRow
  }

  const handleClick = (i: number, j: number) => {
    const newBoard = [...board]
    newBoard[i][j] = turn
    const winner = calculateWinner(newBoard)

    setBoard(newBoard)
    setTurn(turn === 'x' ? 'o' : 'x')
  }

  return (
    <section>
      <h2>TicTacToe</h2>
      <h3>Turn: {turn}'s</h3>

      <div
        style={{
          maxWidth: '30rem',
          display: 'grid',
          gridTemplateRows: 'repeat(3, 8rem)',
          gridTemplateColumns: '33.33% 33.33% 33.33%',
          gap: '0.25rem',
          margin: '0 auto',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        {board.map((row, i) => {
          return row.map((value, j) => {
            return (
              <button
                key={`${i}${j}`}
                type="button"
                onClick={() => handleClick(i, j)}
                disabled={!!value}
                style={{
                  height: '100%',
                  margin: 0,
                  backgroundColor: 'white',
                  border: 'none',
                  fontSize: '3rem',
                  cursor: 'pointer',
                }}
              >
                {value}
              </button>
            )
          })
        })}
      </div>
    </section>
  )
}
