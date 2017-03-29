var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uiid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uiid(),
          text: 'Walk the dog'
        }, {
          id: uiid(),
          text: 'Clean the yard'
        }, {
          id: uiid(),
          text: 'Feed the cat'
        }, {
          id: uiid(),
          text: 'Cook diner'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uiid(),
          text: text
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onSetAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
