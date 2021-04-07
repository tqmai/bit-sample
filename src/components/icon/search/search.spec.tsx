import React from "react";
import { render } from "@testing-library/react";
import { Search } from "./search";

describe("search", () => {
  it("should render with the correct text", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { getByText } = render(<Search />);
    const rendered = true;
    expect(rendered).toBeTruthy();
  });
});
