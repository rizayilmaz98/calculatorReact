import { useState } from "react";
import "./App.css"
import {evaluate} from 'mathjs';


function App() {
  const[number,setNumber] = useState("");
  const[result,setResult] = useState();
  function process(value){
    setResult(evaluate(value));
  }
  return (
    <div className="App">
      <div className="showProcess">
          <p className="inputText">{number}</p>
          <p className="resultText">{result}</p>
      </div>
      <div className="calculatorRow">
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"7"}>7</button>
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"8"}>8</button>
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"9"}>9</button>
          <button className="processCalculator"  type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"/"}>/</button>
      </div>
      <div className="calculatorRow">
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"4"}>4</button>
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"5"}>5</button>
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"6"}>6</button>
          <button className="processCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"*"}>x</button>
      </div>
      <div className="calculatorRow">
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"1"}>1</button>
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"2"}>2</button>
          <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"3"}>3</button>
          <button className="processCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"+"}>+</button>
      </div>
      <div className="calculatorRow">
        <div className="numberCalculator" style={{cursor:"not-allowed"}}>   
        </div>
        <button className="numberCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={0}>0</button>
        <button className="numberCalculator" onClick={()=>process(number)}> = </button>
        <button className="processCalculator" type="" onClick={(e)=>{setNumber(number+e.target.value)}} value={"-"}>-</button>
      </div>
      <div className="clearRow" onClick={() => {setNumber(""); setResult("")}}>
        CLEAR
      </div>
    </div>
  );
}

export default App;
