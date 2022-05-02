import React, {FC, ReactNode, useState} from "react";
import {ICountry} from "../types/countryTypes";
import {CountryContext} from "./CountryContext";


interface ProviderProps {
    children: ReactNode;
}
export const CountryProvider: FC<ProviderProps> = ({children}) => {
    const [countriesList, setCountriesList] = useState<ICountry[]>([]);
    return (
        <CountryContext.Provider value={{countriesList,setCountriesList }}>
            {children}
        </CountryContext.Provider>
    )

}
