import React, { useState } from 'react';

function App() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [loginResult, setLoginResult] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [createdByUser, setCreatedByUser] = useState(null);
  const [responsibleUser, setResponsibleUser] = useState(null);
  const data = { name: login, pass };
  const newTask = {
    title, text, createdByUser_id: createdByUser, responsibleUser_id: responsibleUser,
  };
  const n = 100;
  function cut(str) {
    let arr = [];
    arr = str.split('');
    if (arr.length >= n) {
      arr.splice(n, arr.length - n, '...');
    }
    return arr.join('');
  }

  function taskButtonText(id) {
    switch (id) {
      case 2: return 'Close';
      case 3: return 'ReOpen';
      default: return '';
    }
  }

  function taskButtonClass(id) {
    switch (id) {
      case 2: return 'button';
      case 3: return 'button reopen';
      default: return 'button';
    }
  }

  function taskButtonStatusId(id) {
    switch (id) {
      case 2: return 3;
      case 3: return 2;
      default: return id;
    }
  }

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

  async function getUsers() {
    const response = await fetch('http://localhost:3001/users/');
    let result = await response.json();
    result = JSON.parse(JSON.stringify(result));
    setUsers(result);
  }

  async function getTasks() {
    const response = await fetch('http://localhost:3001/tasks/');
    let result = await response.json();
    result = JSON.parse(JSON.stringify(result));
    setTasks(result);
  }

  async function changeTask({ id, statusId }) {
    await fetch('http://localhost:3001/tasks/', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id, status_id: statusId }),
    });
  }

  async function deleteTask({ id }) {
    await fetch('http://localhost:3001/tasks/', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id }),
    });
  }

  async function createTask() {
    await fetch('http://localhost:3001/tasks/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(newTask),
    });
  }

  if (!loginResult) {
    return (
      <div className = 'shadow'>
        <div className = 'login'>
          <input className = 'input' placeholder='Login' onChange = {(event) => setLogin(event.target.value)}></input>
          <input className = 'input' placeholder='Password' onChange = {(event) => setPass(event.target.value)}></input>
          <button className = 'button' onClick = {async () => {
            await loginFunc();
            await getTasks();
            await getUsers();
            setCreatedByUser(1);
            setResponsibleUser(1);
          } }>Login</button>
        </div>
      </div>
    );
  }
  return (
    <div className = 'main'>
    <div className = 'interface'>
      <input className = 'inputT' placeholder='Task title' onChange = {(event) => setTitle(event.target.value)}></input>
      <input className = 'inputT' placeholder='Task description' onChange = {(event) => setText(event.target.value)}></input>
      <div className = 'fromto'>
        <div className = 'text'> from </div>
        <select name = "createdByUser" onChange = {(event) => setCreatedByUser(event.target.value)}>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
        </select>
        <div className = 'text'> to </div>
        <select name = "createdByUser" onChange = {(event) => setResponsibleUser(event.target.value)}>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
        </select>
      </div>
      <button className = 'button' onClick = {async () => {
        await createTask();
        await getTasks();
      } }>Create Task</button>
    </div>
    <div className = 'board'>
      {tasks.map((task) => (
          <div className = 'task' id = {task.id}>
          <div className = 'delete' onClick = {async () => {
            await deleteTask({ id: task.id });
            await getTasks();
          } }>&times;</div>
          <div className = 'title'>{task.title}</div>
          <div className = 'textArea'>{cut(task.text)}</div>
            <div className = 'fromTo'>
              <img className = 'photo' title={task.createdByUser.name} src={task.createdByUser.img} />
              <div className = 'arrow'> &rarr; </div>
              <img className = 'photo' title={task.responsibleUser.name} src={task.responsibleUser.img} />
            </div>
            <button className = {taskButtonClass(task.status_id)} onClick = {async () => {
              await changeTask({ id: task.id, statusId: taskButtonStatusId(task.status_id) });
              await getTasks();
            } }>{taskButtonText(task.status_id)}</button>
          </div>
      )) }
    </div>
    </div>
  );
}

export default App;
