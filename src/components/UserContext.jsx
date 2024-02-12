import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [fullname, setFullname] = useState("");

  return (
    <UserContext.Provider value={{ fullname, setFullname }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
