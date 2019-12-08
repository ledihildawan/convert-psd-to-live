/****************************************
 * Variables and data types
 */
/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 23;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = "John and Mark";
var if = 23;
*/

/****************************************
 * Variables mutation and type coercion
 */
/*
var firstName = "john";
var age = 28;

// Type coercion
console.log(firstName + " " + age);

var job, isMerried;
job = "teacher";
isMerried = false;

console.log(
  firstName +
    " is a " +
    age +
    " years old " +
    job +
    ". Is he merried? " +
    isMerried
);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " years old " +
    job +
    ". Is he merried? " +
    isMerried
);

var lastName = prompt("What is hist last Name?");
console.log(firstName + " " + lastName);
*/

/****************************************
 * Basic Operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);
*/

/****************************************
 * Precedence operator
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/****************************************
 * Coding Challenge 1
 */
/*
var markWeight = 55;
var markHeight = 150;
var johnWeight = 60;
var johnHeight = 170;

var markBMI = markWeight / markHeight ** 2;
var johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

var markBMIGreatherThanJohnBMI = markBMI > johnBMI;
var johnBMIGreatherThanMarkBMI = !markBMIGreatherThanJohnBMI;

console.log("Is Mark's BMI higher than John's ", markBMIGreatherThanJohnBMI);
console.log("Is John's BMI higher than Mark's ", johnBMIGreatherThanMarkBMI);
*/

/****************************************
 * If / else statements
 */
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon");
}

var markWeight = 55;
var markHeight = 150;
var johnWeight = 60;
var johnHeight = 170;

var markBMI = markWeight / markHeight ** 2;
var johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

var markBMIGreatherThanJohnBMI = markBMI > johnBMI;
var johnBMIGreatherThanMarkBMI = !markBMIGreatherThanJohnBMI;

console.log("Is Mark's BMI higher than John's ", markBMIGreatherThanJohnBMI);
console.log("Is John's BMI higher than Mark's ", johnBMIGreatherThanMarkBMI);

if (markBMI > johnBMI) {
  console.log("Mark's BMI higher than John's");
} else {
  console.log("John's BMI higher than Mark's");
}
*/

/****************************************
 * Boolean logic
 */
/*
var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man.");
} else {
  console.log(firstName + " is a man.");
}
*/

/****************************************
 * The Ternary Operator and Switch Statements
 */
/*
// Ternary operator
var firstName = "John";
var age = 22;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

/* if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
} */

/*
// Switch statement
var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs beutiful websites.");
    break;
  default:
    console.log(firstName + " does something else.");
    break;
}

age = 56;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man");
}
*/

/****************************************
 * Truthy and Falsy values and equality operators
 */
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 0;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable ha not been defined");
}

// Equality operators
if (height === "0") {
  console.log("The == operator does type coercion!");
}
*/

/****************************************
 * Codding Challenge 2
 */
/*
var johnsTeamScore, mikesTeamScore, marysTeamScore;

johnsTeamScore = 89;
johnsTeamScore += 128;
johnsTeamScore += 103;

mikesTeamScore = 116;
mikesTeamScore += 98;
mikesTeamScore += 123;

marysTeamScore = 97;
marysTeamScore += 134;
marysTeamScore += 105;

var johnsTeamScoreAvg = johnsTeamScore / 3;
var mikesTeamScoreAvg = mikesTeamScore / 3;
var marysTeamScoreAvg = marysTeamScore / 3;

console.log(johnsTeamScoreAvg, mikesTeamScoreAvg, marysTeamScoreAvg);

if (
  johnsTeamScoreAvg > mikesTeamScoreAvg &&
  johnsTeamScoreAvg > marysTeamScoreAvg
) {
  console.log(
    "John's team is the winner! With " + johnsTeamScoreAvg + " point(s)."
  );
} else if (
  mikesTeamScoreAvg > johnsTeamScoreAvg &&
  mikesTeamScoreAvg > marysTeamScoreAvg
) {
  console.log(
    "Mike's team is the winner! With " + mikesTeamScoreAvg + " point(s)."
  );
} else if (
  marysTeamScoreAvg > johnsTeamScoreAvg &&
  marysTeamScoreAvg > mikesTeamScoreAvg
) {
  console.log(
    "Mary's team is the winner! With " + marysTeamScoreAvg + " point(s)."
  );
  console.log();
} else {
  console.log("Draw. That's the bored game i ever see");
}
*/

/****************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1949, "Jane");
yearsUntilRetirement(1800, "Dores");
*/

/****************************************
 * Functions
 */
