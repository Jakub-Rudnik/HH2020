import React, { useContext } from "react";
import { AppStorage } from "./AppProvider";
import Loading from "./../screens/Loading";
import AppTabs from "./../navigation/AppTabs";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  const { appInfo } = useContext(AppStorage);

  return <>{appInfo.isAppLoading ? <Loading /> : <AppTabs />}</>;
};

export default Routes;
