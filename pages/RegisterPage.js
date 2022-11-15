import { Email } from 'mdi-material-ui';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const signUpAPI = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/signup`;
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const { email, password, passwordCheck } = registerInfo;

  const onChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({
      ...registerInfo,
      [name]: value,
    });
  };

  const checkPasswords = (boolean) => {};

  const signUp = async (e) => {
    try {
      e.preventDefault();
      if (password !== passwordCheck) {
        return console.log('The password is different');
      } else {
        let res = await axios({
          method: 'POST',
          url: signUpAPI,
          data: {
            email: email,
            password: password,
          },
        });
        console.log(res);
        console.log(password);
        console.log(email);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
    e.preventDefault();
    if (password !== passwordCheck) {
      return console.log('The password is different');
    } else {
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="password"
        name="passwordCheck"
        value={passwordCheck}
        onChange={onChange}
      />
      <br />
      <button onClick={signUp}>Sign Up!</button>
    </div>
  );
}
