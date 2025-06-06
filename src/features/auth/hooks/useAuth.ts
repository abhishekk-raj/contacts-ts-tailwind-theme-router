import {loginUser, signupUser} from '../services/Auth.service.ts';
import type {User} from "../types/User.type.ts";
import type {Login} from "../types/login.type.ts";

export const useAuth = () => {
  const login = async (req: Login) => {
    return await loginUser(req);
  };

  const signup = async (req: User) => {
    return await signupUser(req);
  };

  const logout = () => {
    localStorage.removeItem('token');
  };

  return {login, signup, logout};
};
