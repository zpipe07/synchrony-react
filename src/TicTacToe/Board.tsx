import { Square } from './Square'
import { SquareValue } from './TicTacToe'

type Props = {
  squares: SquareValue[]
  onSquareClick(index: number): void
}

export const Board: React.FC<Props> = ({ squares, onSquareClick }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 5rem)',
        gridTemplateRows: 'repeat(3, 5rem)',
        justifyContent: 'center',
      }}
    >
      {squares.map((value, index) => {
        return (
          <Square value={value} index={index} handleClick={onSquareClick} />
        )
      })}
    </div>
  )
}
