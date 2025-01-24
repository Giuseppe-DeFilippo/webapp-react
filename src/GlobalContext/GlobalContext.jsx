import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState()
    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider >
    );
};
export const useGlobalContext = () => useContext(GlobalContext);
