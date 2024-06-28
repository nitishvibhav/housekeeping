import * as source from './source';


export const getRoomsDetails = () => {
    return {
      type: 'GET_ROOMS',
      payload: source.getRooms(),
    };
  };