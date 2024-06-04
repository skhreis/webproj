import { myJson } from "../obj";
import { useState } from "react";
// datetime
// tempmin (convert to C)
// tempmax (convert to C)
// humidity
// conditions
// precipprob
// sunrise
// sunset

function Test(){
    const json = [myJson.days];
    console.log(json[0][0])
    console.log(myJson.days[0]);
    // console.log(myJson.days.length);
    // console.log(myJson.days[0].datetime);
    // const nowC = Math.trunc((myJson.days[0].temp - 32) * (5/9));
    // const minC = Math.trunc((myJson.days[0].tempmin - 32) * (5/9));
    // const maxC = Math.trunc((myJson.days[0].tempmax - 32) * (5/9));
    // const weather1 = () => {
    //     for(let i = 0; i < myJson.days.length; i++){
    //         console.log(`hi ${i}`)
    //     }
    // }

    // weather1();
    
    const weather = json[0].map((info, i) =>{
        return(
            
                // {/* <td>Date: {info.datetime}</td> */}
                // {/* <td>Temperature: {nowC}</td>
                // <td>Minimum Temperature: {minC}</td>
                // <td>Maximum Temperature: {maxC}</td> */}
                // {/* <td>Humidity: {weath.days.humidity}</td>
                // <td>Condition: {weath.conditions}</td>
                // <td>Rain Probability: {weath.precipprop}</td>
                // <td>Sunrise Time: {weath.sunrise}</td>
                // <td>Sunset Time: {weath.sunset}</td> */}
                        <tr className="bg-gray-100 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {info.datetime}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {info.conditions}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {Math.trunc((info.temp - 32) * (5/9))} C
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {Math.trunc((info.tempmin - 32) * (5/9))} C
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {Math.trunc((info.tempmax - 32) * (5/9))} C
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {info.humidity}%
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {info.precipprob}%
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {info.sunrise}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {info.sunset}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                
                            </td>
                        </tr>
                       
        )
    })
return(
    <>
        <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        <thead className="bg-white border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Date
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Temperature
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Minimum Temperature
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Maximum Temperature
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Humidity
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Condition
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Rain Chance
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Sunrise Time
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Sunset Time
                                </th>
                            </tr>
                    </thead>
                    <tbody>
                        {weather}
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
</div>
    </>
)
}

export default Test;