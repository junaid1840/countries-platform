import {useLazyQuery} from "@apollo/client";
import React, {FC, useContext, useState} from "react";
import {COUNTRIES_LIST, COUNTRY_CODE} from "../../constants/countryQueries";
import {CountryContext} from "../../context/CountryContext";
import {ICountry, ICountryResponse} from "../../types/countryTypes";
import './countryFilter.css'

export const CountryFilter: FC = () => {
    const {setCountriesList} = useContext(CountryContext);

    const [countryCode, setCountryCode] = useState("");

    const [getCountryByCode] = useLazyQuery<ICountryResponse>(COUNTRY_CODE);
    const [ getCountriesList ]  = useLazyQuery<ICountryResponse>(COUNTRIES_LIST);

    const filter = async () => {
        if (countryCode) {
            const {data} = await getCountryByCode({variables: {countryCode: countryCode}});
            return setCountriesList(data?.countries as ICountry[]);
        }
        const {data} = await getCountriesList();
        setCountriesList(data?.countries as ICountry[]);
    }

    return (
        <div className="flex mb-10">
            <input data-testid="country-code-input" className="search-input" placeholder="Search by code.." onChange={(e) => setCountryCode(e.target.value.toUpperCase())} />
            <button data-testid="search-button" className="btn btn-blue search-btn" onClick={filter}>Search</button>
        </div>
    )
}
