const express = require('express');
const app = express();

var myData = require("./data.json");
app.get("/", (req, res) => {
    res.send(myData)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
