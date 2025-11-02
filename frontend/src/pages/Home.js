import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Home(){
  const [featured, setFeatured] = useState([]);
  useEffect(()=>{ axios.get('/api/products').then(r=> setFeatured(r.data.slice(0,6))).catch(()=>{}); },[]);
  return (
    <div>
      <header className='site-header'><div className='container header-inner'><div className='logo'>Komal's <span style={{color:'#d4a373'}}>Handmade</span></div><nav><Link to='/shop'>Shop</Link> <Link to='/customize'>Customize</Link> <Link to='/about'>About</Link> <Link to='/contact'>Contact</Link></nav></div></header>
      <main className='container'>
        <section className='hero'>
          <div className='hero-text'><h1>Handmade with Love — by Komal Kale</h1><p className='small'>Soft, classic & aesthetic handmade goods — phone cases, woolens, bracelets and nail art.</p><Link className='btn' to='/shop'>Shop Now</Link></div>
          <div className='hero-image'><img src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f3f9e3f2c1a2d9aef7f6f1a2b3c4d5e' style={{width:420,borderRadius:12}} alt='hero' /></div>
        </section>
        <section style={{padding:'30px 0'}}>
          <h3>Featured</h3>
          <div className='grid'>{featured.map(p=> <div key={p._id} className='card'><img src={p.images && p.images[0]} alt={p.title} /><h4>{p.title}</h4><div className='small'>₹{p.price}</div></div>)}</div>
        </section>
      </main>
      <footer className='footer container'><div>© {new Date().getFullYear()} Komal's Handmade</div><div className='made-by'>Made with ✨ Komal Kale</div></footer>
    </div>
  );
}
