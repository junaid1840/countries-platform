import {IGqlResponse} from "./gqlTypes";

export interface ICountry {
    name: string;
    code: string;
}

export interface ICountryResponse extends IGqlResponse {
    countries:  ICountry[]
}
