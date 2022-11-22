import './card.css'

const Card = (props) => {
    const classType = props.type === 'title' ? 'card text-bold' : 'card'
    return(
        <div className={classType} > {props.text} </div>
    )
}

export default Card