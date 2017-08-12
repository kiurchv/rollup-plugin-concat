# rollup-plugin-concat
This [Rollup](http://rollupjs.org) plugin allows you to concatenate javascript files together.  Files are inserted in place of sprockets-style directives, allowing you to enforce strict ordering of concatenated code.

## Use cases
You can use this to concatenate a bunch of files together without having to make them into modules.  This is useful when you're dealing with large applications or libraries.  E.g., in the case of an Angular 1.5 app, you can simply use `concat_tree` on the folder(s) holding your Directives, Views, Services, and Factories, instead of adding imports or exporting wrapper functions in every file.

## Install
This package has not been added to npm yet.

## Usage

```js
var rollup = require('rollup').rollup;
var concat = require('rollup-plugin-concat');
rollup({
  entry: 'main.js',
  plugins: [ concat() ]
}).then(...);
```

To concatenate a single file:

```js
// your code
//= concat ./path/to/file.js
// more code
```

To concatenate all javascript files in a directory:

```js
// your code
//= concat_tree ./directory
// more code
```

## TODO
- Produce source maps
- Recursive concatenation (check concatenated files for concatenation directives)
- Remove fs-jetpack dependency?
- Option to generate source file comments in output