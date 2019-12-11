//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
var search=document.getElementById("search");
search.addEventListener("keyup",e=>{
    if(e.keyCode === 13)
    {
    var getCityName=e.target.value//dnt use let
    }
        getweather(getCityName);
});
function getweather(getCityName)
{
    const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=860f808ed68a8a83e85b3b99c9b8b97d`;
    window.fetch(weatherapi).then(data=>
        {
            data.json().then(weather=>
                {
                 var output= "";
                 console.log(weather);
                 var weatherdata=weather.weather;
                   //array here
                   for(let x of weatherdata)
                   {
                       output+=`
                       <div class="col-md-4 offset-4 mt-4 card">
                        <div class="card-body">
                        <h1>${weather.name}</h1>
                        <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                        <p><span>temp:</span>
                        <span class="temp">${weather.main.temp}&deg;c</span></p>
                        <span class="des float-left">${x.description}</span>
                        <span class="des float-right">${x.main}</span>
                        </div>
                        </div>
                        `;
                      document.getElementById("template").innerHTML = output;
                   }
                }) .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err));
}
