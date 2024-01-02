import "./BoardResults.css"

type BoardResultsProps = {
  days: number,
  months: number,
  years: number,
  status?: boolean
}

const BoardResults = (props: BoardResultsProps) => {
  return (
    <div className={`board-results ${props.status ? 'calculated' : ''}`}>
      <p><span>{ props.years }</span> years</p>
      <p><span>{ props.months }</span> months</p>
      <p><span>{ props.days }</span> days</p>
    </div>
  )
}

export default BoardResults