import { combineReducers } from 'redux'
import loginReducer from './src/redux/user/reducer'
import lostAndFoundReducer from './src/redux/lostAndFound/reducer'
import refilListReducer from './src/redux/refilList/reducer'
import toDoListReducer from './src/redux/todoList/reducer'
import cleaningReducer from './src/redux/cleaning/reducer'
import maintenanceReducer from './src/redux/maintenance/reducer'
import departmentReducer from './src/redux/department/reducer'

export default combineReducers({
    loginReducer,
    lostAndFoundReducer,
    refilListReducer,
    toDoListReducer,
    cleaningReducer,
    maintenanceReducer,
    departmentReducer,
})
