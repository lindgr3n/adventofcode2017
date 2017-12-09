const IGNORE = '!'; // If ignore skip next char
const GROUP_START = '{';  // Increase count
const GROUP_END = '}';
const GARBAGE_START = '<';  // Ignore all chars inside GARBAGE
const GARBAGE_END = '>';

export const getGroupScore = (input) => {
  let score = 0;
  let groupValue = 0;
  let increaseGroupValue = false;
  let isGarbage = false;
  let isIgnoring = false;

  const characters = input.split('');
  const result = characters.map(char => {
    if(isIgnoring) {
      isIgnoring = false;
      return;
    }
    switch (char) {
      case IGNORE:
        isIgnoring = true;
        return;
      case GARBAGE_START:
        isGarbage = true;
        break;
      case GARBAGE_END:
        isGarbage = false;
        break;
      case GROUP_START:
        if(isGarbage) {
          return;
        }
        groupValue++;
        score += groupValue;
        increaseGroupValue = true;
        break;
      case GROUP_END:
        if(isGarbage) {
          break;
        }
        groupValue--;
        increaseGroupValue = false;
        break;
      default:
        break;
    }

    return;
  })

  return score;

}
