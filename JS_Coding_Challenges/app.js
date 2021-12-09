// Values and Variables:
// 1. Declare variables called 'country','continent' and 'population' and assign their values according to your own country (population in millions)
// 2. Log their values to the console
let country = 'Portugal'; 
let continent = 'Europe'; 
let population = 10; 
console.log(country); 
console.log(continent); 
console.log(population);
console.log(country, continent, population);

// Data Types:
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland','population','country' and 'language' to the console
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country); 
console.log(typeof continent); 
console.log(typeof population);

// let, const and var:
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now,and observe what happens
language = 'portuguese'; 
const country1 = 'Portugal'; 
const continent1 = 'Europe'; 
const isIsland1 = false; 

// Basic Operators:
// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

console.log(population / 2); 
population++; 
console.log(population); 
console.log(population > 6); 
console.log(population < 33); 
const description1 =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;
console.log(description1);


// Strings and Template Literals:
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;


// Taking Decisions: if / else Statements:
// 1. If your country's population is greater than 33million,log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

if (population > 33) {
console.log(`${country}'s population is above average`);
} else { console.log(
`${country}'s population is ${33 - population} million below average`,
); }

// Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17'; '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617' 
console.log('19' - '13' + 17); // -> 23 
console.log('123' < 57); // -> false 
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


// Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
// 2. If there is only 1 neighbour,log to the console 'Only 1 border!'(use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 border' incase 'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation

// const numNeighbours = prompt('How many neighbour countries does your country have?');

// LATER : This helps us prevent bugs
const numNeighbours = Number(
prompt('How many neighbour countries does your country have?'),
);
if (numNeighbours === 1) { console.log('Only 1 border!');
} else if (numNeighbours > 1) { console.log('More than 1 border');
} else {
console.log('No borders');
}


// Logical Operators:
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this:'You should live in Portugal:)'. If not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

if (language === 'english' && population < 50 && !isIsland)
{
console.log(`You should live in ${country} :)`); } else {
console.log(`${country} does not meet your criteria :(`); }


// The switch Statement:
// 1. Use a switch statement to log the following string for the given 'language': 
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

switch (language) {
  case 'chinese':
  case 'mandarin':
console.log('MOST number of native speakers!');
    break;
  case 'spanish':
console.log('2nd place in number of native speakers');
    break;
  case 'english':
console.log('3rd place');
    break;
  case 'hindi':
console.log('Number 4');
    break;
  case 'arabic':
console.log('5th most spoken language');
    break;
  default:
console.log('Great language too :D'); }

// The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
// 2. After checking the result, change thepopulation temporarily to 13 and then to 130. See the different results, and set the population back to original
console.log(
`${country}'s population is ${population > 33 ? 'above' : 'below'} average`,
);


// Functions
// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) { 
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(descPortugal, descGermany, descFinland);


// Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
function percentageOfWorld1(population) { 
    return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) { 
    return (population / 7900) * 100;
};
const percPortugal1 = percentageOfWorld1(10); 
const percChina1 = percentageOfWorld1(1441); 
const percUSA1 = percentageOfWorld1(332); 
console.log(percPortugal1, percChina1, percUSA1);


// Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10); 
const percChina3 = percentageOfWorld3(1441); 
const percUSA3 = percentageOfWorld3(332); 
console.log(percPortugal3, percChina3, percUSA3);


// Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

