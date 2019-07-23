var config = require('./config');

module.exports = function(){
    this.verticalSpace = function (lines) {
        lines = typeof (lines) == 'number' && lines > 0 ? lines : 1;
        for (i = 0; i < lines; i++) {
            console.log('');
        }
    }
    
    this.horizontalLine = function (colorCode = config.colorCode.White) {
        let width = process.stdout.columns;
    
        var line = '';
    
        for (i = 0; i < width; i++) {
            line += '-';
        }
        console.log(colorCode,line);
    }
    
    this.centered = function (str,colorCode = config.colorCode.White) {
        str = typeof (str) == 'string' && str.trim().length > 0 ? str.trim() : '';
    
        let width = process.stdout.columns;
    
        let leftPadding = Math.floor((width - str.length) / 2);
        let line = ''
        for (i = 0; i < leftPadding; i++) {
            line += ' ';
        }
        line += str;
        console.log(colorCode,line);
    
    }

    this.bold = function(str){
        str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : '';
        let boldStr = `\e[1m${str}\e[0m`;
        return boldStr;
    }

    this.italic = function(str){
        str = typeof (str) == 'string' && str.trim().length > 0 ? str.trim() : '';
        let italicStr = `\e[3m${str}\e[0m`;
        return italicStr;
    }

    this.underline = function(str){
        str = typeof (str) == 'string' && str.trim().length > 0 ? str.trim() : '';
        let underlineStr = `\e[4m${str}\e[0m`;
        return underlineStr;
    }

    this.strikeout = function(str){
        str = typeof (str) == 'string' && str.trim().length > 0 ? str.trim() : '';
        let strikeoutStr = `\e[9m${str}\e[0m`;
        return strikeoutStr;
    }
}