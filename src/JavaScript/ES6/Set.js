/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */

const myFavoriteFlavors = new Set([
  'chocolate chip',
  'cookies and cream',
  'strawberry',
  'vanilla'
]);

// console.log(myFavoriteFlavors);

const it = myFavoriteFlavors.values();
it.next();
// myFavoriteFlavors.delete('strawberry')

// console.log(myFavoriteFlavors);

// for(const fa of myFavoriteFlavors){
//   console.log(fa);
// }
