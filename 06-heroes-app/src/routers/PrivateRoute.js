import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoute = ({ children }) => {

  const {user} = useContext(AuthContext);

  const {pathname, search} =  useLocation();

  localStorage.setItem('lastPath', `${pathname}${search}`);

  return user.logged ? children: <Navigate to='/login' />;
}

PrivateRoute.propTypes = {
  children:  PropTypes.any.isRequired,
};

export default PrivateRoute;