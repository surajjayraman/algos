const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// return name of the individual who follows the most of people
const  biggestFollower = (data) => {
  let most = 0;
  let bigFollower = '';

  for (const follower in data) {
    if (most < data[follower]['follows'].length) {
      most = data[follower]['follows'].length;
      bigFollower = data[follower]['name'];
    }
  }
  return bigFollower;
};

// returns the name of the most popular (most followed) individual
const mostPopular = (data) =>  {
  
  let mostFollowed = [];
  // get most popular individuals
  mostFollowed = getMostPopular(analyseData(data));

  return  names(data,mostFollowed).toString();

};

const getMostPopular = (countObj) => {
  let maxCount = 0;
  // extract most popular count
  for (const key in countObj) {
    if (countObj[key] > maxCount) {
      maxCount = countObj[key];
    }
  }
  const matched = Object.keys(countObj).filter(function(key) {
    return countObj[key] === maxCount;
  });
  return matched;
};

// analyse data for mostFollowed and followedBy stats
const analyseData = (data) => {
  const countObj = {};
  // create person and follower count
  for (const follower in data) {
    for (const person of data[follower]['follows']) {
      if (person in countObj) {
        countObj[person]++;
        countObj[`${person}followedBy`].push(follower);
        continue;
      }
      countObj[person] = 1;
      countObj[`${person}followedBy`] = [follower];
    }
      
  }
  
  return countObj;

};

// outputs a list of everyone and for each of them,
// the names of who they follow and who follows them.
const printAll = (data) => {
  const personData = analyseData(data);

  for (const person in data) {
    console.log(`${data[person]['name']} follows ${names(data,data[person]['follows'])}`);
    console.log(`${data[person]['name']} is followed by ${names(data,personData[`${person}followedBy`])}`);
  }
};

// returns a list of names
const names = (data,namesKeys) => {
  const nameList = [];
  for (const namesKey of namesKeys) {
    nameList.push(data[namesKey]['name']);
  
  }
  return nameList;
  
};

// returns a list of names who follow someone that doesn't follow them back.
const unrequitedFollowers = (data) => {

  const noFollowBack = [];

  for (const name in data) {
    for (const person of data[name]['follows']) {
      if (data[person]['follows'].includes(name)) {
        continue;
      }
      noFollowBack.push(data[name]['name']);
      break;

    }

  }

  return noFollowBack;

};

// returns followers over 30
const overThirty = (data) => {
  const mostOverThirty = {};
  // call analyse data.
  const personData = analyseData(data);
  // construct mostOverThirty obj
  for (const person in data) {
    console.log(personData[`${person}followedBy`]);
    for (const follower of personData[`${person}followedBy`]) {
      console.log('follower age:', data[follower]['age']);
      if (data[follower]['age'] > 30) {
        if (mostOverThirty[person]) {
          mostOverThirty[person]++;
          continue;
        }
        mostOverThirty[person] = 1;
      }
    }
  }
  // construct names array
  const overThirtyNames = [];
  for (const nameKey of getMostPopular(mostOverThirty)) {
    overThirtyNames.push(data[nameKey]['name']);
  }
  return overThirtyNames;
};

console.log(biggestFollower(data));
console.log(mostPopular(data));
printAll(data);
console.log(unrequitedFollowers(data));
console.log(overThirty(data));