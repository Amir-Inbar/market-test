const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

const collectionDb = 'forms';

async function query(query) {
    try {
        const collection = await dbService.getCollection(collectionDb);
        return await collection.find().toArray();
    } catch (err) {
        logger.error(`failed to get forms from '${collectionDb}':`, err);
        throw err
    }
}

async function add(form) {
    try {
        const collection = await dbService.getCollection(collectionDb);
        const res = await collection.updateOne({ email: form.email }, { $setOnInsert: form }, { upsert: true });
        return res.upsertedCount;
    } catch (err) {
        logger.error('adding failed:', err);
        throw err;
    }
}

module.exports = {
    query,
    add
}


