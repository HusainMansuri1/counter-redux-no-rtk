import { counterTypes } from './types';

export const increment = () => {
	return {
		type: counterTypes.increment,
	};
};

export const decrement = () => {
	return {
		type: counterTypes.decrement,
	};
};

export const reset = () => {
	return {
		type: counterTypes.reset,
	};
};
