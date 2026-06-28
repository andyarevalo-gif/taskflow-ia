import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";

describe("Home - flujo principal de TaskFlow IA", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(window, "confirm").mockReturnValue(true);
  });

  it("permite crear, completar, editar, buscar y eliminar una tarea", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.type(
      screen.getByPlaceholderText("Título de la tarea"),
      "Actividad 2",
    );

    await user.type(
      screen.getByPlaceholderText("Descripción"),
      "Crear pruebas automatizadas",
    );

    await user.selectOptions(document.querySelector('select[name="priority"]'), "alta");

    await user.type(document.querySelector('input[name="dueDate"]'), "2026-06-28");

    await user.click(screen.getByRole("button", { name: /crear tarea/i }));

    expect(screen.getByText("Actividad 2")).toBeInTheDocument();
    expect(screen.getByText("Crear pruebas automatizadas")).toBeInTheDocument();
    expect(screen.getByText("alta")).toBeInTheDocument();
    expect(screen.getByText("pendiente")).toBeInTheDocument();

    const taskCard = screen.getByText("Actividad 2").closest("article");
    const buttons = within(taskCard).getAllByRole("button");

    await user.click(buttons[0]);

    expect(screen.getByText("completada")).toBeInTheDocument();

    await user.click(buttons[1]);

    const titleInput = screen.getByPlaceholderText("Título de la tarea");
    await user.clear(titleInput);
    await user.type(titleInput, "Actividad 2 actualizada");

    await user.click(screen.getByRole("button", { name: /guardar cambios/i }));

    expect(screen.getByText("Actividad 2 actualizada")).toBeInTheDocument();

    await user.type(
      screen.getByPlaceholderText("Buscar tarea..."),
      "actualizada",
    );

    expect(screen.getByText("Actividad 2 actualizada")).toBeInTheDocument();

    const updatedTaskCard = screen
      .getByText("Actividad 2 actualizada")
      .closest("article");

    const updatedButtons = within(updatedTaskCard).getAllByRole("button");

    await user.click(updatedButtons[2]);

    expect(screen.queryByText("Actividad 2 actualizada")).not.toBeInTheDocument();
  });
});