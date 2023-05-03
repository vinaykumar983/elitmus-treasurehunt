// import { Link,Route ,NavLink, Routes} from "react-router-dom";
// import Login from "../login/login";
// import Home from "../home/home";
// import './header.css';
// import Level1 from "../level1/level1";
// import Level3 from "../level3/level2";
//  import Level4 from "../level4/level4";

// function Header() {
//     return (
//       <div className="">
//       <h1 className="text-center text-light a p-3">Treasure hunt</h1>
//       <div className="row">
//           <div className="col-2 b p-3">
//           <div className=" text-center">
//           <Link to="" style={{ textDecoration: 'none' }} className="text-light a"><h1 className="c">Home</h1></Link>
//           </div>
//           <div className=" text-center ">
//           <Link to="/register" style={{ textDecoration: 'none' }} className="text-light a"><h1 className="c">Register</h1></Link>
//           </div>
//           <div className=" text-center">
//           <NavLink to="login" style={{ textDecoration: 'none' }} className="text-light a"><h1 className="c">Login</h1></NavLink>
//           </div>
//           <div className=" text-center ">
//           <NavLink to="login" style={{ textDecoration: 'none' }} className="text-light a"><h1 className="c">Check score</h1></NavLink>
//           </div>
//           <div className=" text-center ">
//           <NavLink to="login" style={{ textDecoration: 'none' }} className="text-light a"><h1 className="c">Rules</h1></NavLink>
//           </div>
//           <div>
//             <img src="https://kallastetalu.ee/wp-content/uploads/2017/05/treasure-chest-clipart-8zDGrr-clipart.gif" className="w-75"/>
//           </div>
//           </div>
//         <div className="col-9 d">
//           <Routes>
//           <Route path="" element={<Home/>}/>
//               <Route path="login" element={<Login/>}/>
              
//               <Route path="level1" element={<Level1/>}/>
//               <Route path="level2" element={<Level3/>}></Route>
//               <Route path="level3" element={<Level4/>}></Route>
//           </Routes>
//         </div>
        
//       </div>
//       </div>
//     );
//   }
  
//   export default Header;



import { Link, Route, NavLink, Routes } from "react-router-dom";
import Login from "../login/login";
import Home from "../home/home";
import Level1 from "../level1/level1";
import Level3 from "../level3/level2";
import Level4 from "../level4/level4";
import Aboutus from "../aboutus/aboutus";
import Rule from "../rules/rules";

import "./header.css";
import Admin from "../admin/admin";

function Header() {
  return (
    <div className="container-fluid">
      <h1 className="text-center text-light a p-3">Treasure hunt</h1>
      <div className="row">
        <div className="col-md-2 col-lg-2 b p-3">
          <div className="text-center">
            <Link
              to=""
              style={{ textDecoration: "none" }}
              className="text-light a"
            >
              <h1 className="c">Home</h1>
            </Link>
          </div>
          
          <div className="text-center">
            <NavLink
              to="login"
              style={{ textDecoration: "none" }}
              className="text-light a"
            >
              <h1 className="c">Login</h1>
            </NavLink>
          </div>
          <div className="text-center">
            <NavLink
              to="aboutus"
              style={{ textDecoration: "none" }}
              className="text-light a"
            >
              <h1 className="c">About us</h1>
            </NavLink>
          </div>
          <div className="text-center">
            <NavLink
              to="rules"
              style={{ textDecoration: "none" }}
              className="text-light a"
            >
              <h1 className="c">Rules</h1>
            </NavLink>
          </div>
          <div>
            <img
              src="https://kallastetalu.ee/wp-content/uploads/2017/05/treasure-chest-clipart-8zDGrr-clipart.gif"
              className="w-75 bgi"
            />
          </div>
        </div>
        <div className="col-md-10 col-lg-10 d p-5">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="level1" element={<Level1 />} />
            <Route path="level2" element={<Level3 />}></Route>
            <Route path="level3" element={<Level4 />}></Route>
            <Route path="aboutus" element={<Aboutus />}></Route>
            <Route path="rules" element={<Rule />}></Route>
            <Route path="admin" element={<Admin/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Header;
