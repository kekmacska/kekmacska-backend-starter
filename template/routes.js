const express = require('express');
const { Thing } = require('./models');
const router = express.Router();

router.get('/thing',async(q,a)=>{
    try {
        const things=await Thing.find();
        return a.json(things);
    } catch (e) {
        console.error(e.message);
        return a.status(500).json({msg:e.message});
    }
});

module.exports=router;