// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     message: {
//         type: String,
//         required: true
//     }
// });


// const postSchema2 = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: String,
//         required: true
//     },
//     countInStock: {
//         type: String,
//         required: true
//     },
//     quantity: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('Post', postSchema);
// module.exports = mongoose.model('Product', productSchema2);

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    message: {
        type: String,
       
    }
});



module.exports = mongoose.model('Post', postSchema);


