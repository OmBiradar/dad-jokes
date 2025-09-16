// dad-jokes library
// Usage: const dad_jokes = require('dad-jokes'); dad_jokes.random();

const jokes = [
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I would tell you a joke about construction, but I'm still working on it.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "How do you organize a space party? You planet.",
  "Why did the math book look sad? Because it had too many problems.",
  "I used to hate facial hair, but then it grew on me.",
  "How do you make holy water? Boil the hell out of it.",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
  "Why can't you hear a pterodactyl going to the bathroom? The “P” is silent.",
  "Why do bees have sticky hair? They use a honeycomb."
];

function random() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

export default {
  random
};
