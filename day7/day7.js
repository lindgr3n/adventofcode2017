export function getBottomProgram(input) {
  const rows = input.split('\n');
 
  const programsWithChildren = getProgramsWithChildren(rows);

  const roots = programsWithChildren.map(getProgram);
  const children = programsWithChildren.map(getProgramChildren);

  const result = roots.filter(e => !existInArray(e, children))
  return result[0];
}

export function existInArray(value, array) {
  const result = array.filter(e => e.filter(b => b === value));
  const arrs = array.reduce((programs, current) => {
    return [...programs, ...current];
  }, []);
  return arrs.filter(e => e === value).length > 0;
}

export function getProgramsWithChildren(input) {
  return input.filter((e) => e.split('->').length > 1);
}

export function getProgramChildren(input) {
  const children = input.split('->');

  if(children.length < 2) {
    return [];
  }

  const result = children[1].split(',').map(e => e.trim());
  return result;
}

export function getProgram(input) {
  const children = input.split('->');
  
  if(children.length < 2) {
    return [];
  }

  const result = children[0].split(' ').map(e => e.trim());
  return result[0];
}