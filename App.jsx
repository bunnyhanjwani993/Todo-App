// import { useState } from "react"

// function App(){
//     const [title, setTitle] = useState('');
//     const[description, setDescription] = useState('');
//     const[todo, setTodo] = useState([]);

//     const addtodo= (event) =>{
//         event.preventDefault();
//         console.log(title);
//         console.log(description);

//         setTodo ([...todo,{
//             title,
//             description,
//             id:Date.now()
//         }])

//         setTitle("");
//         setDescription("");
//     }
//     const deletTodo =(index) =>{
//         console.log('delete todo', index)
//         todo.splice(index, 1)
//         setTodo([...todo])
//     }
//     const editDelete = (index) =>{
//         console.log('edit delete', index);
//         const updateValue = prompt('enter update value')
//         if(updateValue === ''){
//             alert('updated value is emply')
//             return
//         }
//         todo[index].title = updateValue
//         setTodo([...todo]);
//     }
//     return(
//         <>
//         <h1>TODO APP</h1>
//         <form onSubmit={addtodo}>
//             <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="title" />
//             <br /> <br />
//             <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" placeholder="description" />
//             <br /> <br />
//             <button>add Todo</button>
//         </form>
//         <div>
//             {todo.length > 0 ? todo.map((item,index)=>{
//                 return <div style={{
//                     margin: "10px",
//                     padding: "20px",
//                     border: "1px solid black",
//                     borderRadius: "20px"
//                 }}>
//                     <p>title: {item.title}</p>
//                     <p>description {item.description}</p>
//                     <button onClick={() =>deletTodo(index)}>delete</button>
//                     <button onClick={()=> editDelete(index)}>edit</button>
//                 </div>
//             }): <h1>NO IS FOUNDER</h1> }
//         </div>
//         </>
//     )
// }

// export default App


import { useState } from "react";

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState([]);

  const addtodo = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please enter both title and description");
      return;
    }

    setTodo([
      ...todo,
      {
        title,
        description,
        id: Date.now()
      }
    ]);

    setTitle("");
    setDescription("");
  };

  const deletTodo = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };

  const editDelete = (index) => {
    const updateValue = prompt('Enter updated title', todo[index].title);
    if (!updateValue?.trim()) {
      alert('Updated value is empty');
      return;
    }
    const updatedTodos = [...todo];
    updatedTodos[index].title = updateValue;
    setTodo(updatedTodos);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#4f46e5" }}>📝 Todo App</h1>

      <form
        onSubmit={addtodo}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          background: "#f3f4f6",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Description"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Todo
        </button>
      </form>

      <div style={{ marginTop: "30px", maxWidth: "600px", marginInline: "auto" }}>
        {todo.length > 0 ? (
          todo.map((item, index) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fff",
                margin: "10px 0",
                padding: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <p><strong>S.No:</strong> {index + 1}</p>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <button
                onClick={() => deletTodo(index)}
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  marginRight: "10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
              <button
                onClick={() => editDelete(index)}
                style={{
                  backgroundColor: "#f59e0b",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <h2 style={{ textAlign: "center", color: "#9ca3af" }}>No Todos Found</h2>
        )}
      </div>
    </div>
  );
}

export default App;
