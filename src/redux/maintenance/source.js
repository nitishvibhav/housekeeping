import {request} from '../../../request';


export const getMaintenance = ()=>{
    return request.get ('maintainance')
}
