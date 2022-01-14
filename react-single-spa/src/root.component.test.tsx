import { render } from "@testing-library/react";
import Root from "./index";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
