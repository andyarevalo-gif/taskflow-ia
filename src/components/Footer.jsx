import { CheckSquare, Code2, Sparkles } from "lucide-react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__icon">
          <CheckSquare size={24} />
        </div>

        <div>
          <h2>TaskFlow IA</h2>
          <p>Gestor de tareas desarrollado con asistencia de inteligencia artificial.</p>
        </div>
      </div>

      <div className="footer__info">
        <p>
          <Sparkles size={16} />
          React + Vite · LocalStorage · Lucide React
        </p>

        <p>
          <Code2 size={16} />
          Proyecto académico - Actividad 1
        </p>
      </div>
    </footer>
  );
};

export default Footer;