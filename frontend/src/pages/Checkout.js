import React, {useContext, useState} from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
export default function Checkout(){
  const { cart, clear } = useContext(CartContext);
  const [form, setForm] = useState({name:'',email:'',address:'',phone:''});
  const total = cart.reduce((s,i)=> s + (i.price||0) * (i.qty||1), 0);
  async function place(e){
    e.preventDefault();
    try{
      await axios.post('/api/orders', { items: cart, total, ...form });
      alert('Order placed (demo)');
      clear();
    }catch(err){ alert('Order error'); }
  }
  return (
    <div className='container' style={{padding:30}}>
      <h2>Checkout</h2>
      <form onSubmit={place} style={{maxWidth:600}}>
        <input placeholder='Name' required value={form.name} onChange={e=> setForm({...form,name:e.target.value})} />
        <input placeholder='Email' type='email' required value={form.email} onChange={e=> setForm({...form,email:e.target.value})} />
        <input placeholder='Phone' required value={form.phone} onChange={e=> setForm({...form,phone:e.target.value})} />
        <textarea placeholder='Address' required value={form.address} onChange={e=> setForm({...form,address:e.target.value})} />
        <div style={{margin:'12px 0'}}><strong>Total: ₹{total}</strong></div>
        <div style={{display:'flex',gap:8,marginBottom:12}}><label><input type='radio' name='pay' defaultChecked /> UPI</label><label><input type='radio' name='pay' /> COD</label><label><input type='radio' name='pay' /> Card</label></div>
        <button className='btn' type='submit'>Place order</button>
      </form>
    </div>
  );
}
