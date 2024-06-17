const initialState = {
  maintenanceData:{},
  getState:0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MAINTENANCE_PENDING':
      return {...state, getState: 1};
    case 'GET_MAINTENANCE_FULFILLED':
      return {...state, getState: 2, maintenanceData: action.payload.data};
    case 'GET_MAINTENANCE_REJECTED':
      return {...state, getState: 3};
    default:
      return state;
  }
};

export default reducer;
                  