import './style.css';
import style from './custom.module.css'
function Reactcss()
{
   return(
     <div>
     <h1> Style CSS In React</h1>
     <h2 className="test">1. Normal CSS </h2>
     <h3 style={{color:'red',backgroundColor:'yellowgreen'}}>2. Inline CSS</h3>
     <h4 className={style.cmc}>3. Module CSS </h4>
     </div> 
   )
}

export default Reactcss