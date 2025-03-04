import { logout, useCurrentToken } from "@/Redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
    children: ReactNode;
    role: string | undefined;
  };

  const ProtectedRoutes = ({ children, role } : TProtectedRoute) => {
    const token = useAppSelector(useCurrentToken);
  
    let user;
  
    if (token) {
      user = verifyToken(token);
    }
    const dispatch = useAppDispatch();

  
    if (role !== undefined && role !== user?.role ) {
      dispatch(logout());
      return <Navigate to={"/login"} replace={true}/>;
    }
    if (!token) {
      return <Navigate to="/login" replace={true} />;
    }
  
    return children;
  };

export default ProtectedRoutes;
