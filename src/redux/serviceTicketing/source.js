import {request} from '../../../request';


export const getServiceTicketing = ()=>{
    return request.get ('service-ticketing')
}
