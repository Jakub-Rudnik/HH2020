import React, { createContext, useState } from "react";
import { GraphModel } from "@tensorflow/tfjs";

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppStorage = createContext<{
  setAiModel: (model: GraphModel) => void;
  aiModel: GraphModel | null;

  listOfScannedItems: Array<string>;
  isAppLoading: boolean;
}>({
  setAiModel: () => null,
  aiModel: null,

  listOfScannedItems: [],
  isAppLoading: true,
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [aiModel, handleSetAiModel] = useState<GraphModel | null>(null);

  const handleChangeAiModel = (model: GraphModel) => {
    handleSetAiModel(model);
  };

  return (
    <AppStorage.Provider
      value={{
        setAiModel: handleChangeAiModel,
        aiModel: aiModel,
        listOfScannedItems: [],
        isAppLoading: false,
      }}
    >
      {children}
    </AppStorage.Provider>
  );
};
