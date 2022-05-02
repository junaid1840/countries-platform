import React, {FC} from "react";
import { ICountry } from "../../types/countryTypes";

export const CountriesTable: FC<{countries: ICountry[]}> = ({countries}) => (
        <table className="border-separate border border-slate-500">
            <thead>
                <tr>
                    <th className="border border-slate-600 pl-5 pr-5">Country name</th>
                    <th className="border border-slate-600 pl-5 pr-5">Country code</th>
                </tr>
            </thead>
            <tbody>
            {countries.length ? countries.map(({name, code}, index) => (
                    <tr data-testid={code} key={"country-record-"+index}>
                        <td className="border border-slate-600">{name}</td>
                        <td className="border border-slate-600">{code}</td>
                    </tr>
                )): <tr>No country available</tr>}
            </tbody>
        </table>
    );
