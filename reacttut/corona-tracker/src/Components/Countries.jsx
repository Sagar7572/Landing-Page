import { NativeSelect, Typography } from "@material-ui/core";
import { useEffect, useState } from "react"
import { fetchCountries } from "../service/Api"



const Countries = ({handleCountryChange}) =>{
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            setCountries(await fetchCountries());
        }
        fetchApi();
    }, [])
    return(
        <>
        <Typography style = {{marginBottom:20}} color = "textSecondary"> Reported Cases,Deaths by country</Typography>
        <NativeSelect onChange = {(e) => handleCountryChange(e.target.value)}>
            <option value = "">India</option>
            { countries.map((country, i) =>
            {
                return(
                    <option key = {i} value = {country}>{country}</option>
                )
            })}
        </NativeSelect>
        </>
    )
    
}

export default Countries;