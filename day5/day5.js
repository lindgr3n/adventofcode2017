export const toNumberArrayFromRows = input => {
  const array = toArrayFromRows(input);
  return array.map(e => parseInt(e));
}

export const toArrayFromRows = input => {
  return input.split('\n');
}

  /*
  (0) 3  0  1  -3  - before we have taken any steps.
(1) 3  0  1  -3  - jump with offset 0 (that is, don't jump at all). Fortunately, the instruction is then incremented to 1.
 2 (3) 0  1  -3  - step forward because of the instruction we just modified. The first instruction is incremented again, now to 2.
 2  4  0  1 (-3) - jump all the way to the end; leave a 4 behind.
 2 (4) 0  1  -2  - go back to where we just were; increment -3 to -2.
 2  5  0  1  -2  - jump 4 steps forward, escaping the maze.
 */
export const stepsToEscapeMaze = async (input) => {
  //return new Promise((resolve, reject) => {
    const arrayOfSteps = toNumberArrayFromRows(input); 
    const steps = await traverseThroughMazeAndGetSteps(arrayOfSteps, 0, 0)
    // steps.then((steps) => resolve(steps))
    return steps;
    // console.log('Steps: ' + steps);
    // resolve(steps);
  //})
}

export async function traverseThroughMazeAndGetSteps(array, index, steps) {
  // return new Promise((resolve, reject) => {
    steps++;
    const jumpTo = array[index];
  
    if(haveEscaped(array, index, jumpTo)) {
      // resolve(steps);    
      return steps;
    }
  
    const updatedStepArray = inCreaseStepArray(array, index);
    
    //setTimeout(() => {
      
      const t = await traverseThroughMazeAndGetSteps(updatedStepArray, jumpTo, steps);
      return t;
      // t.then((val) => resolve(val));
    //}, 0);
  // })  
}

function inCreaseStepArray(array, index) {
  let arrClone = [...array];
  arrClone[index] = arrClone[index] + 1;
  return arrClone;
}

function haveEscaped(array, index, jumpTo) {
  return (index + jumpTo) > array.length -1
}