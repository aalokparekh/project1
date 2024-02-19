// Using Onchange() event 
import { useState } from "react";

function Form()
{
   const [data,setData] = useState(null)
   const [print,setPrint] = useState(false)
   function getData(val)
   {
      console.warn(val.target.value)
      setData(val.target.value)
   }
   return(
         <div>
         <h1>Get Input Value</h1>
         
         {
            print ? <h1>{data}</h1> : null
         }
         <input type="text" onChange={getData}></input>
         <br/>
         <button onClick={()=>setPrint(true)}>Show</button>
        
         <button onClick={()=>setPrint(!true)}>Hide</button>
         <button onClick={()=>setPrint(!false)}>Toggle</button>
         </div>
   )
}
export default Form