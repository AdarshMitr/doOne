import React, { useState,useEffect } from "react";
import DoOneForm from "./DoOneForm";
import DoOneList from "./DoOneList";

const DoOneWrapper = () => {
  const initialState=JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo,setEditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

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
};

export default DoOneWrapper;
