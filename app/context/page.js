"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export default function ContextProvider({ children }) {
    const [theme, setTheme] = useState({
        backgroundColor: "#cccccc",
        textColor: "black",
    });

    return (
        <UserContext.Provider value={{ theme, setTheme }}>
            {children}
        </UserContext.Provider>
    );
}