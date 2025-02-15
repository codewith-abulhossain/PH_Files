import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
