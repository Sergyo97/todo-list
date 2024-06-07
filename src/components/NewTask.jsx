import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function NewTask({ onAdd, taskName }) {
  const [taskInput, setTaskInput] = useState(taskName);

  function handleChange(event) {
    event.preventDefault();
    setTaskInput(event.target.value);
  }

  return (
    <div className="flex items-center justify-center gap-1">
      <TextField
        fullWidth
        size="small"
        label="¿Qué tienes planeado para hoy?"
        variant="outlined"
        value={taskInput}
        onChange={handleChange}
      />
      <Button onClick={() => onAdd(taskInput)} disabled={taskInput === ''}>
        Agregar Tarea
      </Button>
    </div>
  );
}
