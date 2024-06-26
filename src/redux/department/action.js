import * as source from './source';

export const getDepartmentDetails = () => {
  return {
    type: 'GET_DEPARTMENT',
    payload: source.getDepartment(),
  };
};
