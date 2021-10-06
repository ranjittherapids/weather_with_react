import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import './dayblock.css'
import axios from 'axios'
import DayBlock from './DayBlock'
import moment from 'moment'
export default function Weather({url}) {
    const [city, setdata] = useState()
    const [today, settoday] = useState([])
    const [groupData, setgroupData] = useState()
    useEffect(() => {
        axios.get(url)
            .then(data => {
                var listOfData = (data.data.list)
                setdata(data.data)
                const date = listOfData.map(data => (moment(data.dt_txt).format('YYYY-MM-DD')))
                const unidate = date.filter((data, index, today) => (today.indexOf(data) == index))
                listOfData.map((data, index) => {
                    unidate.map(da => {
                        var obj = {}
                        if ((moment(data.dt_txt).format('YYYY-MM-DD')) == da) {
                            obj.date = da
                            obj.data = data
                            settoday(data=>[...data, obj] )
                 
                            
                        }
                    })
                })
            })
            .catch(error => console.log(error))
    }, [url])
    useEffect(() => {
        let groupdata = today.reduce((results, item) => {
        
        results[item.date] = results[item.date] || [];
        results[item.date].push(item.data);
        return results;
    }, {});
    setgroupData(groupdata)

    
   
    }, [today])
 
    if(today.length>40){
      today.splice(0,40)
    }
    
        
    return (  
        <div>
            <h1>{city ? city.city.name : ''}</h1>
            <div className="daycontainer ">       
                  {url? Object.keys(groupData).map((data, index) =><DayBlock  key={index} cloud={groupData[data][0].weather[0].main} value={groupData[data]} date={data} />):""}
            </div>
            <div id="q"></div>
        </div>
        
    )
}
