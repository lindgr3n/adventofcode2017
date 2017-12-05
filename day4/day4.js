export const validatePassword = input => {
  const words = input.split(' ');
  const summary = words.reduce((summary, current, currentIndex, array) => {
    // console.log(`summary: ${summary[current]} current: ${current}`)
    if(summary[current] === undefined) {
      // console.log(`did not find: ${current}`)
      summary[current] = 1;
      return summary;
    }


    summary[current] = summary[current] + 1;
    if(summary[current] > 1) {
      summary["isOk"] = false;
    }
    return summary;
  }, {isOk: true})

  // console.log(summary["isOk"])
  return summary["isOk"];
}

export const validatePasswords = input => {
  const rows = input.split('\n');
  return rows.filter(password => {
    const valid = validatePassword(password)
    // console.log(`password: ${password} valid: ${valid}`)
    return valid;
  })
}