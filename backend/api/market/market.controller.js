const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const socketService = require('../../services/socket.service')
const reviewService = require('./market.service')

// GET LIST
async function query(req, res) {
    try {
        var { query } = req;
        const send = await boardService.query({ user: req.session.user, ...query });
        res.json(send);
    } catch (err) {
        logger.error('Failed to get markets', err)
        res.status(500).send({ err: 'Failed to get markets' })
    }
}

// POST
async function add(req, res) {
    try {
        const { session, body } = req;
        const { user } = session;
        res.json(await boardService.add(body, user));
    } catch (err) {
        logger.error('Failed to add board', err);
        res.status(500).send({ err: 'Failed to add board' });
    }
}

module.exports = {
    getForms: query,
    addForm: add,
}