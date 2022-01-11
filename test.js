const Todoist  = require("./index");
const apiToken = require('fs').readFileSync('.env').toString().trim();
const todoist  = new Todoist(apiToken);

todoist.projects.all().then(r => console.log(r));
