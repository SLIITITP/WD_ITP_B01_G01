const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
    Category: {
        type: String,
        
    },
    date: {
        type: Date,
        
    },
    Quantity: {
        type: Number,
        
    },
    TQuantity: {
        type: Number,
       
    },

    TPrice: {
        type: Number,
       
    },
});



module.exports = mongoose.model('Sales', SalesSchema);