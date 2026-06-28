import { describe, it, expect, beforeEach } from "vitest";
import {
  getTasksFromStorage,
  saveTasksToStorage,
} from "../services/localStorageService";

describe("localStorageService", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("debe guardar y recuperar tareas desde localStorage", () => {
    const tasks = [
      {
        id: 1,
        title: "Actividad 2",
        description: "Crear pruebas automatizadas",
        priority: "Alta",
        status: "pendiente",
        dueDate: "2026-06-28",
      },
    ];

    saveTasksToStorage(tasks);

    expect(getTasksFromStorage()).toEqual(tasks);
  });

  it("debe devolver un arreglo vacío si no existen tareas guardadas", () => {
    expect(getTasksFromStorage()).toEqual([]);
  });
});