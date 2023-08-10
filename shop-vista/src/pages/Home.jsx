import React, { useState } from 'react'
import {data} from '../data'
import Header from '../components/Header'
import { Container } from '@mui/material'
import Modal from '../components/Modal'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import useMediaQuery from '@mui/material/useMediaQuery';


function Home() {
  const isMobile = useMediaQuery('(min-width:0px) and (max-width:599.99px)')
  const tabSize = useMediaQuery('(min-width:600px) and (max-width:900px)');


  const [products] = useState(data)
  const [value, setValue] = useState(0)
  const [slideIndex, setSlideIndex] = useState(1)

  const { mainImg } = products[value]

 const nextSlide = () => {
  if (slideIndex !== products.length){
    setSlideIndex(slideIndex + 1)
  }else if  (slideIndex === products.length){
    setSlideIndex(1)
  }
 }
 const prevSlide = () => {
  if (slideIndex !== products.length){
    setSlideIndex(slideIndex - 1)
  }else if  (slideIndex === products.length){
    setSlideIndex(1)
  }
 }

  return (
   
    
    <Container style={{padding: isMobile ? '0' : 'auto'}}>
   <Header/>
   <Modal products={products}/>
   <Container style={{alignItems: 'center', display: 'flex', marginTop: '3rem', flexDirection: isMobile ? 'column' : 'row', gap: tabSize ? '3rem' : '1rem'}}>
   <main style={{ display: 'flex' , alignItems: 'center' ,  flexDirection: 'column' , width: '50%'}}>
    <div style={{position: 'relative', zIndex: 50}}>
    <img src={mainImg} alt="" style={{ height: '20rem', width: '18rem', borderRadius: '.7rem' }} />
    <div>
      <button style={{ backgroundColor:  'white', borderRadius: '50%', padding: '1rem', boxShadow: 'box-shadow: -3px -3px 6px rgba(0, 0, 0, 0.4)', position: 'absolute', right: '1rem', top: '7rem' }}><FaChevronRight/></button>
      <button style={{ backgroundColor: 'white', borderRadius: '50%', padding: '1rem', boxShadow: 'box-shadow: -3px -3px 6px rgba(0, 0, 0, 0.4)', position: 'absolute', right: '14rem', top: '7rem' }}><FaChevronLeft/></button>
    </div>
    </div>

    <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '18rem', marginLeft: '-2rem'}}>
    {products.map((item, index) => (
    <li style={{ display: 'flex' , height: '3.5rem', width: '3.5rem', border: index === value && '2px solid hsl(26, 100%, 55%)', borderRadius: '.6rem', opacity: index === value && 0.5 , overflow: index === value && 'hidden'}} key={item.id} onClick={() => setValue(index)}> <img src={item.thumbnail} alt=""  style={{borderRadius: '.4rem'}}/> </li>
     ))}
    </ul>
    </main>
  

    <main style={{width: isMobile ? '80%' : '50%'}}>
   <h2 style={{textTransform: 'uppercase', color: 'hsl(26, 100%, 55%)', fontSize: '.6rem', fontWeight: 900, letterSpacing: '.8px'}}>Sneaker Company</h2>
   <h1 style={{width: isMobile? '100%' : '70%', fontWeight: 700, textTransform: 'capitalize'}}>Fall limited edition sneaker</h1>
   <p style={{fontSize: '.8rem', color: ' hsl(219, 9%, 45%)', fontWeight: 700, textTransform: 'capitalize'}}>these low-profile sneaker are your perfect causual wear companion. featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>

   <div style={{display: 'flex', justifyContent: isMobile ? 'space-between' : '0', width: isMobile ? '100%' : '13rem', flexDirection: isMobile ? 'column' : 'row'}}>

    <div style={{display: 'flex', alignItems:'center' , gap: '1rem', marginTop: '1.5rem'}} >
      <span style={{fontSize: '1.2rem', color: 'black', fontWeight: 900}}>$125.00</span>
      <span style={{fontSize: '.7rem', backgroundColor: 'hsl(25, 100%, 94%)', padding: '.2rem .3rem', borderRadius: '.3rem'}}>50%</span>
    </div>
    <span style={{textDecoration: 'line-through', fontSize: '.7rem', marginTop: isMobile ? '1rem' : '2rem', color: 'hsl(220, 14%, 75%)'}}>$250</span>
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