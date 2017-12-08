import { getProgramsWithChildren, getProgramChildren, getBottomProgram, getProgram, existInArray } from "./day7";
import { puzzle_input } from "./data";
describe('Day 7', () => {
  
  it('should return rows that have children', () => {
    expect(getProgramsWithChildren(
      ['ktlj (57)', 'fwft (72) -> ktlj, cntj, xhth'])).toEqual(
      ['fwft (72) -> ktlj, cntj, xhth']);
    expect(getProgramsWithChildren(
      ['padx (45) -> pbga, havc, qoyq', 'tknk (41) -> ugml, padx, fwft', 'jptl (61)'])).toEqual(
      ['padx (45) -> pbga, havc, qoyq', 'tknk (41) -> ugml, padx, fwft'])
  });
  
  it('should return correct children', () => {
    expect(getProgramChildren('padx (45) -> pbga, havc, qoyq')).toEqual(['pbga', 'havc', 'qoyq']);
  });
  
  it('should return correct program', () => {
    expect(getProgram('padx (45) -> pbga, havc, qoyq')).toEqual('padx');
  });

  it('should return if input exist in array', () => {
    expect(existInArray('havc', [ 
      [ 'ktlj','cntj', 'xhth' ],
      [ 'pbga', 'havc', 'qoyq' ],
      [ 'ugml', 'padx', 'fwft' ],
      [ 'gyxo', 'ebii', 'jptl' ] 
    ])).toEqual(true);
    expect(existInArray('tknk ', [ 
      [ 'ktlj','cntj', 'xhth' ],
      [ 'pbga', 'havc', 'qoyq' ],
      [ 'ugml', 'padx', 'fwft' ],
      [ 'gyxo', 'ebii', 'jptl' ] 
    ])).toEqual(false);
  });
  
  it('should return lowest program', () => {
    const input = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`
    expect(getBottomProgram(input)).toEqual('tknk');
  });
  
  it('should match puzzle input', () => {
    expect(getBottomProgram(puzzle_input)).toEqual('ykpsek');
    console.log('Day 7 answer is: ' + getBottomProgram(puzzle_input));
  });
  
});
