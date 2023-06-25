/*
We want to construct a function that will take in three parameters.

The first parameter is the contact data itself
The second is the name of a contact, and
The third parameter will be specifying the field (property) of the friend we want back.
The function will take these parameters and return the name
and specified field of the first friend listed in the contact's friends list.
So, using the data shown, specifying "Laurel" as the first parameter,
and "email" as the second would look at Laurel's list of friends,
and return an object with Hardy's name and e-mail address.
If the contact requested or if the field requested is not found, then return "Not found".
*/
// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

// findFriend(contacts, "Abbott", "phone")
// should return { name: "Costello", phone: "767 676 7676" }
const findFriend = (data,name,info) => {
  const friendDetails = {};

  const nameInfo = data.filter(a => a.name === name);
  if (Object.keys(nameInfo).length > 0) {
    const friendInfo = data.filter(a => a.name === nameInfo[0]['friends'][0]);
    if (Object.keys(friendInfo).length > 0) {
      friendDetails['name'] = friendInfo[0]['name'];
      if (friendInfo[0][info] !== null && friendInfo[0][info] !== undefined) {
        friendDetails[info] = friendInfo[0][info];
      } else {
        return "Not found";
      }
      
      return friendDetails;
    }
  }

  return "Not found";
};

console.log(findFriend(contacts, "Abbott", "phone"));
console.log(findFriend(contacts, "Buster", "phone"));
console.log(findFriend(contacts, "Hardy", "emailid"));
console.log(findFriend(contacts, "Tom and Hardy", "email"));