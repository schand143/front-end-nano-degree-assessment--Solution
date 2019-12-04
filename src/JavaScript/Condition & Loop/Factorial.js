solution = 1;
input = 6;
for (i = 0; i < input; i++) {
  solution = solution * (input - i);
}
console.log("Factorial of " + input + "! is= " + solution);
