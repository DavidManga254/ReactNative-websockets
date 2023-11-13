// Create a context
import { createContext } from "react";
import { socket } from "../../API/socket/clientSocketConfigurations/clientSocketConfigurations";

export const MyContext = createContext(socket);

// Create a provider component
export const MyProvider = ({ children }) => {
  return <MyContext.Provider value={socket}>{children}</MyContext.Provider>;
};
