import React, { useState } from 'react';

export default function Form() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [loginResult, setLoginResult] = useState(null);
  const data = { name: login, pass };

  async function loginFunc() {
    const response = await fetch('http://localhost:3001/login/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    let result = await response.json();
    result = JSON.parse(JSON.stringify(result)).user;
    setLoginResult(result);
  }

  if (!loginResult) {
    return (
      <div className = 'shadow'>
        <div className = 'login'>
          <input className = 'input' name = 'name' placeholder='Login' onChange = {(event) => setLogin(event.target.value)}></input>
          <input className = 'input' name = 'pass' placeholder='Password' onChange = {(event) => setPass(event.target.value)}></input>
          <button className = 'button' onClick = {async () => {
            await loginFunc();
          } }>Login</button>
        </div>
      </div>
    );
  }
  return false;
}
