import React, { createContext, useState } from "react";
import * as tf from "@tensorflow/tfjs";

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppStorage = createContext<{
  isAppLoading: boolean;
  aiModel: tf.GraphModel | null;
  changeAiModel: (model: tf.GraphModel) => void;
  listOfScannedItems: Array<string>;
}>({
  isAppLoading: true,
  aiModel: null,
  changeAiModel: () => {
    return null;
  },
  listOfScannedItems: [],
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [aiModel, setAiModel] = useState<tf.GraphModel | null>(null);

  const handleChangeAiModel = (model: tf.GraphModel) => {
    setAiModel(model);
  };

  return (
    <AppStorage.Provider
      value={{
        isAppLoading: false,
        aiModel: aiModel,
        changeAiModel: handleChangeAiModel,
        listOfScannedItems: [],
      }}
    >
      {children}
    </AppStorage.Provider>
  );
};
