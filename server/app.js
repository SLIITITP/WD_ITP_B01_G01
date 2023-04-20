var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();


//db connection
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var corsOptions = {
  origin: '*',
  optionSuccessStatus: 200,
}

app.use(cors());

const mongoURI = 'mongodb+srv://liquor:liquor123@cluster.bhzqpoq.mongodb.net/?retryWrites=true&w=majority';
//const mongoURI = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/?retryWrites=true&w=majority';


const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(mongoURI, connectionParams)

  .then(() => { console.log('MongoDB Connected'); })

  .catch((err) => console.log('DB Connection Error', err));






app.listen(port, () => {
  console.log("Server is listening on port " + port);
})
