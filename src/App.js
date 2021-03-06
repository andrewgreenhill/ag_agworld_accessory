import React, { useState } from 'react';
import LoginScreen from './views/LoginScreen';
import LoadDataIntoApp from './views/LoadDataIntoApp';
import './assets/App.css';

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
      screen = <LoadDataIntoApp title={title} userId={userId} userName={userName} thumbURL={thumbURL} />;
    }
  }

  return <div className="App">{screen}</div>;
}

export default App;
