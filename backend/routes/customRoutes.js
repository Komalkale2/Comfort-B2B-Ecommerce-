const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const CustomOrder = require('../models/CustomOrder');
const fs = require('fs');

// multer storage (local)
const storage = multer.diskStorage({
  destination: function(req,file,cb){ cb(null, 'uploads/'); },
  filename: function(req,file,cb){
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

// cloudinary optional
const useCloudinary = process.env.USE_CLOUDINARY === 'true';
let cloudinary = null;
if(useCloudinary){
  cloudinary = require('cloudinary').v2;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
}

router.post('/', upload.single('image'), async (req,res)=>{
  try{
    const { name, email, description } = req.body;
    let imageUrl = '';
    let usedCloud = false;
    if(useCloudinary && req.file){
      // upload to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, { folder: 'komal_custom' });
      imageUrl = result.secure_url;
      usedCloud = true;
      // delete local file
      fs.unlinkSync(req.file.path);
    } else if(req.file){
      imageUrl = '/' + req.file.path.replace('\\','/');
    }
    const c = new CustomOrder({ name, email, description, imageUrl, useCloudinary: usedCloud });
    await c.save();
    res.status(201).json(c);
  }catch(err){ res.status(500).json({error:err.message}); }
});

router.get('/', async (req,res)=>{
  try{
    const items = await CustomOrder.find().sort({createdAt:-1});
    res.json(items);
  }catch(err){ res.status(500).json({error:err.message}); }
});

module.exports = router;
