import express from "express";

const app = express();
const port = 3000;

var dayOfTheWeek = "";

function getDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    dayOfTheWeek = days[today.getDay()];
}

getDay();


app.get("/", (req, res) => {
  res.render("index.ejs", { day: dayOfTheWeek });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




