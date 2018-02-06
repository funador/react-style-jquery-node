$(() => {
  attachListeners()
  api.getTodos()
    .then(todos => {  
      store.addTodosOnLoad(todos)
      render()
    })
})
