import { useEffect, useState } from 'react';
import { 
  Sun,
  Moon,
  CloudRain,
  Cloud, 
  Wind,
  Drop,
  MapPin,
  Envelope,
  GithubLogo,
  LinkedinLogo     
} from "phosphor-react";
import './styles/global.css';
import axios from "axios";

function App() {
  const [ dadosApi, setDadosApi ] = useState<any>();
  const [ coordenates, setCoordenates ] = useState({
    latitude: 0,
    longitude: 0,
  })

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordenates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } catch(err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    if (coordenates.latitude !== 0) {
      try {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordenates.latitude}&lon=${coordenates.longitude}&appid=${import.meta.env.VITE_APP_API_KEY}&lang=pt_br`)
        .then((response) => {
          setDadosApi(response.data);
        });
      } catch(err) {
        console.log(err)
      }
    }
  }, [coordenates]);
  
  const convertTemperature = (valueInKelvin: number) => {
    return Math.round(valueInKelvin - 273.15);
  }
    
  const convertWindSpeed = (value: number) => {
    return Math.round(value * 3.6);
  }

  const getPeriody = (dataTime: number, sunrise: number, sunset: number) => {
    return sunrise < dataTime && sunset > dataTime ? 'day' : 'night' 
  }

  const getWeatherIcon = () => {
    const periody = getPeriody(dadosApi.dt, dadosApi.sys.sunrise, dadosApi.sys.sunset);
    const weather = dadosApi.weather[0].main;

    switch (weather) {
      case 'Clear':
        return periody === 'day'
          ? <Sun className='text-400xl text-white -lg:text-9xl'/>
          : <Moon className='text-400xl text-white -lg:text-9xl'/>
      case 'Clouds':
        return periody === 'night' 
          ? (
            <div className='relative'>
              <Moon className='text-400xl text-white -lg:text-9xl'/>
              <Cloud weight="fill" className='text-400xl absolute -lg:top-8 left-11 top-24 text-white animate-horizontal-slow -lg:text-9xl'/>
            </div>
          )
          : (
            <div className='relative'>
              <Sun className='text-400xl text-white -lg:text-9xl'/>
              <Cloud weight="fill" className='text-400xl absolute -lg:top-8 left-11 top-24 text-white animate-horizontal-slow -lg:text-9xl'/>
            </div>
          )
      case 'Rain':
        return <CloudRain className='text-400xl text-white -lg:text-9xl'/>
      default:
        break;
    }
  }

  return (
    <div className='w-full h-screen flex flex-col'>
      {
        dadosApi 
        ? (
          <> 
            <div className={` w-full h-screen flex items-center justify-between ${getPeriody(dadosApi.dt, dadosApi.sys.sunrise, dadosApi.sys.sunset) === "day" ? 'bg-sky-400' : 'bg-slate-900'} -lg:flex-col-reverse -lg:items-center -lg:justify-center gap-5`}>
              <div className="w-full flex flex-col items-center gap-3 -lg:text-center -lg:items-center">
                <div className=' flex items-start flex-col -lg:items-center'>
                  <div className='flex flex-col'>
                    <p className='text-9xl text-white -lg:text-7xl'>{convertTemperature(dadosApi.main.temp)}º</p>
                    <p className='text-8xl text-white -lg:text-5xl'>{dadosApi.name}</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className='flex gap-3 text-3xl -lg:text-xl'>
                      <Wind className='text-white'/>
                      <p className='text-white'>Vento: {convertWindSpeed(dadosApi.wind.speed)} km/h</p>
                    </div>
                    <div className='flex gap-3 text-3xl -lg:text-xl'>
                      <Drop className='text-white'/>
                      <p className='text-white'>Umidade: {dadosApi.main.humidity}%</p>
                    </div>
                  </div>
                </div>
              </div>
                <div className='w-full flex justify-center relative'>
                  <div className=''>
                    {getWeatherIcon()}
                  </div>
              </div>
            </div>
          </>
        )
        : (
            <div className={`flex h-screen w-full items-center justify-center flex-col`}>
              <MapPin className='animate-bounce' size={50}/>
              <p className='text-3xl text-center'>Aceite que acessemos sua localização</p>
            </div>
        )
      }
      <footer className='bg-zinc-900 w-full flex justify-center gap-4 -lg:items-center -lg:justify-center -lg:flex-col -lg:gap-2 -lg:py-2'>
        <p className='text-white -lg:text-center'>Desenvolvido por: Arthur César e Vanessa de Queiroz ❤️</p>
        <div className='flex items-center justify-center'>
          <a href='mailto:240700ac@gmail.com' target="_blank">
            <Envelope weight='fill' className='text-white' size={30}/>
          </a>
          <a href='https://github.com/nogueiraac' target="_blank">
            <GithubLogo weight='fill' className='text-white' size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/arthur-c%C3%A9sar/" target="_blank">
            <LinkedinLogo weight='fill' className='text-white' size={30}/>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
