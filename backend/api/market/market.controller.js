const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const socketService = require('../../services/socket.service')
const marketService = require('./market.service')

// GET FORMS
async function query(req, res) {
    try {
        const send = await marketService.query(req.query);
        res.json(send);
    } catch (err) {
        logger.error('Failed to get markets', err)
        res.status(500).send({ err: 'Failed to get markets' })
    }
}

// POST FORM
async function add(req, res) {
    try {
        res.json(await marketService.add(req.body));
    } catch (err) {
        logger.error('Failed to add board', err);
        res.status(500).send({ err: 'Failed to add board' });
    }
}

module.exports = {
    getForms: query,
    addForm: add,
}