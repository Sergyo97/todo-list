export default function Header({ tasks, tasksCompleted }) {
  return (
    <>
      <h1 className="text-4xl">Lista de Tareas</h1>
      <p className="text-2xl">
        Se han completado {tasksCompleted} de {tasks} tareas
      </p>
    </>
  );
}
