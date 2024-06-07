import './App.css';
import Header from './components/Header.jsx';
import NewTask from './components/NewTask.jsx';
import Tasks from './components/Tasks.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { checked: false, id: Math.random(), name: 'Tarea 1' },
    { checked: false, id: Math.random(), name: 'Tarea 2' },
    { checked: false, id: Math.random(), name: 'Tarea 3' }
  ]);

  const tasksCompleted = tasks.filter((task) => task.checked).length;

  function handleAddTask(taskName) {
    setTasks((prevTasks) => [...prevTasks, { checked: false, id: Math.random(), name: taskName }]);
  }

  function handleEditTask(taskId, taskName) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, name: taskName } : task))
    );
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleCheckTask(event, taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: event.target.checked } : task
      )
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Header tasks={tasks.length} tasksCompleted={tasksCompleted} />
      <NewTask onAdd={handleAddTask} taskName="" />
      <Tasks
        tasks={tasks}
        handleEdit={handleEditTask}
        handleDelete={handleDeleteTask}
        handleCheck={handleCheckTask}></Tasks>
    </div>
  );
}

export default App;
