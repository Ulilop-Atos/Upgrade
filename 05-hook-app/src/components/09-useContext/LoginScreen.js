import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {

  const {setUser} = useContext(UserContext);

  const userExample = {
    id: 123,
    name: 'Ferdinand',
    email: 'ferdinand@mail.com',
  };

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setUser(userExample)}
      >
        Login
      </button>
    </>
  )
}

export default LoginScreen;