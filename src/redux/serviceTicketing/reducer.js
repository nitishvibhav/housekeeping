const initialState = {
  serviceTicket: {},
  getState: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SERVICETICKETING_PENDING':
      return {...state, getState: 1};
    case 'GET_SERVICETICKETING_FULFILLED':
      return {...state, getState: 2, serviceTicket: action.payload.data};
    case 'GET_SERVICETICKETING_REJECTED':
      return {...state, getState: 3};
    default:
      return state;
  }
};

export default reducer;
