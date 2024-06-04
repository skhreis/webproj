import {useState} from 'react';

function Home(){
    const [city, setCity] = useState();
    const cityName = (event) => {
        event.preventDefault()
        const name = event.target.value;
        setCity(name)
        console.log(city)
    }
const apiCall = () => {
    const GENERATE_URL_PATH = '/search';
    const apiCity = encodeURIComponent(JSON.stringify(city));
    const url = new URL(window.location.origin + GENERATE_URL_PATH);
    url.searchParams.append('city', apiCity);
    return window.location.replace(url)
}

return(
    <div className="bg-auto bg-neutral-900 w-screen h-screen text-white">
        <center>
            <div>
                <img className="flex justify-center w-9/12 h-9/12 pt-10 shadow-xl" src = 'https://c4.wallpaperflare.com/wallpaper/861/460/13/field-weather-dust-stormy-wallpaper-preview.jpg' alt='...' />
                <div className="w-full absolute top-48 left-0 text-center mt-32 text-3xl font-bold text-black-500 text-center">
                    Welcome to the Weather App, please search your city for details about the weather.<br /><br />
                <input type="text" onChange={cityName} onSubmit={apiCall} placeholder="Enter Your City Name..." className="bg-white w-3/12
                    rounded-lg text-black ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none 
                    focus:border-rose-600"/>
                <button onClick={apiCall} className="ml-5 px-2 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">Search</button>
                </div>
            </div>
        </center>
    </div>
)


}

export default Home;