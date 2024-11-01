import { LogIn } from './LogIn'
import { TicTacToe } from './TicTacToe'
import { UsersList } from './UsersList'
import { JokeGenerator } from './JokeGenerator'

import './App.css'

function App() {
  return (
    <>
      <h1>Hello, world!</h1>

      <JokeGenerator />

      <LogIn />

      <TicTacToe />

      <UsersList />
    </>
  )
}

export default App
