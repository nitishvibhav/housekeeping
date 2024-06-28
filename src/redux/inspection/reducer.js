const initialState = {
    inspection:[],
    postState:0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'POST_INSPECTION_PENDING':
        return {...state, postState: 1};
      case 'POST_INSPECTION_FULFILLED':
        return {...state, postState: 2, inspection: action.payload.data};
      case 'POST_INSPECTION_REJECTED':
        return {...state, postState: 3};
      default:
        return state;
    }
  };
  
  export default reducer;
                    