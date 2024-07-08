const initialState = {
  postState: 0,
  getState: 0,
  deleteState: 0,
  lostandFoundData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // POST METHOD
    case 'POST_LOSTANDFOUND_PENDING':
      return {...state, postState: 1};
    case 'POST_LOSTANDFOUND_FULFILLED':
      return {...state, postState: 2, lostandFoundData: action.payload.data};
    case 'POST_LOSTANDFOUND_REJECTED':
      return {...state, postState: 3};

    // GET METHOD
    case 'GET_LOSTANDFOUND_PENDING':
      return {...state, getState: 1};
    case 'GET_LOSTANDFOUND_FULFILLED':
      return {...state, getState: 2, lostandFoundData: action.payload.data};
    case 'GET_LOSTANDFOUND_REJECTED':
      return {...state, getState: 3};

    // DELETE METHOD
    case 'DELETE_LOSTANDFOUND_PENDING':
      return {...state, deleteState: 1};
    case 'DELETE_LOSTANDFOUND_FULLFILLED':
      return {
        ...state,
        deleteState: 2,
        lostandFoundData: action.payload.data,
      };
    case 'DELETE_LOSTANDFOUND_REJECTED':
      return {...state, deleteState: 3};

    default:
      return state;
  }
};

export default reducer;
