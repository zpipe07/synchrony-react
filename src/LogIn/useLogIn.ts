import { useState } from 'react'

export type Credentials = {
  email: string
  password: string
}

type LogInData = {
  token: string
}

export const useLogIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [logInData, setLogInData] = useState<LogInData | undefined>(undefined)

  const [error, setError] = useState<Error | null>(null)

  const logIn = async ({ email, password }: Credentials) => {
    console.log({ email, password })
    try {
      setIsLoading(true)

      const res = await fetch('https://reqres.in/api/login?delay=2', {
        method: 'POST',
        body: JSON.stringify({
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()

      setLogInData(data)
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

  return { logIn, logInData, isLoading, error }
}
