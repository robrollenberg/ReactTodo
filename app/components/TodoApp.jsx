var React = require('react');
var uiid = require('node-uuid');
var moment = require('moment');
// Setting local to nl;
moment.locale('nl');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uiid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completeAt: undefined
        }
      ]
    })
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completeAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    })

    this.setState({todos: updatedTodos})
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
            <AddTodo onSetAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
      </div>
    );
  }

});

module.exports = TodoApp;
