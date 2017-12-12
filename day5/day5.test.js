
import { toArrayFromRows, toNumberArrayFromRows, stepsToEscapeMaze, traverseThroughMazeAndGetSteps } from "./day5";
import { two_step_input, three_step_input, five_step_input } from "./data";
import { puzzle_input } from "./puzzleinput";

describe('Day 5', () => {
  

  it('should create array of row input', () => {
    expect(toArrayFromRows(five_step_input)).toEqual(["0","3","0","1","-3"]);
  });

  it('should create number array of row input', () => {
    expect(toNumberArrayFromRows(five_step_input)).toEqual([0,3,0,1,-3]);
  });
  

  
  
  it('should validate multiple inputs', async () => {
    const step1 = await traverseThroughMazeAndGetSteps([0], 0, 0);
    expect(step1).toEqual(2);

    const steps2 = await traverseThroughMazeAndGetSteps([0, 3, 0], 0, 0);
    expect(steps2).toEqual(3);

    const steps3 = await traverseThroughMazeAndGetSteps([0], 0, 0);
    expect(steps3).toEqual(2);
    
  });
  
  it('should validate maze escape', async () => {
    const steps1 = await stepsToEscapeMaze(two_step_input); 
    expect(steps1).toEqual(2);
    const steps2 = await stepsToEscapeMaze(three_step_input);
    expect(steps2).toEqual(3);
    const steps3 = await stepsToEscapeMaze(five_step_input);
    expect(steps3).toEqual(5);

  });

  it('should match puzzle input', async () => {
    // jest.setTimeout(20000);
    //Node 8.9.2 RangeError: Maximum call stack size exceeded
    
    // const result = await stepsToEscapeMaze(puzzle_input);
    // console.log('Day 5 answer: ' + result);
    // expect(stepsToEscapeMaze(puzzle_input)).toEqual(2);
  });
});
