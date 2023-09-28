import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  return (
    <div className="app">
      
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Go on, Add your LIST! 🌝☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={ e => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, toDo])} className="fas fa-plus"></i>
      </div>
      {toDos.map((obj) => {
        return(
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{obj}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
        )
      } 
    )}
  </div>
  );
}

export default App;
