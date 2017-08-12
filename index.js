var jetpack = require('fs-jetpack');
var path = require('path');
var os = require('os');

var ensureTrailingNewLine = function(code) {
  if (!code.endsWith(os.EOL)) code += os.EOL;
  return code;
};

var load = function(path) {
    if (!jetpack.exists(path)) console.log('ERROR: File not found at "' + path + '"');
    return ensureTrailingNewLine(jetpack.read(path));
};

var loadTree = function(path) {
    return jetpack.find(path, { matching: '*.js' }).reduce(function(code, filePath) {
        return code + load(filePath);
    }, '');
};

module.exports = function(options) {
    options = options || {};
    return {
        name: 'concat',
        transform: function(code, id) {
            var dir = path.dirname(id);
            var regex = /\/\/= concat(_tree)? ([^\n\r]+)/gi;
            var result = code.replace(regex, function(match, tree, target) {
                if (options.debug) {
                    console.log('rollup-plugin-concat: processing "' + match + '" in "' + id + '"');
                }
                let targetPath = path.join(dir, target);
                return (tree ? loadTree(targetPath) : load(targetPath));
            });
            return {
                code: result,
                map: {mappings: '' }
            };
        }
    };
};