import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  onToggleStatus,
  onEditTask,
  onDeleteTask,
}) => {
  if (tasks.length === 0) {
    return (
      <section className="task-list task-list--empty">
        <h3>No hay tareas registradas</h3>
        <p>Crea tu primera tarea para comenzar a organizar tus actividades.</p>
      </section>
    );
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  );
};

export default TaskList;