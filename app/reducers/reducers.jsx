var uiid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uiid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completeAt: undefined
        }
      ];
    //add case for TOGGLE_TODO completed to oppesite value & updateCompleteAt
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextCompleted =!todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completeAt: nextCompleted ? moment().unix() : undefined
          };
        }
      });
    default:
      return state;
  };
};
