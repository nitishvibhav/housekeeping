import {request} from '../../../request';

export const getMaintenance = () => {
  return request.get('maintainance');
};

export const postMaintenance = data => {
  return request.post('maintainance', data);
};

export const deleteMaintenanace = (id, data) => {
  return request.delete(`maintainance/${id}`, data);
};

export const updateMaintenanace = (id, data) => {
  return request.patch(`maintainance/${id}`, data);
};
