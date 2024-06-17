import * as source from './source';


export const getRefilListDetails = () => {
    return {
      type: 'GET_REFILLIST',
      payload: source.getRefilList(),
    };
  };
