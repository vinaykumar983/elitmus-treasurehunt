import { useSelector } from "react-redux";
function Admin(){
    let users=useSelector(state=>state.users)
    return(
        <div className="container aa p-5">
            <h1 style={{fontFamily:"cursive"}} className="text-light text-center">Player's</h1>
            <hr/>
            <table className="table">
      <thead>
        <tr>
          <th className="text-light"><h4>Email</h4></th>
          <th className="text-light"><h4>Score</h4></th>
          <th className="text-light"><h4>Levels</h4></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index} className="text-light ">
            <td><h4>{item.email}</h4></td>
            <td><h4>{item.score}</h4></td>
            <td><h4>{item.levels}</h4></td>
          </tr>
        ))}
      </tbody>
    </table>
            
        </div>
    );
}

export default Admin;