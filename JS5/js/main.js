
const anyName = "Jonathan"

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));


let customerIsBanned = true;
let soup = "chicken";
let crackers = true
let reply;
if (customerIsBanned) {
    reply = "no soup for you!";
} else if (soup && crackers) {
    reply = "here's your order of ${soup} & crackers.";
} else if (soup) {
    reply = "here's your order of ${soup}";
} else {
    reply = "sorry, we're out of ${soup}"
}