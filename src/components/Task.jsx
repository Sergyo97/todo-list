import { useState } from 'react';
import { Checkbox, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

export default function Task({ task, onEdit, onDelete, onCheck }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskInput, setTaskInput] = useState(task.name);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleOnChange(event) {
    setTaskInput(event.target.value);
  }

  function save() {
    setIsEditing(false);
    onEdit(task.id, taskInput);
  }

  return (
    <li key={task.id} className="flex items-center gap-2">
      <Checkbox onChange={(event) => onCheck(event, task.id)} />
      {isEditing ? (
        <div className="flex">
          <TextField
            size="small"
            fullWidth
            variant="outlined"
            value={taskInput}
            onChange={(event) => handleOnChange(event)}
          />
          <IconButton onClick={save}>
            <CheckIcon />
          </IconButton>
        </div>
      ) : (
        <>
          <p>{task.name}</p>
          <IconButton onClick={handleEditTask}>
            <EditIcon />
          </IconButton>
        </>
      )}
      <button onClick={() => onDelete(task.id)}>
        <DeleteIcon />
      </button>
    </li>
  );
}
