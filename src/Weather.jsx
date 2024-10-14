import React, { useEffect, useState } from 'react'
import './Weather.css'
function Weather() {

    const [mylocation,setlocation]=useState('')

    const [finallocation,setfinal]=useState('')
    const [namee,setnamee]=useState('')

    const [weather,setweather]=useState('')

    const [lon,setlon]=useState('')
    const [lat,setlat]=useState('')

    const [temp,settemp]=useState('')
    const [pre,setpre]=useState('')
    const [hum,sethum]=useState('')

    const hi=(e)=>{
          setlocation(e.target.value)
    }

     async function fetched() {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mylocation}&appid=99ed8109be9313a5cd83c79def0f7be2&units=metric`)
     .then(store=>store.json())
     .then(mydata=>{setnamee(mydata.name)
                    setlon(mydata.coord.lon)
                    setlat(mydata.coord.lat)
                    settemp(mydata.main.temp)
                    setpre(mydata.main.pressure)
                    sethum(mydata.main.humidity)
                    setweather(mydata.weather[0].main)
                  
     })

     
    } 

   
   
    useEffect(()=>{
      fetched();
},[finallocation])    

 
const search = (a)=>{
      a.preventDefault()
      console.log("hi");
      setfinal(mylocation);
}


  return (
    <>
    <div className="weather-div">
      </div>
    <form action="" onSubmit={search}>

      <div className="api">
      
      <h1 className='weather'>Weather Report</h1>
      <input type="text" placeholder='Enter Your Location' onChange={hi}/><button>Search</button>
       
      
    <div className="weather-font">
     <h2>{'Location : '+namee}</h2>

     <h2>{'Weather : '+weather}</h2>

     <h2>{'Lon : '+lon}</h2>
      <h2>{'Lat : '+lat}</h2>
     
      <h2>{'Temp : '+temp+"*"}</h2>
      <h2>{'Pressure : '+pre}</h2>
      <h2>{'Humidity : '+hum}</h2>
      </div>
      </div>
     
      </form>
      
        </>
  )
}

export default Weather