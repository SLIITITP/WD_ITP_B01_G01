// const mongoose = require('mongoose');
// const postSchema2 = new mongoose.Schema({
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

// module.exports = mongoose.model('our', postSchema2);
// //module.exports = mongoose.model('product', productSchema2);


const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);
//module.exports = mongoose.model('product', productSchema2);