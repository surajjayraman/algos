// Define some sample data for the platform
const users = [
  { id: 1, name: 'John Doe', points: 100 },
  { id: 2, name: 'Jane Smith', points: 250 },
  { id: 3, name: 'Bob Johnson', points: 500 },
];
  
const rewards = [
  { id: 1, name: 'Free Night Stay', cost: 100 },
  { id: 2, name: 'Room Upgrade', cost: 50 },
  { id: 3, name: 'Complimentary Breakfast', cost: 25 },
];
  
// Define some functions for working with the data
function getUserById(id) {
  return users.find(user => user.id === id);
}
  
function getRewardById(id) {
  return rewards.find(reward => reward.id === id);
}
  
function redeemReward(userId, rewardId) {
  const user = getUserById(userId);
  const reward = getRewardById(rewardId);
  
  if (!user || !reward) {
    throw new Error('Invalid user or reward');
  }
  
  if (user.points < reward.cost) {
    throw new Error('Insufficient points');
  }
  
  user.points -= reward.cost;
  
  console.log(`${user.name} redeemed ${reward.name} for ${reward.cost} points`);
}
  
// Example usage
const userId = 2;
const rewardId = 1;
  
try {
  redeemReward(userId, rewardId);
} catch (error) {
  console.error(error.message);
}
  
console.log(getUserById(userId));
  