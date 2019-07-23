var Design = require('../../sketch');

var commands = {
    'help': 'need help',
    'exit': 'im going',
    'more --{id}': 'more with input id'
};

exports.help = function (arg) {
    helpDesign = new Design();
    helpDesign.help(commands);
};