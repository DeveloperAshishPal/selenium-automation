module.exports = function(dirname) {
    var normalizedPath = require("path").join(dirname, "plugins");
    var plugins = {};
    require("fs").readdirSync(normalizedPath).forEach(function(file) {
      tmp = require(normalizedPath + "/" + file);
      Object.keys(tmp).map(function(key) {
        plugins[key] = tmp[key];
      });
    });
    return plugins;  
};