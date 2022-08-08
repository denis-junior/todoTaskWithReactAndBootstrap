import { useState } from "react";
import Header from "./components/Header";
import TodoTask from "./components/TodoTask";

function App() {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    const newTask = { 
      taskName: task, 
      deadline: deadline };

    if(!task || deadline <= 0){
      alert("valores inválidos")
    }else {
      setTodoList([...todoList, newTask]);
      setTask("");
      setDeadline(0);
    }

  };

  const completeTask = (taskNameToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return (task.taskName !== taskNameToDelete);
      })
    );
    console.log(taskNameToDelete)
    console.log("I'm here")
  };

  const handleChange = (event) => {
    //console.log(event.target.name)
    if (event.target.name === "task") {
      //console.log(event.target.name + "\n value:" + event.target.value)
      setTask(event.target.value);
    } else {
      //console.log(event.target.name + "\n value:" + event.target.value)
      setDeadline(Number(event.target.value));
    }
  };

  return (
    <div className="App">
      <header>
        <label htmlFor="">taskname</label>
        <input type="text" name="task" value={task} onChange={handleChange} />

        <label htmlFor="">deadline</label>
        <input
          type="number"
          name="deadline"
          value={deadline}
          onChange={handleChange}
        />

        <button onClick={() => addTask()}>Add Task</button>
      </header>

      <div>
        {todoList.map((task, key) => {
          return (
            <div key={key}>
              <h3>{task.taskName}</h3>
              <h4>{task.deadline}</h4>
              <button onClick={() => completeTask(task.taskName)}>Finalizar tarefa</button>
              <h2>- - - - - - - - - </h2>
            </div>
          );
        })}
      </div>

      {/*<Header task={task} setTask={setTask} deadline={deadline} addTask={addTask} handleChange={handleChange}/>
      <TodoTask todoList={todoList} completeTask={completeTask}/>*/}
    </div>
  );
}

export default App;
