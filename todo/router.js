const router = require('express').Router()
const controllers = require('./controller')

router.get('/', controllers.getTodos)
router.post('/', controllers.addTodo)
router.delete('/:id', controllers.deleteTodo)
router.put('/:id', controllers.updateTodo)

module.exports = router