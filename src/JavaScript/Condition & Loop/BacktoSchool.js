var education = "no high school diploma";

var salary;

switch (7) {
  case 1:
    education = "no high school diploma";
    salary = 25636;
    break;
  case 2:
    education = "a high school diploma";
    salary = 35256;
    break;
  case 3:
    education = "an Associate's degree";
    salary = 41496;
    break;
  case 4:
    education = "a Bachelor's degree";
    salary = 59124;
    break;
  case 5:
    education = "a Master's degree";
    salary = 69732;
    break;
  case 6:
    education = "a Professional degree";
    salary = 89960;
    break;
  case 7:
    education = "a Doctoral degree";
    salary = 84396;
    break;
}

console.log(
  "In 2015, a person with " +
    education +
    " earned an average of $" +
    salary.toLocaleString("en-US") +
    "/year."
);
