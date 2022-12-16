const router = require('express').Router()
const controller = require('../controllers/usuario.controller')

router.post('/', controller.save)

router.get('/', controller.getAll)

router.get('/:id', controller.getById)

router.put('/:id', controller.update)

router.delete('/:id', controller.remove)

router.post('/authenticate', controller.authenticate)

module.exports = router