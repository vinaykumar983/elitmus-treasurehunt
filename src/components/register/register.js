
function Register() {
  return (
    <div><div className="row">
      <div className="col-5">
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" className="w-100 mt-5"/>
    </div>
       <div className="ml-5 col-7 "><form className="w-75 mt-5 login p-3">
          <h1 className="text-center text-light w-75" style={{fontFamily:"cursive"} }>Login</h1>
          <div>
          <label className="text-light mt-3 " style={{fontFamily:"cursive"}}><h4>Email</h4></label>
          <input type="email" className="form-control"/>
          </div>
          <div>
          <label className="text-light mt-3" style={{fontFamily:"cursive"}}><h4>Password</h4></label>
          <input type="password" className="form-control"/>
          <button className="btn btn-primary d-block mx-auto mt-5">Login</button>
          </div>
        </form>
        </div>
        </div>
    </div>
  );
}

export default Register;
