import React, {useState} from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);


  const inputEventHandler = (event) => {
    setInput(event.target.value);
  }

  const listShowEvent = () => {
    setList((prevVal) => {
      return [input, ...prevVal]
    })
    setInput("");
  }

  const deleteItems = (id) => {
    setList((prevVal) => {
      return prevVal.filter((item, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className="App">
      <div className="box">
      <br/>
         <h1>My Todo List</h1>
         <input 
         type="text" 
         placeholder="Add New Item"
         value={input}
         onChange={inputEventHandler}
         ></input>
         <button onClick={listShowEvent}>+</button>
      </div>
        {list.map((item, index) => {
          return <div className="result" id={index} key={index}><button className="close-button" onClick={() => (deleteItems(index))}>x</button><p>{item}</p></div>
        })}
    </div>
  );
}

export default App;
