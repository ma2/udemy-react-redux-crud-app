import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

// stateを持つクラスコンポーネント
class App extends Component {
  // コンストラクタ内でstateの初期化
  // reduxではリデューサがやるので不要になる
  // handlePlusButtonとhandleMinusButtonはアクションクリエータがやるので不要になる

  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// stateからコンポーネントに必要なものを取り出してpropsにマッピングする
const mapStateToProps = (state) => ({ value: state.count.value });

// actionが発生したときにリデューサにtypeに応じた状態遷移を実行させるのがdispatch関数
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

// 上記のショートハンド
// const mapDispatchToProps = { increment, decrement };

// stateとアクションを関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App);
