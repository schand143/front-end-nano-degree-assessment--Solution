/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(lgh) {
  var msg = "";
  for (i = 0; i < lgh; i++) {
    msg += "ha ";
  }
  return msg;
};

console.log(laugh(10));
