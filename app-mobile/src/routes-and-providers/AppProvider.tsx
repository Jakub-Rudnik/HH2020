import React, { createContext } from "react";

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppStorage = createContext<{
  isAppLoading: boolean;
  scannedIngredients: Array<string>;
}>({
  isAppLoading: true,
  scannedIngredients: [],
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AppStorage.Provider
      value={{
        isAppLoading: false,
        scannedIngredients: [],
      }}
    >
      {children}
    </AppStorage.Provider>
  );
};
