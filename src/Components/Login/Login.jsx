
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Thực hiện xác thực tại đây (kiểm tra username và password)
    // Nếu thành công, bạn có thể chuyển hướng hoặc thực hiện các hành động khác
    console.log(`Đăng nhập với tên đăng nhập: ${username} và mật khẩu: ${password}`);
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <label>
        Tên đăng nhập:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Mật khẩu:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
