import './App.css'
import { useState } from 'react';

function App() {
  // for list of todo
  const [toDos,setTodos] = useState([])
  // for single todo
  const [toDo,setTodo] = useState('')
  const [editTodoId, setEditTodoId] = useState(null);

  const handleEditTodo = (id, newText) => {
    setTodos(
      toDos.map((obj) => {
        if (obj.id === id) {
          return { ...obj, text: newText };
        }
        return obj;
      })
    );
  };

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {
        toDos.map((obj)=>{

          return(
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            setTodos(toDos.filter(obj2=>{
              if(obj2.id==obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }
            ))
          }} value={obj.status} type="checkbox" name="" id="" />
          {editTodoId === obj.id ? (
                <input
                  type="text"
                  value={obj.text}
                  onChange={(e) => handleEditTodo(obj.id, e.target.value)}
                />
              ) : (
                <p>{obj.text}</p>
              )}
        </div>
        <div className="right">
          <i onClick={(e)=>setTodos(toDos.filter(obj3=>{
            if(obj3.id==obj.id){
              obj3=''
            }
            return obj3
          }))} className="fas fa-times"></i>
          <i onClick={() => setEditTodoId(obj.id)} className="fas fa-edit"></i>
        </div>
      </div>
      )
      })
      }
      {/* {toDos.map((obj)=>{
        if(obj.status){
          return(<div className="input"><input value={obj.text} type='text'/></div>)
        }
      })

      } */}
    </div>
  </div>
  );
}
export default App;
//-------------------------------------------------------------
// import React, { useState } from 'react';

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [editTodoText, setEditTodoText] = useState('');

//   const addTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//       setNewTodo('');
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const startEditTodo = (id, text) => {
//     setEditTodoId(id);
//     setEditTodoText(text);
//   };

//   const cancelEditTodo = () => {
//     setEditTodoId(null);
//     setEditTodoText('');
//   };

//   const saveEditTodo = () => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === editTodoId ? { ...todo, text: editTodoText } : todo
//       )
//     );
//     setEditTodoId(null);
//     setEditTodoText('');
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Add a new task..."
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//             />
//             {editTodoId === todo.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editTodoText}
//                   onChange={(e) => setEditTodoText(e.target.value)}
//                 />
//                 <button onClick={saveEditTodo}>Save</button>
//                 <button onClick={cancelEditTodo}>Cancel</button>
//               </div>
//             ) : (
//               <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                 {todo.text}
//               </span>
//             )}
//             <button onClick={() => startEditTodo(todo.id, todo.text)}>Edit</button>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;
