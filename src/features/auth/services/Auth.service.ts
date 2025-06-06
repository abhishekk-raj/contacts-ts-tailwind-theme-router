import type {User} from "../types/User.type.ts";
import type {ApiResponse} from "../../../types/api-response.type.ts";
import type {Login} from "../types/login.type.ts";

export const loginUser = async (req: Login): Promise<ApiResponse<Login | null>> => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || "[]");
  const foundUser = users.filter((user) => user.email === req.email)[0];

  if (foundUser.email !== req.email) {
    return Promise.reject({
      status: 400,
      message: "User not registered",
      data: null
    });
  }

  if (foundUser.password !== req.password) {
    return Promise.reject({
      status: 400,
      message: "Invalid Password",
      data: null
    });
  }

  localStorage.setItem('token', JSON.stringify({userId: foundUser.id, token: crypto.randomUUID()}));
  return Promise.resolve({
    status: 200,
    message: "Sign-in success",
    data: foundUser
  });
};

export const signupUser = async (req: User): Promise<ApiResponse<User | null>> => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || "[]");
  const userFound = users.some((user) => user.email === req.email);

  if (userFound) {
    return Promise.reject({
      status: 400,
      message: "User already exists",
      data: null
    });
  }

  const newUser: User = {
    id: req.id,
    firstName: req.firstName,
    lastName: req.lastName,
    role: req.role || 'user',
    email: req.email,
    password: req.password,
  }
  users.push(newUser);

  localStorage.setItem('users', JSON.stringify(users));
  return Promise.resolve({
    status: 200,
    message: "User sign-up successfully",
    data: newUser
  });
};
