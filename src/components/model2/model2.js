import { useEffect, useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './model2.css'
function Eliminated(){
const [showModal, setShowModal] = useState(true);
let navigate=useNavigate()
const handleClose = () => {
    setShowModal(false)
    navigate("/level1");
};
return(

<Modal show={showModal} onHide={handleClose}>
    
        <h1 className='text-center display-6 lead mod text-light' style={{fontFamily:'cursive'}}>Oops you are eliminated!</h1>
            
                <Modal.Body>
                    <p className='lead' style={{fontFamily:'cursive'}}>You have to begin from level-1</p>
                </Modal.Body>
            
     <h3 className='text-center p-2 model' style={{fontFamily:'cursive'}}>Better Luck next time</h3>
    <Modal.Footer>
           
    <Button  onClick={handleClose} className='btn ' style={{background:'darkslategrey'}}>
        OK
    </Button>
    </Modal.Footer>
</Modal>
)
}

export default Eliminated;