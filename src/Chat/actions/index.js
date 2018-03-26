import {UPDATE_CHAT_INPUT} from './types';
export * from './ChatRooms';

export const updateChatInput = text => ({ type: UPDATE_CHAT_INPUT, text });