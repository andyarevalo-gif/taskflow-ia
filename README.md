# TaskFlow IA

Aplicación web de gestión de tareas desarrollada con **React** y **Vite**, diseñada para facilitar la organización de actividades mediante una interfaz intuitiva y moderna. El proyecto fue desarrollado como parte de la asignatura **Generación de Código con Inteligencia Artificial** del Máster en Ingeniería de Software y Sistemas Informáticos.

## Características

- Crear nuevas tareas.
- Editar tareas existentes.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas.
- Buscar tareas por título.
- Filtrar tareas por estado y prioridad.
- Visualizar estadísticas en tiempo real.
- Persistencia de la información mediante LocalStorage.

## Tecnologías utilizadas

- React
- Vite
- JavaScript (ES6)
- CSS3
- Lucide React

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/andyarevalo-gif/taskflow-ia.git
```

Ingresar al proyecto:

```bash
cd taskflow-ia
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

# Pruebas automatizadas

Como parte de la Actividad 2 se implementó un entorno de pruebas automatizadas utilizando **Vitest** y **React Testing Library** para validar las funcionalidades principales de la aplicación.

## Ejecutar las pruebas

```bash
npm test
```

## Generar el reporte de cobertura

```bash
npm run test:coverage
```

## Funcionalidades verificadas

### Pruebas unitarias

- Persistencia de tareas mediante LocalStorage.
- Recuperación de tareas almacenadas.

### Pruebas de integración e interfaz

- Creación de tareas.
- Edición de tareas.
- Cambio de estado de tareas.
- Eliminación de tareas.
- Búsqueda de tareas.
- Integración entre los principales componentes de la aplicación.

## Cobertura

Las pruebas implementadas alcanzan una cobertura superior al **90 %** en las principales métricas del proyecto (Statements, Branches, Functions y Lines), garantizando la validación de las funcionalidades críticas de la aplicación.

## Repositorio

https://github.com/andyarevalo-gif/taskflow-ia

## Aplicación desplegada

https://taskflow-ia-ten.vercel.app

---

**Autor**

Desarrollado por Andy Arévalo como parte de las actividades académicas del Máster en Ingeniería de Software y Sistemas Informáticos.
