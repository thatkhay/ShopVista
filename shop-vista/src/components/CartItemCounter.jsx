import React from 'react';

function CartItemCounter({ numOfCartItem }) {
  return (
    <div style={{height: '.7rem', width: '.7rem', backgroundColor: 'hsl(26, 100%, 55%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '.7rem'}}>
 <p style={{color: 'white'}}>{numOfCartItem}</p>
 </div>
   
  );
}

export default CartItemCounter;
