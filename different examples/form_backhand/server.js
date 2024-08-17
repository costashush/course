const express = require('express');
const app = express();
var fs = require('fs');

app.use(express.static(__dirname));


app.get('/', function (req, res) {
  res.send('/index.html')
});
app.get('/info', function (req, res) {
  var firstName = req.query.first_name;
  var lastName = req.query.last_name;
  var wieght = req.query.weight;
  var height = req.query.height;  
  var age = req.query.age;
  res.send("<h2> First Name: " + firstName + "</h2> <br> <h2>Last Name: " + lastName + "</h2> <br> <h2>Wieght: " + wieght + "</h2>" +
    "<br> <h2>Height: " + height + "</h2> <br> <h2>Age: " + age + "</h2> <br> <h2>");

  var myBmi = bmi(wieght, height);
  console.log(bmi);
  var fs = require('fs');
  fs.appendFile("users_bmi/"+firstName +".txt", "Your BMI is: " + myBmi, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  res.end();
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function bmi(wieght, height) {
  return wieght / (height * height);
}