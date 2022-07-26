import { useState } from "react";
import Header from "./components/Header";
import TodoTask from "./components/TodoTask";

function App() {
  
  const [task, setTask] = useState("")
  const [deadline, setDeadline] = useState(0)
  const [todoList, setTodoList] = useState([])

  const addTask = () => {
    const newTask = { taskName: task, deadline };
    console.log(newTask)
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const handleChange = (event) => {
    if (event.target.name === "task") {
      console.log(event.target.name + "\n value:" + event.target.value)
      setTask(event.target.value);
    } else {
      console.log(event.target.name + "\n value:" + event.target.value)
      setDeadline(Number(event.target.value));
    }
  };

  return (
    <div className="App">
      <Header task={task} setTask={setTask} deadline={deadline} addTask={addTask} handleChange={handleChange}/>
      <TodoTask todoList={todoList} completeTask={completeTask}/>
    </div>
  );
}

export default App;
