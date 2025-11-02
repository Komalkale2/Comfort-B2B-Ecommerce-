require('dotenv').config();
const connectDB = require('./config_db');
const Product = require('./models/Product');

const products = [
  { title: 'Aesthetic Phone Case', description:'Knitted aesthetic phone case.', price:599, category:'Phone Case', images:['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'] },
  { title: 'Cream Woolen Sweater', description:'Handmade soft woolen sweater.', price:1499, category:'Woolen', images:['https://images.unsplash.com/photo-1602810316133-1d1b1a0c4d0a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2'] },
  { title: 'Beaded Bracelet Set', description:'Minimal beaded bracelet.', price:349, category:'Bracelet', images:['https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3'] },
  { title: 'Handpainted Nail Art Set', description:'24pcs press-on nails.', price:249, category:'Nail Art', images:['https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4'] },
  { title: 'Knitted Phone Sleeve', description:'Cozy phone sleeve.', price:699, category:'Phone Case', images:['https://images.unsplash.com/photo-1585386959984-a415522f3d01?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5'] },
  { title: 'Woolen Cap', description:'Warm woolen cap.', price:499, category:'Woolen', images:['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6'] },
  { title: 'Artisan Keychain', description:'Handmade keychain.', price:199, category:'Accessories', images:['https://images.unsplash.com/photo-1520975917153-8d0b4b4b1d5d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7'] },
  { title: 'Minimal Earrings', description:'Handmade earrings.', price:399, category:'Accessories', images:['https://images.unsplash.com/photo-1526318472351-c75fcf07002f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8'] },
  { title: 'Cozy Throw Blanket', description:'Handwoven throw blanket.', price:2599, category:'Woolen', images:['https://images.unsplash.com/photo-1564869734443-90f0b4b4d2f2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9'] },
  { title: 'Customized Bracelet', description:'Personalize with name.', price:899, category:'Bracelet', images:['https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=10'] }
];

(async ()=>{
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded products');
  process.exit();
})();
