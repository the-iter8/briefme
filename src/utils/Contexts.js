import React from "react";

export const UserContext = React.createContext();
export const ISRTime = React.createContext();
export const DataContext = React.createContext();

export function UserContextProvider({ children, value }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export function ISRTimeProvider({ children, value }) {
  return <ISRTime.Provider value={value}>{children}</ISRTime.Provider>;
}
export function DataContextProvider({ children, value }) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
