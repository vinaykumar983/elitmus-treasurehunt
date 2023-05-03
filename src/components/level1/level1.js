import './level1.css';
import treasure from './images/treasure.png';
import b1 from './images/b1.png';
import b2 from './images/b1.png';
import b3 from './images/b1.png';
import b4 from './images/b1.png';
import b5 from './images/b1.png';
import b6 from './images/b1.png';
import b7 from './images/b1.png';
import b8 from './images/b1.png';
import b9 from './images/b1.png';
import b10 from './images/b1.png';
import { useEffect, useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import open from './images/door_open.png';
import close from './images/door_close.png';
import { useForm } from 'react-hook-form'; 
import { useNavigate } from 'react-router-dom';
import Rules from '../model/model';
import { useSelector } from 'react-redux';
import { updateUser } from '../../slices/userSlice';
import { addUser } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
function Level1(){
    let currUser=useSelector(state=>state.currUser);
    let users=useSelector(state=>state.users)
   // console.log(currUser);
   let dispatch=useDispatch();
    const {register,handleSubmit}=useForm();
    let [isValidBucket1,setBucket1]=useState(true);
    let [isValidBucket2,setBucket2]=useState(true);
    let [isValidBucket3,setBucket3]=useState(true);
    let [isValidBucket4,setBucket4]=useState(true);
    let rules={
        game:"ARRANGING THE COINS",
            level:1,
        instructions:["1.In this level you have to put the coins in the respective    treasure boxes based on the hints",
        "2.You can get the hint by tapping the coin.","3.The hints are based on simple maths",
        "4.Finally after arranging all the coins you will get a key to enter next level","5.You will get 50 points on clearing this round"],
        footer:"All the best"
    };
    let [count,setCount]=useState(10);
    
    let navigate=useNavigate();
    const ballid=["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"]
    let [balls1,setBalls1]=useState(0);
    let [balls2,setBalls2]=useState(0);
    let [balls3,setBalls3]=useState(0);
    let [balls4,setBalls4]=useState(0);

    const [code,setCode]=useState(false);

    let [score,setScore]=useState(100);
    
    const onFormSubmit=(obj)=>{
        console.log(obj);
        if(obj.code==3232){
            document.getElementById("over").style.visibility="hidden";
            setCode(true);
        }
    }
    // const findUser=(x)=>{
    //     return x.email==currUser.email;
    // }
    useEffect(()=>{
        if(count==0){
            if(isValidBucket1 && isValidBucket2 && isValidBucket3 && isValidBucket4){
                handleShow(10);
               // currUser.score=50;
              // let user=users.find(obj=>currUser.email==currUser.email)
               //user={...user,score:50}
                
                // console.log(i)
                // let actionObj=updateUser(i);
                // dispatch(actionObj)
                // console.log(users);
                document.getElementById("over").style.visibility="visible";

            }
            else{
                 handleShow1();
            }
        }
    },[count])

    function allowDrop(event){
        event.preventDefault();
    }

    function drag(event){
        event.dataTransfer.setData("text",event.target.id);
    }

    function drop1(event){
        event.preventDefault();
        var data=event.dataTransfer.getData("text");
        document.getElementById(data).style.visibility="hidden";
        setCount(count-1);
        setBalls1(balls1+1);
        if(data!="b5"&&data!="b9"&&data!="b10"){
            setBucket1(false);   
        }
    }
    function drop2(event){
        event.preventDefault();
        var data=event.dataTransfer.getData("text");
        document.getElementById(data).style.visibility="hidden";
        setCount(count-1);
        setBalls2(balls2+1);
        if(data!="b1" && data!="b6"){
            setBucket2(false);
            
        }
    }
    function drop3(event){
        event.preventDefault();
        var data=event.dataTransfer.getData("text");
            document.getElementById(data).style.visibility="hidden";
            setCount(count-1);
            setBalls3(balls3+1);
        if(data!="b2"&&data!="b7"&&data!="b8"){
            setBucket3(false);
            
        }
    }
    function drop4(event){
        event.preventDefault();
        var data=event.dataTransfer.getData("text");
        document.getElementById(data).style.visibility="hidden";
        setCount(count-1);
        setBalls4(balls4+1);
        if(data!="b3"&&data!="b4"){
            setBucket4(false);
            
        }
    }

    const handle=()=>{
        
    }
    
    let [index,setIndex]=useState(-1);

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = (index) => {
        setShowModal(true)
        setIndex(index);
    };

    const handleClose1 = () => {
        setShowModal1(false)
        //window.location.reload();
        ballid.map((data)=>{
            document.getElementById(data).style.visibility="visible";
        })
        setCount(10);
        setBalls1(0);
        setBalls2(0);
        setBalls3(0);
        setBalls4(0);
        setBucket1(true);
        setBucket2(true)
        setBucket3(true)
        setBucket4(true)
        setShowModal(false);
        setShowModal1(false);
        setIndex(-1);
    };
    const handleShow1 = () => setShowModal1(true);

    const arr=["The first coin should go to first even natural number treasure box",
                "The second coin prefers the coin number plus one treasure box","Third coin likes the last treasure box",
            "Fourth coin always stays with third coin","Fifth stays first","This coin goes to the treasure box which is result of coin number divided by 3",
            "Seventh coin goes to it's coin number minus four treasure box","Eighth coin is friend of seventh so they want to stay together","This coin prefers current level number treasure box","Since it is the last coin atleast it wants to stay first",
            "Congratulations you won,You got 50 points,The key to unlock next level is the number of balls in each bucket"];

    return(
        <div className='y p-5'>
           <Rules rules={rules}  clickHandler={handle}/>
            <div className='row mt-5'>
                <div className='col-9'>
                        <div>
                        <h1 className='text-center text-light x' style={{fontFamily:'cursive'}}>Balls remaining : {count}</h1>
                        <Modal show={showModal} onHide={handleClose} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <Modal.Body>
                                <p className='lead'>{arr[index]}.</p>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                OK
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showModal1} onHide={handleClose1} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <Modal.Body>
                                oops! You made incorrect moves
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose1}>
                                Reset
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </div>
                    <div className='text-center x'>
                        <img src={b1} width="5%" id="b1" draggable="true" onDragStart={drag} onClick={()=>handleShow(0)}/>
                        <img src={b2} width="5%" id="b2" draggable="true" onDragStart={drag} onClick={()=>handleShow(1)}/>
                        <img src={b3} width="5%" id="b3" draggable="true" onDragStart={drag} onClick={()=>handleShow(2)}/>
                        <img src={b4} width="5%" id="b4" draggable="true" onDragStart={drag} onClick={()=>handleShow(3)}/>
                        <img src={b5} width="5%" id="b5" draggable="true" onDragStart={drag} onClick={()=>handleShow(4)}/>
                        <img src={b6} width="5%" id="b6" draggable="true" onDragStart={drag} onClick={()=>handleShow(5)}/>
                        <img src={b7} width="5%" id="b7" draggable="true" onDragStart={drag} onClick={()=>handleShow(6)}/>
                        <img src={b8} width="5%" id="b8" draggable="true" onDragStart={drag} onClick={()=>handleShow(7)}/>
                        <img src={b9} width="5%" id="b9" draggable="true" onDragStart={drag} onClick={()=>handleShow(8)}/>
                        <img src={b10} width="5%" id="b10" draggable="true" onDragStart={drag} onClick={()=>handleShow(9)}/>
                    </div>
                    <div className='q mt-5 x'>
                    <div>
                        <img src={treasure} width="70%" onDrop={drop1} onDragOver={allowDrop}/>
                        <div className='balls'>
                            <h4 className='text-light x' style={{fontFamily:'cursive'}}>Balls:{balls1}</h4>
                        </div>
                    </div>
                    <div>
                        <img src={treasure} width="70%"  onDrop={drop2} onDragOver={allowDrop}/>
                        <div className='balls'>
                            <h4 className='text-light x' style={{fontFamily:'cursive'}}>Balls:{balls2}</h4>
                        </div>
                    </div>
                    <div>
                        <img src={treasure} width="70%"  onDrop={drop3} onDragOver={allowDrop}/>
                        <div className='balls'>
                            <h4 className='text-light x' style={{fontFamily:'cursive'}}>Balls:{balls3}</h4>
                        </div>
                    </div>
                    <div>
                        <img src={treasure} width="70%"  onDrop={drop4} onDragOver={allowDrop}/>
                        <div className='balls'>
                            <h4 className='text-light x' style={{fontFamily:'cursive'}}>Balls:{balls4}</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='col-3 zz mt-5'>
                    {!code ? <img src={close} className='w-100' id="ig"/> : <img src={open} className='w-100' id="ig" onClick={()=>navigate("/level2")}/>}
                    <div id='over'> 
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <label className='text-center'><h4>Enter code here</h4></label>
                            <input type="number" className='form-control' {...register("code")}/>
                            <button className='btn btn-primary w-50 mt-2' type='submit'>open</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Level1;