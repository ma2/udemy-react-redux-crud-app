// アプリ内の全リデューサを1つにまとめる
import { combineReducers } from 'redux';
import count from './count';

// ストアで使うのでexport
// 今回は一つ（count）だけ
export default combineReducers({ count });
// 複数のリデューサーがあるときは
// export default combineReducers({ foo, bar, baz });
