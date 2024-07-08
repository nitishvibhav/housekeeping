import {request} from '../../../request';

export const loginUser = data => {
  console.log(data, 'data inside source');
  return request.post('user/login', data);
};
