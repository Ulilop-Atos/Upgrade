import PropTypes from "prop-types";
import { types } from "../types";

const authReducer = (state = {}, action = {}) => {
  
  switch (action.type) {
    case types.login:
        return {
          ...action.payload,
          logged: true,
        };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }

}

authReducer.propTypes = {
  state: PropTypes.object,
  action: PropTypes.object.isRequired,
}

export default authReducer