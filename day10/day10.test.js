import { formatListAccordingToLength } from "./day10";
describe('Day 10', () => {
  
  
  it('should return formatted array according to length', () => {
    expect(formatListAccordingToLength(0, [0, 1, 2, 3, 4], 3)).toEqual([2, 1, 0, 3, 4]);
    expect(formatListAccordingToLength(3, [2, 1, 0, 3, 4], 4)).toEqual([4, 3, 0, 1, 2]);
  });
  
  /* it('should multipy of first two correctly', () => {
    
  }); */
  
});
