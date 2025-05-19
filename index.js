import express from "express";

const app = express();
const port = 3000;

var dayOfTheWeek = "";
var dayTypeOfWeek = "";
var adviceOfDay = "";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date("August 28, 2082 11:00:00");
dayOfTheWeek = days[today.getDay()];

if (dayOfTheWeek === "Sunday" || dayOfTheWeek === "Saturday") {
    dayTypeOfWeek = "weekend";
    adviceOfDay = "its time to enjoy, relaxxx";
} else {
    dayTypeOfWeek = "a weekday";
    adviceOfDay = "its time to work hard"; 
}


app.get("/", (req, res) => {
    res.render("index.ejs", { 
        day: dayOfTheWeek,
        dayType: dayTypeOfWeek,
        advice: adviceOfDay
    });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




