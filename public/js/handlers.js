const handlers = (() => {
  
  const _toast = message => {
    Materialize.toast(message, 1500, 'rounded')
  }

  const addHandler = e => {
    e.preventDefault()
    const $target = $(e.currentTarget).find('#todo')
    const text = $target.val().trim()
    $target.val('')

    if (!text) {
      _toast('Please add some text')
      return
    }

    api.addTodo({text})
      .then(newTodo => {
        _toast('Todo Added')
        store.addToStore(newTodo)
        render.todos()    
      })
  }

  const deleteHandler = e => {
    const id = $(e.currentTarget).closest('.collection-item').data('id')

    api.deleteTodo(id)
      .then(data => {
        _toast('Todo Deleted')
        store.deleteFromStore(data.id)
        render.todos()    
      })
  }

  const editTextHandler = e => {
    e.preventDefault()
    const id = $(e.currentTarget).closest('.collection-item').data('id')
    store.setEditing(id)
    render.todos()
  }

  const _updateApi = (update, id) => {
    api.updateTodo(update, id)
      .then(updatedTodo => {
        const originalTodo = store.findById(id)
        const textCheck = updatedTodo.text != originalTodo.text

        if (textCheck) {
          _toast('Todo Updated')  
        }

        store.updateInStore(updatedTodo)
        render.todos()
      })
  }

  const updateTextHandler = e => {
    e.preventDefault()
    const $target = $(e.currentTarget)
    const $item = $target.closest('.collection-item')
    const id = $item.data('id')
    const text = $item.find('input').val().trim()

    if (!text) {
      _toast('Please add some text')
      return
    }

    store.setEditing(id)
    _updateApi({text}, id)
  }

  const updateDoneHandler = e => {
    const $item = $(e.currentTarget).closest('.collection-item')
    const id = $item.data('id')
    const done = $item.find('.text').hasClass('completed') 
      ? '' 
      : 'completed'

    _updateApi({done}, id)
  }

  return {
    addHandler,
    deleteHandler,
    editTextHandler,
    updateTextHandler,
    updateDoneHandler
  }
})()