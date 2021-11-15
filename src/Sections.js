module.exports = class TodoistSections {

    constructor(client) {
        this._client = client;
        this._prefix = 'sections';
    }

    all() {
        return this._client.get(this._prefix).then(response => response.data);
    }

    ofProject(projectId) {
        if (!projectId) {
            throw Error('No projectId provided');
        }

        return this._client.get(`${this._prefix}?project_id=${projectId}`).then(response => response.data);
    }

    create(projectId, name, order) {
        if (!projectId) {
            throw Error('No projectId provided');
        }

        if (!name) {
            throw Error('No name provided');
        }

        const data = {
            name:       name,
            project_id: projectId
        };

        if (order) {
            data.order = order;
        }

        return this._client.post(this._prefix, JSON.stringify(data)).then(response => response.data);
    }

    get(id) {
        if (!id) {
            throw Error('No id provided');
        }

        return this._client.get(`${this._prefix}/${id}`).then(response => response.data);
    }

    update(id, name) {
        if (!id) {
            throw Error('No id provided');
        }

        if (!name) {
            throw Error('No name provided');
        }

        const data = {
            name: name
        };

        return this._client.post(`${this._prefix}/${id}`, JSON.stringify(data)).then(response => response.status);
    }

    delete(id) {
        if (!id) {
            throw Error('No id provided');
        }

        return this._client.delete(`${this._prefix}/${id}`).then(response => response.status);
    }

};
