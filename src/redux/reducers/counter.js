import { counterTypes } from '../actions/types';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case counterTypes.increment:
			return state + 1;

		case counterTypes.decrement:
			if (state === 0) {
				alert('Min count should be 0!');
				return state;
			}
			return state - 1;

		case counterTypes.reset:
			return initialState;

		default:
			return state;
	}
};

export default counterReducer;
