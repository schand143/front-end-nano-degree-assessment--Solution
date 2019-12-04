/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num) {
  var howFunny = "";
  for (var i = 1; i <= num; i++) {
    howFunny += "ha";
  }
  return howFunny + "!";
});
