# 20 12 02 JS Loops Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a JS file 
1. Link the JS file before the closing `body` tag using the `script` tag
1. Open the HTML file in the browser
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly

## Simple Loops
1. Iterate from 0 to 10 by one using a for loop. On each iteration output the message : "This is iteration [ITERATOR_CURRENT_VALUE]" for each iteration
1. Iterate from 2 to 12 by one using a for loop. On each iteration output the message : "This is iteration [ITERATOR_CURRENT_VALUE]"
1. Declare  a variable equal to 0. Output the message "This is iteration [ITERATOR_CURRENT_VALUE]" and add one to the variable for each iteration as long as the variable is less than or equal to 10 using a while loop.
1. Declare  a variable equal to 0. Output the message "This is iteration [ITERATOR_CURRENT_VALUE]" and add one to the variable for each iteration as long as the variable is less than or equal to 10 using a do while loop to preform the loop at least once.

## Added Complexity : For Loops
1. Prompt the user for a start number and end number. Iterate from the start number to the end number by 1 using a for loop. Output the message : "This is user iteration [ITERATOR_CURRENT_VALUE]" for each iteration.
1. Iterate from 0 to 10 by 2 using a for loops. Output the message : "Counting by 2 : [ITERATOR_CURRENT_VALUE]" for each iteration.
1.  Iterate from 0 to 25 by 5 using a for loops. Output the message : "Counting by 5 : [ITERATOR_CURRENT_VALUE]" for each iteration.
1.  Iterate from 0 to 30 by 3 using a for loops. Output the message : "Counting by 3 : [ITERATOR_CURRENT_VALUE]" for each iteration.
1. Iterate from 10 to 5 (backward) by 1 using a for loop. Output the message : "Counting backward : [ITERATOR_CURRENT_VALUE]" for each iteration.
1. Iterate from 30 to 3 (backward) by 3 using a for loop. Output the message : "Counting backward by 3 : [ITERATOR_CURRENT_VALUE]" for each iteration.
1. Iterate from 0 to 35 by 1. If the current value of the iterator is divisible by 5 output the message : "[ITERATOR_CURRENT_VALUE] is divisible by 5" otherwise output the message : "Iteration : [ITERATOR_CURRENT_VALUE]"
1. Iterate from 0 to 40 by 1. If the current value of the iterator is divisible by 3 output the message : "[ITERATOR_CURRENT_VALUE] is divisible by 3" otherwise output the message : "Iteration : [ITERATOR_CURRENT_VALUE]"

## For Loops + Arrays
1. Declare a variable `nameArray` with values : "Autumn", "Tiarra", "Erin", "Meka", "Kevin".
1. Iterate from the beginning to the end of the array. Output the message "Name array element [ITERATOR_CURRENT_VALUE] is name [ELEMENT_CORRESPONDING_TO_INDEX_POSITION]" on each iteration.
1. Iteration from the end to the beginning (backward) of the array. Output the message "Name array element [ITERATOR_CURRENT_VALUE] is name [ELEMENT_CORRESPONDING_TO_INDEX_POSITION]" on each iteration.
1. Iterate from the beginning to the end of the array. Output the message "Name array element [ITERATOR_CURRENT_VALUE] is name [ELEMENT_CORRESPONDING_TO_INDEX_POSITION]" on each iteration unless the element corresponding to the index position is "Autumn".

## Added Complexity : While Loops
1. Declare an undefine variable `userInput`.
1. Prompt the user to update the value of userInput until the value is "q" using a while loop.

## While Loops + Arrays
1. Prompt the user to enter a name to an array and save the result in a variable `userArrayInput`
1. Define an empty array `nameArray`
1. Prompt the user to enter a name and add the name to `nameArray` until they enter "q" using a while loop.
1. Iterate through the name array using a for loop.