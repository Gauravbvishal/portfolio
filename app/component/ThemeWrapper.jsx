"use client";

import { useContext } from "react";
import { UserContext } from "@/app/context/page";

export default function ThemeWrapper({ children }) {
  const { theme } = useContext(UserContext);

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}