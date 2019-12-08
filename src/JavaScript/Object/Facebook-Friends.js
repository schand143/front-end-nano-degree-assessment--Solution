/*
 * Programming Quiz: Facebook Friends (7-5)
 
 * Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */

// your code goes here

var facebookProfile = {
  name: "Chand",
  numberOfFriend: 475,
  messages: ["Hi", "How are u?", "Im fine"],

  postMessage: function addMessage(msg) {
    facebookProfile.messages.push(msg);
  },
  deleteMessage: function removeMessage(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    facebookProfile.numberOfFriend++;
  },
  removeFriend: function() {
    facebookProfile.numberOfFriend--;
  }
};

facebookProfile.postMessage("Take me to your leader");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(3);
console.log(facebookProfile.messages);

console.log("Befor =", facebookProfile.numberOfFriend);
facebookProfile.addFriend();
console.log("After =", facebookProfile.numberOfFriend);

console.log("Befor =", facebookProfile.numberOfFriend);
facebookProfile.removeFriend();
console.log("After =", facebookProfile.numberOfFriend);
