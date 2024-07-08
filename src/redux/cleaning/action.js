import * as source from './source';

export const getCleaningDetails = () => {
  return {
    type: 'GET_CLEANING',
    payload: source.getCleaning(),
  };
};

export const postCleaningDetails = (req) => {
  return {
    type: 'POST_CLEANING',
    payload: source.postCleaning(req),
  };
};
