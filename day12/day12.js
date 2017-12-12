export const getNumberOfProgramGroupsRelatedTo = (ID, input) => {
  const relatedGroupsToID = [];
  const idsToCheck = [];
  relatedGroupsToID.push(ID);
  const rows = input.split('\n');
  rows.map((group) => {
    const groupID = group.split('<->').map(trimSpaces)[0];
    const groupChilrens = group.split('<->')[1].split(',').map(trimSpaces);
    // console.log('groupID',groupID);
    console.log('groupChilrens',groupChilrens);
    console.log('PRE relatedGroupsToID',relatedGroupsToID);
    if(relatedGroupsToID.indexOf(groupID) >= 0) {
      // console.log('FOUND index')
      const res = groupChilrens.filter((e) => relatedGroupsToID.indexOf(e) === -1)
      relatedGroupsToID.push(...res);

      // Check idToCheck to see if it have a match
      idsToCheck.map((obj) => {
        if(relatedGroupsToID.indexOf(obj.groupID) >= 0) {
          // console.log('FOUND index')
          const res = obj.groupChilrens.filter((e) => relatedGroupsToID.indexOf(e) === -1)
          relatedGroupsToID.push(...res);
        }    
        // TODO: Remove ourself after
      })

      // relatedGroupsToID.push(...groupChilrens);
    } else {
      idsToCheck.push({groupID, groupChilrens});
    } 

    console.log('relatedGroupsToID',relatedGroupsToID);
  })

  return relatedGroupsToID.length;
}

function trimSpaces(input) {
  return input.trim();
}