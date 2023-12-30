import moment from "moment"
import { Age } from "../types/globals"


export const CalculateAge = (date: Age) => {
  const { day, month, year } = date

  const fullDate = `${day}/${month}/${year}`

  const currentDate = moment()
  const birthDate = moment(fullDate, "DD/MM/YYYY")

  const years = currentDate.diff(birthDate, 'years')
  birthDate.add(years, 'years')
  const months = currentDate.diff(birthDate, 'months')
  birthDate.add(months, 'months')
  const days = currentDate.diff(birthDate, 'days')

  const result: Age = {
    day: days,
    month: months,
    year: years
  }

  return result
}