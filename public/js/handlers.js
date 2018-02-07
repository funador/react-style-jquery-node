const handlers = (() => {
  
  const addHandler = e => {
    e.preventDefault()
    
    const $target = $(e.currentTarget).find('#todo')
    const todo = $target.val().trim()
    $target.val('')
    
    if(!todo) {
      Materialize.toast('Please add some text', 1200, 'rounded')
      return
    }

    api.addTodo({text: todo})
      .then(newTodo => {
        Materialize.toast('Todo Added', 1200, 'rounded')
        store.addToStore(newTodo)
        render()    
      })
  }

  const deleteHandler = e => {
    e.preventDefault()
    const id = $(e.currentTarget).data('id')

    api.deleteTodo(id)
      .then(data => {
        Materialize.toast('Todo Deleted', 1200, 'rounded')
        store.deleteFromStore(data.id)
        render()    
      })
  }

  const editTextHandler = e => {
    e.preventDefault()
    const id = $(e.currentTarget).data('id')
    store.setEditing(id)
    render()
  }

  const _updateApi = (update, id) => {
    api.updateTodo(update, id)
      .then(updatedTodo => {
        const originalTodo = store.findById(id)
        const textCheck = updatedTodo.text != originalTodo.text

        if (textCheck) {
          Materialize.toast('Todo Updated', 1200, 'rounded')  
        }

        store.updateInStore(updatedTodo)
        render()
      })
  }

  const updateTextHandler = e => {
    e.preventDefault()
    const $target = $(e.currentTarget)
    const id = $target.data('id')
    const hasSaveClass = $target.hasClass('save')

    if (e.which != 13 && !hasSaveClass) {
      return false
    }
    
    if (!hasSaveClass) {
      store.setEditing(id)
    }
    
    const text = $target.closest('.collection-item').find('input').val().trim()

    if(!text) {
      Materialize.toast('Please add some text', 1200, 'rounded')
      return
    }

    _updateApi({text}, id)
  }

  const updateDoneHandler = e => {
    e.preventDefault()

    const $target = $(e.currentTarget)
    const id = $target.data('id')
    const done = $target.closest('.collection-item').find('.text').hasClass('completed') 
      ? '' 
      : 'completed'

    _updateApi({done}, id)
  }

  return {
    addHandler,
    deleteHandler,
    updateTextHandler,
    editTextHandler,
    updateDoneHandler
  }
})()