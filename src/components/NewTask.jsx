import { useState } from 'react';

export default function NewTask({ onAdd, taskName }) {
  const [taskInput, setTaskInput] = useState(taskName);

  function handleChange(event) {
    setTaskInput(event.target.value);
  }

  return (
    <div>
      <input type="text" value={taskInput} onChange={handleChange} />
      <button onClick={onAdd}>Nueva Tarea</button>
    </div>
  );
}
