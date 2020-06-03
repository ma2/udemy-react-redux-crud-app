import React from 'react';

function App() {
  // Reactはreturnするタグをひとつにしないといけない
  // そのために不要なdivが嫌な場合には、React.Fragmentを使う
  return (
    <React.Fragment>
      <label htmlFor='bar'>bar</label>
      <input
        type='text'
        onChange={() => {
          console.log('clicked!');
        }}
      />
    </React.Fragment>
  );
}

export default App;
