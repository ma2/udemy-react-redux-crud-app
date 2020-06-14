import axios from 'axios';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

// redux-thunkによって、アクションの代わりに関数を返せるようになる
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};
// 他のところでも使うのでexportしておく
export const READ_EVENTS = 'READ_EVENTS';
