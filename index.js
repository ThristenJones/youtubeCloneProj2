const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const videos = require('./routes/videos');
const { Router } = require('express');


connectDB();

app.use(express.json());
app.use('/api/videos', videos);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});


