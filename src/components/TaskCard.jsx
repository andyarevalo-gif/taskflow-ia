import { CheckCircle2, Clock, Pencil, Trash2, RotateCcw } from "lucide-react";

const TaskCard = ({
  task,
  onToggleStatus,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <article className={`task-card ${task.status === "completada" ? "task-card--completed" : ""}`}>
      <div className="task-card__content">
        <div className="task-card__header">
          <h3>{task.title}</h3>

          <span className={`task-card__priority task-card__priority--${task.priority}`}>
            {task.priority}
          </span>
        </div>

        <p>{task.description}</p>

        <div className="task-card__meta">
          <span>
            <Clock size={15} />
            {task.dueDate || "Sin fecha"}
          </span>

          <span>
            {task.status === "completada" ? (
              <CheckCircle2 size={15} />
            ) : (
              <Clock size={15} />
            )}
            {task.status}
          </span>
        </div>
      </div>

      <div className="task-card__actions">
        <button type="button" onClick={() => onToggleStatus(task.id)}>
          {task.status === "completada" ? (
            <RotateCcw size={18} />
          ) : (
            <CheckCircle2 size={18} />
          )}
        </button>

        <button type="button" onClick={() => onEditTask(task)}>
          <Pencil size={18} />
        </button>

        <button type="button" onClick={() => onDeleteTask(task.id)}>
          <Trash2 size={18} />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;