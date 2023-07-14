import {parseLiterals, completeText} from '../utils/string';

export const palette = {
  colorBasic100: '#FFFFFF',
  colorBasic200: '#F7F7F7',
  colorBasic300: '#E0DFDF',
  colorBasic400: '#C9C4C4',
  colorBasic500: '#7B7375',
  colorBasic600: '#5C5456',
  colorBasic700: '#484143',
  colorBasic800: '#2B2728',
  colorBasic900: '#231F20',

  // Need to add a color? Name it with https://www.color-name.com/
  colorDarkGunmetal: '#21262DE5',
  colorBlack: '#000000',
  colorPaleViolet: '#C9A0F8',
  colorBrightGray: '#EDEDED',
  colorSpanishGray: '#9B9B9B',
} as const;

/**
 * Tagged string function that return one color from the color palette by using it name. If no color is found it will throw an error
 * @param literals Tagged string with one of the colors in the palette with the format colorGroupShadeNumber or just groupShadeNumber ex. colorAlert500, alert500
 * @returns
 */
export function colors(literals: TemplateStringsArray) {
  const name = completeText(parseLiterals(literals), 'color');
  if (!(name in palette)) {
    throw new Error(`Requested color named ${name} was not found on theme palette.`);
  }
  return palette[name as keyof typeof palette];
}
