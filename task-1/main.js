const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

//Make function called 'makeLedgend'
//Function will take in a 'name' (string) -as only argument
//Function will return new string which includes 'name' plus the words 'is now a ledged'
//Use a for loop
//Create new array which includes 'is now a ledgend' for each item 
//Save array to the var 'ledgendary celebs'
//New for loop for new array of all celebrity names which start witha vowel
//Store new array in new var 'vowelCelebs'


//Task 1

let myName = 'Shabana'

function makeLedgend(){

}

console.log(myName + " is now a ledgend")


//Task 2

function makeLedgend(name){

for (let i=0; i<celebs.length; i++) {
  let ledgendaryCelebs = [];
  ledgendaryCelebs.push(celebs[i]+ " is now a ledgend")
  console.log(ledgendaryCelebs)

}
}
makeLedgend();

//Task 3

function listVowelCelebs(){

for (let i=0; i<celebs.length; i++){

}

}

let vowelCelebs = celebs.filter(str => /^[aeiou]/i.test(str));

console.log(vowelCelebs);

listVowelCelebs();


