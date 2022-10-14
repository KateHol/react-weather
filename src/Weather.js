import React from "react";
import axios from "axios"
import "./Weather.css";

export default function Weather() {
   const apiKey = "d773f6cbefee55a5ba39025c971004bf";
   const city = "London";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

   return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
        </div>
        </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Cloudy" />
                6°
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: 13 km/h</li>
                </ul>
            </div>

        </div>
        </div>
}