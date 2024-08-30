import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ButtonCatFact } from './buttonCatFact';
import axios from 'axios';
import { AgifyForm } from './AgifyForm';
function App() {
  const [catFactText, setCatFactText] = useState("");
  const handelCatFactAPI = () => {
    axios.get("https://catfact.ninja/fact/").then((res) => {
      setCatFactText(res.data.fact);
    });
  }
  const [userName,setUserName] = useState('');
  const handelUserName = (event) => {
    setUserName(event.target.value);
  }
  const [userInfo , setuserInfo] = useState({});
  const HandelAgifyReq = (userName) => {
    axios.get("https://api.agify.io/?name=" + userName).then((res) => {
      setuserInfo(res.data)
    })
  }
  return (
    <div className="App">
      <h1>Cat Facts:</h1>
      <ButtonCatFact handelCatFactAPI={handelCatFactAPI} />
      <p>{catFactText}</p>
      <h1>agify :</h1>
      <AgifyForm HandelAgifyReq={()=> HandelAgifyReq(userName)} handelUserName={handelUserName}/>
      <h2>Name: {userInfo.name}</h2>
      <h2>Age: {userInfo.age}</h2>
      <h2>count: {userInfo.count}</h2>
    </div>
  );
}

export default App;
