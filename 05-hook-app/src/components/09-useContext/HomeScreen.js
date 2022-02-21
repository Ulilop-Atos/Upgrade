import { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {

  const { user } = useContext(UserContext);

  return (
    <>
      <h1>HomeScreen</h1>
      <hr />
      <pre className="container">
        {JSON.stringify(user,null,2)}
      </pre>
    </>
  )
}

export default HomeScreen;