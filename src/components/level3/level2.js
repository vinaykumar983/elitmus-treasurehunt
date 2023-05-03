import { useEffect,useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cartoon from './images/cartoon.jpg'
import { Modal,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './level2.css'
import Rules from '../model/model';
import Eliminated from '../model2/model2';
import key from './images/key.png'

function Level2(){
    let navigate=useNavigate();
    const {register,handleSubmit}=useForm();
    const onFormSubmit=(obj)=>{
        console.log(obj);
        if(obj.code==9652){
            navigate("/level3");
        }
    }
    const handle=()=>{
        
    }
    const imgRef=useRef();
    const [ImageWidth,setImageWidth]=useState(0);
    const [ImageHeight,setImageHeight]=useState(0);
    let [win,setWin]=useState(false);
    const [score,setScore]=useState(100);
    useEffect(()=>{
        setImageWidth(imgRef.current.width);
        setImageHeight((imgRef.current.width*73.921)/100);
    },[])
    const handleClick=(e)=>{
        const x=e.nativeEvent.offsetX;
        const y=e.nativeEvent.offsetY;
        console.log(ImageHeight)
        const diffx=(ImageWidth*76.044)/100;
        const diffy=(ImageHeight*14.689)/100;
        if(x > diffx-10 && x<diffx+10 && y> diffy-20 && y< diffy+20)
        {
            handleShow(5);
            setWin(true);
        }
        else{
            setScore(score-10);
        }
    }
    let [index,setIndex]=useState(-1);
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = (index) => {
        setShowModal(true)
        setIndex(index);
        if(index!=5)
            setScore(score-5);
    };
    useEffect(()=>{
        if(score <= 0 ){
            setScore(0);
            
        }
    },[score])
    let rules={
        game:"FIND THE THIEF",
        level:2,
        instructions:["1.There is a thief in the crowd shown in the image the key to enter the next level is with the thief.","2.You have to identify the thief based on the clues given","3.This level is a points based level of 100 points","4.There are five clues to identify the thief ,for each clue taken 10 points will be duducted","5.For every wrong identification 20 points will be deducted, you will be eliminated once your score reaches zero"],
        footer:"All the best"
    };

    let arr=["The thief is not reading book and not holding any thing","Thief is looking at you and laughing","Thief is not a women or animal","The thief is having a broken tooth","The thief is in the upper right most part","Congratulations you won , key to enter next level is 9652"]
    return(
        
        <div>
            <Rules rules={rules}  clickHandler={handle}/>
            <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10 col-sm-12 text-center">
      <h2 className="text-light c">Identify thief based on the clues</h2>
    </div>
  </div>
</div>

            <Modal show={showModal} onHide={handleClose} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Modal.Body>
                    <p className='lead text-center'>{arr[index]}</p>
                    {
                        index==5 && <img src={key}/>
                    }
                        </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                OK
                            </Button>
                </Modal.Footer>
            </Modal>
            <div className='mx-auto'>
          <center> <div className='score2 text-center score-container'>
                    <h3>Your score : {score}</h3>
                </div></center> 
                <center>
           {    !win &&
            //     <div className='text-center parent3 mt-2'>
            //     <div >
            //     <button className='bttn' onClick={()=>handleShow(0)}>Clue:1</button>
            //     </div>
            //     <div>
            //     <button  className='bttn' onClick={()=>handleShow(1)}>Clue:2</button>
            //     </div>
            //     <div>
            //     <button className='bttn' onClick={()=>handleShow(2)}>Clue:3</button>
            //     </div>
            //     <div>
            //     <button className='bttn' onClick={()=>handleShow(3)}>Clue:4</button>
            //     </div>
            //     <div>
            //     <button className='bttn' onClick={()=>handleShow(4)}>Clue:5</button>
            //     </div>
                
            // </div> 
            <div className='text-center parent3 mt-2'>
           <center> <div className='d-flex flex-wrap justify-content-center l2'>
              <button className='bttn mx-2 my-2' onClick={() => handleShow(0)}>Clue:1</button>
              <button className='bttn mx-2 my-2' onClick={() => handleShow(1)}>Clue:2</button>
              <button className='bttn mx-2 my-2' onClick={() => handleShow(2)}>Clue:3</button>
              <button className='bttn mx-2 my-2' onClick={() => handleShow(3)}>Clue:4</button>
              <button className='bttn mx-2 my-2' onClick={() => handleShow(4)}>Clue:5</button>
            </div></center>
          </div>}
            
            {!win ? <div className='text-center mt-2 wd'>
            <div className='image-container'><img ref={imgRef} src={cartoon} className='image ig' onClick={handleClick} style={{position:"relative"}}/></div>
            </div> : <div>
            <form onSubmit={handleSubmit(onFormSubmit)} className=' p-2 mt-5 entry'>
                            <label className='text-center'><h4>Enter code here</h4></label>
                            <input type="number" className='form-control' {...register("code")}/>
                            <button className='btn btn-primary w-50 mt-2' type='submit'>open</button>
                        </form>
                </div>}
            </center>
            <div>
                {score===0 && <Eliminated/>}
            </div>
            </div>
        </div>
    );
}

export default Level2;