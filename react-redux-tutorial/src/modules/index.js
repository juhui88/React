import {combineReducer} from 'redux'
import counter from './conuter'
import todos from './todos'

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;