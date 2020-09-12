import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Task({ task, taskIndex, toggleTask, deleteTask, editTask }) {
  return (
    <div className="todo__item">
      <div className="todo__item__info">
        <div className="todo__item__status abs-center"
          style={{ backgroundColor: task.isDone ? "#28a745" : "" }}
          onClick={() => toggleTask(taskIndex)} >
          <span className="fas-icon">check</span>
        </div>
        <span>{task.text}</span>
      </div>
      <div className="todo__item__controls">
        {
          !task.isDone ?
            <button className="btn btn-secondary"
              onClick={() => editTask(taskIndex)}>
              <span className="fas-icon">pen</span>
            </button>
            :
            ''
        }
        <button className="btn btn-danger"
          onClick={() => deleteTask(taskIndex)}>
          <span className="fas-icon">trash</span>
        </button>
      </div>
    </div>
  );
}

function TaskInput({ addTask }) {
  const [text, setInput] = useState("");
  const handleInputSubmit = ((e) => {
    e.preventDefault();
    if (!text) {
      alert("Please insert a task to add.");
    } else {
      addTask(text);
    }
    setInput("");
  });

  return (
    <form className="todo__submit" onSubmit={handleInputSubmit}>
      <div className="row">
        <div className="col-sm-9 todo__submit__item">
          <input type="text" className="form-control" value={text}
            onChange={(e) => setInput(e.target.value)} placeholder="What's next?" />
        </div>
        <div className="col-sm-3 todo__submit__item">
          <button className="btn btn-primary" type="submit">
            <span className="fas-icon">plus</span>
          </button>
        </div>
      </div>
    </form>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { text: "This is a task.", isDone: true },
    { text: "You can toggle me, edit me, or delete me when it's done.", isDone: false },
    { text: "Feel free to add new tasks in the input above!", isDone: false }
  ]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  }

  const editTask = index => {
    const newTasks = [...tasks];
    var newText = prompt("Please enter modified text:", newTasks[index].text);
    if (newText !== null && newText !== "") {
      newTasks[index].text = newText;
    }
    setTasks(newTasks);
  }

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  return (
    <section id="main" className="abs-center">
      <div className="container">
        <div className="todo">
          <h2>TO DO LIST - JORGE ANTONIO RAMÍREZ PADILLA</h2>
          <TaskInput addTask={addTask} />
          <div className="todo__items">
            {
              tasks.map((task, index) => (
                <Task key={index} taskIndex={index} task={task}
                  toggleTask={toggleTask} deleteTask={deleteTask}
                  editTask={editTask} />
              ))
            }
          </div>
        </div>
        <div className="contact row">
          <div className="col-lg-3">
            <h3 className="fas-icon">phone</h3>
            <p>+52 1 449 108 7562</p>
          </div>
          <a href="mailto:jarp9665@gmail.com" className="col-lg-3">
            <h3 className="fas-icon">envelope</h3>
            <p>jarp9665@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/jarp96/" className="col-lg-3">
            <h3 className="fab-icon">linkedin</h3>
            <p>jarp96</p>
          </a>
          <a href="https://github.com/JARP-96" className="col-lg-3">
            <h3 className="fab-icon">github</h3>
            <p>JARP-96</p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default App;