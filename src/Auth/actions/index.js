import {
	UPDATE_EMAIL,
	UPDATE_USERNAME,
	UPDATE_PASSWORD,
	UPDATE_REPASSWORD
} from './types';

export * from './Login';
export * from './Register';
export const updateEmail		= text => ({ type: UPDATE_EMAIL,		text });
export const updateUsername		= text => ({ type: UPDATE_USERNAME,		text });
export const updatePassword		= text => ({ type: UPDATE_PASSWORD,		text });
export const updateRePassword	= text => ({ type: UPDATE_REPASSWORD,	text });
