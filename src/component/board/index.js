

import Column from '../column'
import './board.css'

const Board = (props) =>{
    
    const issues = [props.issues]

    return(
        <section className='board'>
            <div className='board-div'>
                <Column title='to do' issues={issues} />
                <Column title='doing' />
                <Column title='done' />

            </div>
        </section>
    )

}

export default Board