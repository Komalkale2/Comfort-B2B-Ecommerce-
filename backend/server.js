require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config_db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const customRoutes = require('./routes/customRoutes');
const adminRoutes = require('./routes/adminRoutes');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/custom-orders', customRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req,res)=> res.send({message:'Komal Handmade API'}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on', PORT));
