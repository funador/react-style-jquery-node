const Todo = require('./todo.model')

exports.addTodo = (req, res) => {
  Todo
    .create(req.body)
    .then(todo => {
      res.json(todo.serialize())      
    })
}

exports.getTodos = (req, res) => {
  Todo
    .find()
    .then(todos => {
      res.json(todos.map(todo => todo.serialize()))
    })
}

exports.deleteTodo = (req, res) => {
  Todo
    .findByIdAndRemove(req.params.id)
    .then(todo => {
      res.json({id: todo._id})    
    })
}

exports.updateTodo = (req, res) => {
  Todo.
    findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(todo => {
      console.log(todo)
      res.json(todo.serialize())    
    })
}