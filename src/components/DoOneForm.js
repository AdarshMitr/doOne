import React, {useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
const DoOneForm = ({ input, setInput, todos, setTodos,editTodo,setEditTodo }) => {
  
  const updateTodo=(title,id,completed)=>{
    const newTodo=todos.map((todo)=>
      todo.id===id ? {title,id,completed}: todo);
    setTodos(newTodo);
    setEditTodo("");
  };
useEffect(()=>{
  if(editTodo){
    setInput(editTodo.title);
  }else{
    setInput("");
  }
},[setInput,editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!editTodo){
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else{
      updateTodo(input,editTodo.id,editTodo.completed)
    }
    
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="input-box"
        type="text"
        placeholder="write here..."
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="submit" type="submit">{editTodo? "✓" :"+"}</button>
    </form>
  );

  //     const [value,setValue]=useState('');
  //     const handleSubmit=(e)=>{
  // e.preventDefault();
  // console.log(value)
  //     }
  //   return (
  //     <form className="doOne-form" onSubmit={handleSubmit}>
  //           <input className="input-box" type="text" placeholder='write here ...'value={value} onChange={(e)=>setValue(e.target.value)}/>
  //           <button className="submit" onClick={()=>{
  //             props.addList(value);
  //             setValue("");
  //           }}>+</button>
  //         </form>
  //   )
};

export default DoOneForm;
