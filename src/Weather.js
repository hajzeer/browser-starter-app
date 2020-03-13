import React, {Component} from 'react';

let API_key = 'e52edf556533bb9c65e33accded73112'


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            time: new Date(),
            lat: undefined,
            long: undefined,
        }
    }

    componentDidMount() {
        this.getPosition();
        this.getWether();
        setInterval(()=> this.timeBuilder(),1000)
    }


    dateBuilder = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let days = ['Sunday','Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
    }
    timeBuilder = () => {
        this.setState({time: new Date()})
    }

    getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            this.setState({lat: lat, long:long})
        })
    }

    getWether = async() => {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=katowice&appid=${API_key}`)
        const data = await response.json();
        console.log(data)
        this.setState({weather: data});
    }
    render() {
        return (
            <div>
                <div className='search__box'>
                    <input
                        type='text'
                        className='search__bar'
                        placeholder='Search in Google...'
                    />
                </div>
                {(typeof this.state.weather.main != 'undefined') ? (
                <div className='main__info'>
                    <div className='location__box'>
                        <div className='current__time' id='clock'>{this.state.time.toLocaleTimeString()}</div>
                        <div className='date'>{this.dateBuilder(new Date())}</div>
                        <div className='location'>{this.state.weather.name}, {this.state.weather.sys.country}</div>
                    </div>
                    <div className='wether__box'>
                        <div className='temp'>{Math.floor(this.state.weather.main.temp - 273.15)}°C</div>
                        <div className='wether'>{this.state.weather.weather[0].main}</div>
                    </div>
                </div>
                ): (<h1 className='location__box'>Oops! We have a problem</h1>)}
            </div>
        )
    }
} export default Weather;