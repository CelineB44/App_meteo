import React, { Fragment } from 'react';
import axios from 'axios'; 
import './Weather.css';

//be9caf3e4e61ceb97e40d5c3772fa3ff

class Weather extends React.Component {
	constructor () {
		super();
		this.state = {
			data: null,
			name:'',
			icon:'',
			iconDescrib:'',
			temp: 0,
			humidity: 0,
			windSpeed: 0,
			windDegree: 0
		}

		this.apiKey = "be9caf3e4e61ceb97e40d5c3772fa3ff"
	}

	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			axios.get (`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${this.apiKey}`)
			.then ((response)=> {
        this.setState ({
          name: response.data.name,
          icon: response.data.weather[0].icon,
          iconDescribe: response.data.weather[0].description,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          windDegree: response.data.wind.deg,
          windSpeed: response.data.wind.speed
         

        });
				console.log(response)
			})
		});
	}

	render() {
		return (
			<Fragment>
        <div className="informations">
          <h2>{this.state.name}</h2>
          <img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.iconDescribe}/>
          <p>{this.state.temp} °C</p>
          <p>{this.state.windSpeed*3,6} km/h</p>
          <p>{this.state.humidity} %</p>
          <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} width="50px" padding="20px" style={{transform: `rotate(${this.state.windDegree}deg)`}}/>
        </div>
      </Fragment>
		)
	}
}

export default Weather;