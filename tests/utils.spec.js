const { pickRandomArrayElement } = require('../lib');
describe('utilities', () => {
  describe('[function] pickRandomArrayElement', () => {
    it('Should throw if given an empty array', () => {
      try {
        pickRandomArrayElement([]);
      } catch (err) {
        expect(err).toBeDefined();
      }
    });

    it('Should return a random number given an array with length', () => {
      const result = pickRandomArrayElement([1, 2, 3]);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });

    it('Should include max if flag is passed', () => {
      const result = pickRandomArrayElement([1, 3], true);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });
  });
});
