# Part 2

1. It will output: 3
   
   "i" is declared as a "var" and it is function scope. After the loop ends, "i" will become 3 because for loop will stops when it is less than the length of the array. It also means that whenwe try to print "i", it can still be used outside the for loop

2. It will output: 150
   
   The variable "discountedPrice" is also declared as a "var" and it is function scope. "discountedPrice" is accessible within the function. Last iteration(i = 2), the calculation is prices[2] * (1 - 0.5), which is 300 * 0.5 = 150.

3. It will output: 150

    Similiar withe the last question. The variable "finalPrice" is also declared as a "var" and it is function scope. "finalPrice" is accessible within the function. We already know that "discountedPrice" is 150 at the last iteratoin, so Math.round(150 * 100) / 100 = 150
   
4. It will output: [50, 100, 150]
   
   It loops through the prices array [100, 200, 300] and applies the discount to each value. After that, it stores the new price in the "discounted" array and returns that array at the end. Iteration 0: "discountedPrice" = 100 * 0.5 = 50, "finalPrice" = Math.round(50 * 100) / 100 = 50, pushes 50. Iteration 1: "discountedPrice" = 200 * 0.5 = 100, "finalPrice" = Math.round(100 * 100) / 100 = 100, pushes 100. Iteration 2: "discountedPrice" = 300 * 0.5 = 150, "finalPrice" = Math.round(150 * 100) / 100 = 150, pushes 150
   
5. Error. Because "i" is declared as "let" and it is block scope. So "i" only exists inside the for loop. But line 12 is outside the for loop so it cannot access "i"
   
6. Error. Similar to the last question. "discountedPrice" is declared as "let" so it only exists inside the for loop. When it is outside the for loop, it cannot use the variable.
   
7. It will output: 150

    "finalPrice" is declared as "let" OUTSIDE the for loop so it can still be used at line 14. After the loop finishes, its last value is 150 (steps similar to question#3).
   
8. It will output: [50, 100, 150]
   
   Similar to question#4. It loops through the prices array [100, 200, 300] and applies the discount to each value. Because the array "discounted" is is declared as "let" OUTSIDE the for loop.
   
9.  Error. Because "i" is declared as "let" inside the for loop, so it only exists inside that loop. Line 11 is outside the loop so "i" cannot be used there. 
    
10. It will output: 3

    "length" is declared as "const" inside the function so line 12 can access it. The array has 3 items so the length is 3.
    
11. It will output: [50, 100, 150]

    The array "discounted" is is declared as "const" OUTSIDE the for loop so it still can be access it.

12.  

        A. student.name

        B. student['Grad Year']

        C. student.greeting()

        D. student['Favorite Teacher'].name

        E. student.courseLoad[0]
    
13.  

        A. '3' + 2 --> '32' Because the + with a string will do the joining. 2 is converted to '2' so '3' + '2' = '32'

        B. '3' - 2 --> 1 Because - turns '3' into the number 3, then do the subtraction.

        C. 3 + null --> 3 Because null becomes 0, then do the addition.

        D. '3' + null --> '3null' Because + with a string does string joining, so null becomes `null`

        E. true + 3 --> 4 Because true becomes 1, then do 1 + 3 = 4

        F. false + null --> 0 Because false becomes 0 and null also becomes 0

        G. '3' + undefined --> `3undefined` Because + with a string does string joining so undefined becomes `undefined`

        H. '3' - undefined` --> NaN Because - tries to turn both values into numbers. '3' becomes 3 but undefined becomes NaN

14.   

        A. '2' > 1 --> true Because '2' is converted to the number 2 and 2 > 1 is true.

        B. '2' < '12' --> false Because javaScript compares them alphabetically. It compares '2' with '1' and `'2'` is greater

        C. 2 == '2' --> true Because == allows type conversion so '2' is converted to 2

        D. 2 === '2' --> false Because === does not convert types and one is a number and the other is a string.

        E. true == 2 --> false Because true becomes 1 and 1 == 2 is false.

        F. true === Boolean(2) --> true Because Boolean(2) is true (not 0, it will be false if Boolean(0))
    
15. "==" checks if two values are equal and it is allow type conversion, so it can convert type and do the check. "===" checks if two values are exactly the same value and the same type, and not allow type conversion.
    
17. It will output: [2, 4, 6]

    "modifyArray" takes parameters: array [1, 2, 3] and calls function "doSomething". The "doSomething" function multiplies each number by 2. Inside "modifyArray", when i = 0: array[0] is 1, so callback(1) is the same as calling doSomething(1) --> returns 1 * 2 --> 2. And keep doing the similar steps, so we get [2, 4, 6].
    
19. It will output: 1 4 3 2

    "console.log(1)" and "console.log(4)" will run immediately, so we get 1 4. "setTimeout" has a delay of 0 ms and 1000 ms, so it will print out 3 then 2.