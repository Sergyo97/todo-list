export default function Header({ tasks, tasksCompleted }) {
  return (
    <>
      <h1>Lista de Tareas</h1>
      <p>
        Se han completado {tasksCompleted} de {tasks} tareas
      </p>
    </>
  );
}
