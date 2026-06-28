import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import Statistics from "../components/Statistics";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import {
  getTasksFromStorage,
  saveTasksToStorage,
} from "../services/localStorageService";

const Home = () => {
  const [tasks, setTasks] = useState(() => getTasksFromStorage());
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todas");
  const [priorityFilter, setPriorityFilter] = useState("todas");

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };
  const handleToggleStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: task.status === "completada" ? "pendiente" : "completada",
          }
        : task,
    );

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const confirmDelete = window.confirm("¿Deseas eliminar esta tarea?");

    if (!confirmDelete) return;

    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskToEdit) => {
    setEditingTask(taskToEdit);
  };
  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );

    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "todas" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "todas" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__tag">Gestor de tareas con IA</p>

        <h1>TaskFlow IA</h1>

        <p>
          Organiza tu trabajo de forma eficiente. Gestiona tareas, prioridades y
          fechas límite desde una interfaz intuitiva y moderna.
        </p>
      </section>

      <Statistics tasks={tasks} />

      <section className="home__panel">
        <TaskForm
          onAddTask={handleAddTask}
          editingTask={editingTask}
          onUpdateTask={handleUpdateTask}
          onCancelEdit={() => setEditingTask(null)}
        />
      </section>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleStatus={handleToggleStatus}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />

      <Footer />
    </main>
  );
};

export default Home;
