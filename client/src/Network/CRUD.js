import Network from './Network';

function read(endpoint) {
    return Network(endpoint)
}

function create(endpoint, body = {}) {
    return Network(endpoint, { body })
}

function update(endpoint, body = {}) {
    return Network(endpoint, { method: "PUT", ...body })
}

function remove(endpoint) {
    return Network(endpoint, { method: "DELETE" })
}

export { read, create, update, remove }