import {request} from '../../../request';


export const getCleaning = ()=>{
    return request.get ('rooms-cleaning')
}
