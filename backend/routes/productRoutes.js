const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products (with simple filter query)
router.get('/', async (req,res)=>{
  try{
    const { category, q, min, max } = req.query;
    const filter = {};
    if(category) filter.category = category;
    if(q) filter.title = { $regex: q, $options: 'i' };
    if(min || max) filter.price = {};
    if(min) filter.price.$gte = Number(min);
    if(max) filter.price.$lte = Number(max);
    const prods = await Product.find(filter).sort({createdAt:-1});
    res.json(prods);
  }catch(err){ res.status(500).json({error:err.message}); }
});

router.get('/:id', async (req,res)=>{
  try{
    const p = await Product.findById(req.params.id);
    if(!p) return res.status(404).json({message:'Not found'});
    res.json(p);
  }catch(err){ res.status(500).json({error:err.message}); }
});

module.exports = router;
