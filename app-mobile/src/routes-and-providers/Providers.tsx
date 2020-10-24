import React from "react";
import { AppProvider } from "./AppProvider";
import Routes from "./Routes";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};
