import './App.css'
import { Game } from './Game'

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        maxWidth: '40rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Game />
    </div>
  )
}

export default App
