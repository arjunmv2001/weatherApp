
function search(){
    locate=inputData.value
    console.log(locate);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)
    .then(res=>res.json())
    .then(data=>weatherData(data))
    .catch(err => alert('fetching Failed'))
}
function weatherData(data){  
    let district=data.name
    let humidity=data.main.humidity
   let wind1=data.wind.speed
   let temp2=data.main.temp
   let pressure = data.main.pressure

    
    loc.innerHTML=district 
    humidity1.innerHTML=humidity+` %` 
    wind.innerHTML=wind1+` km/h`
    temp1.innerHTML=temp2+` °C`
    Pressure11.innerHTML=pressure

function clock(){

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = new Date()
        let todayD  = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let month = months[date.getMonth()]
        let year = date.getFullYear()
    
        todayHours.innerHTML=hours
        todayMinutes.innerHTML=minutes
    
        todayDate.innerHTML=todayD
        todayMonth.innerHTML=month
        todayYear.innerHTML=year
        setTimeout(()=>{
            clock()
        },1000)
}

clock();
}    