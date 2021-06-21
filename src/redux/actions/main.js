import {apiGet} from '../../utils/utils';
import {GET_CHATS} from '../../config/urls';
import types from '../types';
import store from '../store';
const {dispatch} = store;
// test
export function getChatApi(themeColorId) {
  let geturl = `${GET_CHATS}`;
  return apiGet(geturl);
}
