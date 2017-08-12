# rollup-plugin-concat
Adds file concatenation to rollup.  Files are inserted in place of sprockets-style directives, allowing you to enforce strict ordering of concatenated code.

## Install
This package has not been added to npm yet.

## Usage

    var rollup = require('rollup').rollup;
    var concat = require('rollup-plugin-concat');
    rollup({
      entry: 'main.js',
      plugins: [ concat() ]
    }).then(...);

To concatenate a single file:

    // your code
    //= concat ./path/to/file.js
    // other code

To concatenate all javascript files in a directory:

    // your code
    //= concat_tree ./directory
    // other code

## TODO
- Produce source maps
- Recursive concatenation (check concatenated files for concatenation directives)
- Remove fs-jetpack dependency?
- Option to generate source file comments in output