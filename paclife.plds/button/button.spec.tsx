import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./button";

describe("button", () => {
  it("should render with the correct text", () => {
    const { getByText } = render(<Button>hello from Button</Button>);
    const rendered = getByText("hello from Button");
    expect(rendered).toBeTruthy();
  });
});
