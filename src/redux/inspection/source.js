import {request} from '../../../request';


export const postInspection = (req)=>{
    return request.post ('rooms-inspection',req)
}
