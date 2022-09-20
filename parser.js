const moment = require("moment");

moment.locale('it');

const REX = /\{\{[^}]*\}\}/gm;

module.exports = function(file) {

    const grammar = require(file);

    const output = grammar.output;

    const keys = Object.keys(grammar).filter(k => k !== "output");

    function rnd(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    
    function oneof() {
        return replaceTokens(arguments[rnd(0, arguments.length)]);
    }
    
    function choose(key) {
        const obj = grammar[key];
        if (Array.isArray(obj)) {
            return replaceTokens(obj[rnd(0, obj.length)]);
        }
        return replaceTokens(obj);
    }

    function replaceTokens(input) {

        if (!input) return "";

        const matches = input.match(REX);

        var output = input;

        if (matches) {
            for (const match of matches) {
                var replacement;
                const clean = match.replace("{{", "").replace("}}", "");
                if (clean.startsWith(":")){
                    replacement = eval(clean.substring(1));
                }
                else {
                    var key = clean.split(":", 1)[0];
                    replacement = choose(key);
                }
                output = output.replace(match, replacement);
            }
        }

        return output.trimEnd();
    
    }

    return replaceTokens;

}