import React from "react";

const DoOneList = ({ todos, setTodos,setEditTodo }) => {
  const handleDelete=({id})=>{
    setTodos(todos.filter((todo)=>todo.id !==id));
  };

  const handleCheck=(todo)=>{
    setTodos(
      todos.map((item)=>{
        if(item.id===todo.id){
          return {...item,completed:!item.completed}
        }
        return item;
      })
    )
  };

  const handleEdit=({id})=>{
const findTodo=todos.find((todo)=>todo.id===id);
setEditTodo(findTodo);
  }
  return (
    <div>
      <h2 className="task">Task List</h2>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list${todo.completed?"check":""}`}
            onChange={(e) => e.preventDefault()}
          />

          <div className="icons-group">
            <span className="icons">
              <i class="fa-solid fa-circle-check check" onClick={()=>handleCheck(todo)}></i>
            </span>

            <span className="icons">
              <i className="fa-regular fa-pen-to-square edit" onClick={()=>handleEdit(todo)}></i>
            </span>
            <span className="icons">
              <i className="fa-solid fa-trash del" onClick={()=>handleDelete(todo)}></i>
            </span>
          </div>
        </li>
      ))}
    </div>
  );
};
export default DoOneList;

