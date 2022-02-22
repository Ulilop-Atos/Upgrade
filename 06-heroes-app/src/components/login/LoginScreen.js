import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types";

export const LoginScreen = () => {

  const navigate = useNavigate();
  
  const lastPath = localStorage.getItem('lastPath') || '/';

  const {dispatch} = useContext(AuthContext);

  let name = 'Log Username';
  let mail = 'temp@mail.com';

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {
        name,
        mail,
      },
    }

    dispatch(action);

    navigate(lastPath , {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
