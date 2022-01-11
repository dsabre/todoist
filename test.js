const Todoist  = require("./index");
const apiToken = require('fs').readFileSync('.env').toString().trim();
const todoist  = new Todoist(apiToken);

