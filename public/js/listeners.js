const attachListeners = (() => () => {
    $('#add-todo').submit(handlers.addHandler)
    $('.collection').on('click', '.delete', handlers.deleteHandler)
    $('.collection').on('click', '.save', handlers.updateTextHandler)
    $('.collection').on('submit', 'form', handlers.updateTextHandler)
    $('.collection').on('click', '.edit', handlers.editTextHandler)
    $('.collection').on('click', '.done', handlers.updateDoneHandler)
  }
)()