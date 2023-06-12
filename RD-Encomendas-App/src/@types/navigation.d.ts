import { CityProps } from "./cities";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            FormFreight: { cityName: string };
        }
    }
}