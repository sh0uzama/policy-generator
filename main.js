import parser from "./parser";
import template from "./template";
import pkg from "./package.json";

async function load() {

    const res = await fetch("https://raw.githubusercontent.com/sh0uzama/grammar-repo/main/policy.json");
    //const res = await fetch("test-grammar.json");
    const grammar = await res.json();
    
    const parse = parser(grammar);
    
    const data = {
        title: parse("{{title}}"),
        subtitle: parse("{{subtitle}}"),
        content: parse("{{content}}"),
        however: parse("{{however}}"),
        role: parse("{{role}}"),
        version: pkg.version
    }
    
    document.getElementById('app').innerHTML = Eta.render(template, data);

}

window.addEventListener('load', load);
