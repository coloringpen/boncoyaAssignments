import axios from 'axios';
import { useState, useEffect } from 'react';

export default function LogIn() {
  const loginAPI = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`;
  const [userInfos, setUserInfos] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInfos;

  const onChange = (e) => {
    const { type, value } = e.target;
    setUserInfos({
      ...userInfos,
      [type]: value,
    });
  };

  const onLoggin = async (e) => {
    try {
      let res = await axios({
        method: 'POST',
        url: loginAPI,
        data: {
          email: email,
          password: password,
        },
      });
      console.log(res);
      localStorage.setItem('jwt', res.data.access_token);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <input type="button" onClick={onLoggin} value="LogIn" />
    </>
  );
}
