const initialState = {
  maintenanceData: {},
  getState: 0,
  postState: 0,
  deleteState: 0,
  updateState: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // GET METHOD
    case 'GET_MAINTENANCE_PENDING':
      return {...state, getState: 1};
    case 'GET_MAINTENANCE_FULFILLED':
      return {...state, getState: 2, maintenanceData: action.payload.data};
    case 'GET_MAINTENANCE_REJECTED':
      return {...state, getState: 3};

    // POST METHOD
    case 'POST_MAINTENANCE_PENDING':
      return {...state, postState: 1};
    case 'POST_MAINTENANCE_FULFILLED':
      return {...state, postState: 2, maintenanceData: action.payload.data};
    case 'POST_MAINTENANCE_REJECTED':
      return {...state, postState: 3};

    // DELETE METHOD
    case 'DELETE_MAINTENANCE_PENDING':
      return {...state, deleteState: 1};
    case 'DELETE_MAINTENANCE_FULLFILLED':
      return {
        ...state,
        deleteState: 2,
        maintenanceData: action.payload.data,
      };
    case 'DELETE_MAINTENANCE_REJECTED':
      return {...state, deleteState: 3};

    // UPDATE METHOD
    case 'UPDATE_MAINTENANCE_PENDING':
      return {...state, updateState: 1};
    case 'UPDATE_MAINTENANCE_FULLFILLED':
      return {
        ...state,
        updateState: 2,
        maintenanceData: action.payload.data,
      };
    case 'UPDATE_MAINTENANCE_REJECTED':
      return {...state, updateState: 3};
    default:
      return state;
  }
};

export default reducer;
