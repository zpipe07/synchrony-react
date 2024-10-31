import { SquareValue } from './TicTacToe'

type Props = {
  value: SquareValue
  index: number
  handleClick(index: number): void
}

export const Square: React.FC<Props> = ({ value, index, handleClick }) => {
  return (
    <button
      type="button"
      onClick={() => handleClick(index)}
      style={{ height: '5rem', width: '5rem' }}
      disabled={!!value}
    >
      {value}
    </button>
  )
}
