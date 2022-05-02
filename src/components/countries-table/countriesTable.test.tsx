import React from 'react';
import {render, RenderResult} from "@testing-library/react"
import {ICountry} from "../../types/countryTypes";
import {CountriesTable} from "./CountriesTable";

const countriesList: ICountry[] = [
    {name: "Pakistan", code: "PK"},
    {name: "Poland", code:"PL"},
    {name: "Spain", code: "SP"}
]

describe("<CountriesTable />", () => {

    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = render(<CountriesTable countries={countriesList} />);
    });

    it("snapshot App", () => {
        expect(wrapper.asFragment()).toMatchSnapshot();
    });

    it("should render correct country name", () => {
        countriesList.forEach((country) =>
            expect(wrapper.getByTestId(country.code)).toHaveTextContent(country.name));
    })
})
