console.log(`20 12 02 JS Loops Lecture Linked`); // check that files are linked

// Iterate from 0 to 10 by one using a for loop. On each iteration output the message : "This is iteration [ITERATOR_CURRENT_VALUE]" for each iteration
// statements : 1. define iterator 2. condition to loop 3. update the value of i
for(let i = 0; i <= 10; i = i + 1){
   console.log(`This is iteration ${i}`);
}

// Iterate from 2 to 12 by one using a for loop. On each iteration output the message : "This is iteration [ITERATOR_CURRENT_VALUE]"
for(let i = 2; i <= 12; i = i + 1){
    console.log(`This is iteration ${i}`);
}

// Declare a variable equal to 0. Output the message "This is iteration [ITERATOR_CURRENT_VALUE]" and add one to the variable for each iteration as long as the variable is less than or equal to 10 using a while loop.
let i = 0;
while(i <= 10){
    console.log(`This is iteration ${i}`);
    i = i + 1;
}
console.log("broken out of loop!");

// Declare a variable equal to 0. Output the message "This is iteration [ITERATOR_CURRENT_VALUE]" and add one to the variable for each iteration as long as the variable is less than or equal to 10 using a do while loop to preform the loop at least once.
do {
    console.log(`This is iteration ${i}`);
    i = i + 1;
} while(i <= 20);
console.log("broken out of loop");

// Prompt the user for a start number and end number. Iterate from the start number to the end number by 1 using a for loop. Output the message : "This is user iteration [ITERATOR_CURRENT_VALUE]" for each iteration.
let startNum = parseInt(prompt("Enter a start"));
let endNum = parseInt(prompt("Enter an end"));
for(let i = startNum; i <= endNum; i++){
    console.log(`This is user iteration ${i}`);
}

// Iterate from 0 to 10 by 2 using a for loops. Output the message : "Counting by 2 : [ITERATOR_CURRENT_VALUE]" for each iteration.
for(let i = 0; i <= 10; i+=2){ // i = i + 2
    console.log(`Counting by 2 : ${i}`);
}
// Iterate from 0 to 25 by 5 using a for loops. Output the message : "Counting by 5 : [ITERATOR_CURRENT_VALUE]" for each iteration.
for(let i = 0; i <= 25; i+=5){
    console.log(`Counting by 5 : ${i}`);
}
// Iterate from 0 to 30 by 3 using a for loops. Output the message : "Counting by 3 : [ITERATOR_CURRENT_VALUE]" for each iteration.
for(let i = 0; i <= 30; i+=3){
    console.log(`Counting by 3 : ${i}`);
}

// Iterate from 10 to 5 (backward) by 1 using a for loop. Output the message : "Counting backward : [ITERATOR_CURRENT_VALUE]" for each iteration.
for(let i = 10; i >= 5; i--){ // i = i -1
    console.log(`Counting backward : ${i}`);
}

// Iterate from 30 to 3 (backward) by 3 using a for loop. Output the message : "Counting backward by 3 : [ITERATOR_CURRENT_VALUE]" for each iteration.
for(let i = 30; i >= 3; i = i - 3){
    console.log(`Counting backward by 3 : ${i}`);
}

// Iterate from 0 to 35 by 1. If the current value of the iterator is divisible by 5 output the message : "[ITERATOR_CURRENT_VALUE] is divisible by 5" otherwise output the message : "Iteration : [ITERATOR_CURRENT_VALUE]"
for(let i = 0; i <= 35; i++){
    if(i % 5 == 0){
        console.log(`${i} is divisible by 5`);
    } else {
        console.log(`Iteration : ${i}`);
    }
}

// Iterate from 0 to 40 by 1. If the current value of the iterator is divisible by 3 output the message : "[ITERATOR_CURRENT_VALUE] is divisible by 3" otherwise output the message : "Iteration : [ITERATOR_CURRENT_VALUE]"
for(let i = 0; i <= 40; i++){
    if(i % 3 == 0){
        console.log(`${i} is divisible by 3`);
    }else {
        console.log(`Iteration : ${i}`);
    }
}

// Declare a variable nameArray with values : "Autumn", "Tiarra", "Erin", "Meka", "Kevin".
let names = ["Autumn", "Tiarra", "Erin", "Meka", "Kevin"];
console.log(names); // output in browser

// Iterate from the beginning to the end of the array. Output the message "Name array element [ITERATOR_CURRENT_VALUE] is name [ELEMENT_CORRESPONDING_TO_INDEX_POSITION]" on each iteration.
for(let i = 0; i < names.length; i++){
    console.log(`Name array element ${i} is name ${names[i]}`);
}

// Iteration from the end to the beginning (backward) of the array. Output the message "Name array element [ITERATOR_CURRENT_VALUE] is name [ELEMENT_CORRESPONDING_TO_INDEX_POSITION]" on each iteration.
for(let i = names.length - 1; i >= 0; i--){
    console.log(`Name array element ${i} is name ${names[i]}`);
}

// Iterate from the beginning to the end of the array. Output the message "Name array element [ITERATOR_CURRENT_VALUE] is name [ELEMENT_CORRESPONDING_TO_INDEX_POSITION]" on each iteration unless the element corresponding to the index position is "Autumn".
for(let i = 0; i < names.length; i++){
    if(names[i] != "Autumn"){
        console.log(`Name array element ${i} is name ${names[i]}`);
    }
}

// Declare an undefine variable userInput.
let userInput;
// Prompt the user to update the value of userInput until the value is "q" using a while loop.
while(userInput != "q"){
    userInput = prompt("Enter anything!");
}

// Prompt the user to enter a name to an array and save the result in a variable userArrayInput
let userArrayInput = prompt(`Add a name to the name array or enter q`);
// Prompt the user to enter a name and add the name to nameArray until they enter "q" using a while loop.
while(userArrayInput != "q"){
    names.push(userArrayInput);
    userArrayInput = prompt(`Add another name to the name array or enter q`);
}
// Iterate through the name array using a for loop.
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
