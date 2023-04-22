const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

<<<<<<< HEAD
const postRoutes = require('./routes/posts');
const router = require("./routes/router");
const products = require("./models/productSchema");

=======
// const postRoutes = require('./routes/posts');
// const detailsRoutes = require('./routes/details');
>>>>>>> adcd54c583fa9f13ab4bdfe3cbc96c8dc73f7f05

app.use(bodyParser.json());
app.use(cors());

//app.use(postRoutes);
//app.use(detailsRoutes);

app.use(cors());
app.get("/inventory",(req,res)=>{
    res.json("server start")
})

app.use(router);



mongoose.set('strictQuery', true);
const port = 8000;
const url = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database not connected', err));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const postRoutes = require('./routes/posts');
app.use('/contact', postRoutes);

const detailsRoutes = require('./routes/details');
app.use('/informationForm', detailsRoutes); 


app.use('/DisplayInfo', detailsRoutes);