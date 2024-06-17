import * as source from './source';


export const getCleaningDetails = () => {
    return {
      type: 'GET_CLEANING',
      payload: source.getCleaning(),
    };
  };
