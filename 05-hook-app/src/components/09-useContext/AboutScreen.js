import { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  return (
    <>
      <h1>AboutScreen</h1>
      <hr />
      <pre className="container">
        {JSON.stringify(user,null,2)}
      </pre>

      <button
        className="btn btn-primary"
        onClick={handleClick}
      >
        Logout
      </button>
    </>
  )
}

export default AboutScreen;