# rollup-plugin-concat
This [Rollup](http://rollupjs.org) plugin allows you to concatenate javascript files together.  Files are inserted in place of sprockets-style directives, allowing you to enforce strict ordering of concatenated code.

## use cases
You can use this to concatenate a bunch of files together without having to make them into modules.  This is useful when you're dealing with many small inter-dependent modules where using ES6 import syntax becomes a chore.  E.g., in the case of an Angular 1.5 app, you can simply use `concat_tree` on the folders holding your Directives, Views, Services, and Factories.  Below are some example usages:

- [zEdit/app.js](/zedit/blob/master/src/javascripts/app.js)
- [zEdit/xelib.js](/zedit/blob/master/src/javascripts/xelib.js)

## install
This package has not been added to npm yet.

## usage

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
- Remove fs-jetpack dependency?
- Option to generate source file comments in output
