const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'please provide some text for your todo'
  },
  done: {
    type: String,
    default: ''
  }
})

TodoSchema.methods.serialize = function() {
  return {
    text: this.text,
    done: this.done,
    id: this._id
  }
}

module.exports = mongoose.model('Todo', TodoSchema)