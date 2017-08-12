//= concat_tree ./tree

console.log('source.js');

var x = 1;

//= concat ./source2.js
//= concat ./source3.js

console.log(x);