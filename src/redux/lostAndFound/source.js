import {request} from '../../../request';


export const postLostAndFound = (req)=>{
    return request.post ('lost-found', req)
}

export const getLostAndFound = ()=>{
    return request.get ('lost-found')
}

export const deleteLostAndFound = (id, data) => {
    return request.delete(`lost-found/${id}`, data);
  };
