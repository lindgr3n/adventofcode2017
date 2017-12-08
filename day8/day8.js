export function getLargestValueInRegister(input) {
  const operations = getOperations(input).map(extractOperators);
  const result = calculateOperations(operations);
  const maxValue = getMaxValueInRegister(result);
  
  return maxValue;
}

function getMaxValueInRegister(result) {
  return Object.keys(result).reduce((max, key) => {
    if(result[key] > max)
      return result[key];
    return max;
  }, 0)
}

function calculateOperations(operations) {
  return operations.reduce((variables, currentOperation) => {
    return calculateValueFromOperation(currentOperation, variables)
  }, {});
}

export function calculateValueFromOperation(input, variables) {
  let shouldCalculate = false;
  const {summary, condition} = input;
  // < <= == >= > != !=
  if(variables[condition.char] === undefined) {
    variables[condition.char] = 0;
  }

  switch (condition.operator) {
    case '>':
      if(parseInt(variables[condition.char]) > parseInt(condition.value)) {
        shouldCalculate = true;
      }
      break;
    case '>=':
      if(parseInt(variables[condition.char]) >= parseInt(condition.value)) {
        shouldCalculate = true;
      }
      break;
    case '<':
      if(parseInt(variables[condition.char]) < parseInt(condition.value)) {
        shouldCalculate = true;
      }
      break;
    case '<=':
      if(parseInt(variables[condition.char]) <= parseInt(condition.value)) {
        shouldCalculate = true;
      }
      break;
    case '!=':
      if(parseInt(variables[condition.char]) != parseInt(condition.value)) {
        shouldCalculate = true;
      }
      break;

    case '==':
      if(variables[condition.char] == condition.value) {
        shouldCalculate = true;
      }
      break;
    default:
      break;
  }

  if(variables[summary.char] === undefined) {
    variables[summary.char] = 0;
  }

  if(shouldCalculate) {
    if(summary.operator === 'inc') {
      variables[summary.char] = variables[summary.char] + parseInt(summary.value);
    }
  
    if(summary.operator === 'dec') {
      variables[summary.char] = variables[summary.char] - parseInt(summary.value);
    }
  }
  
  return variables;
}

function getOperations(input) {
  return input.split('\n');
}

/*
  @return {summary: {char: 'b', operator: 'inc', value: '5'}, condition: {char: 'a', operator: '>', value: '1'}}
*/
export function extractOperators(input) {

  const conditions = input.split('if');
  const summary = conditions[0].trim().split(/\s+/);
  const condition = conditions[1].trim().split(/\s+/);
  
  const result = {
    summary: {
      char: summary[0], 
      operator: summary[1], 
      value: summary[2]
    }, 
    condition: {
      char: condition[0], 
      operator: condition[1], 
      value: condition[2]
    }
  };

  return result;
}