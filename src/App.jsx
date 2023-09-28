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
        <i onClick={() => setToDos( [...toDos, {id: Date.now(), text : toDo, status: false} ] ) } className="fas fa-plus"></i>
      </div>
      {toDos.map((obj) => {
        return(
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input value={obj.status} onChange={
             (e) => {
              
              setToDos(toDos.filter( (obj2) => { 
               if(obj2.id === obj.id ){
                obj2.status = e.target.checked; 
               }
               return obj2                
             })
            )} }
            type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
        )
      } 
    )}

    {toDos.map( obj => {
      if(obj.status){
        return(
        <div> 
        <h1>{obj.text}</h1>
        </div>
        )
      } return null
    })}
  </div>
  );
}

export default App;
