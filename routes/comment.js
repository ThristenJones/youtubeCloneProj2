const express = require('express');
const router = express.Router();
const Video = require('../models/video');


router.post('/', async (req, res) => {
    try {

        const video = new Video ({
            text: "Playing games and songs",
            videoId: "Vo07gWxFlbA",
            
        });

        await video.save();

        return res.send(video);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;