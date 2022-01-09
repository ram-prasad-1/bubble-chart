import { hsluvToHex } from 'hsluv';

const withShuffling = (arr) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const getColors = (size) => {
  if (size === 0) return [];

  const arr = []
  const saturation = 100;
  const lightness = 50;

  for (let i = 1; i <= size; i++) {
    const hex = hsluvToHex([Math.floor((360/(size + 3)) * i), saturation, lightness]);
    arr.push(hex);
  }

  return  arr
}



