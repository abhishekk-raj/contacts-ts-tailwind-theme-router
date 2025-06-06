import {type FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";
import {useAuth} from "../hooks/useAuth.ts";
import RouteNames from "../../../utils/route-names.ts";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {login} = useAuth();

  const onLoginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(email, password);
    e.preventDefault();
    try {
      await login({email, password});
      navigate(RouteNames.Contact.List);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div className="card">
        <h2 className="text-center mb-4 text-2xl">Login</h2>
        <form className="form min-w-10 md:w-md" onSubmit={onLoginFormSubmit}>
          <Input type="email" placeholder="Email" name="email" required={true} value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="Password" name="password" required={true} value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
          <Button type="submit">Login</Button>
          <Link to={RouteNames.Auth.Signup} className="mt-5 text-right">Not have account? Signup</Link>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
