import { Search } from "lucide-react";
import { PRIORITIES } from "../data/taskOptions";

const FilterBar = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) => {
  return (
    <section className="filter-bar">
      <div className="filter-bar__search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Buscar tarea..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <select
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
      >
        <option value="todas">Todas las tareas</option>
        <option value="pendiente">Pendientes</option>
        <option value="completada">Completadas</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(event) => setPriorityFilter(event.target.value)}
      >
        <option value="todas">Todas las prioridades</option>

        {PRIORITIES.map((priority) => (
          <option key={priority.value} value={priority.value}>
            {priority.label}
          </option>
        ))}
      </select>
    </section>
  );
};

export default FilterBar;