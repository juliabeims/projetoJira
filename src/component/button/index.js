import './button.css'

const Button = (props) => {
    return(
        <button className='addButton' onClick={props.callBackFunc}> {props.text} </button>
    )

}

export default Button