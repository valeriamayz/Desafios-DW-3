import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {

    if (newTask.trim() !== "") {
      
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <div className="container text-center mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-white mb-4">TO-DO NOW</h1>

      {}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button className="btn btn-dark" onClick={addTask}>
          Add task
        </button>
      </div>

      <hr className="text-white" />

      {}
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white mb-2"
          >
            {task}
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => deleteTask(index)} 
            >
              <i className="bi bi-trash"></i> {}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App;
