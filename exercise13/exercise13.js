if (true) {
  console.log('oh yeeeeahhhhh!!');
}
if (false) {
  console.log('wait, where am I??');
}
if (5 > 4) {
  console.log('Makes sense..');
}
if (2 === 5) {
  console.log("if you are seeing this message, something's gone terribly wrong");
}
if (prompt("How you doing?") === "good") {
  console.log("Well, I'm very glad to hear that...");
}

// Exercise
if (true) {
  console.log("I always run!");
}
if (false) {
  console.log("I never run :(");
}
if (prompt("How you doing?") === "sad") {
  console.log("Well, I'm very sorry to hear that...");
}
if (prompt("Whats the secret number") !== "3") {
  console.log("Wrong number!");
}

if (prompt("Password") === "password") {
  console.log("Welcome!");
} else {
  window.location = "http://www.google.com";
}

////////////////////
var hero, bad_guy;

if (hero === "strong") {
  if (bad_guy === "weak") {
    console.log('Ah-ha, an easy victory!');
  }
  console.log("Let us battle to the death!");
}

/////////////////////
var hero, bad_guy;

if (hero === "big") {
  if (bad_guy === "small") {
    console.log("You are no match for me!");
  }
  console.log("A worthy opponent.");
}

///////////////////////
var response, image_path,
  secret_saying = document.querySelector('#message').textContent;

if (secret_saying === "An Eagle Flies at Midnight") {
  response = "You may pass";
  image_path = "images/open_door.png";
} else {
  response = "Release the hounds!";
  image_path = "images/attack.png";
}

document.querySelector('#result').textContent = response;
document.querySelector('img').src = image_path;

////////////////////
var user_input = document.querySelector('input#search').value,
  output_el = document.querySelector('#output');

if (user_input !== "happiness") {
  if (!user_input) { // this tells us something important about empty strings
    // What would happen if we tried to use?     user_input =
    document.querySelector('input').value = "hey you, type here :z";
  } else {
    output_el.textContent = "You're searching for the wrong thing";
  }
} else {
  output_el.textContent = "ahh, the enlightened one!";
}

/////////////////////////
// another approach
if (user_input === "happiness") {
  output_el.textContent = "ahh, the enlightened one!";
} else if (!user_input) {
  document.querySelector('input').value = "hey you, type here :z";
} else {
  output_el.textContent = "You're searching for the wrong thing";
}

//////////////////////////////
if (age < 21) {
  output_el.textContent = "sorry, son";
} else if (!(age > 35)) {
  output_el.textContent = "id please";
} else if (name === "Bob") {
  output_el.textContent = "you're banned, bob!";
} else {
  output_el.textContent = "come on in!";
}
