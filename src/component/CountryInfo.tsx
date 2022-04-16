import { FunctionComponent } from "react"
import { CountryType } from "../type"

interface ICountryData{
    data:CountryType
}

const CountryInfo : FunctionComponent<ICountryData> =(props) => {
    const {data}=props;
return (
    <div>
            <p>
                {data.name}  || {data.capital}
            </p>
    </div>
)
}

export default CountryInfo;
