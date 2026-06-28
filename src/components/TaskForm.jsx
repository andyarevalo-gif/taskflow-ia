import { useEffect, useState } from "react";
import { Plus, Save, X } from "lucide-react";
import { PRIORITIES } from "../data/taskOptions";

const initialForm = {
  title: "",
  description: "",
  priority: "baja",
  dueDate: "",
};

const TaskForm = ({
  onAddTask,
  editingTask,
  onUpdateTask,
  onCancelEdit,
}) => {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        dueDate: editingTask.dueDate,
      });
    } else {
      setFormData(initialForm);
    }
  }, [editingTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim()) return;

    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        ...formData,
      };

      onUpdateTask(updatedTask);
      return;
    }

    const newTask = {
      id: Date.now(),
      ...formData,
      status: "pendiente",
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setFormData(initialForm);
  };

  return (
    <section className="task-form">
      <h2>{editingTask ? "Editar tarea" : "Nueva tarea"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título de la tarea"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
        />

        <div className="task-form__row">
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            {PRIORITIES.map((priority) => (
              <option key={priority.value} value={priority.value}>
                {priority.label}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="task-form__actions">
          <button type="submit">
            {editingTask ? <Save size={18} /> : <Plus size={18} />}
            {editingTask ? "Guardar cambios" : "Crear tarea"}
          </button>

          {editingTask && (
            <button
              type="button"
              className="task-form__cancel"
              onClick={onCancelEdit}
            >
              <X size={18} />
              Cancelar
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default TaskForm;