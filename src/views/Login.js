import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginScreen(props) {
  const { title, setUserId, userName, setUserName, setThumbURL } = props;
  const [plainTextPassword, setPassword] = useState('notSecret');

  function attemptLogin() {
    fetch('https://randomuser.me/api/?results=1', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((userJSON) => {
        const randomUserName = userJSON.results[0].name;
        if (!randomUserName) {
          console.error('Error: failed to get randomUserName');
          throw 'Error: failed to get randomUserName';
        }
        if (userName.toLowerCase() === 'example user') {
          setUserName(randomUserName.first + ' ' + randomUserName.last);
        }
        setThumbURL(userJSON.results[0].picture.thumbnail);
        const userID = parseInt(userJSON.results[0].id.value) || 1;
        setUserId(userID);
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
              onChange={(event) => setUserName(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
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
}

// Prop Type Validation:
LoginScreen.propTypes = {
  title: PropTypes.string,
  setUserId: PropTypes.any,
  userName: PropTypes.string,
  setUserName: PropTypes.any,
  setThumbURL: PropTypes.any,
};

export default LoginScreen;
