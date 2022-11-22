import { render } from "@testing-library/react";
import { getRandomColors } from "../getrandomColors";

/**
 * @param seed
 * @param luminosity
 *
 */

describe("utils/getrandomColors.ts", () => {
  it("should return a random color", () => {
    const seed = "#000";
    const luminosity = "dark";
    expect(getRandomColors(seed, luminosity)).toBe("#000");
  });
});
