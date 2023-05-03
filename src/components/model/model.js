import { useEffect, useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import './model.css'
function Rules(props){
const [showModal, setShowModal] = useState(true);

const handleClose = () => {
    setShowModal(false)
    props.clickHandler();
};
return(

<Modal show={showModal} onHide={handleClose}> 
    
        <h1 className='text-center display-6 lead mod text-light' style={{fontFamily:'cursive'}}>Welcome to Level-{props.rules.level}</h1>
        <h2 className='text-center display-6 lead mod text-light' style={{fontFamily:'cursive'}}>{props.rules.game}</h2>
            <h3 className='mx-auto' style={{fontFamily:'cursive'}}>Rules</h3>
            {props.rules.instructions.map((rule)=>
                <Modal.Body>
                    <p className='lead' style={{fontFamily:'cursive'}}>{rule}</p>
                </Modal.Body>
            )}
     <h3 className='text-center p-2 model' style={{fontFamily:'cursive'}}>{props.rules.footer}</h3>
    <Modal.Footer>
           
    <Button  onClick={handleClose} className='btn ' style={{background:'darkslategrey'}}>
        Let's Begin
    </Button>
    </Modal.Footer>
</Modal>
)
}

export default Rules;