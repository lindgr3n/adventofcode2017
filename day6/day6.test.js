
import { getCycledArray, getMaxIndexAndValue, valueToSpread, shouldIndexBeUpdated, 
  getRedistributionCycles, doExist, arraysMatch, getArrayFromSpace, convertArrayToIntegers } from "./day6";
describe('Day 6', () => {
  
  it('should return Cycled array correctly', () => {
    expect(getCycledArray([0, 1, 1, 0])).toEqual([0, 0, 2 , 0]);
    expect(getCycledArray([0, 2, 7, 0])).toEqual([2, 4, 1 , 2]);
    expect(getCycledArray([ 4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5 ])).toEqual([ 5, 11, 5, 2, 9, 5, 10, 15, 6, 2, 15, 0, 1, 16, 4, 6 ]);    
  });
  
  
  it('should return correct index and value', () => {
    expect(getMaxIndexAndValue([0, 1, 1, 0])).toMatchObject({index: 1, value: 1});
    expect(getMaxIndexAndValue([0, 2, 7, 0])).toMatchObject({index: 2, value: 7});
    expect(getMaxIndexAndValue([2, 4, 1, 2])).toMatchObject({index: 1, value: 4});
    expect(getMaxIndexAndValue([0, 2, 3, 4])).toMatchObject({index: 3, value: 4});
    expect(getMaxIndexAndValue([ 4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5 ])).toMatchObject({index: 11, value: 15})
  });
  
  
  it('should calculate correct spread and leftover', () => {
    expect(valueToSpread(1, 4)).toMatchObject({spread: 1, left: 0});
    expect(valueToSpread(7, 4)).toMatchObject({spread: 2, left: 1});
    expect(valueToSpread(4, 4)).toMatchObject({spread: 1, left: 1});
    expect(valueToSpread(3, 4)).toMatchObject({spread: 1, left: 0});
  });
  
  
  it('should correct return if index should be updated', () => {
    expect(shouldIndexBeUpdated(3, [0, 0, 2, 0])).toEqual(true);
    expect(shouldIndexBeUpdated(0, [0, 0, 2, 0])).toEqual(true);
    expect(shouldIndexBeUpdated(1, [0, 0, 2, 0])).toEqual(false);
    expect(shouldIndexBeUpdated(2, [0, 1, 1, 0])).toEqual(true);
    expect(shouldIndexBeUpdated(3, [0, 1, 1, 0])).toEqual(false);
    
  });
  
  
  it('should correctly match arrays', () => {
    expect(arraysMatch([0, 2, 7, 0], [0, 2, 7, 0])).toEqual(true);
    expect(arraysMatch([0, 2, 7, 0], [1, 3, 7, 0])).toEqual(false);
  });
  
  
  it('should split array correctly on space', () => {
    expect(getArrayFromSpace('0 2 7 0')).toEqual(["0", "2", "7", "0"]);
    expect(getArrayFromSpace('4	10	4	     1')).toEqual(["4", "10", "4", "1"]);
    
  });
  
  
  it('should convert array of strings to array of integers', () => {
    expect(convertArrayToIntegers(["0", "2", "7", "0"])).toEqual([0, 2, 7, 0])
  });
  
  
  /* it('should correctly return if state exist already', () => {
    expect(doExist([0, 2, 7, 0], [[0, 2, 7, 0]])).toEqual(true);
  }); */
  
  
  /* it('should calculate cycles correctly', () => {
    expect(getRedistributionCycles('0 2 7 0')).toEqual(5);
    
  }); */

  
  /* it('should match puzzle input', () => {
    const input = '4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5'
    // expect(calculateSpreadsheetChecksum(input)).toEqual(42378);
    console.log('Day 6 answer is: '+ getRedistributionCycles(input));
  }); */
});
