
const initialState = {
  getState:0,
  departmentData:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DEPARTMENT_PENDING':
      return {...state, getState: 1};
    case 'GET_DEPARTMENT_FULFILLED':
      return {...state, getState: 2, departmentData: action.payload.data};
    case 'GET_DEPARTMENT_REJECTED':
      return {...state, getState: 3};
    default:
      return state;
  }
};

export default reducer;
                  