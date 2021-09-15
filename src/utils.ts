export function pickRandomArrayElement(array: any[]): any {
  const randomIndex = getRandomNumberBetween(0, array.length);
  return array[randomIndex];
}

export function getRandomNumberBetween(
  min: number,
  max: number,
  includeMax: boolean = false
): number {
  if (min >= max) {
    throw new Error(
      'First parameter { min } must be less than second parameter { max }'
    );
  }

  const multiplier = max - min + (includeMax ? 1 : 0) + min;

  const random = Math.random() * multiplier;
  return Math.floor(random);
}
