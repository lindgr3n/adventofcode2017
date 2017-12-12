export const nextSum = (input, step = 1) => {
  if(isNaN(input)) {
    return 0;
  }

  let succedingValues = [];

  const total = input.toString().split("").reduce((total, currentValue, currentIndex, array) => {
    if(currentValue === array[currentIndex+step]) {
      return parseInt(total) + parseInt(currentValue);  
    }
    
    if(currentIndex === array.length-step && currentValue === array[0]) {
      return parseInt(total) + parseInt(currentValue);  
    }
    
    return total;
  }, 0);

  return total;
}