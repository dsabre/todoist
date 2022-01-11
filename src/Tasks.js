module.exports = class TodoistTasks {
	
	constructor(main) {
		this._main   = main;
		this._prefix = 'tasks';
	}
	
	all(projectId, sectionId, labelId, filter, lang, ids) {
		let params = {};
		
		if (projectId) {
			params.project_id = projectId;
		}
		if (sectionId) {
			params.section_id = sectionId;
		}
		if (labelId) {
			params.label_id = labelId;
		}
		if (filter) {
			params.filter = filter;
		}
		if (lang) {
			params.lang = lang;
		}
		if (ids) {
			params.ids = ids.join(',');
		}
		
		params = this._main.toQuery(params);
		
		let url = this._prefix;
		if (params) {
			url = url + '?' + params;
		}
		
		return this._main.client.get(url).then(response => response.data);
	}
	
	create(content, description, project_id, section_id, parent_id, order, label_ids, priority, due_string, due_date, due_datetime, due_lang, assignee) {
		if (!content) {
			throw Error('No content provided');
		}
		
		const data = {content, description, project_id, section_id, parent_id, order, label_ids, priority, due_string, due_date, due_datetime, due_lang, assignee};
		
		Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
		Object.keys(data).forEach(key => data[key] === null && delete data[key]);
		
		return this._main.client.post(this._prefix, JSON.stringify(data)).then(response => response.data);
	}
	
	update(id, content, description, label_ids, priority, due_string, due_date, due_datetime, due_lang, assignee) {
		if (!id) {
			throw Error('No id provided');
		}
		
		const data = {content, description, label_ids, priority, due_string, due_date, due_datetime, due_lang, assignee};
		
		Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
		Object.keys(data).forEach(key => data[key] === null && delete data[key]);
		
		return this._main.client.post(`${this._prefix}/${id}`, JSON.stringify(data)).then(response => response.status);
	}
	
	get(id) {
		if (!id) {
			throw Error('No id provided');
		}
		
		return this._main.client.get(`${this._prefix}/${id}`).then(response => response.data);
	}
	
	delete(id) {
		if (!id) {
			throw Error('No id provided');
		}
		
		return this._main.client.delete(`${this._prefix}/${id}`).then(response => response.status);
	}
	
	close(id) {
		if (!id) {
			throw Error('No id provided');
		}
		
		return this._main.client.post(`${this._prefix}/${id}/close`).then(response => response.status);
	}
	
	reopen(id) {
		if (!id) {
			throw Error('No id provided');
		}
		
		return this._main.client.post(`${this._prefix}/${id}/reopen`).then(response => response.status);
	}
	
};
