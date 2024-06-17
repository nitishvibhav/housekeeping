import * as source from './source';

export const postLostAndFoundDetails = req => {
  return {
    type: 'POST_LOSTANDFOUND',
    payload: source.postLostAndFound(req),
  };
};

export const getLostAndFoundDetails = () => {
  return {
    type: 'GET_LOSTANDFOUND',
    payload: source.getLostAndFound(),
  };
};
