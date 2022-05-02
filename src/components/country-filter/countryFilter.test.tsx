import React from 'react';
import {fireEvent, render, RenderResult} from "@testing-library/react"
import {COUNTRIES_LIST, COUNTRY_CODE} from "../../constants/countryQueries";
import {CountryFilter} from "./CountryFilter";
import {MockedProvider} from '@apollo/client/testing';

const mocks = [
    {
        request: {
            query: COUNTRY_CODE,
            variables: {
                countryCode: 'PK',
            },
        },
        result: {
            data: {
                countries: [{name: 'Pakistan', code: 'PK'}],
            },
        },
    },
    {
        request: {
            query: COUNTRIES_LIST,
        },
        result: {
            data: {
                countries: [{name: 'Pakistan', code: 'PK'}],
            },
        },
    },
];
describe("<CountryFilter />", () => {
    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = render(
            <MockedProvider mocks={mocks}>
                <CountryFilter />
            </MockedProvider>
        );
    });

    it("snapshot country filter", () => {
        expect(wrapper.asFragment()).toMatchSnapshot();
    });
    it("should render country code input", () => {
        expect(wrapper.getByTestId('country-code-input')).toBeTruthy();
    });
    it("should render search button", () => {
        expect(wrapper.getByTestId('search-button')).toHaveTextContent("Search");
    });
    it("should update value in search field", () => {
        const countryCodeInput = wrapper.getByTestId('country-code-input') as HTMLInputElement;
        fireEvent.change(countryCodeInput, {target: {value: "PK"}})
        expect(countryCodeInput.value).toEqual("PK");
    });
})
