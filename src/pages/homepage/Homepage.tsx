import {useLazyQuery} from "@apollo/client";
import React, {FC, useContext, useEffect} from 'react';
import { CountriesTable } from "../../components/countries-table/CountriesTable";
import {CountryFilter} from "../../components/country-filter/CountryFilter";
import {COUNTRIES_LIST} from "../../constants/countryQueries";
import {CountryContext} from "../../context/CountryContext";
import {ICountry, ICountryResponse} from "../../types/countryTypes";
import "./homepage.css"

export const Homepage: FC = () => {
    const [ getCountriesList ]  = useLazyQuery<ICountryResponse>(COUNTRIES_LIST);
    const {countriesList, setCountriesList} = useContext(CountryContext);

    const setCountries = async () => {
        const { data } = await getCountriesList();
        setCountriesList(data?.countries as ICountry[]);
    }

    useEffect(() => {
        setCountries();
    }, []);

    return (
        <>
            <h1 data-testid="banner-heading" className="text-5xl font-bold mb-10">Countries Platform</h1>
            <CountryFilter />
            <CountriesTable countries={countriesList} />
        </>
    )
}
