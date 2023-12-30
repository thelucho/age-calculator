import { Age } from "../types/globals"

export const CalculateAge = (age: Age) => {
  const { day, month, year } = age
  const currentDate = new Date();

  const birthDate = new Date(year, month, day)

  const sencondsDifference = currentDate.getTime() - birthDate.getTime();

  const yearValue = Math.floor(sencondsDifference / 31536000000); // 1 año en milisegundos
  const monthValue = Math.floor((sencondsDifference % 31536000000) / 2628000000); // 1 mes en milisegundos
  const dayValue = Math.floor(((sencondsDifference % 31536000000) % 2628000000) / 86400000); // 1 día en miliseg

  const info: Age = {
    day: dayValue,
    month: monthValue,
    year: yearValue
  }
  
  return info
}