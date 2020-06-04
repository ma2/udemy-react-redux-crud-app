import React from 'react';
import PropTypes from 'prop-types';

// 関数コンポーネント
const App = () => {
  const profiles = [
    {
      name: 'Taro',
      age: 10,
    },
    {
      name: 'Hanako',
      // ageが文字列
      age: '12',
    },
    {
      // nameが数値、ageが無い
      name: 100,
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

// propsを持つ関数コンポーネント
const User = (props) => {
  return (
    <div>
      Hi, I'm {props.name}, and {props.age} years old!
    </div>
  );
};

// propsの型宣言
// 違反しているとコンソールに警告が出る
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired, // 必須宣言
};

export default App;
