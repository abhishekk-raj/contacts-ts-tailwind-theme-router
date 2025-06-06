import {Navigate, Outlet, useLocation} from 'react-router-dom';

import RouteNames from "../utils/route-names.ts";
import type {User} from "../features/auth/types/User.type.ts";

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute = ({allowedRoles}: ProtectedRouteProps) => {
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem('token') || 'null') as { userId: number, token: string } | null;
  const users = JSON.parse(localStorage.getItem('users') || '[]') as User[];

  const isAuthenticated = !!token;

  const user = isAuthenticated ? users.find((u) => u?.id?.toString() == token?.userId?.toString()) : null;

  if (!isAuthenticated || !user) {
    return <Navigate to={RouteNames.Auth.Login} replace state={{ from: location }} />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={RouteNames.Unauthorized} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
