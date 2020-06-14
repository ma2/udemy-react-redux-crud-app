// アプリ内の全リデューサを1つにまとめる
import { combineReducers } from 'redux';
import events from './events';

// ストアで使うのでexport
export default combineReducers({ events });
// 複数のリデューサーがあるときは
// export default combineReducers({ foo, bar, baz });
