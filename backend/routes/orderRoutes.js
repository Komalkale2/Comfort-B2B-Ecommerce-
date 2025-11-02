const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req,res)=>{
  try{
    const { items, total, name, email, address, phone } = req.body;
    const order = new Order({ items, total, name, email, address, phone });
    await order.save();
    res.status(201).json(order);
  }catch(err){ res.status(500).json({error:err.message}); }
});

router.get('/', async (req,res)=>{
  try{
    const orders = await Order.find().sort({createdAt:-1});
    res.json(orders);
  }catch(err){ res.status(500).json({error:err.message}); }
});

module.exports = router;
