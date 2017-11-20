import React from 'react';
import Board from './Board';
import {connect} from 'redux-zero/react'


const TrelloApp = ({stages, tasks}) => {
   console.log (stages);
   console.log (tasks);
   
   return <div className="App">
       <Board stages={stages}  tasks = {tasks}/>
   </div>
};
const mapToProps = ({stages, tasks})  => ({stages, tasks}) 

export default connect(mapToProps)(TrelloApp);