const render = (() => () => {
  $('.collection').html(store.todos.map(todo => {
    const { editing, text, done, id } = todo

    const todoText = editing 
      ? `<input value='${text}' data-id='${id}'>`
      : `<div class='text ${done}'>${text}</div>`

    const editClass = editing ? `save` : 'edit'
    const disabledClass = editing ? `disabled` : ''
    const deleteClass = editing ? '' : 'delete'
    const doneClass = editing ? '' : 'done'
    const editingIcon = editing ? 'save' : 'create'

    return `<li class="collection-item" data-id='${id}'>
              <div class='row'>
                <div class='col s7 m8'>
                  ${todoText}
                </div>
                <div class='col s5 m4'>
                  <a href="#!" class="secondary-content ${deleteClass}">
                    <i class="material-icons ${disabledClass}">delete</i>
                  </a>
                  <a href="#!" class="secondary-content ${editClass}">
                    <i class="material-icons">${editingIcon}</i>
                  </a>
                  <a href="#!" class="secondary-content ${doneClass}">
                    <i class="material-icons ${disabledClass}">done</i>
                  </a>
                </div>
              </div>
            </li>`
  }))
})()