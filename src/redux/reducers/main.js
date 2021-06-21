import ActionTypes from '../types';

const initialState = {
  ChatData: [],
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes. GET_CHATS_LIST: {
      const data = action.payload;
    return {...state, ChatData:ChatData };
    }
    default: {
      return {...state};
    }
  }
}
