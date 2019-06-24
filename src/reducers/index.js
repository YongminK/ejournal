import { combineReducers } from 'redux';
import Auth from './auth';

const allReducers = combineReducers({
    auth: Auth
});

export default allReducers;