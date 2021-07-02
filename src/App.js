import React, { useState } from 'react';
import LoginScreen from './Login';
import Main from './Main';
import './App.css';

function App() {
  const operational = true;
  const title = `Agworld Accessory`;
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState('Example User');
  const [thumbURL, setThumbURL] = useState('Example User');
  let screen;

  if (!operational) {
    screen = (
      <div>
        <p>This site is currently unavailable.</p>
        <p>Please try again later.</p>
      </div>
    );
  } else {
    if (!userId) {
      screen = (
        <LoginScreen
          title={title}
          setUserId={setUserId}
          userName={userName}
          setUserName={setUserName}
          setThumbURL={setThumbURL}
        />
      );
    } else {
      screen = <Main userId={userId} userName={userName} thumbURL={thumbURL} />;
    }
  }

  return <div className="App">{screen}</div>;
}

export default App;
