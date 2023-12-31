import { useState } from 'react'
import BoardForm from './BoardForm'
import BoardResults from './BoardResults'
import { Age } from '../types/globals'
import { CalculateAge } from '../utils/calculatorHelper'
import './Board.css'

const initialAge = {
  day: 0,
  month: 0,
  year: 0
}

const Board = () => {
  const [data, setData] = useState<Age>(initialAge)
  const [result, setResult] = useState<Age>(initialAge)
  const [status, setStatus] = useState<boolean>(false)

  const handleGetAge = (age: Age) => {
    setData((prevState) => {
      return { ...prevState, age }
    })
    
    const info = CalculateAge(age)
    setResult(info)
    setStatus(true)

    console.log(data)
  }

  return (
    <div className="board">
      <BoardForm getAge={handleGetAge} />
      <BoardResults days={result.day} months={result.month} years={result.year} status={status} />
    </div>
  )
}

export default Board