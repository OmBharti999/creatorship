"use client";

import { createContext, useContext, useState } from "react";

const defaultValue = {
  isSidebarOpen: false,
  postToUpdate: {},
};

const AppContext = createContext({
  state: defaultValue,
  setState: (value: any) => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(defaultValue);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
