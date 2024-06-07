import Task from './Task.jsx';

export default function Tasks({ tasks, handleEdit, handleDelete, handleCheck }) {
  return (
    <ul>
      {/*TODO: PROP Types*/}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCheck={handleCheck}></Task>
      ))}
    </ul>
  );
}
