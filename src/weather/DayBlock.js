import React, { useState,useEffect } from 'react'
import ReactDom from 'react-dom'
import "./dayblock.css"
import Table from "./Table"
import moment from 'moment'
export default function DayBlock({cloud, value, date }) {

    const [min, setmin] = useState()
    useEffect(() => {
       setmin(value[0].main.temp_min)
    }, [value])
            
           
    const showTable = (data) => {
        var arr = []
        data.map(data => {
            var showobj = {}
            showobj.time = (moment(data.dt_txt).format('hh:mm A'))
            showobj.temp = data.main.temp ? data.main.temp : ""
            arr.push(showobj)
        })
        DayBloc(arr)
    }
    return (
        <div className="container">
            <div id='d' className="block_container" onClick={() => showTable(value)}>
                <div className="top">
                    <p>{new Date(date).toLocaleString('en-us', { weekday: 'long' })}</p>
                    <p>{date}</p>
                </div>
                <div className="middle">
            {cloud=="Rain"?<img src='https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-rain-cloud-vector-icon-png-image_355969.jpg' />:""}
       {cloud=="Clouds"? <img src="https://cdn.mos.cms.futurecdn.net/YGYuHGH442GU597qspz2YL.jpg" alt=""/>:""}   
        {cloud=="Clear"?<img src="https://thumbs.dreamstime.com/b/clouds-blue-sky-windy-clear-cloud-morning-summer-nature-background-concept-vivid-215060109.jpg" alt=""/>:""}
                </div>
                <div className="bottom">
                    <p>temp_min:- {min?min:''}C</p>
                    <p>temp_max:- {value[0].main.temp_max}C</p>
                </div>
                <p>temp:- {value[0].main.temp}C</p>
            </div>
        </div>
    )
}
function DayBloc(data) {
    ReactDom.render(
        data.map(data => <Table temp={data.temp?data.temp:null} time={data.time?data.time:null} />)
        , document.getElementById("q"))


}


 