const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');

const PORT = 3000

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection is open")
    })
    .catch(err => {
        console.log("Mongo connection error.")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/login', async (req, res) => {
    const products = await Product.find({})
    res.send(products)
})

app.listen(PORT, () => {
    console.log(`App is listening on the ${PORT}`)
})