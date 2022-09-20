const express = require('express');
const app = express();
const port = 3000;

const parser = require('./parser');
const parse = parser('./grammar.json');

// var result = parse("{{title}} {{subtitle}}");
// console.log(result);

// return;

app.get('/', (req, res) => {
    const result = parse("{{title}} {{subtitle}} {{content}}");
    const however = parse("{{however}}");
    res.send("<html><head><title>TEST</title></head><body>" 
        + result
        + however
        + "</body></html>");
})

app.listen(port, () => {
    console.log(`Policy app listening on port ${port}`);
})