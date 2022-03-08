import { render } from "@testing-library/react";
import Main from ".";

describe("Home", () => {
  it("renders an App", () => {
    const { getByText } = render(<Main />);

    expect(getByText("Test")).toBeInTheDocument();
  });
});
