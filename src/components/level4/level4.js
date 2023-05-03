import memory from './images/memory.gif'
import { useState,useEffect } from 'react';
import Rules from '../model/model';
import Eliminated from '../model2/model2';
import './level4.css';
import { Modal,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Level4(){
    const [showImage, setShowImage] = useState(true);
    const [time,setTime]=useState(80);
    const [dest,setDest]=useState(true);
    const [win,setWin]=useState(-1);
    let rules={
      game:"MEMOEY GAME",
      level:3,
      instructions:["1.This is time based game where you will be given 20 seconds time to observe the things.","2.After completion of 20 seconds the image disappears and you have to write what you have remembered.","3.You will be given 1 minute time to enter the items",
    "4.For every correct submission you will be awarded 1 point and for every wrong submission 1 point will be deducted","5.After the completion of time if your score is greater than 7 you will be proceeded further else you will be eliminated"],
      footer:"All the best"
  };
    useEffect(()=>{
      if(time===1){
        setDest(true);
        
      }
      setTimeout(()=>{
        if(!dest){
          setTime((e)=>e-1)
        }
      },1000)
    },[time,dest])
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => {
        setShowModal(true)
    };
    // const {register,handleSubmit}=useForm();
    const [input,setInput]=useState('');
    const list=["butterfly","pencil","ice-cream","rainbow","house","chair","watch","telephone","kite","lock","scissor","guitter","bulb","aeroplane","apple","computer","globe","plant","hammer","cake"];
    const [array,setArray]=useState([]);
    const myArray=[];
    const boolArray=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
 
  const inputHandler=(e)=>{
    setInput(e.target.value);
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setArray((e)=>[...e,input])
    setInput('');
  }

array.map((data,index)=>{
  if( list.includes(data) && !boolArray[index]){
    myArray.push(data);
    boolArray[index]=true;
  }
})



const scoreArray = Array.from(new Set(myArray));

const totalScore=scoreArray.length-(array.length-myArray.length);
let navigate=useNavigate()
useEffect(()=>{
  if(time==1){
  if(totalScore <= 7){
    setWin(0);
    
  }
  else{
    setWin(1);
    handleShow();
    navigate("/")
  }
}
},[totalScore,time])

useEffect(()=>{
   setTimeout(() => {
    setShowImage(true);
  }, 20000);
},[showImage])


const handle=()=>{
  setShowImage(false);
  setDest(false)
}

    return(
        <div><Rules rules={rules} clickHandler={handle}/>
        <Modal show={showModal} onHide={handleClose} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <Modal.Body>
                                <div style={{fontFamily:"cursive"}}>
                                    <p className='text-light text-center lead'>
                                        Congratulations on clearing all the three levels.
                                        We hope you enjoyed playing our game.
                                        <img src="https://thumbs.dreamstime.com/z/pirate-boy-sword-treasure-chest-isolated-cartoon-kid-eye-patch-front-white-background-you-can-find-other-41516732.jpg" className='w-50'/>
                                    </p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                OK
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <h2 className='text-light text-center' style={{fontFamily:'cursive'}}>MEMORY GAME</h2>
            <div className='text-center board'>
              
              {/* <p>{time}</p> */}
              <div className='score2 w-25'><h3>Timer : {time}</h3></div>
              <div className='score2 w-25'><h3>Score : {totalScore}</h3></div>
                        
            </div>
           {!showImage ? 
            <div>
                    
                    <img src={memory} alt="My Image" className='d-block mx-auto mt-5 w-50'/>

            </div>:
           <div className='row'>
            <div className='col-lg-6 col-sm-12 col-md-6'>
               <center> <form className='w-50 mt-5' onSubmit={handleSubmit}>
                    <label className='text-light'><h3>Enter item</h3></label>
                    <input value={input} type="text" className='form-control' onChange={inputHandler}/>
                    <button className='btn btn-primary mt-3' >Add item</button>
                </form></center>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6 mt-5 display'>
                    <h3 className='text-center'>Items</h3>
                     {
                        array.map((data,index)=>(list.includes(data.toLowerCase())  ? <div><h3 className='text-success'>{index+1}.   {data}</h3> </div>:<div><h3 className='text-danger'>{index+1}.   {data}</h3></div>))
                     }
                     
                     {(win===0) && <Eliminated/>}
                </div>
            </div>}
        </div>
    );
}

export default Level4;

