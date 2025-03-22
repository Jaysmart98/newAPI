const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
require('dotenv').config()
const port =  process.env.PORT || 5111
const URI = 'mongodb+srv://Jaysmart98:Jaysmart98@clusterjsm.s8f1w.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJSM'


const countriesInTheWorld = [
    { name: "United States", capital: "Washington, D.C.", population: 331002651 },
    { name: "Canada", capital: "Ottawa", population: 37742154 },
    { name: "United Kingdom", capital: "London", population: 67886011 },
    { name: "Germany", capital: "Berlin", population: 83783942 },
    { name: "France", capital: "Paris", population: 65273511 },
    { name: "Italy", capital: "Rome", population: 60461826 },
    { name: "Spain", capital: "Madrid", population: 46754778 },
    { name: "Australia", capital: "Canberra", population: 25499884 },
    { name: "Japan", capital: "Tokyo", population: 126476461 },
    { name: "China", capital: "Beijing", population: 1439323776 },
    { name: "India", capital: "New Delhi", population: 1380004385 },
    { name: "Brazil", capital: "Brasília", population: 212559417 },
    { name: "Mexico", capital: "Mexico City", population: 128932753 },
    { name: "Russia", capital: "Moscow", population: 145934462 },
    { name: "South Africa", capital: "Pretoria", population: 59308690 },
    { name: "Nigeria", capital: "Abuja", population: 206139589 },
    { name: "Egypt", capital: "Cairo", population: 102334404 },
    { name: "Turkey", capital: "Ankara", population: 84339067 },
    { name: "Argentina", capital: "Buenos Aires", population: 45195774 },
    { name: "Saudi Arabia", capital: "Riyadh", population: 34813871 }
];

mongoose.connect(URI)
.then(() => {
    console.log('Lift off!, database neural handshake completed')
})
.catch((err)=> {
    console.log(err)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/countries', (req, res) => {
    res.json(countriesInTheWorld);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
