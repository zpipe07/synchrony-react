import { FormEvent } from 'react'

import { Credentials, useLogIn } from './useLogIn'

const formFields = ['email', 'password']

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
    <section style={{ maxWidth: '20rem', margin: '0 auto', padding: '1rem' }}>
      <h2>Log in</h2>

      <form onSubmit={handleSubmit}>
        <fieldset
          disabled={isLoading}
          style={{
            // border: '1px solid',
            // borderRadius: '0.25rem',
            // padding: '0.5rem 1rem',
            padding: '1rem',
          }}
        >
          {/* <legend>Log in</legend> */}

          {formFields.map((value) => {
            return (
              <div key={value}>
                <label
                  htmlFor={value}
                  style={{ display: 'block', marginBottom: '0.25rem' }}
                >
                  {value}
                </label>
                <input
                  id={value}
                  name={value}
                  type={value}
                  style={{ marginBottom: '1rem' }}
                />
              </div>
            )
          })}

          <button type="submit" style={{ padding: '0.5rem' }}>
            Log in
          </button>
        </fieldset>
      </form>
    </section>
  )
}
