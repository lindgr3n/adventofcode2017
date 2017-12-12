import { getNumberOfProgramGroupsRelatedTo } from "./day12";
import { PUZZLE_INPUT } from "./puzzle_input";
describe('Day 12', () => {
  
  it('should return correct number of programs group related to 0', () => {
    const input = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`
    expect(getNumberOfProgramGroupsRelatedTo('0', input)).toEqual(6)

    const input2 = `0 <-> 3
    1 <-> 1
    2 <-> 0, 4
    3 <-> 2`
        expect(getNumberOfProgramGroupsRelatedTo('0', input2)).toEqual(3)

    const input3 = `0 <-> 3
        1 <-> 1
        2 <-> 0, 4
        3 <-> 2
        4 <-> 2, 3, 6
        5 <-> 6
        6 <-> 4, 5`
        expect(getNumberOfProgramGroupsRelatedTo('0', input3)).toEqual(6)
  });

  it('should match puzzle answer', () => {
    console.log('Day 12 answer: ', getNumberOfProgramGroupsRelatedTo('0', PUZZLE_INPUT));
    // expect(getNumberOfProgramGroupsRelatedTo('0', PUZZLE_INPUT)).toEqual(6)
  });
  
});
