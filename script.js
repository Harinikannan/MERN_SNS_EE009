const api={
    base:'https://api.openweathermap.org/data/2.5/weather?',
    key:'1a3e193a33ec06cac921bbb07e5dbf4f'
}
const city=document.getElementById('city');
city.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        getWeather(city.value);
    }
});

function getWeather(city){
    fetch(`${api.base}q=${city}&units=metric&appid=${api.key}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
       displayWeather(data);
    });
}
    function displayWeather(data){
        const temp = data.main.temp;
    document.getElementById('temp').textContent = `${temp} °C`;
    }