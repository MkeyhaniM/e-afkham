import Banner from "@/src/components/banner/Banner";
import Slide from "@/src/components/slide/Slide";

import {createClient} from "@/src/utils/supabase/server";

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

vi.mock("@/src/utils/supabase/server", () => ({
  createClient: vi.fn(),
}));

vi.mock("./ItemSlide", () => {
  return ({title}: {title: string}) => <div data-testid="item-slide">{title}</div>;
});

vi.mock("next/image", () => ({
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("check home components", () => {
  it("picture of banner loaded", () => {
    render(<Banner />);
    const textElement = screen.getByText(/Created to change everything for the better/i);

    expect(textElement).toBeInTheDocument();
  });

  it("check posts takes successfully", async () => {
    (createClient as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockResolvedValue({
          data: [
            {
              id: 1,
              title: "Slide 1",
              description: "Description 1",
              image_url: "https://",
            },
            {
              id: 2,
              title: "Slide 2",
              description: "Description 2",
              image_url: "https://",
            },
          ],
          error: null,
        }),
      }),
    });

    const element = await Slide();
    render(element);

    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("if sliders has error", async () => {
    (createClient as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockResolvedValue({
          data: null,
          error: {message: "Error occurred"},
        }),
      }),
    });

    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const element = await Slide();
    render(element);

    expect(screen.getByText("Error loading slides")).toBeInTheDocument();
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching sliders:", {
      message: "Error occurred",
    });

    consoleErrorSpy.mockRestore();
  });
});
