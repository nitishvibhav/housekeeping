import {request} from '../../../request';


export const getCleaning = ()=>{
    return request.get ('rooms-cleaning')
}

export const postCleaning = ()=>{
    return request.post ('rooms-cleaning')
}
