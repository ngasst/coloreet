import tailwindColors from 'tailwindcss/colors';
import chalk from 'chalk';
import { cssColorNames } from './color-names';
import { pickRandomArrayElement } from './utils';
import camelize from 'camelcase';
import type { TailwindColorGroup } from 'tailwindcss/tailwind-config';

class Colorize {
  chalk;
  constructor() {
    this.chalk = new chalk.Instance({ level: 3 });
  }
  isTailwind(name: string): boolean {
    if (this.hasShade(name)) {
      return true;
    }

    const color = this.getColorName(name);
    return Object.keys(tailwindColors).includes(color);
  }

  isHex(value: string) {
    return value?.startsWith('#') && [3, 6, 8].includes(value.slice(1).length);
  }

  isNamedColor(name: string) {
    return cssColorNames.includes(name);
  }

  getShade(name: string): number {
    const separator = '_';
    const found = name.split(separator).slice(-1);

    const shade = Number(found[0]);
    return shade;
  }

  hasShade(color: string) {
    const shade = this.getShade(color);
    return !isNaN(shade);
  }

  getColorName(name: string): string {
    const separator = '_';
    if (this.hasShade(name)) {
      const colorName = name.split(separator).slice(0, -1).join('_');
      return camelize(colorName);
    }
    return camelize(name);
  }

  colorize(options: ColorizeOptions, config: ColorizeConfig) {
    const string = options.string;
    const color = options.color;
    const shade = options.shade ?? 500;

    const inverted = config.inverted ?? false;
    const italic = config.italic ?? false;
    const bold = config.bold ?? false;
    const strikethrough = config.strikethrough ?? false;
    const underline = config.underline ?? false;
    const dim = config.dim ?? false;

    if (typeof string !== 'string') {
      throw new Error(
        `Parameter {string} is required and must be of type "string"! Received ${string} of type ${typeof string}`
      );
    }
    // is tailwind
    if (this.isTailwind(<string>color)) {
      const group = <TailwindColorGroup>(
        tailwindColors[<TailwindColorName>color]
      );
      const hex = group[<string>shade];
      let fn = this.chalk.hex(hex);
      inverted && (fn = fn.inverse);
      bold && (fn = fn.bold);
      italic && (fn = fn.italic);
      strikethrough && (fn = fn.strikethrough);
      underline && (fn = fn.underline);
      dim && (fn = fn.dim);

      return fn(string);
    }
    // is named
    // console.log(this.isNamedColor(color), color);
    if (this.isNamedColor(<string>color)) {
      //   console.log(color);
      let fn = this.chalk.keyword(color as string);
      inverted && (fn = fn.inverse);
      bold && (fn = fn.bold);
      italic && (fn = fn.italic);
      strikethrough && (fn = fn.strikethrough);
      underline && (fn = fn.underline);
      dim && (fn = fn.dim);

      return fn(string);
    }

    // is hex
    if (this.isHex(<string>color)) {
      return this.chalk[inverted ? 'bgHex' : 'hex'](<string>color)(string);
    }

    //
    throw new Error(
      'Color value does not match any that are accepted. Try (tailwind color name, css named color, hex code)'
    );
  }

  tailwind({ shade, color }: { shade?: number; color: string }) {
    return (string: string, cfg = {}) => {
      return this.colorize({ color, string, shade }, cfg);
    };
  }

  hex(color: string, string: string, cfg = {}) {
    return this.hexColor(color)(string, cfg);
  }
  hexColor(color: string) {
    return (string: string, cfg = {}) => this.colorize({ color, string }, cfg);
  }

  css(color: string) {
    return (string: string, cfg = {}) => {
      return this.colorize({ color, string }, cfg);
    };
  }

  random(string: string, cfg = {}) {
    const picks = [
      'blueGray',
      'coolGray',
      'gray',
      'trueGray',
      'warmGray',
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuschia',
      'pink',
      'rose',
    ];
    const pick = pickRandomArrayElement(picks);
    return this.colorize({ color: pick, string }, cfg);
  }
}

const instance = new Colorize();

export const colorit = new Proxy(instance, {
  get(target, prop: any) {
    if (prop === 'chalk') return target.chalk;
    if (target.chalk[prop as keyof typeof target.chalk]) {
      return target.chalk[prop as keyof typeof target.chalk];
    }

    if (prop === 'colorize') return target.colorize;

    if (prop === 'random') return target.random;

    if (prop === 'hex') return target.hex;

    if (target.isTailwind(prop)) {
      const shade = target.getShade(prop);
      const name = target.getColorName(prop);
      return target.tailwind({ color: name, shade: shade || undefined });
    }

    if (target.isNamedColor(prop)) {
      return target.css(prop);
    }

    if (target.isHex(prop)) {
      return target.hexColor(prop);
    }

    return target[<keyof typeof instance>prop];
  },
});

export const $c = colorit;

export default $c;

export { pickRandomArrayElement, getRandomNumberBetween } from './utils';

export type ColorizeOptions = {
  color: string | TailwindColorName | CssNamedColorName;
  string: string;
  shade?: TailwindShade;
};

export type ColorizeConfig = {
  inverted?: boolean;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  dim?: boolean;
  underline?: boolean;
};

export type TailwindColorName = keyof TailwindColors;

export type CssNamedColorName = keyof typeof cssColorNames;

export type TailwindShade = keyof TailwindColorGroup;

export interface TailwindColors {
  black: string;
  white: string;
  rose: TailwindColorGroup;
  pink: TailwindColorGroup;
  fuchsia: TailwindColorGroup;
  purple: TailwindColorGroup;
  violet: TailwindColorGroup;
  indigo: TailwindColorGroup;
  blue: TailwindColorGroup;
  lightBlue: TailwindColorGroup;
  sky: TailwindColorGroup;
  cyan: TailwindColorGroup;
  teal: TailwindColorGroup;
  emerald: TailwindColorGroup;
  green: TailwindColorGroup;
  lime: TailwindColorGroup;
  yellow: TailwindColorGroup;
  amber: TailwindColorGroup;
  orange: TailwindColorGroup;
  red: TailwindColorGroup;
  warmGray: TailwindColorGroup;
  trueGray: TailwindColorGroup;
  gray: TailwindColorGroup;
  coolGray: TailwindColorGroup;
  blueGray: TailwindColorGroup;
}
