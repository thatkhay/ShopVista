import React, { useState } from 'react'
import {data} from '../data'
import Header from '../components/Header'
import { Container } from '@mui/material'

function Home() {
  const [products] = useState(data)
  const [value, setValue] = useState(0)

  const { mainImg } = products[value]

  return (
    
    <Container>
   <Header/>
   <Container style={{alignItems: 'center', display: 'flex', marginTop: '3rem', justifyContent: 'space-between'}}>
   <main style={{ display: 'flex' , alignItems: 'center' ,  flexDirection: 'column' , width: '50%'}}>
    <div >
    <img src={mainImg} alt="" style={{ height: '20rem', width: '18rem', borderRadius: '.7rem' }} />
    </div>

    <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '18rem', marginLeft: '-2rem'}}>
    {products.map((item, index) => (
    <li style={{ display: 'flex' , height: '3.5rem', width: '3.5rem', border: index === value && '2px solid hsl(26, 100%, 55%)', borderRadius: '.6rem', backgroundColor: index === value && 'hsl(25, 100%, 94%)', overflow: index === value && 'hidden'}} key={item.id} onClick={() => setValue(index)}> <img src={item.thumbnail} alt=""  style={{borderRadius: '.4rem'}}/> </li>
     ))}
    </ul>
    </main>


    <main style={{width: '50%'}}>
   <h2>Sneaker Company</h2>
   <h1>Fall limited sneaker</h1>
   <p>these low-profile sneaker are your perfect causual wear companion. featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
   <div>

    <div >
      <span>$125.00</span>
      <span>50%</span>
    </div>
    <span style={{textDecoration: 'line-through'}}>$250</span>
   </div>

   <div>
  <div>
    <img src="" alt="" />
    <span>3</span>
    <img src="" alt="" />
  </div>
  <div>
    <img src="" alt="" />
    <p>add to cart</p>
  </div>
   </div>
    </main>

    
    </Container>
    </Container>
    
  )
}

export default Home