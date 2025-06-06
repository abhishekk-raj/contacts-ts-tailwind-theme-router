import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import RouteNames from "../../../utils/route-names.ts";
import {type FormEvent, useState} from "react";
import {useAuth} from "../hooks/useAuth.ts";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {signup} = useAuth();

  const handleSignupFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signup({
        id: Date.now(),
        firstName,
        lastName,
        email,
        password,
        role: 'user'
      });
      navigate(RouteNames.Auth.Login);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div className="card">
        <h2 className="text-center mb-4 text-2xl">Signup</h2>
        <form className="form min-w-10 md:w-md" onSubmit={handleSignupFormSubmit}>
          <Input type="text" placeholder="First Name" name="firstName" required={true} value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}/>
          <Input type="text" placeholder="Last Name" name="lastName" required={true} value={lastName}
                 onChange={(e) => setLastName(e.target.value)}/>
          <Input type="email" placeholder="Email" name="email" required={true} value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="Password" name="password" required={true} value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
          <Button type="submit">Signup</Button>
          <Link to={RouteNames.Auth.Signup} className="mt-5 text-right">Already have account? Login</Link>
        </form>
      </div>
    </div>
  )
}

export default SignupForm;