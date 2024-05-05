import { sessionTypes } from '../actions/types';

const initialState = {
	loggedIn: false,
	user: null,
};

const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case sessionTypes.login:
			return {
				loggedIn: true,
				user: action.payload,
			};

		case sessionTypes.logout:
			return initialState;

		default:
			return state;
	}
};

export default sessionReducer;
