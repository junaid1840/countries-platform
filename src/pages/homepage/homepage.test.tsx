import {MockedProvider} from "@apollo/client/testing";
import {render, RenderResult} from "@testing-library/react";
import React from 'react';
import {COUNTRIES_LIST} from "../../constants/countryQueries";
import {Homepage} from "./Homepage";


const mocks = [
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

describe("<Homepage />", () => {
    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = render(
            <MockedProvider mocks={mocks}>
                <Homepage />
            </MockedProvider>
        );
    });

    it("snapshot Homepage", () => {
        expect(wrapper.asFragment()).toMatchSnapshot();
    });

    it("should contain banner heading", () => {
        expect(wrapper.getByTestId("banner-heading")).toBeInTheDocument();
    });
})
