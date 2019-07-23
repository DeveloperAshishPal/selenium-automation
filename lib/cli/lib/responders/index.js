var pluginLoader = require('../../../../utils/pluginLoader')(__dirname);

responderList = function(){
    // give list of available responder from plugins
    let responders = Object.keys(pluginLoader);
    responders = responders.map(item=>{
        return item.replace(/_/g,' ');
    });
    return responders
}

loadResponder = function(responder,arg){
    // load responder function
    pluginLoader[responder](arg);
}

module.exports = {
    'list' : responderList,
    'load' : loadResponder
}

