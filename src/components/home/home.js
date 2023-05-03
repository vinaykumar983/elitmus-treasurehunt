import Level1 from '../level1/level1';
import './home.css'
import {Routes,Route} from 'react-router-dom'
import { Link ,NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
function Home() {
  let currUser=useSelector(state=>state.currUser);
  //console.log(currUser)
  const arr=["Please login to play","Complete level-1 to enter level-2","Complete level-1 and level-2 to enter level-3"]
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const [index,setIndex]=useState(-1);
    const handleShow = (index) => {
        setShowModal(true)
        setIndex(index);
    };
    let navigate=useNavigate();
    const handleClick1=()=>{
      if(currUser.length==0){
        handleShow(0);
      }
      else{
        navigate("/level1")
      }
    }
    const handleClick2=()=>{
      if(currUser.length==0){
        handleShow(0);
      }
      // else if(currUser[0].levels < 2){
      //   handleShow(1);
      // }
      else{
        navigate("/level2")
      }
    }
    const handleClick3=()=>{
      if(currUser.length==0){
        handleShow(0);
      }
      // else if(currUser[0].levels < 3){
      //   handleShow(2);
      // }
      else{
        navigate("/level3")
      }
    }
    return (
      <div className="container d p-2">
        <Modal show={showModal} onHide={handleClose} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <Modal.Body>
                                <p className='lead'>{arr[index]}</p>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                OK
                            </Button>
                            </Modal.Footer>
                        </Modal>
        <div className="parent1 mt-5">
      <div className="card e">
      <img src="https://images.squarespace-cdn.com/content/v1/5c19bd065b409b721a8236a5/1584334047674-KRGRDL7N9OGWE78LN5P6/Tile_Level+1.png?format=1000w" className="card-img-top w-100"  onClick={handleClick1} /> 
        </div>
        <div className="card e">
         <img src="https://images.squarespace-cdn.com/content/v1/5c19bd065b409b721a8236a5/1584334055551-UXBK75UQ00KGE5WYM9MH/Tile_Level+2.png?format=500w" className="card-img-top w-100" onClick={handleClick2}/>
       
        </div>
        <div className="card e">
         <img src="https://images.squarespace-cdn.com/content/v1/5c19bd065b409b721a8236a5/1584334061279-SVVV9WY182KAXIDRDWNV/Tile_Level+3.png?format=500w" className="card-img-top w-100"  onClick={handleClick3}/>
        
        </div>
        </div>
        {/* <div className="parent2">
        <div className="card e">
  <img src="https://images.squarespace-cdn.com/content/v1/5c19bd065b409b721a8236a5/1584334069209-48MI6AHCGYTM4HFZQBCS/Tile_Level+4.png?format=500w" className="card-img-top w-100"  alt="..."/>
        
        </div>
        <div className="card e">
  <img src="https://logo.clearbit.com/lfivecapital.com?size=100" className="card-img-top w-100"  alt="..."/>
        
        </div>
        </div> */}
      </div>
      
    );
  }
  
  export default Home;