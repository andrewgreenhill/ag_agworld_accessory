import React from 'react';
import LoginScreen from './Login';
import './App.css';

function App() {
  const operational = true;
  const title = `AG's Agworld Accessory`;

  return (
    <div className="App">
      {operational ? (
        <LoginScreen title={title} />
      ) : (
        <div>
          <p>This site is currently unavailable.</p>
          <p>Please try again later.</p>
        </div>
      )}
    </div>
  );
}

export default App;
