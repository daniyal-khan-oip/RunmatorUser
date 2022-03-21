import {combineReducers} from 'redux';
import {UserReducer} from './UserReducer';
import {ServicesReducer} from './ServicesReducer';
import {BookingsReducer} from './BookingsReducer';


const rootReducer = combineReducers({UserReducer, ServicesReducer,BookingsReducer});

export default rootReducer;
