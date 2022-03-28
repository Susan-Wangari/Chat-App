const user1 = "Reed";
const user2 = "Doug";

// const message = `User (user) says: (text)`;

function sendUserMessage(user, text) {
  console.log(`User ${user} says: ${text}`);
}

sendUserMessage(user1, 'Hey there');
sendUserMessage(user2, "What's up?");
