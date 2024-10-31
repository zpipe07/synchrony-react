import { FormEvent } from 'react'

import './LogIn.css'

export const LogIn: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const formValues = Object.fromEntries(formData)

    console.log({ formData, formValues })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
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
