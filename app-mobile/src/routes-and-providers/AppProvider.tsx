import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { GraphModel } from "@tensorflow/tfjs";

interface AppProviderProps {
  children?: React.ReactNode;
}

interface AppStorageObject {
  appInfo: {
    isAppLoading: boolean;
  };
  ai: {
    model: GraphModel | null;
    setModel: Dispatch<SetStateAction<GraphModel | null>>;
  };
  scannedItems: {
    listOfScannedItems: Array<string>;
    setScannedItems: Dispatch<SetStateAction<string[]>>;
  };
}

export const AppStorage = createContext<AppStorageObject>({
  appInfo: {
    isAppLoading: true,
  },
  ai: {
    model: null,
    setModel: () => null,
  },
  scannedItems: {
    listOfScannedItems: [],
    setScannedItems: () => null,
  },
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [handleAiModel, handleSetAiModel] = useState<GraphModel | null>(null);
  const [handleScannedItems, handleSetScannedItems] = useState<Array<string>>(
    []
  );

  const appStorage: AppStorageObject = {
    appInfo: {
      isAppLoading: false,
    },
    ai: {
      model: handleAiModel,
      setModel: handleSetAiModel,
    },
    scannedItems: {
      listOfScannedItems: handleScannedItems,
      setScannedItems: handleSetScannedItems,
    },
  };

  return (
    <AppStorage.Provider value={appStorage}>{children}</AppStorage.Provider>
  );
};
