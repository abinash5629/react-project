import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnly?: boolean;//route admin accessible or not
  admin?: boolean;//is it for boolean or not
  redirect?: string;
}

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  redirect = "/",
}: Props) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;

  if (adminOnly && !admin) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;