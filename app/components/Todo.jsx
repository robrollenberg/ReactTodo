var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
moment.locale('nl');
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completeAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'
    var renderDate = () => {
        var message = 'Gemaakt op ';
        var timestamp = createdAt;

        if (completed) {
          message = 'Afgerond op ';
          timestamp = completeAt;
        }

        return message + moment.unix(timestamp).format('D MMMM YYYY [om] HH:mm');
    };

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
          <input type='checkbox' checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }

});

export default connect()(Todo);
