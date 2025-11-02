import React, {useState} from 'react';
import axios from 'axios';
export default function Customize(){
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({name:'',email:'',description:''});
  const [msg, setMsg] = useState('');
  async function submit(e){
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('email', form.email);
    fd.append('description', form.description);
    if(file) fd.append('image', file);
    try{
      await axios.post('/api/custom-orders', fd, { headers: {'Content-Type':'multipart/form-data'} });
      setMsg('Custom request submitted!');
      setForm({name:'',email:'',description:''}); setFile(null);
    }catch(err){ setMsg('Error submitting'); }
  }
  return (
    <div className='container' style={{padding:30}}>
      <h2>Customize Product</h2>
      <form onSubmit={submit} style={{maxWidth:700}}>
        <input placeholder='Your name' required value={form.name} onChange={e=> setForm({...form,name:e.target.value})} />
        <input placeholder='Your email' required value={form.email} onChange={e=> setForm({...form,email:e.target.value})} />
        <textarea placeholder='Describe your custom request' required value={form.description} onChange={e=> setForm({...form,description:e.target.value})} />
        <input type='file' accept='image/*' onChange={e=> setFile(e.target.files[0])} />
        <button className='btn' type='submit' style={{marginTop:12}}>Submit request</button>
        {msg && <div style={{marginTop:10}}>{msg}</div>}
      </form>
    </div>
  );
}
