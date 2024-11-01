import { useEffect, useState } from 'react'

type JokeData = {
  id: string
  joke: string
  status: number
}

export const useGetJoke = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [jokeData, setJokeData] = useState<JokeData | undefined>(undefined)

  const [error, setError] = useState<Error | null>(null)

  const getJoke = async () => {
    try {
      setIsLoading(true)

      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      const data = await res.json()

      setJokeData(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error('Oops there was an error'))
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getJoke()
  }, [])

  return { data: jokeData, isLoading, error, getJoke }
}
