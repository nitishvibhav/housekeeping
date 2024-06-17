import * as source from './source';


export const getToDoDetails = () => {
    return {
      type: 'GET_TODOLIST',
      payload: source.getToDoList(),
    };
  };
