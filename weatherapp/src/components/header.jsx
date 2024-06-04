import { CiCloudSun } from "react-icons/ci";


function Header(){
return(
    <>
        <div className="flex justify-center bg-sky-700 text-white w-screen">
        <CiCloudSun />
        <a href='/'><button className="pr-10">Home</button></a>
        <CiCloudSun /><div className="text-2xl">Weather App</div><CiCloudSun />
        <a href='/search'><button className="pl-10">Search</button></a>
        <CiCloudSun />
    </div>
    </>
)
}

export default Header;