import randomColor from "randomcolor";

type ColorMode = "dark" | "light" | "bright" | "random";

type formatOptins =
  | "hsvArray"
  | "hslArray"
  | "hsl"
  | "hsla"
  | "rgbArray"
  | "rgb"
  | "rgba"
  | "hex";

/**
 *
 * Get a Random  color, refresh the page to  change
 * @param seed when passed will cause randomColor to return the same color when changed
 */

export function getRandomColors(
  seed: string,
  luminosity: ColorMode = "dark",
  format: formatOptins = "hsla"
) {
  return randomColor({
    luminosity,
    seed,
    format,
  });
}

type Cache = {
  [key: string]: string;
};

const cache: Cache = {};

/**
 *
 * @param seed
 * @param luminosity
 */

export const getPerRandomColor = (
  seed: string,
  luminosity: ColorMode = "dark",
  format: formatOptins = "rgbArray"
) => {
  if (cache[seed]) {
    return cache[seed];
  }
  const color = getRandomColors(seed, luminosity);
  if (color) {
    cache[seed] = color;
    return color;
  }
  cache[seed] = randomColor({ luminosity, format });
};
