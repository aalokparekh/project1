import React from "react";
class Emp1 extends React.Component
{
   constructor()
   {
      super();
      this.state={
         name:"Jay"
      }
   }
   udate()
   {
      this.setState({name:"Ho"})
   }
   render()
   {
      return(
         <div>
         <h1>{this.state.name}</h1>
         <button onClick={()=>this.udate()}>updateData</button>
         </div>
      )
   }   
}
export default Emp1;