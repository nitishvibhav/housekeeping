import * as source from './source';


export const getMaintenanceDetails = () => {
    return {
      type: 'GET_MAINTENANCE',
      payload: source.getMaintenance(),
    };
  };

  export const postMaintenanceDetails = data => {
    return {
      type: 'POST_MAINTENANCE',
      payload: source.postMaintenance(data),
    };
  };

  export function deleteMaintenanceDetails (data, id) {
    return {
      type: 'DELETE_MAINTENANCE',
      payload: source.deleteMaintenanace(data,id),
    };
  };

  export function updateMaintenanceDetails (data, id) {
    return {
      type: 'UPDATE_MAINTENANCE',
      payload: source.updateMaintenanace(data,id),
    };
  };