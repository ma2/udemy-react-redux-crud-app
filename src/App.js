import React, { Component } from 'react';

// 関数コンポーネント
const App = () => <Counter></Counter>;

// stateを持つクラスコンポーネント
class Counter extends Component {
  // コンストラクタ内でstateの初期化
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    // setStateはstateを変えるだけではなく、それを関連DOMに通知する
    // なのでsetStateを使わないとrenderは実行されない
    // 直接this.state.countを変えてもダメ
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
