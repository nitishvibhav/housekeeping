const initialState = {
  getState:0,
  cleaningData:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLEANING_PENDING':
      return {...state, getState: 1};
    case 'GET_CLEANING_FULFILLED':
      return {...state, getState: 2, cleaningData: action.payload.data};
    case 'GET_CLEANING_REJECTED':
      return {...state, getState: 3};

      case 'POST_CLEANING_PENDING':
        return {...state, getState: 1};
      case 'POST_CLEANING_FULFILLED':
        return {...state, getState: 2, cleaningData: action.payload.data};
      case 'POST_CLEANING_REJECTED':
        return {...state, getState: 3};
    default:
      return state;
  }
};

export default reducer;
                  