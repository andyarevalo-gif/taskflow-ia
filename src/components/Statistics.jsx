import { ClipboardList, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const Statistics = ({ tasks }) => {
  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "pendiente"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completada"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "alta"
  ).length;

  const stats = [
    {
      title: "Total",
      value: totalTasks,
      icon: <ClipboardList size={28} />,
    },
    {
      title: "Pendientes",
      value: pendingTasks,
      icon: <Clock size={28} />,
    },
    {
      title: "Completadas",
      value: completedTasks,
      icon: <CheckCircle2 size={28} />,
    },
    {
      title: "Alta prioridad",
      value: highPriorityTasks,
      icon: <AlertTriangle size={28} />,
    },
  ];

  return (
    <section className="statistics">
      {stats.map((stat) => (
        <article className="statistics__card" key={stat.title}>
          <div className="statistics__icon">{stat.icon}</div>

          <div>
            <p>{stat.title}</p>
            <strong>{stat.value}</strong>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Statistics;