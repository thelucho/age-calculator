type Props = {
  days: number,
  months: number,
  years: number
}

const BoardResults = (props: Props) => { 
  return (
    <div className="board-results">
      <p>{ props.years } years</p>
      <p>{ props.months } months</p>
      <p>{ props.days } days</p>
    </div>
  )
}

export default BoardResults