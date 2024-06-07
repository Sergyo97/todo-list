export default function Tasks({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.name} className="flex gap-2">
          <input type="checkbox" />
          <p>{task.name}</p>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}
