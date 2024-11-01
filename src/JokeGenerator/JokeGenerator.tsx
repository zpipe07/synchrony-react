import { useGetJoke } from './useGetJoke'

export const JokeGenerator: React.FC = () => {
  const { data, isLoading, error, getJoke } = useGetJoke()

  const handleClick = () => {
    getJoke()
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Oh no! There was an error.</p>
  }

  if (!data) {
    return null
  }

  return (
    <div
      style={{
        padding: '1rem 2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        maxWidth: '20rem',
        margin: '0 auto',
        borderRadius: '0.5rem',
      }}
    >
      <p style={{ marginTop: 0, marginBottom: '1rem' }}>{data.joke}</p>

      <button
        type="button"
        onClick={handleClick}
        style={{ display: 'block', width: '100%', padding: '1rem' }}
      >
        Fetch a new joke
      </button>
    </div>
  )
}
