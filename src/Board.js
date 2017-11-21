import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import React from 'react'
import { addStage } from './actions'
import Stage from './Stage';

const Header = () => {
  return (
    <row >
      <div className="bodyfirstboard">
        <div className="col-md-4 col-xs-4 cols">
          <a type="submit"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Boards</a>
        </div>
        <div className="col-md-4 col-xs-4 cols">
          <NavLink to={'/Singup'}> <div className="logo1" /></NavLink>
        </div>
        <div className="col-md-4 col-xs-4 cols">
          <a type="submit"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span>Esther</a>
          <a type="submit"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>Sign out</a>
        </div>
      </div>
    </row>
  )
}

export const Board = ({ stages, tasks }) => {
  console.log('mappppp', stages)
  const list = stages.map(stage => {
    return <Stage key={stage} title={stage}
      tasks={tasks.filter(e => e.stage === stage)}
    />
  });

  return (
    <div className="Board-container">
      <Header />
      <div className="Board-column">
        <div className='list'> {list}</div><hr className='brs' />
      </div>
      <div className="Board-column">
        <form onSubmit={(e) => {
          e.preventDefault();
          addStage(this.stageInputRef.value);
        }}>
          <input className="addinput" type="text" ref={e => this.stageInputRef = e} />
          <button className='btnb' type="submit">
            save
               </button>
        </form>
      </div>
    </div>
  );
}

// export default Board;
const mapToProps = ({ stages, tasks }) => ({ stages, tasks });
export default connect(mapToProps)(Board);

