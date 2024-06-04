import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Search from './search';

function Data() {
    const [data, setData] = useState();
    const [searchParams] = useSearchParams();
    const loc = JSON.parse(decodeURIComponent(searchParams.get('city')));
    useEffect(() => {
        load();
     }, []); 
    const load = (async (e) =>{
        setData(null)
        const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=HJGML5NAYDAQ8EGC3NQ2MHDSP`)
        if(res.ok){
        const data1 = await res.json()
        setData(data1)
    }else{
        console.log(await res.json())
        alert('There is no matching city, please search again.')
        window.location.replace('/')
    }
})

return(
    <>
    {data ? <Search data={data} /> : <div>Loading...</div>}
    </>
)};
export default Data;