const Todoist = require("./index");
require('dotenv').config();

const todoist = new Todoist(process.env.TODOIST_API_TOKEN);

// console.log(todoist._getUuid());
// process.exit();

todoist.sections.get(69084605).then(p => {
    console.log(p);
});
