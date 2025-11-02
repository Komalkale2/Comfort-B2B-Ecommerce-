import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
export default function Product(){
  const { id } = useParams();
  const [p, setP] = useState(null);
  const { add } = useContext(CartContext);
  useEffect(()=>{ axios.get('/api/products/'+id).then(r=> setP(r.data)).catch(()=>{}); },[id]);
  if(!p) return <div className='container'>Loading...</div>;
  return (
    <div className='container' style={{padding:'30px 0'}}>
      <Link to='/shop'>← Back to shop</Link>
      <div style={{display:'flex',gap:20,marginTop:12}}>
        <img src={p.images && p.images[0]} alt={p.title} style={{width:420,borderRadius:12}} />
        <div style={{flex:1}}>
          <h2>{p.title}</h2>
          <p className='small'>{p.description}</p>
          <h3>₹{p.price}</h3>
          <div style={{display:'flex',gap:12}}><button className='btn' onClick={()=> add(p)}>Add to Cart</button><Link className='btn' to='/checkout'>Buy Now</Link></div>
        </div>
      </div>
    </div>
  );
}
