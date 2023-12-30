export interface Age {
  day: number,
  month: number,
  year: number
}

export interface BoardFormProps {
  getAge: (age: Age) => void
}

export interface Values {
  day: number,
  month: number,
  year: number
}

export interface Validations {
  day: string,
  month: string,
  year: string
}