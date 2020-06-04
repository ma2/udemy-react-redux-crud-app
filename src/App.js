import React from 'react';

// クラスコンポーネント
// class App extends Component {
//   render() {
//     return <div>Hi form Class component</div>;
//   }
// }

// 関数コンポーネント
const App = () => {
  const profiles = [
    {
      name: 'Taro',
      age: 10,
    },
    {
      name: 'Hanako',
      age: 12,
    },
    {
      name: 'Jiro',
    },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I'm {props.name}, and {props.age} years old!
    </div>
  );
};

// propsに設定がないときのデフォルトを指定できる
User.defaultProps = {
  age: 1,
};

export default App;
