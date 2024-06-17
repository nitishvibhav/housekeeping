import {request} from '../../../request';


export const postLostAndFound = (req)=>{
    return request.post ('lost-found', req)
}

export const getLostAndFound = ()=>{
    return request.get ('lost-found')
}
