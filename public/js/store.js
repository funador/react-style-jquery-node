const store = (() => {
  
  function addToStore(todo) {
    todo.editing = false
    this.todos = [todo, ...this.todos]
  }

  function deleteFromStore(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  function setEditing(id) {
    this.todos = this.todos.map(todo => {
      if(todo.id == id) {
        todo.editing = !todo.editing
      }
      return todo
    })
  }

  function findById(id) {
    return this.todos.find(todo => todo.id == id)
  }

  function updateInStore(updated) {
    this.todos = this.todos.map(todo => 
      todo.id == updated.id 
        ? Object.assign(todo, updated)
        : todo
    )
  }

  function addTodosOnLoad(todos) {
    this.todos = todos.reverse().map(todo => {
      todo.editing = false
      return todo
    })
  }

  return {
    todos: [],
    addToStore,
    deleteFromStore,
    setEditing,
    findById,
    updateInStore,
    addTodosOnLoad
  }
})()