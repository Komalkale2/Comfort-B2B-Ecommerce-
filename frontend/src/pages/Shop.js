import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
export default function Shop(){
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');
  const { add } = useContext(CartContext);
  useEffect(()=>{ axios.get('/api/products').then(r=> setProducts(r.data)).catch(()=>{}); },[]);
  const filtered = products.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className='container'>
      <header className='site-header'><div className='header-inner'><div className='logo'>Komal's <span style={{color:'#d4a373'}}>Handmade</span></div><nav><a href='/'>Home</a></nav></div></header>
      <main style={{padding:'30px 0'}}>
        <h2>Shop</h2>
        <input placeholder='Search products' value={q} onChange={e=>setQ(e.target.value)} style={{padding:8,margin:'10px 0',width:'100%'}} />
        <div className='grid'>{filtered.map(p=> <div key={p._id} className='card'><img src={p.images && p.images[0]} alt={p.title} /><h4>{p.title}</h4><div className='small'>₹{p.price}</div><div style={{marginTop:10}}><button className='btn' onClick={()=> add(p)}>Add to cart</button></div></div>)}</div>
      </main>
      <footer className='footer'><div>© {new Date().getFullYear()} Komal's Handmade</div><div className='made-by'>Made with ✨ Komal Kale</div></footer>
    </div>
  );
}
