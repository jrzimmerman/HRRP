// Object Oriented Programming

var person = {
  name: "Justin",
  location: "Somerset",
  hobbies: ["running", "biking", "swimming", "programming"],
  dog: {
    name: "Ella",
    breed: "Lab",
    color: "Black"
  },
  party: function() {
    console.log("party time!");
  }
};

person.work = function() {
  console.log(this.name + " works at The EADS Group in " + this.location);
};

person.workout = function() {
  console.log("If I have to workout, I prefer " + this.hobbies[1]);
};

person.float_through_life_on_autopilot = function() {
  this.work();
  this.party();
  this.workout();
};
var move_fn = function() {
  var prev = this.position;
  if (this.speed > 50) {
    this.position = this.position + 1;
  }
  console.log(this.type + " is moving from position " + prev + " to " + this.position + " at " + this.speed + " miles per hour.");
};

var car = {
  type: "Honda Civic",
  position: 1,
  speed: 55,
  move: move_fn
};

var party_fn = function() {
  console.log(this.name + " dances wildly!");
};
var eat_fn = function() {
  this.hungry = false;
  console.log(this.name + " started eating " + this.favorite_food);
};
var go_to_park_fn = function() {
  this.hungry = true;
  console.log(this.name + " has left the " + this.location + " and went to the park.");
};

var dog = {
  name: "Rufus",
  location: "backyard",
  favorite_food: "kibble",
  hungry: true,
  party: party_fn,
  eat: eat_fn,
  go_to_park: go_to_park_fn
};

var dog2 = {
  name: "Ella",
  location: "house",
  favorite_food: "ice cream",
  hungry: true,
  party: party_fn,
  eat: eat_fn,
  go_to_park: go_to_park_fn
};

var meow_fn = function() {
  console.log(this.name + " meowed");
};

var cat1 = {
  name: "mr. cat",
  meow: meow_fn
};
var cat2 = {
  name: "snowball",
  meow: meow_fn
};

///////////// Decorator Patterns
var reverse_adder = function(car) {
  car.reverse = function() {
    this.position = this.position - this.speed;
  };
};

reverse_adder(car1);
reverse_adder(car2);
