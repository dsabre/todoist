const Todoist = require("./index");
require('dotenv').config();

const todoist = new Todoist(process.env.TODOIST_API_TOKEN);

todoist.tasks.all(2278494454, 69081790, 2158879201, null, null, [5332546105, 5332546004]).then(p => {
    console.log(p);
});