const describePopulation = function (country, population) { 
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`; 
  console.log(description);
};
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);

// Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
const populations = [10, 1441, 332, 83]; 
console.log(populations.length === 4); 
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
]; console.log(percentages);

// Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after sometime, the new country is dissolved. So remove it from the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
const neighbours = ['Norway', 'Sweden', 'Russia']; 
neighbours.push('Utopia');
console.log(neighbours); 
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) { 
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);


// Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
const myCountry = {
country: 'Finland',
capital: 'Helsinki',
language: 'finnish',
population: 6,
neighbours: ['Norway', 'Sweden', 'Russia']
};

// Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
console.log(
`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2; 
console.log(myCountry.population);

// Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
const myCountry2 = {
country: 'Finland',
capital: 'Helsinki',
language: 'finnish',
population: 6,
neighbours: ['Norway', 'Sweden', 'Russia'],
describe: function () { 
    console.log(
`${this.country} has ${this.population} million 
${this.language}-speaking people, 
${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
); },
checkIsland: function () {
this.isIsland = this.neighbours.length === 0 ? true : false;
// Even simpler version (see why this works...)
// this.isIsland = !Boolean(this.neighbours.length);
} };
myCountry2.describe(); 
myCountry2.checkIsland(); 
console.log(myCountry2);


//  Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 10 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let voter = 1; voter <= 10; voter++) 
console.log(`Voter number ${voter} is currently voting`);

// Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

const populations1 = [10, 1441, 332, 83]; 
const percentages2 = [];
for (let i = 0; i < populations1.length; i++) {
const perc = percentageOfWorld1(populations1[i]);
percentages2.push(perc); }
console.log(percentages2);

// Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

const listOfNeighbours = [ 
    ['Canada', 'Mexico'], 
    ['Spain'],
['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
for (let y = 0; y < listOfNeighbours[i].length; y++)
console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while loop?

const percentages3 = [];
let i = 0;
while (i < populations.length) {
const perc = percentageOfWorld1(populations[i]); 
percentages3.push(perc);
i++;
} console.log(percentages3);

// JavaScript Fundamentals: Part 1

// Coding Challenge #1
// Mark and Jake are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and Jake's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than Jake.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. Jake weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. Jake weights 85 kg and is 1.76 m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJake = 92;
// const heightJake = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJake = 85;
const heightJake = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJake = massJake / (heightJake * heightJake);
const markHigherBMI = BMIMark > BMIJake;
console.log(`Marks BMI is ${BMIMark} and Jakes BMI is ${BMIJake}`);
console.log(BMIMark, BMIJake, markHigherBMI);


// Coding Challenge #2: If Else 
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than Jake's!" or "Jake's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than Jake's (23.9)!"
// Hint: Use an if/else statement 😉

// const massMark = 78;
// const heightMark = 1.69;
// const massJake = 92;
// const heightJake = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJake = 85;
const heightJake = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJake = massJake / (heightJake * heightJake);
const markHigherBMI = BMIMark > BMIJake;
console.log(BMIMark, BMIJake);
if(BMIMark > BMIJake){
  console.log(`Mark's BMI ${BMIMark} is higher than Jake's ${BMIJake}!`);
} else{
  console.log(`Jake's BMI ${BMIJake} is higher than Mark's ${BMIMark}!`);
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (89 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if(scoreDolphins > scoreKoalas){
//   console.log('Dolphins win the tropphy!');
// } else if (scoreKoalas > scoreDolphins){
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas){
//   console.log("It's a draw!");
// }

// Bonus 1 Solution:
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//   console.log('Dolphins win the tropphy!');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas){
//   console.log("It's a draw!");
// }

// Bonus 2 Solution:
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
  console.log("It's a draw!");
} else {
  console.log('No one wins the trophy :(');
}

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value.C reate a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// § Value X is between 50 and 300, if it's >= 50 && <= 300😉
const bill = 275;
// const bill = 475;
const tip = (bill <=300 && bill >=50) ? (bill * 0.15) : (bill * 0.2);
console.log(bill, tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);


// JavaScript Fundamentals: Part 2

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data1 and Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

const calcAverage = (a, b, c) =>  (a + b + c) / 3
console.log(calcAverage(3,4,5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if(avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphins win the trophy! (${avgDolphins} vs. ${avgKoalas}) `);
  } else if (avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas win the trophy! (${avgKoalas} vs. ${avgDolphins}) `);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill+tip 
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// const bill = 275;
// // const bill = 475;
// const tip = (bill <=300 && bill >=50) ? (bill * 0.15) : (bill * 0.2);
// console.log(bill, tip);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

const calcTip = function(bill){
  return (bill <=300 && bill >=50) ? (bill * 0.15) : (bill * 0.2);
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips);

const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(bills, tips, totals);

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their fullname, mass, and height (Mark Miller and Jake Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI,together with the fullname and the respective BMI. Example: "Jake's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Mark weights 78 kg and is 1.69 m tall. Jake weights 92 kg and is 1.95 m tall.

const mark = {
  fullName: 'Mark Miller',
  mass: '78',
  height: '1.69',
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
const jake = {
  fullName: 'Jake Smith',
  mass: '92',
  height: '1.95',
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
mark.calcBMI();
jake.calcBMI();
console.log(mark.bmi, jake.bmi);

//  "Jake's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.bmi > jake.bmi){
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jake.fullName}'s (${jake.bmi})`);
} else if (jake.bmi > mark.bmi){
  console.log(`${jake.fullName}'s BMI (${jake.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉 Bonus:
// 4. Bonus:Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill){
  return (bill <=300 && bill >=50) ? (bill * 0.15) : (bill * 0.2);
}

for(let i = 0; i <= bills.length; i++)
const tip = calcTip(bills[i]);
tips.push(tip);
totals.push(tip + bills[i]);

console.log(bills, tips, totals);

const calcAverage = function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    // sum = sum + arr[i]
    sum =+ arr[i]; // shorthand
  }
  console.log(sum);
return sum / arr.length;
}
console.log(calcAverage([2,3,7])); // 4
console.log(calcAverage(totals));
console.log(calcAverage(tips));

// Developer Skills & Editor Setup:

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]



// JavaScript in the Browser: DOM and Events

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Selecttheelementwiththe'again'classandattachaclickeventhandler 2. Inthehandlerfunction,restoreinitialvaluesofthe'score'and
// 'secretNumber' variables
// 3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput
// fields
// 4. Alsorestoretheoriginalbackgroundcolor(#222)andnumberwidth(15rem)



// Data Structures, Modern Operators and Strings:

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams(22 players)
// 4. During the game,Bayern Munich(team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.oddsobject, create one variable for each odd(called 'team1', 'draw' and 'team2')
// 6. Write a function('printGoals')that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
team1: 'Bayern Munich', 
team2: 'Borrussia Dortmund', 
players: [
[
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller', 
      'Gnarby',
      'Lewandowski',
], [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
], ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
team1: 1.33, x: 3.25, team2: 6.5,
}, };

// 1. Using destructuring
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {odds:{team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players){ // using rest parameters: it packs all incoming arguments into 1 array
console.log(players);
console.log(`${players.length} goals were scored`);
} 
printGoals('Davies', 'Muller', 'Lewandowski', 'kimmich'); // 4 goals were scored
printGoals('Davies', 'Muller'); // 2 goals were scored
printGoals(game.scored); // (not correct way to do it) // 1 goals were scored 
printGoals(...game.scored); // (using spread operator)  // 4 goals were scored 

// 7. 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win')


// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }

// 1.
for (const [index, player] of game.scored.entries())
console.log(`Goal ${index + 1}:${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
 average += odd;
 console.log(average);
 average /= odds.length;
 console.log(average);

 // 3.
 for (const [team, odd] of  Object.entries(game.odds)){
  //  console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // console.log(`Odd of ${odd}`)
  console.log(`Odd of ${teamStr} ${odd}`)
 }
// Odd of victory Bayern Munich: 1.33 
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console:"An event happened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL

const gameEvents = new Map([ 
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'], 
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'], 
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'], 
]);

// 1.
console.log(gameEvents.values());
// Get the unique values 
// const events = new Set(gameEvents.values()); // Set(4){"⚽ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card"}
//Convert the Set into an array using [ ] and spread operator ... to unpack
const events = [...new Set(gameEvents.values())]; // ["⚽ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card"]
console.log(events);

// 2.
gameEvents.delete(64);

// 3. divide number of events by the duration of the game
console.log(`An event happened,on average, every ${90/gameEvents.size} minutes`);
// console.log(gameEvents.keys()); // MapIterator {17, 36, 47,61,69, 70, 72, 76, 80, 92}
// console.log([...gameEvents.keys()]) // [17, 36, 47,61,69, 70, 72, 76, 80, 92]
const time = [...gameEvents.keys()].pop(); // Removes last element out of the array and returns it
console.log(time); 
console.log(`An event happened,on average, every ${time/gameEvents.size} minutes`); // Accurate game time

//4.
for(const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST' : 'SECOND'; // using ternary operator
  console.log(`[${half} HALF] ${minute}: ${event}`)
}


// Coding Challenge #4 (Working with Strings)
// 1.Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// 2.Should produce this output (5 separate console.log outputs): 
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!

// 1.
document.body.append(document.createElement('textarea')); 
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);
  for(const [i, row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second); // underscore_case  underscore  case
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(output);

    //2. 
    // console.log(output.padEnd(20, ' ')); // to add empty spaces you can ignore the empty argument
    // console.log(output.padEnd(20));
    console.log(`${output.padEnd(20)}✅ ${'✅'.repeat(i+1)}`);
  }
})
// underscore_case -> underscoreCase
//  first_name -> firstName
// Some_Variable -> someVariable 
//   calculate_AGE -> calculateAge
// delayed_departure -> delayedDeparture



// A Closer Look at Functions:

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
// Your tasks:
// 1. Createamethodcalled'registerNewAnswer'onthe'poll'object.The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
// 3. Createamethod'displayResults'whichdisplaysthepollresults.The
// method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.
// 5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

// Test data for bonus:
// § Data1:[5,2,3]
// § Data2:[1,5,3,9,6,1]
// Hints: Use many of the tools you learned about in this and the last section 😉

const poll = {
question: "What is your favourite programming language?", 
options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section! 
answers: new Array(4).fill(0),
};


// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
// 1. TaketheIIFEbelowandattheendofthefunction,attachaneventlistenerthat changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
// 2. Andnowexplaintoyourself(orsomeonearoundyou)whythisworked!Takeall the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
(function () {
const header = document.querySelector('h1'); 
header.style.color = 'red';

document.querySelector('body').addEventListener('click', function(){
  header.style.color = 'blue';
 } );

})();

// // Working With Arrays:

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. CreateanarraywithbothJulia's(corrected)andKate'sdata
// 3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
// 3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
// 4. Runthefunctionforbothtestdatasets
// Test data:
// Data1:[5,2,4,1,15,8,3] 
// Data2:[16,6,10,5,6,1,4]




// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
// Test data:
// Data1:[5,2,4,1,15,8,3] 
// Data2:[16,6,10,5,6,1,4]


// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loopoverthe'dogs'arraycontainingdogobjects,andforeachdog,calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. FindSarah'sdogandlogtotheconsolewhetherit'seatingtoomuchortoo little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Createanarraycontainingallownersofdogswhoeattoomuch ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Logastringtotheconsoleforeacharraycreatedin3.,likethis:"Matildaand Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Logtotheconsolewhetherthereisanydogeatingexactlytheamountoffood that is recommended (just true or false)
// 6. Logtotheconsolewhetherthereisanydogeatinganokayamountoffood (just true or false)
// 7. Createanarraycontainingthedogsthatareeatinganokayamountoffood(try to reuse the condition used in 6.)
// 8. Createashallowcopyofthe'dogs'arrayandsortitbyrecommendedfood portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// Test data:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, { weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, { weight: 32, curFood: 340, owners: ['Michael'] },
];





