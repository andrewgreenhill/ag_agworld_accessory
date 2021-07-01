import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginScreen = (props) => {
  const title = props.title;
  const [userName, setUserName] = useState('Example User');
  const [plainTextPassword, setPassword] = useState('secret123');

  function attemptLogin() {
    fetch('https://randomuser.me/api/?results=1', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((userJSON) => {
        let randomUserName = userJSON.results[0].name;
        if (!randomUserName) {
          console.error('Error: failed to get randomUserName');
          throw 'Error: failed to get randomUserName';
        }
        console.log(randomUserName); // Verbose
        setUserName(randomUserName.first + ' ' + randomUserName.last);
      })
      .catch(() => console.error('Error: tryToLogIn() failed!'));
  }

  return (
    <>
      <div className="loginBox">
        <img src="https://avatars0.githubusercontent.com/u/6791849?v=4" className="loginIcon" />
        <header>
          <h1>{title}</h1>
        </header>
        <div>
          <div>
            <label htmlFor="userName" className="QQQ">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(evt) => setUserName(evt.target.value)}
              className="QQQ"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password" className="QQQ">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={plainTextPassword}
              onChange={(evt) => setPassword(evt.target.value)}
              className="QQQ"
              required
            ></input>
          </div>
          <button onClick={attemptLogin}>{`LOG IN >`}</button>
          <div>
            <a
              href="javascript:alert('Password reset is not yet implemented. Please contact Andrew.');"
              className="QQQ"
            >
              Forgotten your password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// Prop Type Validation:
LoginScreen.propTypes = {
  title: PropTypes.string,
};

export default LoginScreen;
