// countのリデューサ（stateとactionから新しいstateを返す関数）
import { READ_EVENTS } from '../actions';
import _ from 'lodash';

// リデューサの実装
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // READ_EVENTSのaction.response.dataは、オブジェクトの配列
      // そのままでは扱いにくいので、idをキーにしたオブジェクトにする
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
