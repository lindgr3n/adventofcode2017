export const formatListAccordingToLength = (index, list, length) => {
  const toReverse = toBeReversed(index, list, length);
  const rest = leftOvers(index, list, length);
  const reversed = reverseObj(toReverse);
  console.log('toReverse:', toReverse)
  console.log('reversed:', reversed)
  console.log('rest: ', rest)
  if(index + length > list.length) {
    if(rest.end) {
      const res = [...rest.start, ...reversed.start, ...rest.end];
      console.log('res', res);
      return res;
    }
    const res = [...reversed.end, ...rest.end, ...reversed.start];
    console.log('res', res);
    return res;
  }
  return [...reversed, ...rest];
} 

function reverseObj(input) {
  const reversed = input.end ? [...input.end, ...input.start] : [...input.start];
  const start = [...reversed].reverse().slice(0, input.start.length);
  const end = input.end ? [...reversed].reverse().slice(input.start.length, reversed.length) : [];
  return Object.assign({}, {start, end});
}

function toBeReversed(index, list, length) {
  if(index + length > list.length) {
    const indexesLeft = (list.length) - index;
    const start = list.slice(0, indexesLeft);
    const end = list.slice(index, list.length);
    console.log('start: ', start)
    console.log('end: ', end)
    return {end, start};
  }
  return {start: list.slice(index, index + length)};
}

function leftOvers(index, list, length) {
  if(index + length > list.length) {
    const indexesLeft = (list.length) - index;
    return {start: list.slice(indexesLeft, index)};
  }
  const start = list.slice(0, index);
  const end = list.slice(index+length, list.length);
  return {start, end};
}