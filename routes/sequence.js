const express = require('express');
const router = express.Router();
const fun = require("../controllers/check");
const insert = require("../controllers/insertSequence");
const del = require("../controllers/delete");
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.put('/', async (req, res) => {
    var Data =  await fun(req.body.sequence);
    console.log("processing done")
    res.send(Data);
})

router.post('/', async(req,res)=>{
    var data = await insert(req.body.sequence,req.body.name);
    res.status(201).json(data);
})

router.put('/', async(req,res)=>{
    var data = await insert(req.body.sequence,req.body.name);
    res.status(201).json(data);
})

router.delete('/all', async(req,res)=>{
    del();
    res.status(201).json("completed");
} )

router.get('/all', async(req,res)=>{
    const data = require("../models/sequences.json")
    res.status(201).json(data[0]);
})

module.exports = router;