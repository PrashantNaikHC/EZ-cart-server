const mongoose = require('mongoose');

const Item = require('./models/product');

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection is open")
    })
    .catch(err => {
        console.log("Mongo connection error.")
        console.log(err)
    })


const seedItems = [
    {
        "item name": "Bread",
        "desc": "Sweet Bread",
        "price": 10,
        "currency": "dollar",
        "expiry date": "01-12-2020",
        "quantity": "1pkt"
    },
    {
        "item name": "Salt",
        "desc": "iodised salt",
        "price": 5,
        "currency": "dollar",
        "expiry date": "01-12-2021",
        "quantity": "1kg"
    },
    {
        "item name": "Sugar",
        "desc": "",
        "price": 15,
        "currency": "dollar",
        "expiry date": "01-12-2021",
        "quantity": "1kg"
    },
    {
        "item name": "Sunflower Oil",
        "desc": "oil",
        "price": 35,
        "currency": "dollar",
        "expiry date": "01-12-2020",
        "quantity": "1L"
    },
    {
        "item name": "Rice",
        "desc": "bolied rice",
        "price": 100,
        "currency": "dollar",
        "expiry date": "01-12-2021",
        "quantity": "20KG"
    },
    {
        "item name": "Milk",
        "desc": "",
        "price": 5,
        "currency": "dollar",
        "expiry date": "15-11-2020",
        "quantity": "1pkt"
    }
]
Item.remove()
Item.insertMany(seedItems)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })