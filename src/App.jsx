import './App.css';
import Header from './components/Header.jsx';
import NewTask from './components/NewTask.jsx';
import Tasks from './components/Tasks.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { checked: false, name: 'Tarea 1' },
    { checked: false, name: 'Tarea 2' },
    { checked: false, name: 'Tarea 3' }
  ]);

  const tasksCompleted = tasks.filter((task) => task.checked).length;

  function handleAddTask(taskName) {
    setTasks((prevTasks) => [...prevTasks, { checked: false, name: taskName }]);
  }

  return (
    <>
      <Header tasks={tasks.length} tasksCompleted={tasksCompleted} />
      <NewTask onAdd={handleAddTask} taskName="" />
      <Tasks tasks={tasks}></Tasks>
    </>
  );
}

export default App;
