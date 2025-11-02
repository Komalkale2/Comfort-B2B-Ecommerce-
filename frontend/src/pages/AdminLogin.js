import React, {useState} from 'react';
import axios from 'axios';
export default function AdminLogin(){ 
  const [form,setForm]=useState({email:'',password:''});
  const [msg,setMsg]=useState('');
  async function login(e){ e.preventDefault(); try{ const res = await axios.post('/api/admin/login', form); localStorage.setItem('komal_admin_token', res.data.token); window.location.href = '/admin/dashboard'; }catch(err){ setMsg('Login failed'); } }
  return (<div className='container' style={{padding:30}}><h2>Admin Login</h2><form onSubmit={login}><input required placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/><input required type='password' placeholder='Password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/><button className='btn' type='submit'>Login</button></form>{msg && <div>{msg}</div>}</div>);
}
