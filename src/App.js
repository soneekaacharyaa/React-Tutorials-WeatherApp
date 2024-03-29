import React from 'react';
import axios from 'axios';
import {useState} from 'react';

function App() {
const [data, setData] = useState('');
const [location, setLocation] = useState('')
  const url ='https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&units=imperial&appid=8d3e6322eb2c2c48f90b6be763490528'
  const searchLocation = (event) =>{

    if(event.key === 'Enter'){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}
  
  return (
    <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        type='text'
        placeholder="Enter Location"
        onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name != undefined &&
        <div className="bottom">
          
          <div className="feels">
          {data.main ? <p>{data.main.feels_like}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p>{data.main.humidity}</p> : null}
            <p>Humidity</p>
            </div>
            <div className="wind">
          {data.wind ? <p>{data.wind.speed}MPH</p>:null}
              <p>Wind Speed</p>
            </div>

        </div>
          }
      </div>

    </div>
  );
}

export default App;
