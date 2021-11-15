module.exports = class TodoistProjects {

    constructor(client) {
        this._client = client;
        this._prefix = 'projects';
    }

    all() {
        return this._client.get(this._prefix).then(response => response.data);
    }

    create(name, parentId, color, favorite) {
        if (!name) {
            throw Error('No name provided');
        }

        const data = {
            name:     name,
            favorite: !!favorite
        };

        if (parentId) {
            data.parent_id = parentId;
        }

        if (color) {
            data.color = color;
        }

        return this._client.post(this._prefix, JSON.stringify(data)).then(response => response.data);
    }

    get(id) {
        if (!id) {
            throw Error('No id provided');
        }

        return this._client.get(`${this._prefix}/${id}`).then(response => response.data);
    }

    update(id, name, color, favorite) {
        if (!id) {
            throw Error('No id provided');
        }

        const data = {
            name:     name,
            favorite: !!favorite
        };

        if (color) {
            data.color = color;
        }

        return this._client.post(`${this._prefix}/${id}`, JSON.stringify(data)).then(response => response.status);
    }

    delete(id) {
        if (!id) {
            throw Error('No id provided');
        }

        return this._client.delete(`${this._prefix}/${id}`).then(response => response.status);
    }

    getCollaborators(id) {
        if (!id) {
            throw Error('No id provided');
        }

        return this._client.get(`${this._prefix}/${id}/collaborators`).then(response => response.data);
    }

};
