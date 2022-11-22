import Button from "../button"
import "./header.css"
import Modal from 'react-modal'
import { useState } from "react"



const Header = (props) => {

    const [modalIsOpen,setModalIsOpen] = useState (false)
    const isOpenFunc = () => {setModalIsOpen(true)}
    
    const toSave = (e) => {
        
        props.addNewIssue(
            {issue,
            type}
        )
        setIssue('')
        setType('') 
        
    }

    const [issue, setIssue] = useState('')
    const [type, setType] = useState('1')
   

    return(

        <header className="header">
            <nav>
                <Button callBackFunc = {isOpenFunc} text='Nova tarefa'/>
            </nav>
            <Modal isOpen={modalIsOpen}> 
                <form onSubmit={toSave}>
                    <h1>Adicionar tarefa</h1>
                    <input value={issue} onChange={(evento) => setIssue(evento.target.value) } ></input>
                    <Button text='Concluir' />
                </form>
            </Modal>
            
        </header>
    )

} 


export default Header