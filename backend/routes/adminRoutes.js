const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');
const CustomOrder = require('../models/CustomOrder');

// simple login - returns JWT if credentials match env
router.post('/login', (req,res)=>{
  const { email, password } = req.body;
  if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
    const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secret', { expiresIn: '12h' });
    return res.json({ token });
  }
  return res.status(401).json({ message:'Invalid credentials' });
});

// middleware
function auth(req,res,next){
  const authHeader = req.headers.authorization;
  if(!authHeader) return res.status(401).json({message:'no token'});
  const token = authHeader.split(' ')[1];
  try{
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.admin = data;
    next();
  }catch(err){ return res.status(401).json({message:'invalid token'}); }
}

router.get('/orders', auth, async (req,res)=>{
  const orders = await Order.find().sort({createdAt:-1});
  res.json(orders);
});

router.get('/custom-orders', auth, async (req,res)=>{
  const customs = await CustomOrder.find().sort({createdAt:-1});
  res.json(customs);
});

router.post('/custom-orders/:id/status', auth, async (req,res)=>{
  const id = req.params.id;
  const cc = await CustomOrder.findById(id);
  if(!cc) return res.status(404).json({message:'not found'});
  cc.status = req.body.status || cc.status;
  await cc.save();
  res.json(cc);
});

module.exports = router;
