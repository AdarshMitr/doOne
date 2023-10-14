import { useState } from "react";
import "./App.css";
import logo from "./Img/logo.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={logo} alt="doOne logo" />
        <div className="date">
          Today :{new Date().getDate()}/{new Date().getMonth() + 1}/
          {new Date().getFullYear()}
        </div>
      </div>
      <div className="body">
        <div className="form">
          <input className="input-box" placeholder="write here..." type="text"/>
          <button className="submit">Add</button> 
        </div>
        <div className="task-status">
          <button className="btn-status">Remaining</button>
          <button className="btn-status ">Completed</button>
          <button className="btn-status">All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
