import { ReactNode } from 'react'
import './Board.css'

type Props = {
  children?: ReactNode
}

const Board= (props: Props) => { 
  return (
    <div className="board">
      { props.children }
    </div>
  )
}

export default Board