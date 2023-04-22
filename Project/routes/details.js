const express = require('express');
const details = require('../models/details');
const router = express.Router();



//save post
router.post('/post', (req, res) => {
    let detail = new details(req.body);
    detail.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: detail
        });
    });
});




//insert

// router.route('/post').post(function(req,res) {
//     let Details = new details(req.body);
//     Details.save()
//         .then(details => {
//             res.status(200).json({'service': 'service added succesfully'});
//         })
//         .catch (err => {
//             res.status(400).send ("Unable to save")
//         })
// })



//get post
router.get('/posts', (req, res) => {
    details.find().exec((err, details) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: details
        });
    });
});

//update post

router.put('/post/:id', (req, res) => {
    details.findByIdAndUpdate(   
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated successfully"
            });
        }
    );
});


//delete post

router.delete('/post/:id', (req, res) => {
    details.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccessful", err
        });
        return res.json({
            message: "Delete successful", deletedPost
        });
    });
});

//get specific post

router.get("/post/:id", (req, res) => {
    let postId = req.params.id;
    details.findById(postId , (err, post) => {
            if (err) {
                return res.status(400).json({ success: false, err })
            }
            return res.status(200).json({
                success: true,
                post
            });
        });
});



module.exports = router;




// const express = require('express');
// const posts = require('../models/posts');
// const router = express.Router();


// //save post
// router.post('/post', (req, res) => {
//     let newPost = new posts(req.body);
//     newPost.save((err) => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             });
//         }
//         return res.status(200).json({
//             success: newPost
//         });
//     });
// });




// //get post
// router.get('/posts', (req, res) => {
//     posts.find().exec((err, posts) => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             });
//         }
//         return res.status(200).json({
//             success: true,
//             existingPosts: posts
//         });
//     });
// });

// //update post

// router.put('/post/:id', (req, res) => {
//     posts.findByIdAndUpdate(   
//         req.params.id,
//         {
//             $set: req.body
//         },
//         (err, post) => {
//             if (err) {
//                 return res.status(400).json({ error: err });
//             }
//             return res.status(200).json({
//                 success: "Updated successfully"
//             });
//         }
//     );
// });


// //delete post

// router.delete('/post/:id', (req, res) => {
//     posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
//         if (err) return res.status(400).json({
//             message: "Delete unsuccessful", err
//         });
//         return res.json({
//             message: "Delete successful", deletedPost
//         });
//     });
// });

// //get specific post

// router.get("/post/:id", (req, res) => {
//     let postId = req.params.id;
//     posts.findById(postId , (err, post) => {
//             if (err) {
//                 return res.status(400).json({ success: false, err })
//             }
//             return res.status(200).json({
//                 success: true,
//                 post
//             });
//         });
// });



// module.exports = router;