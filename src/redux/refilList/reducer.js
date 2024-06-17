const initialState = {
  refilList:[],
  getState:0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REFILLIST_PENDING':
      return {...state, getState: 1};
    case 'GET_REFILLIST_FULFILLED':
      return {...state, getState: 2, refilList: action.payload.data};
    case 'GET_REFILLIST_REJECTED':
      return {...state, getState: 3};
    default:
      return state;
  }
};

export default reducer;
                  