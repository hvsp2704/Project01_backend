const cors = require('cors');
const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT||3002;

app.use(cors());

app.use(express.json());  
app.use('/sequence',(require('./routes/sequence')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));