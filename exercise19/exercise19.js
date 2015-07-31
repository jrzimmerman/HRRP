////////////// Exercise 1
var my_cat = {};
my_cat["name"] = "snowball";
my_cat["age"] = 22;
my_cat["alive"] = true;
my_cat["favorite_toy"] = "ball";
my_cat["napping_spot"] = "window";
my_cat["color"] = "white";
my_cat["gender"] = "female";

/////////////// Exercise 2
var my_dream_life = {};
var property_key = "job";
my_dream_life[property_key] = "Software Engineer";
var another_property_key = "salary";
my_dream_life[another_property_key] = "200,000";
var next_property = "car";
my_dream_life[next_property] = "Jeep";
var another_prop = "house";
my_dream_life[another_prop] = "mansion";
var the_prop = "dog";
my_dream_life[the_prop] = "Ella";
var propertay = "wife";
my_dream_life[propertay] = "Kirsten";

////////////// Exercise 3
var dream_car = {};
dream_car.make = "Jeep";
dream_car.model = "Grand Cherokee";
dream_car.color = "Green";
dream_car.year = 2007;
dream_car.registered = true;

////////////// Exercise 4
var demo_object = {
  one: 1,
  two: 2,
  three: 3
};
var one = "three";

demo_object['two']; // 2
demo_object[one]; // 3

var state_capitals = {
  California: 'Sacramento',
  Texas: 'Austin'
};

var place = 'California';

state_capitals['place']; // undefined
state_capitals.place; // undefined
state_capitals[place]; // Sacramento

state_capitals['California']; // Sacramento
state_capitals.California; // Sacramento
state_capitals[California]; // undefined

/////////////// Exercise 5
for (var prop in my_cat) {
  console.log(my_cat[prop]);
}
for (var item in dream_car) {
  console.log(dream_car[item]);
}
for (var i in my_dream_life) {
  console.log(my_dream_life[i]);
}

///////////// Exercise 6
var numbers = [2, 4, 5, 37, 0];
var doubled_numbers = {}; // should be { 2: 4, 4: 8, 5: 10, 37: 74, 0: 0 }
for (var key in numbers) {
  doubled_numbers[numbers[key]] = numbers[key] * 2;
}

///////////// Exercise 7
var favorites = [];
var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
  'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'
];
for (var i = 0; i < famous.length; i++) {
  if (famous[i].charAt(0).toUpperCase() === "A") {
    favorites.push(famous[i]);
  }
}

////////////// Exercise 8
var obama_jobs = [];

var politicos = {
  secretary_of_state: 'hillary clinton',
  potus: 'barack obama',
  flotus: 'michelle obama',
  vice_prez: 'joe biden',
  gov_of_california: 'jerry brown'
};
for (var key in politicos) {
  famous.push(politicos[key]);
}

for (var key in politicos) {
  if (politicos[key] === 'barack obama') {
    obama_jobs.push(key);
  }
}

//////////////// Exercise 9
var b_named_politicos = {};
for (var key in politicos) {
  politicos[key] = politicos[key].split(' ');
  if (politicos[key][0].charAt(0).toUpperCase() === "B" || politicos[key][1].charAt(0).toUpperCase() === "B") {
    b_named_politicos[key] = politicos[key].join(' ');
  }
}
var reverse_politico_lookup = {};
for (var key in politicos) {
  reverse_politico_lookup[politicos[key]] = key;
}

//////////////// Exercise 10
var type_tester = function(input) {
  if (Array.isArray(input)) {
    return "array";
  } else {
    return typeof input;
  }
};
