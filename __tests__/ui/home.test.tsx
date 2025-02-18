import Banner from "@/src/components/banner/Banner";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import {vi} from "vitest";

vi.mock("motion/react", () => ({
  motion: {
    div: ({children, ...rest}: {children: React.ReactNode; [key: string]: any}) => (
      <div {...rest}>{children}</div>
    ),
  },
}));

describe("check home components", () => {
  it("picture of banner loaded", () => {
    render(<Banner />);
    const textElement = screen.getByText(/Created to change everything for the better/i);

    expect(textElement).toBeInTheDocument();
  });
});
