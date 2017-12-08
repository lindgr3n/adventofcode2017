import { getLargestValueInRegister, extractOperators, calculateValueFromOperation } from "./day8";
import { puzzle_input } from "./data";
describe('Day 8', () => {
  
  it('should extract correct operators', () => {
    expect(extractOperators('b inc 5 if a > 1')).toMatchObject({
      summary: {char: 'b', operator: 'inc', value: '5'}, 
      condition: {char: 'a', operator: '>', value: '1'}
    });
    expect(extractOperators('a inc 1 if b < 5')).toMatchObject({
      summary: {char: 'a', operator: 'inc', value: '1'}, 
      condition: {char: 'b', operator: '<', value: '5'}
    });
    expect(extractOperators('c dec -10 if a >= 1')).toMatchObject({
      summary: {char: 'c', operator: 'dec', value: '-10'}, 
      condition: {char: 'a', operator: '>=', value: '1'}
    });
    expect(extractOperators('c inc -20 if c == 10')).toMatchObject({
      summary: {char: 'c', operator: 'inc', value: '-20'}, 
      condition: {char: 'c', operator: '==', value: '10'}
    });    
  });
  
  it('should correctly calculate value from operation', () => {
    expect(calculateValueFromOperation({
      summary: {char: 'b', operator: 'inc', value: '5'}, 
      condition: {char: 'a', operator: '>', value: '1'}
    }, {b: 0, a: 0})).toEqual({b:0, a:0});
    expect(calculateValueFromOperation({
      summary: {char: 'b', operator: 'inc', value: '5'}, 
      condition: {char: 'a', operator: '>', value: '1'}
    }, {b: 0, a: 2})).toEqual({b:5, a:2});
  });
  
  it('should correctly calculate largets value in register', () => {
    const input = 
`b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`
    expect(getLargestValueInRegister(input)).toEqual(1);
  });

  it('should match puzzle input', () => {
    expect(getLargestValueInRegister(puzzle_input)).toEqual(5075);
    // console.log('Day 9 answer is: ' + getLargestValueInRegister(puzzle_input));
  });
});
