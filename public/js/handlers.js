const handlers = (() => {
  
  const _toast = message => {
    Materialize.toast(message, 1500, 'rounded')
  }

  const _getId = e => {
    return e.target.closest('.collection-item').getAttribute('data-id')
  }

  const addHandler = e => {
    e.preventDefault()
    const $target = e.target.querySelector('#todo')
    const text = $target.value.trim()
    $target.value = ''

    if (!text) {
      _toast('Please add some text')
      return
    }

    $.ajax('post', {text})
      .then(newTodo => {
        _toast('Todo Added') 
        store.addToStore(newTodo)
        render.todos() 
      })
  }

  const deleteHandler = e => {
    const id = _getId(e)

    $.ajax('delete', null, id)
      .then(data => {
        _toast('Todo Deleted')
        store.deleteFromStore(data.id)
        render.todos()    
      })
  }

  const editTextHandler = e => {
    e.preventDefault()
    const id = _getId(e)
    store.setEditing(id)
    render.todos()
  }

  const _updateActions = (body, id) => {
    $.ajax('put', body, id)
      .then(updatedTodo => {
        const originalTodo = store.findById(id) 
        const sameSame = updatedTodo.text != originalTodo.text

        if (!sameSame) {
          _toast('Todo Updated')  
        }

        store.updateInStore(updatedTodo)
        render.todos()
      })
  }

  const updateTextHandler = e => {
    e.preventDefault()
    const item = e.target.closest('.collection-item')
    const id = _getId(e)

    const text = item.querySelector('input').value.trim()

    if (!text) {
      _toast('Please add some text')
      return
    }
  
    store.setEditing(id)
    _updateActions({text}, id)
  }

  const updateDoneHandler = e => {
    const $item = e.target.closest('.collection-item')
    const id = _getId(e)

    const done = $item.querySelector('.text').classList.contains('completed') 
      ? '' 
      : 'completed'

    _updateActions({done}, id)
  }

  return {
    addHandler,
    deleteHandler,
    editTextHandler,
    updateTextHandler,
    updateDoneHandler
  }
})()