function Search(props) {

    const data = props.data;
    const json = [data.days]
    const weather = json[0].map((info, i) =>{
    return(
        
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
                   
    )});
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
                        {data ? weather : <div>Loading...</div>}
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
</div>
    
    
    </>
)

};

export default Search;