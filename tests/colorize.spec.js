const { colorit } = require('../lib');
const tw = require('tailwindcss/colors');
const chalk = require('chalk');
const inst = new chalk.Instance({ level: 3 });

describe('Color functionalities', () => {
  describe('Tailwindcss colors', () => {
    describe('Colors and shade separated by _', () => {
      it('Should return the same string if given an amber shade', () => {
        const value = 'String colored';
        const amber = colorit.amber_500(value);
        expect(value.length).toBeLessThan(amber.length);
      });

      it('Should return the same string but colored teal', () => {
        const value = 'String colored';
        const teal = colorit.teal_700(value);
        expect(value.length).toBeLessThan(teal.length);
      });
    });

    describe('Color only', () => {
      it('Should assume 500 shade and return same string', () => {
        const value = 'Some other string';
        const sky = colorit.sky(value);
        expect(sky.length).toBeGreaterThan(value.length);
      });
    });
  });

  describe('Named colors', () => {
    it('Should accept a named color as a function name', () => {
      const value = 'Try named colors';
      const palegreen = colorit.palegreen(value);
      expect(palegreen.length).toBeGreaterThan(value.length);
    });

    it('Should accept an inverted flag after the string', () => {
      const value = 'Try named colors';
      const palegreen = colorit.palegreen(value);
      const inverted = colorit.palegreen(value, { inverted: true });
      expect(palegreen.length).toBeGreaterThan(value.length);
      expect(palegreen.length).not.toEqual(inverted.length);
    });
  });

  describe('Hex colors', () => {
    const text = 'Testing hex colors';
    it('Should allow for a function named hex, with hex code as first argument', () => {
      const gray = colorit.hex('#888', text);
      const grayInverted = colorit.hex('#888', text, { inverted: true });
      expect(gray.length).not.toEqual(text.length);
      expect(grayInverted.length).not.toEqual(text.length);
    });

    it('Should take a hex color as a named function', () => {
      const gray = colorit['#888'](text);
      const grayInverted = colorit['#888'](text, { inverted: true });
      expect(gray.length).not.toEqual(text.length);
      expect(grayInverted.length).not.toEqual(text.length);
    });
  });

  describe('Inverted, dim, bold, italic, underlined, strikethrough styles', () => {
    const text = `Styled tailind text`;
    it('Should display tailwind shade underlined', () => {
      const underlined = colorit.emerald_200(text, { underline: true });
      expect(underlined.length).toBeGreaterThan(text.length);
      expect(text.length).not.toEqual(underlined.length);
    });
    it('Should display tailwind shade bold', () => {
      const bold = colorit.emerald_200(text, { bold: true });
      expect(bold.length).toBeGreaterThan(text.length);
      expect(text.length).not.toEqual(bold.length);
    });
    it('Should display tailwind shade italic', () => {
      const italic = colorit.emerald_200(text, { italic: true });
      expect(italic.length).toBeGreaterThan(text.length);
      expect(text.length).not.toEqual(italic.length);
    });
    it('Should display tailwind shade strikethrough', () => {
      const strikethrough = colorit.emerald_200(text, { strikethrough: true });
      expect(strikethrough.length).toBeGreaterThan(text.length);
      expect(text.length).not.toEqual(strikethrough.length);
    });
    it('Should display tailwind shade inverted', () => {
      const inverted = colorit.emerald_200(text, { inverted: true });
      expect(inverted.length).toBeGreaterThan(text.length);
      expect(text.length).not.toEqual(inverted.length);
    });

    it('Should combine multiple styles tailing shade', () => {
      const multiple = colorit.emerald_200(text, {
        bold: true,
        italic: true,
        strikethrough: true,
        inverted: true,
      });
      expect(multiple.length).toBeGreaterThan(text.length);
      expect(text.length).not.toEqual(multiple.length);
    });
  });
});
