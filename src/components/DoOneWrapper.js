import React, { useState } from "react";
import DoOneForm from "./DoOneForm";
import DoOneList from "./DoOneList";

const DoOneWrapper = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo,setEditTodo]=useState(null);
  return (
    <div className="doOne-wrapper">
      <div>
      <DoOneForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      </div>
     <div>
      <DoOneList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
     </div>
    </div>
  );
  // const [doOneList, setDoOneList] = useState([]);
  // let addList = (addtxt) => { 
  //   if(addtxt!=='')
  //   setDoOneList([...doOneList, addtxt]);
  // };
  // const deleteListItem=(key)=>{
  //   let newDoOneList=[...doOneList];
  //   newDoOneList.splice(key,1);
  //   setDoOneList([...newDoOneList])
  // };

  // return (
  //   <div className="doOne-wrapper">
  //     <DoOneForm addList={addList} />
  //     <h2 className="list-heading">Task List</h2>

  //     {doOneList.map((item, i) => {
  //       return <DoOneList key={i} index={i} item={item} deleteItem={deleteListItem}  />;
  //     })}

  //   </div>
  // );
};

export default DoOneWrapper;
