type ColorName = keyof typeof COLOR_MAP;

export const COLOR_MAP = {
  ['blue-100']: '25AAE1',
  ['blue-200']: '238CB8',
  ['blue-500']: '1C3144',
  ['white-100']: 'FFFBFE',
  ['white-200']: 'F3F5F7',
  ['gray-100']: 'D5D7D9',
  ['gray-200']: '828F99',
  ['gray-300']: '777777',
  ['gray-400']: '505050',
  ['black-100']: '1D252B',
  ['black-200']: '11151C',
  ['red-050']: 'FF470F',
  ['red-100']: 'DB3300',
  ['red-200']: 'C73104',
  ['red-300']: 'A9310D',
  ['red-400']: '641700',
  ['green-100']: '25732B',
  ['green-900']: '2C4218',
  ['pastel-red-100']: 'FDDEDE',
  ['pastel-blue-100']: 'DAEBF2',
  ['pastel-green-100']: 'EFFAE6',
  ['pastel-green-200']: 'D6E5CA',
};

export const color = (colorName: ColorName): string =>
  `#${COLOR_MAP[colorName]}`;

/**
 * Fluent API for color manipulation.
 */
export default class Color {
  private colorName: ColorName;
  private alpha: number;

  constructor(colorName: ColorName) {
    this.colorName = colorName;
    this.alpha = 1;
  }

  private colorValue() {
    return COLOR_MAP[this.colorName];
  }

  /**
   * Adds an alpha value to the color.
   *
   * @param alpha a number between 0 and 1 representing the alpha value to add.
   */
  withAlpha(alpha: number) {
    if (alpha < 0 || alpha > 1)
      throw new Error(
        'Illegal Argument: alpha must be a value between 0 and 1',
      );

    this.alpha = alpha;

    return this;
  }

  /**
   * Returns the color as an rgba string.
   *
   * @returns a string in the format 'rgba(r, g, b, a)'
   */
  rgba() {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      this.colorValue(),
    );

    if (!result) throw new Error('Unable to parse color');

    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16,
    )}, ${parseInt(result[3], 16)}, ${this.alpha})`;
  }

  /**
   * Returns the color as a hexadecimal string.
   *
   * @returns a string in the format `#RRGGBBAA` if an alpha value was added. `#RRGGBB` otherwise.
   */
  hex() {
    if (this.alpha !== 1) {
      return `#${this.colorValue()}${parseInt(this.alpha.toString(16), 16)}`;
    }

    return `#${this.colorValue()}`;
  }
}
