// NOTE THAT I DO NOT USE CONST BECAUSE MY BROWSER DOES NOT LET ME UPDATE THE FUNCTION SHOULD I WANT TO CHANGE IT! YES I KNOW TO USE IT. NO I WILL NOT DO IT HERE!

//1. Write a function called sum which takes a whole number n as a parameter which will add up all the whole numbers between 1 and the value of n.  The sum should be returned by the function.
let sum = (n) => {
    total = 0;
    for(i = 1; i <= n; i++){
        total += i;
    }
    console.log(total);
}
sum(10); // 55 

//2. Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables). 
let syllables = (str) => {
    str = str.toLowerCase();
    let marker = str[0];
    counter = 0;
    for (let char of str){
        if (char === marker){
            counter++;
        }
    }
    console.log(`The repeating syllable starts with ${marker}`);
    console.log(`There are ${counter} repeating syllables`);
}
syllables("Lalalalalalala"); // 7

//3. Write a function called addTo that accepts a number as a parameter and adds all whole numbers smaller or equal than the parameter. The result is to be returned.
let addTo = (n) => {
    total = 0;
    for(i = 1; i <= n; i++){
        total += i;
    }
    console.log(total);
}
addTo(10); // 55

//4. Write a function that takes a string input and console logs each letter.
let verticalString = (str) => {
    for (let char of str){
        console.log(char);
    }
}
verticalString("Hello World!"); 

//5. Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
let caseDetective = (str) => {
    if (str === str.toLowerCase()){
        console.log(`all lowercase!`);
    }
    else if (str === str.toUpperCase()){
        console.log(`ALL UPPERCASE!`);
    }
    else{
        console.log(`It has mixed cases!`);
    }
}
caseDetective("Hello World!"); // mixed
caseDetective("HELLO WORLD!"); // upper
caseDetective("hello world!"); // lower

//6. Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.
let guessing = () => {
    let answer = 10;
    let attempt = 0;
    let useranswers = []; 
    // yes I know we haven't got to array yet but this is the best way to keep track of non-consecutive repeats since we cannot assume users will only repeat consecutively!! 
    do{
        num = Number(prompt("Guess what number I'm thinking of!"));
        if (useranswers.includes(num)) {
            alert("You have already guessed this number! Try again");
        }
        if (num < answer){
            alert("That was smaller than my number!");
            attempt++;
            useranswers.push(num);
        }
        else if(num > answer) {
            alert("That was bigger than my number!");
            attempt++;
            useranswers.push(num);
        }
        else{
            alert("Good job you got it!");
            attempt++;
        }
    }
    while (num != answer);
    console.log(`You got it in ${attempt} attempts!`);
}
guessing();

//7. Write a JavaScript for loop that will iterate from 0 to 25. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//Your results should look like this:
// "0 is even"
// "1 is odd"
// "2 is even"
for (i=0; i<=25; i++){
    if(i%2==0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}

//8. You have a shelf that can only hold so many books. For each iteration of the loop, we will add one book onto the shelf. Once the shelf has 80 books, you can no longer add anymore. Write a script that after every iteration, it will tell you how many remaining books you can add into the shelf. Console long something like, "There is room for only ## of books"
for (i=0; i<=80; i++){
    let remain = 80 - i;
    console.log(`You can add ${remain} more books.`)
}
console.log(`Shelf is full! It can only hold 80 books.`);

//9. Print out a grid of asterisks. Ask the user for the height (rows) and width (columns).
let height = Number(prompt("How many rows of stars would you like?"));
let width = Number(prompt("How many columns of stars would you like?"));
let row = "";
for (j=0; j<width; j++){
    row += "*";
}
for (i=0; i<height;i++){
    console.log(row);
} 

//10. Write a function that takes a string input, transforms the odd characters to uppercase, and console logs the result of the entire string.
let weird = (str) => {
    let output = "";
    for (i = 0; i < str.length; i++){
        if (i % 2 == 0){ // odd since index starts at 0 so first odd char is 0
            output += str[i].toUpperCase(); 
        }
        else{
            output += str[i];
        }
    }
    console.log(output);
}
weird("hello world!");

//11. Write a function that accept two integers and displays the larger number.
let larger = (a, b) =>{
    if (a > b){
        console.log(`The bigger number is ${a}`);
    }
    else if (a < b){
        console.log(`The bigger number is ${b}`);
    }
    else{
        console.log(`The two numbers are the same!`);
    }
}
larger(10, 50); // 50
larger(-5, -12); // -5
larger(0,0); // same

//12. Write a function that takes in 3 numbers and sorts them from lowest to highest. Display an alert box to show the result.
let sorting = (a, b, c) => {
    let min = Math.min(a,b,c);
    let max = Math.max(a,b,c);
    let answer = "";
    answer += `${min}, `;
    if (a != min && a!= max){
        answer += `${a}, `;
    }
    else if (b != min && b!= max){
        answer += `${b}, `;
    }
    else {
        answer += `${c}, `;
    }
    answer += max;
    alert(`Sorted list is: ${answer}`);
}
sorting(2,15,3);
sorting(-1,-2,-3);
sorting(0,0,10);

//13. Write a function that takes in a string and removes all vowels from it (a, e, i, o, u), and returns the new string. If the string is empty, break from the loop.
let noVowels = (str) => {
    let vowels = "aeiou";
    let answer = "";
    for (let char of str){
        if (vowels.includes(char) == false){
            answer += char;
        }
        else {}
    }
    console.log(answer);
}
noVowels("Hello World!");
noVowels("This is a test!");