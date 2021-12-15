const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { addForm, getForms } = require('./market.controller')
const router = express.Router()

// middleware that is specific to this router
router.use(requireAuth)

router.get('/', log, /*requireAuth,*/ getForms)
router.post('/', log, addForm)

module.exports = router