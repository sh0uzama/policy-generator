const express = require('express');
const eta = require('eta');

const parser = require('./parser');
const template = require('./template');

const app = express();
const port = process.env.PORT || 5000;

const parse = parser('./grammar.json');

app.use(express.static('public'));

app.get('/', (req, res) => {

    const title = parse("{{title}}");
    const subtitle = parse("{{subtitle}}");
    const content = parse("{{content}}");
    const however = parse("{{however}}");
    const role = parse("{{role}}");

    const result = eta.render(template, { 
        title, 
        subtitle, 
        content, 
        however,
        role
    });

    res.send(result);

})

app.listen(port, () => {
    console.log(`Policy app listening on port ${port}`);
})