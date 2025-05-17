import { useState, createContext } from "react";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 3 });
  const updateUser = (newName) => {};
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
