const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');



// const nodemailer = require('nodemailer');

const app = express();

// const postRoutes = require('./routes/posts');
// const detailsRoutes = require('./routes/details');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(buildPath)); 
//app.use(postRoutes);
//app.use(detailsRoutes);

app.use(cors());
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

const supplierRoutes = require('./routes/supplier');
app.use('/AddSupplier', supplierRoutes);


app.use('/SupplierList', supplierRoutes);
app.use('/EditSupplier', supplierRoutes);


const orderRoutes = require('./routes/order');
app.use('/AddOrder', orderRoutes);

app.use('/OrderList', orderRoutes);
app.use('/EditOrder', orderRoutes);

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: 'amandiyalapola@gmail.com.com',
//       pass: 'NawAma@0'
//     }
//   });
  
//   module.exports = transporter;

// app.post('/users',(req,res)=>{
 
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'your mail',
//           pass: 'password'
//         }
//     });
 
//     var mailOptions = {
//         from: 'your mail',// sender address
//         to: req.body.to, // list of receivers
//         subject: req.body.subject, // Subject line
//         text:req.body.description,
//         html: `
//         <div style="padding:10px;border-style: ridge">
//         <p>You have a new contact request.</p>
//         <h3>Contact Details</h3>
//         <ul>
//             <li>Email: ${req.body.to}</li>
//             <li>Subject: ${req.body.subject}</li>
//             <li>Message: ${req.body.description}</li>
//         </ul>
//         `
//     };
     
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error)
//         {
//           res.json({status: true, respMesg: 'Email Sent Successfully'})
//         } 
//         else
//         {
//           res.json({status: true, respMesg: 'Email Sent Successfully'})
//         }
     
//       });
// });










