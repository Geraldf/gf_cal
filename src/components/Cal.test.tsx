import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cal from "./Cal";
import React from "react";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    const { container } = render(
      <Cal
        forceFullWeeks={true}
        showWeekdays={true}
        showWeekSeperator={true}
        startOfWeek={1}
      />
    );
    const boxes = container.getElementsByClassName("calendar");
    expect(boxes.length).toBe(1);
  });
});
