import * as source from './source';


export const getMaintenanceDetails = () => {
    return {
      type: 'GET_MAINTENANCE',
      payload: source.getMaintenance(),
    };
  };
