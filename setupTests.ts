import "@testing-library/jest-dom";
import {cleanup} from "@testing-library/react";
import {afterEach} from "vitest";
import {vi} from "vitest";

afterEach(() => {
  vi.resetAllMocks();
  cleanup();
});
