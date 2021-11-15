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

};
