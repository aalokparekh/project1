import { useState } from "react";

function Fvwe()
{
   const[user,setUser] = useState();
   const[pwd,setPwd] = useState();
   const[error,setError] = useState(false);

   function getdata(e)
   {
      e.preventDefault();
   }

   function getUser(e)
   {
      let item = e.target.value;
      if(item.length<=6)
      {setError(true);}
      else
      {setError(false);}
   }

   return(
      <div>
      <h1> Login Form </h1>
      <form onChange={getdata}>
         <input type="text" placeholder="User Id"></input><br/><br/>
         <input type="password" placeholder="Password"  onChange={getUser}></input>{error?<span>Invalid Password</span>:""}<br/><br/>
         <button>Submit</button>
      </form>
      </div>
   )
}
export default Fvwe