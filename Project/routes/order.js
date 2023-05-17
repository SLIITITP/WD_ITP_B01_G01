const express = require('express');
const order = require('../models/order');
const router = express.Router();



//save post
router.post('/post', (req, res) => {
    let ord = new order(req.body);
    ord.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: ord
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
    order.find().exec((err, order) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: order
        });
    });
});

//update post

router.put('/post/:id', (req, res) => {
    order.findByIdAndUpdate(   
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
    order.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
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
    order.findById(postId , (err, post) => {
            if (err) {
                return res.status(400).json({ success: false, err })
            }
            return res.status(200).json({
                success: true,
                post
            });
        });
});

//count
// orderRoutes.route('/get/count').get(async function (req, res) {
//     try {
//       const count = await order.countDocuments();
//       res.json(count);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Server error");
// }
//   });



module.exports = router;
