const message = "hello world!";

const newMessage = message.padStart(15, "*");
console.log(newMessage); //***hello world!

// 身份证, 当然，可以使用replace
const card = "333555555555554444";
const firstThree = card.slice(0, 3);
console.log(firstThree);
// 截取后四位
const lastFour = card.slice(-4);
console.log(lastFour);
const final = firstThree + lastFour.padStart(card.length - 3, "*");
console.log(final); //**************4444
