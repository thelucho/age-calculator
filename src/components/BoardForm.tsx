import { useState } from 'react'
import './BoardForm.css'

type Values = {
  day: number,
  month: number,
  year: number
}

type Validations = {
  day: string,
  month: string,
  year: string
}

type Age = {
  day: number,
  month: number,
  year: number
}

interface BoardFormProps {
  getAge: (age: Age) => void
}

const initialValues = {
  day: 0,
  month: 0,
  year: 0
}

const initialValidations = {
  day: '',
  month: '',
  year: ''
}


const BoardForm = ({ getAge }: BoardFormProps ) => {
  const [values, setValues] = useState<Values>(initialValues)
  const [validations, setValidations] = useState<Validations>(initialValidations)

  const validateAll = () => { 
    const { day, month, year } = values
    const validations = { day: '', month: '', year: '' }
    let isValid = true

    if (day === 0) {
      validations.day = 'Day is required'
      isValid = false
    }

    if (month === 0) {
      validations.month = 'Month is required'
      isValid = false
    }

    if (year === 0) {
      validations.year = 'Year is required'
      isValid = false
    }

    if (!isValid) {
      setValidations(validations)
    }

    return isValid
  }


  const validateOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const value = values[name as keyof typeof values]
    let message = ''

    if (!value) {
      message = `${name} is required`
    }

    setValidations({ ...validations, [name]: message })
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const isValid = validateAll()

    if (!isValid) { 
      return false
    }

    getAge(values)

    //alert(JSON.stringify(values))
  }


  const { day, month, year } = values
  const { day: dayVal, month: monthVal, year: yearVal } = validations

  return (
    <div className="board-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="day">Day</label>
            <input
              type="number"
              min="1"
              max="31"
              id="day"
              name="day"
              value={day}
              onChange={handleChange}
              onBlur={validateOne}
              placeholder="DD"
            />
            <div>{ dayVal }</div>
          </div>

          <div className="form-group">
            <label htmlFor="month">Month</label>
            <input
              type="number"
              min="1"
              max="12"
              id="month"
              name="month"
              value={month}
              onChange={handleChange}
              onBlur={validateOne}
              placeholder="MM"
            />
            <div>{ monthVal }</div>
          </div>

          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              min="1900"
              max="2022"
              id="year"
              name="year"
              value={year}
              onChange={handleChange}
              onBlur={validateOne}
              placeholder="YYYY"
            />
            <div>{ yearVal }</div>
          </div>
        </div>

        <div className="form-row">
          <input type="submit" value="Go!" />
        </div>
      </form>
    </div>
  )
}

export default BoardForm