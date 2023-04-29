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

console.log(biggestFollower(data));