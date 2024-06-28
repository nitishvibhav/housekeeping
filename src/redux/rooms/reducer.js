const initialState = {
    rooms:[],
    getState:0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ROOMS_PENDING':
        return {...state, getState: 1};
      case 'GET_ROOMS_FULFILLED':
        return {...state, getState: 2, rooms: action.payload.data};
      case 'GET_ROOMS_REJECTED':
        return {...state, getState: 3};
      default:
        return state;
    }
  };
  
  export default reducer;
                    