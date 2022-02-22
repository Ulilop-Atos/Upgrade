import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PublicRoute = ({ children }) => {

  const {user} = useContext(AuthContext);

  const lastPath = localStorage.getItem('lastPath') || '/';

  return user.logged? <Navigate to={lastPath} />: children;
}

PublicRoute.propTypes = {
  children:  PropTypes.any.isRequired,
};

export default PublicRoute;