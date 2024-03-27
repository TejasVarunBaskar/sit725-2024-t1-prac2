const { response } = require("express");

let express = require('express');
let app = express();

let PORT = process.env.PORT || 3000; 
app.use(express.static(__dirname + '/'));

app.get('/', function (req,res) {
    res.render('index.html');
});

app.get('/addition', function (req,res) {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) + parseInt(num2);
    let response = {data:result, message:'Addition Successful'}
    res.json(response);
});

app.get('/Subtraction', function (req,res) {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) - parseInt(num2);
    let response = {data:result, message:'Subtraction Successful'}
    res.json(response);
});

app.get('/multiplication', function (req,res) {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) * parseInt(num2);
    let response = {data:result, message:'Multiplication Successful'}
    res.json(response);
});

app.get('/Division', function (req,res) {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    if (parseInt(num2) === 0) {
        let response = { data: null, message: 'Division by zero error'};
        res.status(400).json(response);
    } else {
        let result = parseInt(num1) / parseInt(num2);
        let response = { data: result, message: 'Division Successful'};
        res.json(response);
    }
});
app.listen(PORT, () => { 
console.log(`Server is running on port ${PORT}`); 
});