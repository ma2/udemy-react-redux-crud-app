import React, { Component } from 'react';

// 関数コンポーネント
// 講義と表記が違うのは、講義ではクラスコンポーネントになっているから
// function App() {
//   // Reactはreturnするタグをひとつにしないといけない
//   // そのために不要なdivが嫌な場合には、React.Fragmentを使う
//   return (
//     <React.Fragment>
//       <label htmlFor='bar'>bar</label>
//       <input
//         type='text'
//         onChange={() => {
//           console.log('clicked!');
//         }}
//       />
//     </React.Fragment>
//   );
// }

// クラスコンポーネント
// class App extends Component {
//   render() {
//     return <div>Hi form Class component</div>;
//   }
// }

// 関数コンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
