import Board from './components/Board'
import BoardForm from './components/BoardForm'
import BoardResults from './components/BoardResults'
import './App.css'

function App() {

  return (
    <>
      <Board>
        <BoardForm />
        <BoardResults days={26} months={3} years={38} />
      </Board>
    </>
  )
}

export default App
