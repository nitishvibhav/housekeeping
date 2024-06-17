import {request} from '../../../request';


export const getToDoList = ()=>{
    return request.get ('todo-list')
}
