import  Card  from '@mui/material/Card'
import React, { useState } from 'react'
import cartImg from '../assets/image-product-1.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

const CartCard = () => {

  const [filledCart, setFilledCart] = useState(true)

  const deleteCart = () => {
    setFilledCart(false)
  }

  const { count } = useSelector((state) => state.counter)

  const isMobile = useMediaQuery('(min-width:0px) and (max-width:599.99px)')

  return (
    

    <div style={{color: 'black', position: 'absolute', marginTop: '14rem', marginLeft:'-6rem', width: isMobile ? '80%' : 'auto'}}>

        <Card elevation= {3} style={{height: '11.4rem', width: isMobile ? '80%' : '15rem', textAlign: 'center', }}>
          <div style={{padding: '0 1rem', height: '2rem', borderBottom: '1px solid grey', textAlign: 'left'}}>
            <p>cart</p>
          </div>
          { filledCart ? <div style={{padding: '1rem'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
               <img src={cartImg} alt=""  style={{height: '2rem', width: '2rem', borderRadius: '.2rem'}}/> 
               <div style={{display: 'flex', alignItems: 'center', gap: '1px', flexDirection: 'column', justifyContent: 'center', flexFlow: 'wrap',}}>
                <p style={{fontSize: '.7rem', color: ' hsl(219, 9%, 45%)', fontWeight: 400, textAlign: 'left'}}>Fall Limited Edition Sneaker <br />
             $125.00 x {count} ${125 * count}
                </p>
               </div>
               
            <div onClick={deleteCart}>
                <DeleteIcon fontSize='small'  sx={{ color: 'gray'}} />
            </div>
            </div> <button style={{color: 'white', backgroundColor: 'hsl(26, 100%, 55%)', border: 0 , borderRadius: '.4rem', height: '2rem', width: '12rem', marginTop: '1rem'}}>
                    checkout
                </button>
            </div> : <p>Your cart is empty</p>}
            
         
        </Card>
    </div>
  )
}

export default CartCard