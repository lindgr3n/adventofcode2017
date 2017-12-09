import { getGroupScore } from "./day9";
import { PUZZLE_INPUT } from "./data";
describe('Day 9', () => {
  
  it('should correctly count score', () => {
    
    expect(getGroupScore('{}')).toEqual(1);
    expect(getGroupScore('{{{}}}')).toEqual(6);    // 1 + 2 + 3 = 6.
    expect(getGroupScore('{{},{}}')).toEqual(5)    //1 + 2 + 2 = 5.
    expect(getGroupScore('{{{},{},{{}}}}')).toEqual(16);   //1 + 2 + 3 + 3 + 3 + 4 = 16.
    expect(getGroupScore('{<a>,<a>,<a>,<a>}')).toEqual(1);   //1.
    expect(getGroupScore('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toEqual(9); //1 + 2 + 2 + 2 + 2 = 9.
    expect(getGroupScore('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toEqual(9); //1 + 2 + 2 + 2 + 2 = 9.
    expect(getGroupScore('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toEqual(3); //1 + 2 = 3.
    expect(getGroupScore('{{{}}{}}')).toEqual(8); //1 + 2 + 3 + 2 = 8.

  });
  
  it('should match puzzle answer', () => {
    expect(getGroupScore(PUZZLE_INPUT)).toEqual(11089);
    // console.log('Day 9 answer: ' + getGroupScore(PUZZLE_INPUT));
  });
  
  
});
