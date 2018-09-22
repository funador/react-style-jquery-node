const api = (() => {
  
  const url = `${window.location.origin}/api`

  const addTodo = todo => 
    axios.post(url, todo)
      .then(res => res.data)

  const deleteTodo = id => 
    axios.delete(`${url}/${id}`)
      .then(res => res.data)    

  const updateTodo = (update, id) => 
    axios.put(`${url}/${id}`, update)
      .then(res => res.data)

  const getTodos = () => 
    axios.get(url)
      .then(res => res.data)

  return {
    addTodo,
    deleteTodo,
    updateTodo,
    getTodos
  }

})()