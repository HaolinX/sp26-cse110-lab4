# Part 2

1. The bug is the input values are strings. Because of they are not numbers, "num1 + num2" combined them as text instead of adding them.
2. We can cast the inputs to numbers and then do the adding. "let result = Number(num1) + Number(num2);"