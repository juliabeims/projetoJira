
import Card from '../card'
import './column.css'

const Column = (props) => {
    
    const issues = [props.issues]
    

    return( 
        <div className='column'> 
            <Card text={props.title} type='title'/>
            
              {issues.map(e => <Card text={e.issue} />)}
            

        </div>
    )
    


}

export default Column