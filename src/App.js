
import Profile from './Container/Profile';
import About from './Container/About';
import Home from './Container/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  

  return (
    <div className="App">
  
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
          
    </Router>
      
    </div>
  );
}

export default App;
// 
// import React from 'react';
// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [toDos, setToDos] = useState([]);
//   const [toDo, setToDo] = useState('');
//   console.log(toDos);
//   useEffect(() => {
//     console.log("mounting....");

//   })
//   return (
//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
//       </div>
//       <div className="input">
//         <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder="🖊️ Add item..." />
//         <i className="fas fa-plus" onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])}></i>
//       </div>
//       {toDos.map((x) => {



//         return <div className="todos">
//           <div className="todo">
//             <div className="left">
//               <input value={x.status} type="checkbox" name="" id="" onChange={(e) => {

//                 setToDos(toDos.filter(y => {
//                   console.log("insde", e);
//                   if (x.id === y.id) { y.status = e.target.checked };
//                   return y
//                 })
//                 );

//               }} />
//               <p>{x.text}</p>

//             </div>
//             <div className="right">
//               <i className="fas fa-times" onClick={() => {

//                 // setToDos(
//                 toDos.filter(y => {
//                   const newPeople = toDos.filter((y) => y.id !== x.id);

//                   setToDos(newPeople);

//                 })
               
//                 console.log("toodos", toDos);
                
//               }}></i>
//             </div>
//           </div>
//         </div>

//       })}
//       <p><h1>Active Status Tasks</h1>
//         {toDos.map((x) => {

//           if (x.status === true) {

//             return <div className="todos">
//               <div className="todo">
//                 <div className="left">

//                   <p>{x.text}</p>

//                 </div>
//                 <div className="right">
//                   <i className="fas fa-times"></i>
//                 </div>
//               </div>
//             </div>
//           }
//           else {
//             return 0
//           }
//         })}
//       </p>
//     </div>
//   );
// }

// export default App;