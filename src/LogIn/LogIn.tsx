import { FormEvent } from 'react'

import { Credentials, useLogIn } from './useLogIn'

import './LogIn.css'

export const LogIn: React.FC = () => {
  const { logIn, isLoading, logInData } = useLogIn()
  console.log({ isLoading, logInData })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const formValues = Object.fromEntries(formData) as Credentials

    logIn(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={isLoading}>
        <legend>Log in</legend>

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Log in</button>
      </fieldset>
    </form>
  )
}
