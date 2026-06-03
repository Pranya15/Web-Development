import React from 'react'
import "./Todo.css"
import { useState } from 'react'
import { useEffect } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState("");
    const [todos, setTodos] = useState(()=> {
       let data=localStorage.getItem("todos")
       if(data){
        return JSON.parse(data);
    }
    return []
});;
    const [deleted, setDeleted] = useState([]);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))},[todos])
    
  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" name="task" placeholder='Enter Task' value={tasks} onChange={(e) => setTasks(e.target.value)} />
        <button  onClick={() => setTodos([...todos,  tasks ])}>Add</button>
        <div className='todo-list'>
            {todos.map((todo,index) => (
                <div key={index}>{todo}
                <div className='buttons'>
            <button onClick={()=> {
                const newTodos=[...todos];
                newTodos[index]=prompt("Edit task:",newTodos[index]);
                setTodos(newTodos);
            }}>Edit</button>   
            <button onClick={()=> {
                const newTodos = [...todos];
                newTodos.splice(index, 1);
                setTodos(newTodos); 
            }}>Delete</button>
           
            </div>
            </div>
            
            ))}
            
        </div>
    </div>
  )
}

export default Todo;