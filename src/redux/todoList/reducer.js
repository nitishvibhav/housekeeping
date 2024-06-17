const initialState = {
  getState:0,
  toDoList : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOLIST_PENDING':
      return {...state, loststate: 1};
    case 'GET_TODOLIST_FULFILLED':
      return {...state, loststate: 2, toDoList: action.payload.data};
    case 'GET_TODOLIST_REJECTED':
      return {...state, loststate: 3};
    default:
      return state;
  }
};

export default reducer;
                  