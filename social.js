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

  return  mostFollowed;

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
  console.log(countObj);
  return countObj;

};

console.log(biggestFollower(data));
console.log(mostPopular(data));