// Object Oriented Programming (OOP):

// Coding Challenge #1
// Your tasks:
// 1. Useaconstructorfunctiontoimplementa'Car'.Acarhasa'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
// 3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
// 4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

 

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge#1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
// Data car 1: 'Ford' going at 120 km/h


// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%



// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge#3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
// Test data:
// Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%




// Asynchronous JavaScript:

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes asinputs alatitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
// 3. Once you have the data,take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second.If you reload fast,you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message

// PART 2
// 6. Now it's time to use the received data to render a country.So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors,just like we have done in thelast lecture (you can even copy this code, no need to type the same code)
    
// Test data:
// Coordinates 1: 52.508, 13.381 (Latitude, Longitude) 
// Coordinates 2: 19.037, 72.873
// Coordinates 3: -33.933, 18.474




// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉

// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path
// 2. When the imageis done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the 'error' event), reject the promise
// 3. If this part is too tricky for you,just watch the first partof the solution

// PART 2
// 4. Consume the promise using .then and also add an errorhandler
// 5. After the image has loaded, pause execution for 2 seconds using the'wait' function we created earlier
// 6. After the 2 seconds have passed, hide the current image (setdisplayCSS property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that 😉)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast



// Coding Challenge #3
// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge#2, this time using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
// 2. Compare the two versions,think about the big differences, and see which one you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast3G” in the dev tools Network tab

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array
// 5. Add the 'parallel' class to all the images(ithassomeCSSstyles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg']. To test, turn off the 'loadNPause' function
