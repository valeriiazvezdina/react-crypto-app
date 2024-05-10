const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.static('frontend/dist'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});