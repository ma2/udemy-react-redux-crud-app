// リデューサ

import { INCREMENT, DECREMENT } from '../actions';

// デフォルトのstate
const initialState = { value: 0 };

// actionに応じてstateを変える関数
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
