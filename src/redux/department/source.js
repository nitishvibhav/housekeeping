import {request} from '../../../request';

export const getDepartment = () => {
  return request.get('department');
};
