import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
export function CartProvider({children}){
  const [cart, setCart] = useState(()=> JSON.parse(localStorage.getItem('komal_cart')||'[]'));
  useEffect(()=> localStorage.setItem('komal_cart', JSON.stringify(cart)), [cart]);
  const add = (item)=>{
    setCart(prev=>{ const idx = prev.findIndex(p=>p._id===item._id); if(idx>-1){ prev[idx].qty += item.qty||1; return [...prev]; } return [...prev, {...item, qty:item.qty||1}]; });
  };
  const remove = (id)=> setCart(prev => prev.filter(i=> i._id !== id));
  const clear = ()=> setCart([]);
  return <CartContext.Provider value={{cart, setCart, add, remove, clear}}>{children}</CartContext.Provider>
}
