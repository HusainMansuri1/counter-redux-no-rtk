import { combineReducers } from 'redux';

import counterReducer from './counter';
import sessionReducer from './session';

const allReducers = combineReducers({
	counter: counterReducer,
	session: sessionReducer,
});

export default allReducers;
