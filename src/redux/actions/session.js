import { sessionTypes } from './types';

export const login = (payload) => {
	return {
		type: sessionTypes.login,
		payload,
	};
};

export const logout = () => {
	return {
		type: sessionTypes.logout,
	};
};
