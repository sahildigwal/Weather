const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){

res.sendFile(__dirname + "/index.html");

app.post("/", function(){
  console.log(req.body.Cityname);
});




//.const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6580613bd781d04da3902e4281ab0868&units=metric"
//https.get(url, function(response){
//  console.log(response.statuscode);
//  response.on("data", function(data){
//    const weatherData = JSON.parse(data)
//    const temp = weatherData.main.temp
//    const weatherDescription = weatherData.weather[0].description
//    res.write("The weather is currently " + weatherDescription)
//    res.write("The temp in london is"+ temp +"degree celcius");
//    res.send()
//  })



  res.send("server is up and runing")
})





app.listen(3000, function(){
  console.log("server is running on 3000");
});
