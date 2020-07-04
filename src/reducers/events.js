// countのリデューサ（stateとactionから新しいstateを返す関数）
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
} from '../actions';
import _ from 'lodash';

// リデューサの実装
export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENTS:
    case UPDATE_EVENT:
      // READ_EVENTSのaction.response.dataは、オブジェクトの配列
      // そのままでは扱いにくいので、idをキーにしたオブジェクトにする
      return _.mapKeys(action.response.data, 'id');
    case READ_EVENT:
      const data = action.response.data;
      //  [data.id]は算出プロパティといい、キーに変数を使うときの表記
      return { ...events, [data.id]: data };
    case DELETE_EVENT:
      // 該当のIDのイベントをリデューサから削除する
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
