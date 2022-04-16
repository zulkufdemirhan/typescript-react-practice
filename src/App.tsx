import axios from "axios"
import { useState , useEffect} from "react"
import CountryInfo from "./component/CountryInfo"
import { CountryType } from "./type"


export default function App() {
    const [country,setCountry]=useState<CountryType[]>([])
    const [loading,setLoading]=useState<Boolean>(false)
    const getApi = async () => {
        setLoading(true)
        try{
            const { data } = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
            setCountry(data)
        }
        catch{
            console.log("the api has not worked.")
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getApi();
    },[])
    console.log(country)
return (
    <div>
    {loading ? "Loading..."  :
    country.filter(data=>(data.name[0]==="T")).map(data=>(
        <CountryInfo data={data}/>
    ))
    }
    </div>
)
}





