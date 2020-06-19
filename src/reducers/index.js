// アプリ内の全リデューサを1つにまとめる
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './events';

// ストアで使うのでexport
export default combineReducers({ events, form });
