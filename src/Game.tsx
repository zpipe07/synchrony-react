import { FormEvent, useState } from 'react'

const answer = ['S', 'Y', 'N', 'C', 'H', 'R', 'O', 'N', 'Y']

export const Game: React.FC = () => {
  const [letters, setLetters] = useState<(string | null)[]>(
    answer.map(() => null)
  )

  const [isWinner, setIsWinner] = useState(false)

  const [tries, setTries] = useState(5)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = document.getElementById('input') as HTMLInputElement
    const value = input.value
    const newLetters = [...letters]

    let correctAnswer = false

    answer.forEach((answerLetter, i) => {
      if (answerLetter === value) {
        correctAnswer = true
        newLetters[i] = value
      }
    })

    setLetters(newLetters)

    if (!correctAnswer) {
      setTries((prev) => (prev -= 1))
    }

    const isWinner = newLetters.join('') === answer.join('')

    setIsWinner(isWinner)
  }

  return (
    <div>
      <p>Tries remaining: {tries}</p>

      {isWinner && <p>YOU WIN!</p>}

      {tries === 0 && <p>YOU LOSE!</p>}

      <div style={{ display: 'flex' }}>
        {letters.map((letter) => {
          return (
            <div
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                marginRight: 2,
                padding: '1rem',
              }}
            >
              {letter}
            </div>
          )
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <input maxLength={1} type="text" name="input" id="input" />
        <button>Try</button>
      </form>
    </div>
  )
}
