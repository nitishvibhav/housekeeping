import * as source from './source';


export const getServiceTicketingDetails = () => {
    return {
      type: 'GET_SERVICETICKETING',
      payload: source.getServiceTicketing(),
    };
  };