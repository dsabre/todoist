const axios           = require("axios");
const TodoistProjects = require("./src/Projects");
const TodoistSections = require("./src/Sections");

module.exports = class Todoist {

    constructor(apiToken) {
        const client = axios.create({
            baseURL: 'https://api.todoist.com/rest/v1/',
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                "X-Request-Id":  this._getUuid(),
                "Content-Type":  "application/json"
            }
        });

        this.projects = new TodoistProjects(client);
        this.sections = new TodoistSections(client);
    }

    _getUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

};
