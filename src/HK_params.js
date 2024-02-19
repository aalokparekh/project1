import { useSearchParams } from "react-router-dom";

function HP()
{
   const[params,Setparams]= useSearchParams();
   const Age = params.get('Age');
   const Name = params.get('Name');
   return(
      <div>
      <h1>Use SearchParams</h1>
      <h3>Age is {Age}</h3>
      <h3>Name is {Name}</h3>
      </div>
   )
}
export default HP;