
// Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.

for(var i = 0; i <=25; i++) {
  for(j = 0; j <= 99; j++ ){
    console.log(i + "-" + j);
  }
}