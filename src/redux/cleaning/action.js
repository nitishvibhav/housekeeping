import * as source from './source';

export const getCleaningDetails = () => {
  return {
    type: 'GET_CLEANING',
    payload: source.getCleaning(),
  };
};

export const postCleaningDetails = () => {
  return {
    type: 'POST_CLEANING',
    payload: source.postCleaning(),
  };
};
