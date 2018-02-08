const render = (() => {
  
  const todos = () => {
    $('.collection').html(store.todos.map(todo => {
      const { editing, text, done, id } = todo

      const todoText = editing 
        ? `<form>
             <input value='${text}' data-id='${id}'>
           </form>`
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
  }

  const dom = () => {
    $('#app').html(
      `<div class="container z-depth-1">
        <div class='row'>
          <div class="col s8 offset-s2">
            <h1>Todos</h1>
            <main>
              <form id='add-todo'>
                <div class="row">
                  <div class="col s9">
                    <input placeholder="Your Next Todo" id="todo" type="text" class="validate">
                  </div>
                  <div class="col s3 margin-top-7">
                    <button class="waves-effect waves-light btn" type="submit">add</button>
                  </div>
                </div>
              </form>  
              <br><br>
              <ul class="collection"></ul>
            </main> 
          </div>
        </div>
      </div>`
    )
  }

  return {
    todos,
    dom
  }
})()