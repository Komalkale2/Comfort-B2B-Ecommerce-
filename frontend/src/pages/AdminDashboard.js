import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function AdminDashboard(){
  const [orders,setOrders]=useState([]); const [customs,setCustoms]=useState([]); const [msg,setMsg]=useState('');
  useEffect(()=>{ const token = localStorage.getItem('komal_admin_token'); if(!token){ window.location.href='/admin/login'; return; } axios.get('/api/admin/orders', { headers:{ Authorization: 'Bearer '+token } }).then(r=> setOrders(r.data)).catch(()=>{}); axios.get('/api/admin/custom-orders', { headers:{ Authorization: 'Bearer '+token } }).then(r=> setCustoms(r.data)).catch(()=>{}); },[]);
  async function mark(id){ const token = localStorage.getItem('komal_admin_token'); try{ await axios.post('/api/admin/custom-orders/'+id+'/status', { status:'completed' }, { headers:{ Authorization:'Bearer '+token } }); setMsg('Updated'); }catch(err){ setMsg('Error'); } }
  return (<div className='container' style={{padding:30}}><h2>Admin Dashboard</h2><h3>Orders</h3>{orders.map(o=> <div key={o._id} className='card' style={{marginBottom:8}}><div><strong>{o.name}</strong> - ₹{o.total}</div><div className='small'>{new Date(o.createdAt).toLocaleString()}</div></div>)}<h3>Custom Requests</h3>{customs.map(c=> <div key={c._1d} className='card' style={{marginBottom:8}}><div><strong>{c.name}</strong> - {c.description}</div>{c.imageUrl && <img src={c.imageUrl} style={{width:120, marginTop:8}} alt=''/>}<div style={{marginTop:8}}><button className='btn' onClick={()=> mark(c._id)}>Mark Completed</button></div></div>) }{msg && <div>{msg}</div>}</div>);
}
