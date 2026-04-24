# Part 1

1. It will print: values added: 20
   
    In line 16, it has "sumValues(10, 10, true)." This means that num1 is 10, num2 is also 10, and add is true. In line 9, it is printing the result and the result is doing "result = num1 + num2;", which is 10 + 10 = 20. 

2. It will print: values added: 20

    Because "var" is function scoped so result can still be used outside the if block as long as it is inside the same function.

3. We should not use "var" because it is function scope instead of block scope, so this means that regardless of the block it is defined in, it can be accessed anywhere inside the function it is defined in. This can lead to naming problems and make code harder to understand. 

4. It will print: values added: 20

   This question similar as question#1. The difference is "var" and "let", "let" is block scope. The processes are the same and they are all in the same block so it can still be used.

5. Error. Because "let" is block scope so line 13 cannot access result outside that block. If we want to fix this, we can declare the "result" before the if statement.

6. Error. Because the "const" prevents it from being reassigned after it is assigned for the first time. So this will cause an error when it is trying to do "result = num1 + num2;".

7. Error. Because the "const" prevents it from being reassigned after it is assigned for the first time. The program stops at line 7 because of the error.