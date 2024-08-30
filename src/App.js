import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ButtonCatFact} from './buttonCatFact';
import axios from 'axios';
function App() {
  const [catFactText,setCatFactText] = useState("");
  const handelCatFactAPI = () => {
    axios.get("https://catfact.ninja/fact/").then((res) =>{
      setCatFactText(res.data.fact);
    });
  }
  return ( 
    <div className="App">
      <ButtonCatFact handelCatFactAPI={handelCatFactAPI} />
      <h1>Cat Facts:</h1>
      <p>{catFactText}</p>
    </div>
  );
}

export default App;
