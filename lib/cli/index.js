/*
* CLI TOOL
*/

// Dependencies
var readline = require('readline');
var util = require('util');
var debug = util.debuglog('cli');
var processor = require('./lib/processor');
var Sketch = require('../cli/lib/sketch');
initSketch = new Sketch();
// Instantiate the cli module
var cli = {};

// Init script
cli.init = function(){
    // Send the start message
    initSketch.init();
    
    // Start the interface
    var _interface = readline.createInterface({
        input : process.stdin,
        output: process.stdout,
        prompt : '> '
    });

    // create an initial prompt
    _interface.prompt();

    // Handle input
    _interface.on('line',(str)=>{
        // send to the input processor
        processor.processInput(str);

        // re-initialize prompt
        _interface.prompt();
    })

    // If the user stops the cli
    _interface.on('close',()=>{
        console.log('Bye');
        process.exit(0);
    })

}

// Export the module
module.exports = cli;