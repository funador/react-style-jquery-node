const attachListeners = () => {
  $.on('body', 'submit', '.add-todo', handlers.addHandler)
  $.on('.collection', 'click', '.delete', handlers.deleteHandler)
  $.on('.collection', 'click', '.save', handlers.updateTextHandler)
  $.on('.collection', 'submit', 'form', handlers.updateTextHandler)
  $.on('.collection', 'click', '.edit', handlers.editTextHandler)
  $.on('.collection', 'click', '.done', handlers.updateDoneHandler)
}