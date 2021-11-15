const Todoist  = require("./index");
const apiToken = require('fs').readFileSync('.env').toString().trim();
const todoist  = new Todoist(apiToken);

todoist.tasks.all(2278494454, 69081790, 2158879201, null, null, [5332546105, 5332546004]).then(p => {
    console.log(p);
});
