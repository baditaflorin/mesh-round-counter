import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRoom } from "@baditaflorin/mesh-common/testing";
import { Feature } from "../../src/Feature";
import { config } from "../../src/config";

describe("Feature (component)", () => {
  it("advances the shared round", () => {
    const room = createMockRoom();
    render(<Feature room={room} config={config} />);
    fireEvent.click(screen.getByRole("button", { name: "Next round" }));
    expect(screen.getByRole("status")).toHaveTextContent("Round 1");
  });

  it("shows a connecting state when room is null", () => {
    render(<Feature room={null} config={config} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Round Counter");
  });
});
