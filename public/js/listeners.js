const attachListeners = (() => () => {
    $('#app #add-todo').submit(handlers.addHandler)
    $('#app .collection').on('click', '.delete', handlers.deleteHandler)
    $('#app .collection').on('click', '.save', handlers.updateTextHandler)
    $('#app .collection').on('keyup', 'input', handlers.updateTextHandler)
    $('#app .collection').on('click', '.edit, .save', handlers.editTextHandler)
    $('#app .collection').on('click', '.done', handlers.updateDoneHandler)
  }
)()