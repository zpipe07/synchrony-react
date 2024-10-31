import { useEffect, useState } from 'react'

type User = {
  avatar: string
  email: string
  first_name: string
  id: number
  last_name: string
}

type UsersData = {
  data: User[]
  page: number
  per_page: number
  support: {
    url: string
    text: string
  }
  total: number
  total_pages: number
}

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [usersData, setUsersData] = useState<UsersData | undefined>(undefined)

  const [error, setError] = useState<Error | null>(null)

  const getUsers = async () => {
    try {
      setIsLoading(true)

      const res = await fetch('https://reqres.in/api/users')
      const data = await res.json()

      setUsersData(data)
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
    getUsers()
  }, [])

  return { usersData, isLoading, error }
}
