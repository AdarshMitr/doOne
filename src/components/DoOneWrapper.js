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
  };
   
  return (
    <div className="doOne-wrapper">
      <DoOneForm addList={addList} />
      <h2 className="list-heading">Tasks</h2>
      
      
      {doOneList.map((item, i) => {
        return <DoOneList key={i} index={i} item={item} deleteItem={deleteListItem}  />;
      })}
    
    </div>
  );
};

export default DoOneWrapper;
