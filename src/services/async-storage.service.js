import { utilService } from "./util.service"

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    removeAll
}

function query(entityType, filterBy = {}, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    if (entities.length === 1) entities = entities[0]
    if (entities.length) entities = _filterEntities(filterBy, entities)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
    newEntity._id = utilService.makeId()
    return query(entityType)
        .then(entities => {
            entities.unshift(newEntity)
            _save(entityType, entities)
            return entities
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
            return entities
        })
}

function removeAll(entityType) {
    window.localStorage.removeItem(entityType)
}


function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _filterEntities(filterBy, entities) {
    if (filterBy?.text) {
        const regex = new RegExp(filterBy.text, 'i')
        entities = entities.filter(obj => regex.test(obj.description))
        return entities
    }

    if (filterBy?.sort) {
        switch (filterBy.sort) {
            case 'Expenses':
                entities = [...entities.sort((a, b) => (b.expense) - (a.expense))]
                break;
            case 'Income':
                entities = [...entities.sort((a, b) => (b.income) - (a.income))]
                break;
            case 'Balance':
                entities = [...entities.sort((a, b) => (b.balance) - (a.balance))]
                break;
            case 'Date':
                entities = [...entities.sort((a, b) => new Date(b.date) - new Date(a.date))]
                break;
            default:
                return entities
        }
    }
    return entities
}