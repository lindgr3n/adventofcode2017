export const calculateSpreadsheetChecksum = input => {
  const rows = input.split('\n');
  const result = rows.reduce((total, current) => {
    const rowDiff = getRowDiff(current); 
    return total + rowDiff;
  }, 0);
  return result;
}

export const getRowDiff = row => {
  var regex = /(\d+)/g; // https://stackoverflow.com/a/7857544
  
  const result = row.match(regex).reduce((response, current, index, array) => {
    const value = parseInt(current);
    const min = parseInt(response.min)
    const max = parseInt(response.max);

    if(value > max) {
      response.max = value;
    }
    
    if(min === -1 || value < min) {
      response.min = isNaN(current) ? -1 : value;
    }

    return response;
  }, {min: -1, max: -1})

  return result.max - result.min;
}