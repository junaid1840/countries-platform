import {MockedProvider} from "@apollo/client/testing";
import {render, RenderResult} from "@testing-library/react";
import React from 'react';
import { App } from './App';
import {createMemoryHistory} from 'history'
import {COUNTRIES_LIST, COUNTRY_CODE} from "../../constants/countryQueries";

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

describe(`<App />`, () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
        <MockedProvider mocks={mocks}>
          <App />
        </MockedProvider>
    )
  });

  it("should render homepage on load", () => {
    expect(wrapper.getByText("Countries Platform")).toBeInTheDocument();
  });

  it("should navigate to desired url", () => {
    const history = createMemoryHistory();
    history.push("/test-route")
    expect(history.location.pathname).toEqual("/test-route");
  });

  it("should render not found page on any other route", async () => {
    const history = createMemoryHistory();
    await history.push("/test-route");
    setTimeout(() => expect(wrapper.getByText("404 Page Not Found")).toBeInTheDocument(), 2000)
  });
});
