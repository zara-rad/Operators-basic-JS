

const biscuits = 34;
const friends = 4;

const biscuitsForFriends = Math.floor(biscuits / friends);
const biscuitsForMe = biscuits % biscuitsForFriends;

// don't change this
console.log(`Each friend can eat ${biscuitsForFriends} biscuits`);
console.log(`The biscuits left for me are: ${biscuitsForMe}`);