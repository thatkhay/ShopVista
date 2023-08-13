import  Card  from '@mui/material/Card'
import React from 'react'
import cartImg from '../assets/image-product-1.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
const CartCard = () => {
  return (

    <div style={{color: 'black', position: 'absolute', marginTop: '14rem', marginLeft:'-6rem'}}>

        <Card elevation= {3} style={{height: '11.4rem', width: '15rem', textAlign: 'center'}}>
          <div style={{padding: '0 1rem', height: '2rem', borderBottom: '1px solid grey', textAlign: 'left'}}>
            <p>cart</p>
          </div>
          <div style={{padding: '1rem'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
               <img src={cartImg} alt=""  style={{height: '2rem', width: '2rem', borderRadius: '.2rem'}}/> 
               <div style={{display: 'flex', alignItems: 'center', gap: '1px', flexDirection: 'column', justifyContent: 'center', flexFlow: 'wrap',}}>
                <p style={{fontSize: '.7rem', color: ' hsl(219, 9%, 45%)', fontWeight: 400, textAlign: 'left'}}>Fall Limited Edition Sneaker <br />
                ds6s6s6s
                </p>
               </div>
               
            <div>
                <DeleteIcon fontSize='small' color=' hsl(219, 9%, 45%)'/>
            </div>
            </div>
            
          </div> <button style={{color: 'white', backgroundColor: 'hsl(26, 100%, 55%)', border: 0 , borderRadius: '.4rem', height: '2rem', width: '12rem'}}>
                    checkout
                </button>
        </Card>
    </div>
  )
}

export default CartCard