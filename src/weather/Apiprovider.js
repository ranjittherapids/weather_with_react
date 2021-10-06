import React, { useEffect, useState } from 'react'
import Weather from './weather'
import SearchIcon from '@material-ui/icons/Search';

export default function Apiprovider() {
    const [Baseurl, setBaseurl] = useState()
    const [input, setinput] = useState()
    const sendinput = (locationobj) => {
        console.log(locationobj)
     if (locationobj) {
         setBaseurl(`http://api.openweathermap.org/data/2.5/forecast?lat=${locationobj.lat}&lon=${locationobj.lon}&appid=7bf13d18652c030be96dc7f14ec8b1e6`)
         }
        else{  setBaseurl(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=7bf13d18652c030be96dc7f14ec8b1e6`)  }
    }
    useEffect(() => {
        var locationobj = {}

        navigator.geolocation.getCurrentPosition(data => {

            locationobj.lat = data.coords.latitude
            locationobj.lon = data.coords.longitude
            sendinput(locationobj)
        })



    }, [])
    return (
        <div>
            <div className="header">
                <input id="searchInput" type="text" placeholder="search" value={input} onKeyPress={()=>sendinput()} onChange={(e) => {
                    return setinput(e.target.value)
                }} />
                <SearchIcon style={{ fontSize: "3rem" }} onClick={() => sendinput()} />
            </div>
   
            <Weather url={Baseurl} />
        </div>
    )
}
