import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({
  users: [],
  isLoading: false,
});

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/users/list");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();

    return () => {
      setIsLoading(false);
    };
  }, []);

  const value = {
    users,
    isLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContextProvider, UserContext };

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
