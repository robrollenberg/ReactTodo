var React = require('react');
var moment = require('moment');
moment.locale('nl');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completeAt} = this.props;
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
          this.props.onToggle(id);
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

module.exports = Todo;