/*
// Function declaration
// function whatDoYouDo(job, firstName)

// Function expression
var whatDoYouDo = function(job, firstName) {
  var output = firstName + " ";

  switch (job) {
    case "teacher":
      output += "teach kids how to code";
      break;
    case "driver":
      output += "drives a cab in Lisbon";
      break;
    case "designer":
      output += "designs beautiful websites";
      break;
    default:
      output += "does something else";
      break;
  }

  return output;
};

console.log(whatDoYouDo("designer", "Ledi"));
console.log(whatDoYouDo("retired", "Asdar"));
console.log(whatDoYouDo("teacher", "Ali"));
console.log(whatDoYouDo("retired", "Bayu"));
console.log(whatDoYouDo("designer", "Hakim"));
*/

/****************************************
 * Arrays
 */
/*
// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1968, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Marry";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a desinger"
);
*/

/****************************************
 * Coding Challange 3
 */
/*
function tipCalculaor(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return percentage * bill;
}

function totalPaid(bill, tip) {
  return bill + tip;
}

var bills = [124, 48, 268];
var tips = [];

tips.push(
  tipCalculaor(bills[0]),
  tipCalculaor(bills[1]),
  tipCalculaor(bills[2])
);

var finalValue = [
  totalPaid(bills[0], tips[0]),
  totalPaid(bills[1], tips[1]),
  totalPaid(bills[2], tips[2])
];

console.log(tips, finalValue);
*/

/****************************************
 * Objects and properties
 */
/*
// Object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["jane", "mark", "bob", "emily"],
  job: "teacher",
  isMarried: false
};

console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// New object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
*/

/****************************************
 * Objects and methods
 */
/*
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["jane", "mark", "bob", "emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/****************************************
 * Coding Challenge 4
 */
/*
var john = {
  fullName: "John",
  mass: 100,
  height: 160,
  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
  }
};

var mark = {
  fullName: "Mark",
  mass: 72,
  height: 150,
  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
  }
};

john.calcBMI();
mark.calcBMI();

var johnBMI = john.BMI;
var markBMI = mark.BMI;

if (johnBMI > markBMI) {
  console.log("BMI John is higher than Mark BMI, " + johnBMI);
} else if (markBMI > johnBMI) {
  console.log("BMI Mark is higher than John BMI, " + markBMI);
} else {
  console.log("John and Mark have the same BMI");
}
*/

/****************************************
 * Loop and iteration
 */
/*
// Foor loop
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

// i = 0; 0 <= 20 true; log i to console, i += 2
// i = 3; 3 <= 20 true; log i to console, i += 2
// ...
// i = 19; 19 <= 20 true; log i to console, i += 2
// i = 22; 22 <= 20 FALSE, exit loop

var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break statements
var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/****************************************
 * Coding Challenge 5
 */

var john = {
  bills: [124, 48, 268, 180],
  calcTips: function() {
    this.tips = [];
    this.paidAmounts = [];

    var bills = this.bills;
    var paidAmounts = this.paidAmounts;
    var tips = this.tips;

    for (var i = 0; i < bills.length; i++) {
      var bill = bills[i];
      var percentage;

      if (bill < 100) percentage = 0.2;
      else if (bill >= 100 && bill <= 300) percentage = 0.1;
      else perentage = 0.25;

      tips[i] = bill * percentage;
      paidAmounts[i] = bill + tips[i];
    }
  }
};

var mark = {
  bills: [124, 48, 268, 180],
  calcTips: function() {
    this.tips = [];
    this.paidAmounts = [];

    var bills = this.bills;
    var paidAmounts = this.paidAmounts;
    var tips = this.tips;

    for (var i = 0; i < bills.length; i++) {
      var bill = bills[i];
      var percentage;

      if (bill < 100) percentage = 0.2;
      else if (bill >= 100 && bill <= 300) percentage = 0.1;
      else perentage = 0.25;

      tips[i] = bill * percentage;
      paidAmounts[i] = bill + tips[i];
    }
  }
};

john.calcTips();
mark.calcTips();

function calcAvg(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum / numbers.length;
}

var avgJohnTip = calcAvg(john.tips);
var avgMarkTip = calcAvg(mark.tips);

console.log(avgJohnTip, avgMarkTip);

if (avgJohnTip > avgMarkTip) {
  console.log("John has bigger average tip than Mark " + avgJohnTip);
} else if (avgMarkTip > avgJohnTip) {
  console.log("Mark has bigger average tip than John " + avgMarkTip);
} else {
  console.log("John and Mark has the same avg tip");
}
