// import React, { Component } from 'react';
import { connect } from "redux-zero/react";
// import { Provider } from "redux-zero/react";
// import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
// // import logo from './logo.svg';
// import {add_cancel,add_coment} from './actions';
// import './App.css';


// const Body = ({newBoard}) => {
//   return (
//     <div>
//       {
//         newBoard?
//         <button className="addinput" onClick={add_cancel} />
//         :
//         <form>
//           <input onChange={e => (modal.input = e.target)} placeholder="Add list :).."/>
//           <button type="submit">Add</button>
//           <button onClick={add_cancel}>Cancelar</button>
//         </form>
//       }
//     </div>
//   )
// }

import React from 'react'
import {addStage} from './actions'
import Stage from './Stage';


export const Board = ({stages, tasks}) => {
  console.log('mappppp', stages)
   const list = stages.map ( stage => {
      return <Stage  key={stage} title={stage} 
         tasks = {  tasks.filter ( e => e.stage === stage )}
      />
   });

   return (
      <div className = "Board-container">
        
          <div className = "Board-column">
             {list}
          </div>
          <div className = "Board-column">
            <form onSubmit = { (e) => {
               e.preventDefault();
               addStage (this.stageInputRef.value);
            }}>
               <input  className="addinput" type="text" ref = {e => this.stageInputRef = e}/>
               <button type="submit">
                  save list
               </button>
               </form>
            </div>
      </div>
   ); 
}

// export default Board;
const mapToProps = ({stages, tasks }) => ({ stages, tasks });
export default connect(mapToProps)(Board);

