import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ScanParamList = {
    Accept: Array<{
        label: number,
        certainty: number,   
    }>;
    Scan: undefined;
    Start: undefined;
};
  
export type ScanStackNavProps<T extends keyof ScanParamList> = {
    navigation: StackNavigationProp<ScanParamList, T>;
    route: RouteProp<ScanParamList, T>;
}