// countのリデューサ（stateとactionから新しいstateを返す関数）

import { INCREMENT, DECREMENT } from '../actions';

// デフォルトのstate
const initialState = { value: 0 };

// リデューサの実装
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
