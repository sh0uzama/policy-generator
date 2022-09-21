const express = require('express');
const eta = require('eta');

const parser = require('./parser');
const template = require('./template');

const app = express();
const port = process.env.PORT || 5000;

const parse = parser('./grammar.json');

// var result = parse("{{title}} {{subtitle}}");
// console.log(result);

// return;

app.get('/', (req, res) => {

    const title = parse("{{title}}");
    const subtitle = parse("{{subtitle}}");
    const content = parse("{{content}}");
    const however = parse("{{however}}");

    const result = eta.render(template, { 
        title, 
        subtitle, 
        content, 
        however 
    });

    res.send(result);
    
})

app.listen(port, () => {
    console.log(`Policy app listening on port ${port}`);
})