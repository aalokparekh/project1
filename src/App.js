import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Emp1 from './Emp1';
import Form from './Form';
import Reactcss from './Reactcss';
import Fvwe from './Fvwe';

function App() {
  const[data,setData] = useState("Pankaj")
  function updateData()
  {
    setData("Keyur")
  }
  return (
   <div>
      <h1>{data}</h1>
      <button onClick={updateData}>updateData</button>

      <Emp1 />
      <Form />
      <Fvwe />
      <Reactcss/>
   </div>
  );
}

export default App;
