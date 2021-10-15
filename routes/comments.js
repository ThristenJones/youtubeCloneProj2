const express = require('express');
const router = express.Router();
const { Comment, validate } = require('../models/comment');


router.get('/', async (req, res) => {
    try {
        const comment = await Comment.find();
        return res.send(comment);
    } catch (ex) { 
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:id', async (req, res) => {
    try {

        const comment = await Comment.findById(rrq.params.id);

        if (!comment)
            return res.status(400).send(`The product with the id "${req.params.id}" does not exist.`);

            return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/', async (req, res) => {
    try {

        const { error } = Comment(req.body);
        if (error)
        return res.status(400).send(error);


        const comment = new Comment ({
            text: req.body.text,
            videoId: req.body.videoId,
        });
        
        await comment.save();
        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { error } = Comment(req.body);
        if (error) return res.status(400).send(error);

        const comment = await Comment.findByIdAndUpdate(
            req.params.id,
            {
                text: req.body.text,
                videoId: req.body.videoId
            }
        );

        if (!comment)
            return res.send(400).send(`The product with the id: "${req.params.id}" does not exist`);

            await product.save();

            return res.send(comment)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


router.delete('/:id', async (req, res) => {
    try {

        const comment = await Comment.findOneAndRemove(req.params.id);

        if (!comment)
            return res.status(400).send(`The product with the id: "${req.params.id}" does not exist`);

            return res.send(comment);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
module.exports = router;