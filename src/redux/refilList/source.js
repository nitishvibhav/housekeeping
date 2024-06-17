import {request} from '../../../request';


export const getRefilList = ()=>{
    return request.get ('refill-list')
}
