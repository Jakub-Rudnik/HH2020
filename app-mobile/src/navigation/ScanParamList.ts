import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ScanParamList = {
    Accept: undefined;
    Scan: undefined;
    Start: undefined;
};
  
export type ScanStackNavProps<T extends keyof ScanParamList> = {
    navigation: StackNavigationProp<ScanParamList, T>;
    route: RouteProp<ScanParamList, T>;
}