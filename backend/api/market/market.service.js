const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(query) {
    try {
        const sort = _buildSortCriteria(query);
        const filter = _buildFilterCriteria(query);
        const collection = await dbService.getCollection(collectionDb);
        let forms = await collection.find(filter).sort(sort);
        forms = await forms.toArray();
        return forms;
    } catch (err) {
        logger.error(`failed to get forms from '${collectionDb}':`, err);
        throw err
    }
}

async function add(form) {
    try {
        const collection = await dbService.getCollection(collectionDb);
        const res = await collection.insertOne(form);
        return res.insertedId;
    } catch (err) {
        logger.error('adding failed:', err);
        throw err;
    }
}

function _buildSortCriteria({ sort }) {
    const criteria = {};
    if (sort) {
        sort = JSON.parse(sort);
        criteria[sort.type] = (sort.descending) ? -1 : 1;
    }
    return criteria;
}

function _buildFilterCriteria({ filter }) {
    const criteria = {};
    if (filter) {
        filter = JSON.parse(filter);
        if (filter.name) criteria.name = { $regex: filter.name, $options: 'i' };
        if (filter.tags?.length) criteria.tags = { $elemMatch: { $regex: `^.*(${filter.tags.join('|')}).*$`, $options: 'i' } }
        if (filter.inStock !== null) criteria.inStock = { inStock: { $eq: filter.inStock } };
    }
    return criteria;
}

module.exports = {
    query,
    add
}


