import { MyContext } from "../../components/socketContextPRovider/socketContextProvider";
import { useContext } from "react";

export const useProviderContext = () => useContext(MyContext);
