document.addEventListener('DOMContentLoaded', () => { 
  render.dom()
  attachListeners()

  $.ajax('get')
    .then(todos => {  
      store.addTodosOnLoad(todos)
      render.todos()
    })

}, false)
