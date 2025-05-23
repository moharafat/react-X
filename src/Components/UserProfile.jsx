import { useContext } from "react";
import { UserContext } from "../UserContext";
const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>UserProfile</h1>
      <p>Name: {user.name}</p>
      <p>Age:{user.age}</p>
    </div>
  );
};
export default UserProfile;
