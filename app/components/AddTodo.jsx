var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strTodo = this.refs.todoText.value;

    // Check if any value is set
    if(strTodo){
      this.refs.todoText.value = '';
      this.props.onSetAddTodo(strTodo);
    }else{
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type='text' ref='todoText' placeholder='What do you need to do?'/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
