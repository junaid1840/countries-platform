import {createContext, Dispatch} from "react";
import {ICountry} from "../types/countryTypes";

export interface ICountryContext {
    countriesList: ICountry[],
    setCountriesList: Dispatch<ICountry[]>
}
export const CountryContext = createContext<ICountryContext>({
    countriesList: [],
    setCountriesList: () => {},
})
