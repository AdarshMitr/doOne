import React, { useState } from "react";
import DoOneForm from "./DoOneForm";
import DoOneList from "./DoOneList";

const DoOneWrapper = () => {
  const [doOneList, setDoOneList] = useState([]);
  let addList = (addtxt) => {
    if(addtxt!=='')
    setDoOneList([...doOneList, addtxt]);
  };
  const deleteListItem=(key)=>{
    let newDoOneList=[...doOneList];
    newDoOneList.splice(key,1);
    setDoOneList([...newDoOneList])
  }
  return (
    <div className="doOne-wrapper">
      <DoOneForm addList={addList} />
      <h2 className="list-heading">Tasks</h2>
      <hr />
      {doOneList.map((item, i) => {
        return <DoOneList key={i} index={i} item={item} deleteItem={deleteListItem}/>;
      })}
      {/* <DoOneList/> */}
      {/* <div className="task-status">
          <button className="btn-status">Remaining</button>
          <button className="btn-status ">Completed</button>
          <button className="btn-status">All</button>
        </div> */}
    </div>
  );
};

export default DoOneWrapper;
