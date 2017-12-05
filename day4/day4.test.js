
import { validatePassword, validatePasswords } from "./day4";
import { puzzleInput } from "./puzzleinput";
describe('Day 4', () => {
  
  it('should validate a password', () => {
    expect(validatePassword('aa bb cc dd ee')).toEqual(true);
    expect(validatePassword('aa bb cc dd aa')).toEqual(false);
    expect(validatePassword('aa bb cc dd aaa')).toEqual(true);
  });
  
  
  it('should validate multiple inputs', () => {
    const input = 
`aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`;
    // console.log(validatePasswords(input))
    expect(validatePasswords(input).length).toEqual(2);
  });

  
  it('should match puzzle input', () => {
    expect(validatePasswords(puzzleInput).length).toEqual(466);
    // console.log('Day 4 answer is: ' + validatePasswords(puzzleInput).length)
  });  
});
