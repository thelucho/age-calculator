import { useState } from 'react'
import BoardForm from './BoardForm'
import BoardResults from './BoardResults'
import { Age } from '../types/globals'
import './Board.css'

const initialAge = {
  day: 0,
  month: 0,
  year: 0
}

const Board = () => {
  const [data, setData] = useState<Age>(initialAge)
  const [info, setInfo] = useState<Age>(initialAge)

  const handleGetAge = (age: Age) => {
    // setData(age)
    setData((prevState) => {
      return { ...prevState, age }
    })
    CalculateAge(age)
  }

  const CalculateAge = (age: Age) => {
    const { day, month, year } = age
    const currentDate = new Date();

    const birthDate = new Date(year, month, day)

    const sencondsDifference = currentDate.getTime() - birthDate.getTime();

    const yearValue = Math.floor(sencondsDifference / 31536000000); // 1 año en milisegundos
    const monthValue = Math.floor((sencondsDifference % 31536000000) / 2628000000); // 1 mes en milisegundos
    const dayValue = Math.floor(((sencondsDifference % 31536000000) % 2628000000) / 86400000); // 1 día en miliseg

    console.log(data);
    console.log("Años: ", yearValue, " - Meses: ", monthValue, " - Dias: ", dayValue)

    const info: Age = {
      day: dayValue,
      month: monthValue,
      year: yearValue
    }
    setInfo(info)
  }

  return (
    <div className="board">
      <BoardForm getAge={handleGetAge} />
      <BoardResults days={info.day} months={info.month} years={info.year} />
    </div>
  )
}

export default Board