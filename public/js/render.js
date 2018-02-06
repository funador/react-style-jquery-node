const render = (() => () => {
  $('.collection').html(store.todos.map(todo => {
    
    const truncated = todo.text.length > 30
      ? todo.text.slice(0, 40) + "\u2026"
      : todo.text

    console.log(todo.text)

    const text = todo.editing 
      ? `<input value='${todo.text}'>`
      : `<div class='text ${todo.done}'>${truncated}</div>`

    const editClass = todo.editing
      ? `save`
      : 'edit'

    const disabledClass = todo.editing
      ? `disabledBtn`
      : ''

    const deleteClass = todo.editing
      ? ''
      : 'delete'

    const doneClass = todo.editing
      ? ''
      : 'done'

    const editingIcon = todo.editing
      ? 'save'
      : 'create'

    return `<li class="collection-item">
              <div class='row'>
                <div class='col s8'>
                  ${text}
                </div>
                <div class='col s4'>
                  <a href="#!" class="secondary-content ${deleteClass}" data-id='${todo.id}'>
                    <i class="material-icons ${disabledClass}">delete</i>
                  </a>
                  <a href="#!" class="secondary-content ${doneClass}" data-id='${todo.id}'>
                    <i class="material-icons ${disabledClass}">done</i>
                  </a>
                  <a href="#!" class="secondary-content ${editClass}" data-id='${todo.id}'>
                   <i class="material-icons">${editingIcon}</i>
                 </a>
                </div>
              </div>
            </li>`
  }))
})()