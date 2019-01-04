import { visibilityFilter } from './reducer1';
import { todos } from './reducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    visibilityFilter,
    todos
});

export default rootReducer;
