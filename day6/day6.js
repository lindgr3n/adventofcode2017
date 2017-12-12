export const getRedistributionCycles = (input) => {
  const arrInputs = getArrayFromSpace(input);
  const numbers = convertArrayToIntegers(arrInputs);
  const processedStates = [];
  // processedStates.push(numbers);
  console.log('Numbers: ', numbers);
  let cycles = 0;
  let state = numbers;
  let maxNumberOfLoops = 1000;
  let loops = 0;
  while(!doExist(state, processedStates)) {
    processedStates.push(state);
    state = getCycledArray(state);
    // console.log('state: ', state);
    cycles++;
    
    // Sanity check
    if(loops++ > maxNumberOfLoops) {
      console.log('Ohh noooo max number of loops reached!')
      return;
    }
  }
  return cycles;
}

export function convertArrayToIntegers(input) {
  return input.map((e) => parseInt(e));
}

export function getArrayFromSpace(input) {
  return input.split(/(\s+)/).filter((element) => element.trim().length > 0);
}

export function doExist(input, array) {
  return array.filter(state => arraysMatch(input, state)).length > 0;
}

export function arraysMatch(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export const getCycledArray = (input) => {
  const {index, value} = getMaxIndexAndValue(input);
  const {spread, left} = valueToSpread(value, input.length);
  
  
  const result = input.map((evalue, i) => {
    if(!shouldIndexBeUpdated(i, input)) {
      return evalue;
    }
    
    if(i === index) {
      return left;
    }
    return evalue + spread;
  })
  return result;
}

export function shouldIndexBeUpdated(currentIndex, array) {
  const {index, value} = getMaxIndexAndValue(array);
  const howManyToSpread = getHowManyToSpead(value, array);
  if(currentIndex === index) {
    return true;
  }

  if(currentIndex > index && currentIndex <= index + howManyToSpread) {
    return true;
  }

  const indexesLeft = index + howManyToSpread - array.length;
  if(currentIndex >= 0 && currentIndex <= indexesLeft) {
    return true;
  }

  return false;
}

function getHowManyToSpead(input, array) {
  return input < array.length ? input : array.length-1;
}

export const getMaxIndexAndValue = (input) => {
  return input.reduce((obj, current, index, array) => {
    if(current > obj.value) {
      obj.index = index;
      obj.value = current;
    }
    return obj;
  }, {index: 0, value: 0});
}

export function valueToSpread(input, numbers) {
  const totalNumbers = numbers-1;
  const spread = input < totalNumbers ? input : Math.floor(input / totalNumbers);
  let left = input - (spread * totalNumbers);
  left = left < 0 ? 0 : left;
  return {spread, left}
  
}