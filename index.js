const axios           = require("axios");
const TodoistProjects = require("./src/Projects");
const TodoistSections = require("./src/Sections");
const TodoistTasks    = require("./src/Tasks");

module.exports = class Todoist {
	
	constructor(apiToken, version = 2) {
		this.client = axios.create({
			baseURL: `https://api.todoist.com/rest/v${version}/`,
			headers: {
				'Authorization': `Bearer ${apiToken}`,
				"X-Request-Id":  this.getUuid(),
				"Content-Type":  "application/json"
			}
		});
		
		this.syncClient = axios.create({
			baseURL: 'https://api.todoist.com/sync/v8/sync',
			headers: {
				'Authorization': `Bearer ${apiToken}`
			}
		});
		
		this.projects = new TodoistProjects(this);
		this.sections = new TodoistSections(this);
		this.tasks    = new TodoistTasks(this);
	}
	
	toQuery(obj) {
		const str = [];
		for (const p in obj) {
			if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		}
		return str.join("&");
	}
	
	getUuid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			const r = Math.random() * 16 | 0;
			const v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
	
};
