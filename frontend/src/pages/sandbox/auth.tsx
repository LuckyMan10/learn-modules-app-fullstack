import React, {useState} from 'react';
import { registration, login } from './api';

const Auth: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const registrationHandler = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('passwords must be equals');
      return null;
    }
    const userData = {
      username,
      password,
      email,
    };
    registration(userData).then(data => {
      console.log('reg data: ', data);
    });
  };
  const loginHandler = (e: any) => {
    e.preventDefault();
    const userData = {
      password,
      email,
    };
    login(userData).then(data => {
      console.log('login data: ', data);
    });
  };
  return (
    <>
      <div className="registration">
        <form onSubmit={registrationHandler} action="" className="reg-form">
          <input
            type="text"
            placeholder="username..."
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password..."
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button type="submit">sign up!</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={loginHandler} action="" className="login-form">
          <input
            type="text"
            placeholder="email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">sign in!</button>
        </form>
      </div>
    </>
  );
};

export {
    Auth
}
