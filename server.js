const express = require("express");
const app = express();

const date = new Date();
console.log(date.getHours());

date.getHours() < 8 && date.getHours() > 17
  ? app.get("/public/home.html", (req, res) => {
      res.send("this is not a working time go have some fun !!!");
    })
  : app.use(express.static(__dirname));

app.listen(4000, err => {
  err ? console.log(err) : console.log("server is running in 4000 port");
});
