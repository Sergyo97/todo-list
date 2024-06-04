import './App.css';
import { Button, Checkbox, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([
    { checked: false, label: 'Tarea 1' },
    { checked: false, label: 'Tarea 2' },
    { checked: false, label: 'Tarea 3' }
  ]);
  const [editingTask, setEditingTask] = useState(null);
  const [editInputValue, setEditInputValue] = useState('');

  // DERIVED STATE
  const tasksCompleted = tasks.filter((t) => t.checked).length;

  function addTask() {
    setTasks((prevState) => [...prevState, { checked: false, label: taskInput }]);
    setTaskInput('');
  }

  function deleteTask(task) {
    setTasks((prevState) => prevState.filter((t) => t.label !== task));
  }

  function editTask(task) {
    setEditingTask(task.label);
    setEditInputValue(task.label);
  }

  function updateTask(value, task) {
    setTasks((prevState) =>
      prevState.map((t) => (t.label === task.label ? { ...t, label: value } : t))
    );
  }

  function checkTask(event, task) {
    setTasks((prevState) =>
      prevState.map((t) => (t.label === task ? { ...t, checked: event.target.checked } : t))
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">Lista de Tareas</h1>
        <h2 className="text-2xl">
          Se han completado {tasksCompleted} de {tasks.length} tareas
        </h2>
        <div className="flex flex-row items-center justify-between">
          <TextField
            value={taskInput}
            fullWidth
            size="small"
            label="Qué tienes planeado para hoy?"
            variant="outlined"
            onChange={(event) => {
              setTaskInput(event.target.value);
            }}></TextField>
          <Button onClick={addTask} disabled={taskInput === ''}>
            Agregar tarea
          </Button>
        </div>
        <ul>
          {tasks.map((t) => (
            <li className="flex flex-row items-center justify-center" key={t.label}>
              <Checkbox checked={t.checked} onChange={(event) => checkTask(event, t.label)} />
              <div className="flex flex-row gap-3 justify-between items-center">
                {editingTask === t.label ? (
                  <TextField
                    value={editInputValue}
                    size="small"
                    variant="outlined"
                    onChange={(event) => {
                      setEditInputValue(event.target.value);
                    }}></TextField>
                ) : (
                  <p>{t.label}</p>
                )}
                {editingTask === t.label ? (
                  <IconButton onClick={() => updateTask(editInputValue, t)}>
                    <CheckIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => editTask(t)}>
                    <EditIcon />
                  </IconButton>
                )}
                <IconButton onClick={() => deleteTask(t.label)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
