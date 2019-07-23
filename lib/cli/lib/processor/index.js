var responders = require('../responders');

// Input processor
processInput = function (str) {
    str = typeof (str) == 'string' && str.trim().length > 0 ? str.trim() : false;

    // Only process the input if the user actually wrote
    if (str) {
        var uniqueInputs = responders.list();
        // Check possible input matches
        var matchFound = false;
        uniqueInputs.some(input => {
            if (str.toLowerCase().indexOf(input) > -1) {
                matchFound = true;
                
                // load the responder
                responders.load(input,str);
                return true;
            }
        })

        // If no match found
        if (!matchFound) {
            console.log('Unknown Command : Please use \x1b[34mHelp\x1b[0m for docs');
        }
    }
}

module.exports = {
    'processInput': processInput
};