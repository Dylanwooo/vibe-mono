import { createContext, useState, useMemo } from "react";

export const DataContext = createContext(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);

  const dataStore = useMemo(() => {
    return {
      isLogin,
      updateLogin: (state: boolean) => {
        setIsLogin(state);
      },
    };
  }, [isLogin]);

  return (
    <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
  );
}
