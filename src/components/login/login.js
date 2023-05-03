import { useSelector } from 'react-redux';
import './login.css'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { Modal,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/curruserSlice';

function Login() {
  let users=useSelector(state=>state.users)
  const {register,handleSubmit}=useForm();
  console.log(users)
  const [showModal, setShowModal] = useState(false);
  const [index,setIndex]=useState(-1);
  const handleClose = () => setShowModal(false);
  const handleShow = (index) =>{ 
    setShowModal(true)
    setIndex(index);
  }

  let navigate=useNavigate();
  let dispatch=useDispatch();
  const arr=["Welcome","Invalid user name or password"]

  const onFormSubmit=(credObj)=>{
    if(credObj.email=="admin@gmail.com"){
      if(credObj.password==9876){
        let actionObj=setUser({credObj}) //action object
      dispatch(actionObj)
          navigate("/admin");
      }
      else{
        handleShow(1);
      }
    }
    else{
    let user=users.find(obj=>obj.email==credObj.email)
    if(user!=null){
      let actionObj=setUser(user) 
      dispatch(actionObj)
      navigate("/")
    }
    else{
      
      handleShow(1)
    }
  }
  }

  return (
    <div>
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
      <div className="row">
      <div className="col-md-5  col-lg-5 k">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" className="w-100 mt-5"/>
    </div>
       <div className="col-md-7 col-sm-12 col-lg-7 dk"><form className="w-75 mt-5 login p-3" onSubmit={handleSubmit(onFormSubmit)}>
          <h1 className="text-center text-light w-75" style={{fontFamily:"cursive"} }>Login</h1>
          <div>
          <label className="text-light mt-3 " style={{fontFamily:"cursive"}} ><h4>Email</h4></label>
          <input type="email" className="form-control" {...register("email",{required:true})}/>
          </div>
          <div>
          <label className="text-light mt-3" style={{fontFamily:"cursive"}} ><h4>Password</h4></label>
          <input type="password" className="form-control" {...register("password",{required:true})} />
          <button className="btn btn-primary d-block mx-auto mt-5" type='submit'>Login</button>
          </div>
        </form>
        </div>
        </div>
    </div>
  );
}

export default Login;
