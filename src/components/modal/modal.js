import React from "react";
import './Style.css'
import { Modal } from 'react-responsive-modal';

export const CustomModal = (props) => {
    const showHideClassName = props.show ? 'modal display-block' : 'modal display-none'
    const [showModal, setShowModal] = React.useState(props.show)
    const [userName, setUserName] = React.useState()
    const handleInput = (e) => {
        e.preventDefault()
        props.setUserTopName(userName)
    }
    const handleClose = () => {
        setShowModal(false)
        props.setShow(false)
    }
    console.log("Show",showModal)
    return(
        <Modal open={props.show} onClose={handleClose}>
          {/*   <div className="modal">
                <section className="modal-main"> 
                    <h5>New Name:</h5>
                    <input onChange={e => setUserName(e.target.value)}/>
                </section>
                <section className="buttons">
                    <button onClick={()=>props.setShow(false)}> Close </button>
                    <button onClick={handleInput}> Save Changes </button>
                </section>
            </div>
             */}
             <h4>Modal</h4>
             
        </Modal>
    )
}